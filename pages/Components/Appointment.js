import React from 'react';
import { RiStethoscopeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import { GiButterfly } from 'react-icons/gi';
import Link from 'next/link';

function Appointment() {
    return (
        <div>
            <div className="flex justify-center items-center bg-gray-950 h-1/4">
                <Link href="/">
                    <GiButterfly className="text-7xl font-thin text-white" />
                </Link>
            </div>
            <div className="bg-gray-100 min-h-screen">
                <div className="max-w-screen-md mx-auto pt-10 pb-16 px-4 md:px-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
                        Start your appointment request here
                    </h1>
                    <p className="text-lg md:text-xl text-center text-gray-600 mt-2 md:mt-4">
                        Easiest way to keep track of your health.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="border rounded-lg shadow-lg p-6 md:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                                    New patients/New date order
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Welcome to Nearmed! To schedule your first appointment, please provide us with some basic information about yourself.
                                </p>
                            </div>
                            <div className="mt-4 text-center">
                                <Link href={'./NewPatientsP1'}>
                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg">
                                        Get started <IoIosArrowForward className="inline-block ml-2" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="border rounded-lg shadow-lg p-6 md:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                                    Returning patients
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    {"We're glad to see you again! Please sign in to schedule your next appointment."}
                                </p>
                            </div>
                            <div className="mt-4 text-center">
                                <Link href={'./AppointmentSignIn'}>
                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg">
                                        Sign in <IoIosArrowForward className="inline-block ml-2" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="border rounded-lg shadow-lg p-6 md:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                                    Referring physician
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Thank you for referring your patient to Nearmed. To initiate the referral process, please complete our online form.
                                </p>
                            </div>
                            <div className="mt-4 text-center flex">
                                <Link href={'./ReferringPhy'}>
                                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg">
                                        Refer now <IoIosArrowForward className="inline-block ml-2" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Appointment;
