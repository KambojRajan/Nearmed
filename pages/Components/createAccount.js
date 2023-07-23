import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';


function CreateAccount() {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter()
    const { setUserInfo } = useContext(UserContext)
    const createAccount = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/createAccount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                middleName,
                lastName,
                password,
                email,
            }),
        }).then(async (res) => {
            if (res.ok) {
                const data = await res.json();
                setUserInfo(data);
                router.push('/')
                return res.json();
            } else {
                throw new Error("Can't create a new account")
            }
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-400">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6">Create an Account</h1>
                <form className="space-y-6" onSubmit={createAccount}>
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="text-lg font-semibold mb-2">
                                Legal First Name:
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(ev) => setFirstName(ev.target.value)}
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
                                value={middleName}
                                onChange={(ev) => setMiddleName(ev.target.value)}
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
                                value={lastName}
                                onChange={(ev) => setLastName(ev.target.value)}
                                placeholder="Last Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-lg font-semibold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
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
