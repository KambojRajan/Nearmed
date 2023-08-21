import React, { useState } from 'react';
import { GiButterfly } from 'react-icons/gi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { stripePromise } from './stripeUtils'

function Donation() {
    const [formData, setFormData] = useState({ title: '', firstName: '', lastName: '', address: '', zipCode: '', phone: '', email: '', amount: 0 });
    const router = useRouter();

    const donate = async (event) => {
        event.preventDefault();
        const { title, firstName, lastName, address, zipCode, phone, email, amount } = formData;

        try {
            const response = await fetch("http://localhost:5000/donate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    firstName,
                    lastName,
                    address,
                    zipCode,
                    phoneNumber: phone,
                    email,
                    amount,
                }),
            });

            if (response.ok) {
                router.push('/');
                const data = await response.json();
                const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
                const { error } = await stripe.redirectToCheckout({
                    sessionId: data.sessionId,
                });

                if (error) {
                    console.error('Error redirecting to Stripe checkout:', error);
                }
            } else {
                throw new Error("Donation failed");
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className='bg-white h-screen flex flex-col'>
            <div className='h-[13%] bg-gray-950 flex justify-center items-center'>
                <Link href="/"><GiButterfly className='text-7xl font-thin text-white' /></Link>
            </div>
            <div className='flex-1 flex items-center'>
                <div className='w-2/3 h-full overflow-auto'>
                    <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={donate} >
                        <h2 className="text-3xl font-bold mb-6 text-indigo-500">Billing Information</h2>
                        <div className="grid grid-cols-2 gap-6">


                            <div>
                                <label htmlFor='title' className="block font-semibold mb-2">
                                    Title
                                </label>
                                <input
                                    type={'text'}
                                    id={'title'}
                                    className="focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4"
                                    value={formData['title']}
                                    onChange={(ev) => setFormData({ ...formData, ['title']: ev.target.value })}
                                    placeholder={'e.g. Mr, Mrs, Ms'}
                                />
                                {/* {error && <p className="text-red-500">{error}</p>} */}
                            </div>
                            <div>
                                <label htmlFor='title' className="block font-semibold mb-2">
                                    First Name
                                </label>
                                <input
                                    type={'text'}
                                    id={'firstName'}
                                    className="focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4"
                                    value={formData['firstName']}
                                    onChange={(ev) => setFormData({ ...formData, ['firstName']: ev.target.value })}
                                    placeholder={'First Name'}
                                />
                                {/* {error && <p className="text-red-500">{error}</p>} */}
                            </div>
                            <div>
                                <label htmlFor='lastName' className="block font-semibold mb-2">
                                    Last Name
                                </label>
                                <input
                                    type={'text'}
                                    id={'lastName'}
                                    className="focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4"
                                    value={formData['lastName']}
                                    onChange={(ev) => setFormData({ ...formData, ['lastName']: ev.target.value })}
                                    placeholder={'Last Name'}
                                />
                                {/* {error && <p className="text-red-500">{error}</p>} */}
                            </div>
                            <div>
                                <label htmlFor='address' className="block font-semibold mb-2">
                                    Address
                                </label>
                                <input
                                    type={'text'}
                                    id={'address'}
                                    className="focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4"
                                    value={formData['address']}
                                    onChange={(ev) => setFormData({ ...formData, ['address']: ev.target.value })}
                                    placeholder={'Address'}
                                />
                                {/* {error && <p className="text-red-500">{error}</p>} */}
                            </div>
                            <div>
                                <label htmlFor='title' className="block font-semibold mb-2">
                                    Zip code
                                </label>
                                <input
                                    type={'text'}
                                    id={'zipCode'}
                                    className="focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4"
                                    value={formData['zipCode']}
                                    onChange={(ev) => setFormData({ ...formData, ['zipCode']: ev.target.value })}
                                    placeholder={'Zip Code'}
                                />
                                {/* {error && <p className="text-red-500">{error}</p>} */}
                            </div>
                            <div>
                                <label htmlFor='phone' className="block font-semibold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type={'text'}
                                    id={'phone'}
                                    className="focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4"
                                    value={formData['phone']}
                                    onChange={(ev) => setFormData({ ...formData, ['phone']: ev.target.value })}
                                    placeholder={'Phone Number'}
                                />
                                {/* {error && <p className="text-red-500">{error}</p>} */}
                            </div>
                            <div>
                                <label htmlFor='email' className="block font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type={'email'}
                                    id={'email'}
                                    className="focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4"
                                    value={formData['email']}
                                    onChange={(ev) => setFormData({ ...formData, ['email']: ev.target.value })}
                                    placeholder={'Your Email'}
                                />
                                {/* {error && <p className="text-red-500">{error}</p>} */}
                            </div>
                            <div>
                                <label htmlFor='amount' className="block font-semibold mb-2">
                                    Amount
                                </label>
                                <input
                                    type={'number'}
                                    id={'amount'}
                                    className="focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4"
                                    value={formData['amount']}
                                    onChange={(ev) => setFormData({ ...formData, ['amount']: ev.target.value })}
                                    placeholder={'Amount'}
                                />
                                {/* {error && <p className="text-red-500">{error}</p>} */}
                            </div>
                        </div>
                        <button type="submit" className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg mt-8 hover:bg-indigo-600">Donate Now</button>
                    </form>
                </div>
                <div className='w-1/3 h-full bg-white overflow-auto pt-[10%] text-gray-700'>
                    <p className="text-lg leading-relaxed">
                        {" Nearmed is a social impact app that relies on donations to fund its operations and achieve its goals. Donations can come from individuals, corporations, or foundations that share the same values and believe in Nearmed's mission. If you would like to support Nearmed, you can make a donation through our website, direct mail campaign, email campaign, or social media platforms. Your support will help us make a difference in the lives of people who need medical assistance."}
                    </p>
                    <p className="mt-4">
                        {"At Nearmed, we believe that every donation can make a difference. Your support will help us continue our mission to provide affordable medical care to underserved communities."}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Donation;