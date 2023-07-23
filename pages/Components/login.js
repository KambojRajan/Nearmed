import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { RiMicrosoftFill } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import {UserContext} from '../UserContext'

function AppointmentSignIn() {
    const {setUserInfo} = useContext(UserContext)
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const router = useRouter();
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            body: JSON.stringify({ userName, password }),
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          });
      
          if (response.ok) {
            const data = await response.json(); 
            setUserInfo(data); 
            router.push('/');
          } else {
            const errorData = await response.json(); 
            throw new Error(errorData.error || "Incorrect username or password");
          }
        } catch (error) {
          console.log("Error while logging in:", error.message);
          alert(error.message || "Failed to log in. Please try again.");
        }
      };
      

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-neutral-400 select-none">
            <div className="flex flex-col items-center justify-center bg-white w-[40%] h-[50%] rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold mb-4">Login to your Account</h1>
                <p className="text-lg text-gray-600 mb-4">You may use:</p>
                <div className="flex gap-4 mb-4">
                    <FcGoogle className="text-4xl cursor-pointer" />
                    <RiMicrosoftFill className="text-4xl text-indigo-600 hover:text-blue-500 cursor-pointer" />
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="User Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    {errors.userName && <p className="text-red-500">{errors.userName}</p>}
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-x-4">
                            <div>
                                <input type="checkbox" name="remember me" id="remMe" className="mr-2 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500" />
                                <label htmlFor="remMe" className="text-gray-600 hover:underline hover:cursor-pointer">
                                    Remember me
                                </label>
                            </div>
                            <Link href="#" className="text-gray-600 hover:underline">
                                Forgot password
                            </Link>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg mt-4"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AppointmentSignIn;
