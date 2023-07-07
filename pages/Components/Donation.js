import React, { useState } from 'react';
import { GiButterfly } from 'react-icons/gi';
import Link from 'next/link';
import { CustomInputCountry, countryArr, statesArr } from "./statesCountries"

function Donation() {
    const [formData, setFormData] = useState({ title: '', firstName: '', lastName: '', country: '', state: '', zipCode: '', phone: 0, email: '', amount: 0 });
    const [errors, setErrors] = useState({ title: '', firstName: '', lastName: '', country: '', state: '', zipCode: '', phone: '', email: '', amount: '' });

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
                    placeholder={props.placeholder}
                />
                {error && <p className="text-red-500">{error}</p>}
            </div>
        );
    }


    function handleValidation(event) {
        event.preventDefault();
        const { title, firstName, lastName, country, state, address, zipCode, phone, email, amount } = event.target.elements;
        const newErrors = { ...errors };
        const newData = { ...formData };

        if (title.value.trim() !== '') {
            if (!['Mr', 'Ms', 'Mrs', 'mr', 'mrs', 'ms'].includes(title.value.trim().toLowerCase())) {
                newErrors.title = "Invalid title";
            } else {
                newErrors.title = "";
                newData.title = title.value.trim();
            }
        } else {
            newErrors.title = "Title is required";
        }
        if (country !== "" && state !== "" && country in countryArr && state in statesArr[country]) {
            newErrors.state = "";
            newData.state = state.value;
            newData.country = country.value;
        } else {
            newErrors.state = "Invalid state";
        }

        if (country.value === "United States") {
            const usZipCodeRegex = /^\d{5}(?:-\d{4})?$/;
            if (!usZipCodeRegex.test(zipCode.value.trim())) {
                newErrors.zipCode = "Invalid zip code";
            } else {
                newErrors.zipCode = "";
                newData.zipCode = zipCode.value.trim();
            }
        } else if (country.value === "Canada") {
            const caPostalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
            if (!caPostalCodeRegex.test(zipCode.value.trim())) {
                newErrors.zipCode = "Invalid postal code";
            } else {
                newErrors.zipCode = "";
                newData.zipCode = zipCode.value.trim();
            }
        } else if (country.value === "Australia") {
            const auPostCodeRegex = /^\d{4}$/;
            if (!auPostCodeRegex.test(zipCode.value.trim())) {
                newErrors.zipCode = "Invalid postal code";
            } else {
                newErrors.zipCode = "";
                newData.zipCode = zipCode.value.trim();
            }
        } else if (country.value === "India") {
            const inPinCodeRegex = /^\d{6}$/;
            if (!inPinCodeRegex.test(zipCode.value.trim())) {
                newErrors.zipCode = "Invalid pin code";
            } else {
                newErrors.zipCode = "";
                newData.zipCode = zipCode.value.trim();
            }
        } else {
            newErrors.zipCode = "Invalid zip/postal code";
        }

        if (phone.value.trim() !== "") {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(phone.value.trim())) {
                newErrors.phone = "Invalid phone number";
            } else {
                newErrors.phone = "";
                newData.phone = phone.value.trim();
            }
        } else {
            newErrors.phone = "Phone number is required";
        }

        if (email.value.trim() !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                newErrors.email = "Invalid email";
            } else {
                newErrors.email = "";
                newData.email = email.value.trim();
            }
        } else {
            newErrors.email = "Email is required";
        }

        if (amount.value < 0) {
            newErrors.amount = "Invalid amount";
        } else {
            newErrors.amount = "";
            newData.amount = amount.value;
        }

        setErrors(newErrors);
        setFormData(newData);
    }


    return (
        <div className='bg-white h-screen flex flex-col'>
            <div className='h-[13%] bg-gray-950 flex justify-center items-center'>
                <Link href="/"><GiButterfly className='text-7xl font-thin text-white' /></Link>
            </div>
            <div className='flex-1 flex items-center'>
                <div className='w-2/3 h-full overflow-auto'>
                    <form className="bg-white p-8 rounded-lg shadow-lg" action='/doDonation' >
                        <h2 className="text-3xl font-bold mb-6 text-indigo-500">Billing Information</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <CustomInput type='text' id='title' title='Title' placeholder="e.g. Mr, Mrs, Ms" />
                            <CustomInput type='text' id='firstName' title='First Name' placeholder="Enter your first name" />
                            <CustomInput type='text' id='lastName' title='Last Name' placeholder="Enter your last name" />
                            <CustomInputCountry type='text' id='country' title='Country' placeholder="Enter your country" />
                            <CustomInput type='text' id='state' title='State' placeholder="Enter your state" />
                            <CustomInput type='text' id='address' title='Address' placeholder="Enter your address" />
                            <CustomInput type='text' id='zipCode' title='Zip/Postal Code' placeholder="Enter your zip/postal code" />
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