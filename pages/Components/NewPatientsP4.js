import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

function NewPatientsP1() {
    const [isYes, SetYes] = useState(false);
    const router = useRouter();
    const { isAPatient, firstName, lastName, relName, relation } = router.query;
    const [description, setDescription] = useState('');

    const handleNextClick = () => {
        const queryParams = {
            isAPatient,
            firstName,
            lastName,
            description,
            ...(relName && { relName }), // Include only if relName has a value
            ...(relation && { relation }), // Include only if relation has a value
        };

        const queryString = Object.keys(queryParams)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
            .join('&');

        router.push(`/AppointmentDetails?${queryString}`);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-100 to-gray-300">
            <div className="w-2/3 h-1/2 bg-white shadow-lg flex rounded-full">
                <div className="w-1/2 border-r border-gray-400 p-4">
                    <h2 className="text-lg font-bold flex justify-center py-32">What are you here for?</h2>
                </div>
                <div className="w-1/2 p-4 flex flex-col justify-center gap-y-2">
                    <div className="flex justify-center">
                        <textarea
                            name="hereFor"
                            id="hereFor"
                            cols="50"
                            rows="10"
                            className="bg-gray-50 rounded-lg focus:outline-none"
                            placeholder="details"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                </div>
            </div>
            <Link
                href={`./AppointmentDetails?isAPatient=${isAPatient}&firstName=${firstName}&lastName=${lastName}&relName=${relName || ''}&relation=${relation || ''}&description=${description}`}
            >
                <AiOutlineRight className="text-4xl text-gray-400 hover:text-gray-800" onClick={handleNextClick} />
            </Link>
        </div>
    );
}

export default NewPatientsP1;
