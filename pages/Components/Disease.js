import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Aboutdisease() {
    const [disease, setdisease] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/aboutDisease").then((response) => {
            response.json().then((disease) => {
                console.log(disease)
                setdisease(disease)
            })
        })
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">About Diseases</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {disease.map((disease) => (
                    <div key={disease._id} className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-4">{disease.name}</h2>
                        <p className="mb-2">
                            <span className="font-semibold">Name:</span>{' '}
                            {disease.name}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Description:</span>{' '}
                            {disease.discription}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Symptoms:</span>{' '}
                            {disease.symptomse}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Causes:</span>{' '}
                            {disease.causes.join(', ')}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Treatments:</span>{' '}
                            {disease.treatments}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Aboutdisease;
