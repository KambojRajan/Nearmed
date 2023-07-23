import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutDoctors() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/aboutDoctor").then((response) => {
            response.json().then((doctor) => {
                console.log(doctor)
                setDoctors(doctor)
            })
        })
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">About Our Doctors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {doctors.map((doctor) => (
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
    );
}

export default AboutDoctors;
