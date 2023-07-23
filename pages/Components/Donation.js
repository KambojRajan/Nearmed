import React, { useState } from 'react';
import { GiButterfly } from 'react-icons/gi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function Donation() {
    const [formData, setFormData] = useState({ title: '', firstName: '', lastName: '', address: '', zipCode: '', phone: '', email: '', amount: 0 });
    const [errors, setErrors] = useState({ title: '', firstName: '', lastName: '', zipCode: '', phone: '', email: '', amount: '' });
    const router = useRouter()
    const donate = (event) => {
        event.preventDefault();
        const { title, firstName, lastName, address, zipCode, phone, email, amount, } = formData;

        fetch("http://localhost:5000/donate", {
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
        }).then((response) => {
            if (response.ok) {
                router.push('/')
                return response.json();
            } else {
                throw new Error("Donation failed");
            }
        })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    function CustomInput(props) {
        const error = errors[props.id];
        return (
            <div>
                <label htmlFor={props.id} className="block font-semibold mb-2">
                    {props.title}
                </label>
                <input
                    type={props.type}
                    id={props.id}
                    className="focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4"
                    value={formData[props.id]}
                    onChange={(ev) => setFormData({ ...formData, [props.id]: ev.target.value })}
                    placeholder={props.placeholder}
                />
                {error && <p className="text-red-500">{error}</p>}
            </div>
        );
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
                            <CustomInput type='text' id='title' title='Title' placeholder="e.g. Mr, Mrs, Ms" />
                            <CustomInput type='text' id='firstName' title='First Name' placeholder="Enter your first name" />
                            <CustomInput type='text' id='lastName' title='Last Name' placeholder="Enter your last name" />
                            <CustomInput type='text' id='address' title='Address' placeholder="Enter your address" />
                            <CustomInput type='text' id='zipCode' title='ZipCode' placeholder="Enter your zip/postal code" />
                            <CustomInput type='text' id='phone' title='Phone' placeholder="Enter your phone number" />
                            <CustomInput type='email' id='email' title='Email' placeholder="Enter your email address" />
                            <CustomInput type='number' id='amount' title='Amount' placeholder="Donation amount" />
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