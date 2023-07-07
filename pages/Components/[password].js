import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GiButterfly } from 'react-icons/gi';

function UserProfile({ user }) {
    return (
        <div>
            <div className="h-[13%] bg-gray-950 flex justify-center items-center">
                <Link href="/">
                    <GiButterfly className="text-7xl text-white" />
                </Link>
            </div>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <div className="relative h-48 mb-6">
                        <Image
                            src="/Images/medicine (4).jpg"
                            alt="medic"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <h2 className="text-3xl font-semibold mb-6">User Profile</h2>
                    <div className="space-y-4">
                        <div>
                            <span className="font-semibold">First Name:</span>
                            <span>{user.firstName}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Last Name:</span>
                            <span>{user.lastName}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Middle Name:</span>
                            <span>{user.middleName}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Email:</span>
                            <span>{user.email}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Date of Birth:</span>
                            <span>{user.dateOfBirth}</span>
                        </div>
                        <div>
                            <span className="font-semibold">Last Appointment:</span>
                            <span>{user.lastAppointment}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
