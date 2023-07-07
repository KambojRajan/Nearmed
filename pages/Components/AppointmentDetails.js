import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';

function AppointmentDetails() {
  const router = useRouter();
  const { isAPatient, firstName, lastName, appDate ,relName,relation} = router.query;
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleNextClick = () => {
    const queryParams = {
      isAPatient,
      firstName,
      lastName,
      description,
      appDate,
      ...(relName && { relName }), // Include only if relName has a value
      ...(relation && { relation }), // Include only if relation has a value
    };

    const queryString = Object.keys(queryParams)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
      .join('&');

    router.push(`/Done?${queryString}`);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-100 to-gray-300">
        <div className="w-2/3 h-1/2 bg-white shadow-lg flex rounded-full">
          <div className="w-1/2 border-r border-gray-400 p-4">
            <h2 className="text-lg font-bold flex justify-center py-32">
              Please enter the appointment Date:
            </h2>
          </div>
          <div className="w-1/2 p-4 flex flex-col justify-center gap-y-2">
            <div className="flex justify-center">
              <label htmlFor="Date" className="block font-semibold mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="focus:border-none w-full border-b-2 border-black py-2 px-4 mb-4"
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Link
          href={`./Done?isAPatient=${isAPatient}&firstName=${firstName}&lastName=${lastName}&appDate=${appDate}&description=${description}${
            relName ? `&relName=${relName}` : ''
          }${relation ? `&relation=${relation}` : ''}`}
        >
          <AiOutlineRight className="text-4xl text-gray-400 hover:text-gray-800" onClick={handleNextClick} />
        </Link>
      </div>
    </div>
  );
}

export default AppointmentDetails;
