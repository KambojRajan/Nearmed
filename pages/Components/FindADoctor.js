import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';

function FindADoctor() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        unSearchedResult();
    }, []);

    const handleSearch = async (searchTerm) => {
        try {
            const response = await fetch(`http://localhost:5000/findDoctors?specialization=${searchTerm}`);
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data);
            } else {
                console.error('Error:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const searchInput = document.getElementById('Search');
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            handleSearch(searchTerm);
        }
    };

    const unSearchedResult = async () => {
        try {
            const response = await fetch(`http://localhost:5000/findAllDoctors`);
            if (response.ok) {
                const data = await response.json();
                setSearchResults(data);
            } else {
                console.error('Error:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="h-screen bg-gray-100">
            <div className="bg-black h-[200px] flex justify-center items-center text-white">
                <form onSubmit={handleFormSubmit}>
                    <div className="w-[600px] h-[70px] rounded-lg flex justify-center items-center bg-white text-black">
                        <BsSearch className="text-3xl m-2" />
                        <input
                            type="text"
                            name="Search"
                            id="Search"
                            placeholder="Search a doctor..."
                            className="w-[600px] h-[70px] rounded-lg focus:outline-none"
                        />
                    </div>
                </form>
            </div>

            <div>
                <div className="min-h-screen bg-gray-100 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {searchResults.map((doctor) => (
                            <div key={doctor._id} className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-xl font-bold mb-4">{doctor.name}</h2>
                                <p className="mb-2">
                                    <span className="font-semibold">Education:</span>{' '}
                                    {doctor.education.join(', ')}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Specialization:</span>{' '}
                                    {doctor.specialization.join(', ')}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Experience:</span>{' '}
                                    {doctor.experience} years
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Research:</span>{' '}
                                    {doctor.research.join(', ')}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Email:</span>{' '}
                                    {doctor.email}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Available Days:</span>{' '}
                                    {doctor.availableDays.join(', ')}
                                </p>
                                <p className="mb-2">
                                    <span className="font-semibold">Phone Number:</span>{' '}
                                    {doctor.phoneNumber.join(', ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindADoctor;
