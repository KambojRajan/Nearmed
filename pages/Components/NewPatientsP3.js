import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai'


function NewPatientsP1() {
    const router = useRouter()
    const { isAPatient, relName, relation } = router.query
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleNextClick = () => {
        const queryParams = {
            isAPatient,
            firstName,
            lastName,
        };

        const queryString = Object.keys(queryParams)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
            .join('&');

        router.push(`/NewPatientsP4?${queryString}`);
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-100 to-gray-300">
            <div className="w-2/3 h-1/2 bg-white shadow-lg flex rounded-full">
                <div className="w-1/2 border-r border-gray-400 p-4">
                    <h2 className="text-lg font-bold flex justify-center py-32">
                        Please enter Patient Name
                    </h2>
                </div>
                <div className="w-1/2 p-4 flex flex-col justify-center gap-y-2">
                    <div className="flex justify-center">
                        <label htmlFor="FName" className="block font-semibold mb-2">
                            {"First Name"}
                        </label>
                        <input
                            type="text"
                            id="FName"
                            className="focus:border-none w-full border-b-2 border-black py-2 px-4 mb-4"
                            placeholder="First Name"
                            onChange={(e)=>{setLastName(e.target.value)}}
                        />
                    </div>
                    <hr className="font-bold" />
                    <div className="flex justify-center">
                        <label htmlFor="LName" className="block font-semibold mb-2">
                            {"Last Name"}
                        </label>
                        <input
                            type="text"
                            id="LName"
                            className="focus:border-none w-full border-b-2 border-black py-2 px-4 mb-4"
                            placeholder="Last Name"
                            onChange={(e)=>{setLastName(e.target.value)}}
                        />
                    </div>
                </div>
            </div>
            <Link href={`./NewPatientsP4?isAPatient=${isAPatient}&relName=${relName}&relation=${relation}&firstName=${firstName}&lastName=${lastName}`}>
                <AiOutlineRight className='text-4xl text-gray-400 hover:text-gray-800' />
            </Link>
        </div>
    );
}

export default NewPatientsP1;
