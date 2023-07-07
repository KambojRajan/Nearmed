import React from 'react';

function CreateAccount() {
    
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-neutral-400">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6">Create an Account</h1>
                <form className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-lg font-semibold mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="text-lg font-semibold mb-2">
                                Legal First Name:
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="middleName" className="text-lg font-semibold mb-2">
                                Legal Middle Name:
                            </label>
                            <input
                                type="text"
                                name="middleName"
                                id="middleName"
                                placeholder="Middle Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="text-lg font-semibold mb-2">
                                Legal Last Name:
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="birthday" className="text-lg font-semibold mb-2">
                                Birthday:
                            </label>
                            <input
                                type="date"
                                name="birthday"
                                id="birthday"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-600 transition-colors duration-300">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;
