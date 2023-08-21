import React from 'react';
import { GiButterfly } from 'react-icons/gi';
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';

const Insurance = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      company: '',
      insuranceId: '',
      description: '',
      amount: 0,
    });
  
    const router = useRouter();
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const donate = async (event) => {
      event.preventDefault();
      const { firstName, lastName, company, insuranceId, description, amount } = formData;
  
      try {
        const response = await fetch("/insurance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, company, insuranceId, description, amount }),
        });
  
        if (response.ok) {
          const data = await response.json();
          const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
          const { error } = await stripe.redirectToCheckout({
            sessionId: data.sessionId,
          });
  
          if (error) {
            console.error('Error redirecting to Stripe checkout:', error);
          } else {
            router.push('/');
          }
        } else {
          throw new Error("Donation failed");
        }
      } catch (error) {
        console.error('Error during donation:', error);
      }
    };

    return (
        <form action="" className=" min-h-screen flex flex-col">
            <div className="h-16 bg-black flex justify-center items-center">
                <Link href="/">
                    <GiButterfly className="text-5xl text-white cursor-pointer" />
                </Link>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <div className="w-11/12 md:w-2/3 max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-800">Insurance Form</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-indigo-800 font-semibold mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="focus:outline-none w-full border-b-2 border-indigo-400 py-2 px-4 rounded-lg"
                                placeholder="Enter your First Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-indigo-800 font-semibold mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="focus:outline-none w-full border-b-2 border-indigo-400 py-2 px-4 rounded-lg"
                                placeholder="Enter your Last Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="companyName" className="block text-indigo-800 font-semibold mb-2">
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                className="focus:outline-none w-full border-b-2 border-indigo-400 py-2 px-4 rounded-lg"
                                placeholder="Enter your Company Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="insuranceId" className="block text-indigo-800 font-semibold mb-2">
                                Insurance ID
                            </label>
                            <input
                                type="text"
                                id="insuranceId"
                                className="focus:outline-none w-full border-b-2 border-indigo-400 py-2 px-4 rounded-lg"
                                placeholder="Enter your Insurance ID"
                            />
                        </div>
                        <div>
                            <label htmlFor="amountToBePayed" className="block text-indigo-800 font-semibold mb-2">
                                Amount to be Paid
                            </label>
                            <input
                                type="number"
                                id="amountToBePayed"
                                className="focus:outline-none w-full border-b-2 border-indigo-400 py-2 px-4 rounded-lg"
                                placeholder="Enter the Amount to be Paid"
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-indigo-800 font-semibold mb-2">
                                Description
                            </label>
                            <input
                                type="text"
                                id="description"
                                className="focus:outline-none w-full border-b-2 border-indigo-400 py-2 px-4 rounded-lg"
                                placeholder="Describe the Condition"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-800 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg mt-8 w-full"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Insurance;
