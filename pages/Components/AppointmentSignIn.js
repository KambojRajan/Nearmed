import React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { RiMicrosoftFill } from 'react-icons/ri';

function AppointmentSignIn() {
    return (
        <div className="h-screen flex flex-col items-center justify-center  bg-neutral-400">
            <div className="flex flex-col items-center justify-center bg-white w-[40%] h-[50%] rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold mb-4">Login to your Account</h1>
                <p className="text-lg text-gray-600 mb-4">You may use:</p>
                <div className="flex gap-4 mb-4">
                    <FcGoogle className="text-4xl cursor-pointer" />
                    <RiMicrosoftFill className="text-4xl text-indigo-600 hover:text-blue-500 cursor-pointer" />
                </div>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
                />
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="remember me"
                        id="remMe"
                        className="mr-2 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                    <div className="flex items-center gap-7">
                        <label htmlFor="remMe" className="text-gray-600">
                            Remember me
                        </label>
                        <Link href="#" className="text-gray-600">
                            Forgot password
                        </Link>
                    </div>
                </div>
                <Link href={'./Done'}>
                    <button type="submit" className='bg-indigo-500 hover:bg-indigo-600 text-white py-2 my-4 px-4 rounded-lg'>Submit</button>
                </Link>
            </div>
        </div>
    );
}

export default AppointmentSignIn;
