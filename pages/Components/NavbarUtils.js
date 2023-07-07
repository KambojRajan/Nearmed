import React from 'react';

export const DropCare = () => {
    return (
        <div className='absolute z-10 w-full bg-white py-3 shadow-md text-lg font-thin'>
            <div className='mx-[5%] flex justify-around'>
                <ul className='flex gap-8'>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Care at Nearmed</li>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>About our Doctors</li>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Clinic</li>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Insurance and Payments</li>
                </ul>
                <ul className='flex gap-8'>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Find Doctor</li>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Department</li>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Contact Us</li>
                </ul>
            </div>
        </div>
    );
};

export const DropProf = () => {
    return (
        <div className='absolute z-10 w-full bg-white py-3 shadow-md text-lg font-thin'>
            <div className='mx-[5%] flex justify-around'>
                <ul className='flex gap-4'>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Medical Professional Resources</li>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Refer a Patient</li>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Clinic Laboratories</li>
                </ul>
                <ul className='flex gap-4'>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Publications</li>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>New Research</li>
                </ul>
            </div>
        </div>
    );
};

export const DropHealth = () => {
    return (
        <div className='absolute z-10 w-full bg-white py-3 shadow-md text-lg font-thin'>
            <div className='mx-[5%] flex justify-around'>
                <ul className='flex gap-4'>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Diseases &amp; Conditions</li>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Symptoms</li>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Lab Tests</li>
                </ul>
                <ul className='flex gap-4'>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Drugs &amp; Supplements</li>
                    <li className='text-gray-800 hover:text-indigo-400 cursor-pointer font-sans'>Books &amp; Subscriptions</li>
                </ul>
            </div>
        </div>
    );
};
