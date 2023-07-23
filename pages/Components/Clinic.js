import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Clinic() {
    const [clinics, setClinics] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/clinics").then((response) => {
            response.json().then((data) => {
                setClinics(data);
            });
        });
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Our Clinics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {clinics.map((clinic) => (
                    <div
                        key={clinic._id}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-xl font-bold mb-4">{clinic.name}</h2>
                            <p className="mb-2">
                                <span className="font-semibold">Location:</span> {clinic.location}
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">Phone Number:</span> {clinic.phoneNumber.join(', ')}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clinic;
