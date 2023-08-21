import React, {useContext, useState } from 'react';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { UserContext } from '../UserContext';

function NewPatientsP1() {
    const router = useRouter();
    const isAPatient = router.query.response;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { setUserInfo } = useContext(UserContext);
    const handleNextClick = () => {
        const queryParams = {
            isAPatient,
            firstName,
            lastName,
        };
        setUserInfo({firstName,lastName});
        const queryString = Object.keys(queryParams)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
            .join('&');

        router.push(`/NewPatientsP4?${queryString}`);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-100 to-gray-300">
            <div className="w-2/3 h-1/2 bg-white shadow-lg flex rounded-full">
                <div className="w-1/2 border-r border-gray-400 p-4 flex flex-col justify-between">
                    <h2 className="text-lg font-bold flex justify-center py-36">Please enter your Name</h2>
                </div>
                <div className="w-1/2 p-4 flex flex-col justify-center gap-y-2">
                    <div className="flex justify-center">
                        <label htmlFor="FName" className="block font-semibold mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="FName"
                            className="focus:border-none w-full border-b-2 border-black py-2 px-4 mb-4"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <hr className="font-bold" />
                    <div className="flex justify-center">
                        <label htmlFor="LName" className="block font-semibold mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="LName"
                            className="focus:border-none w-full border-b-2 border-black py-2 px-4 mb-4"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <Link className="flex items-center text-gray-400 hover:text-gray-800" href={`./NewPatientsP4?isAPatient=${isAPatient}&firstName=${firstName}&lastName=${lastName}`}>
                    <AiOutlineRight className="text-4xl" />
            </Link>
        </div>
    );
}

export default NewPatientsP1;
