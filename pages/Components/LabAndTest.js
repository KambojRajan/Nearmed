import React, { useEffect, useState } from 'react'

function LabAndTest() {
    const [labs, setLabs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/aboutLabs").then((response) => {
            response.json().then((lab) => {
                console.log(lab)
                setLabs(lab)
            })
        })
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">About Our labs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {labs.map((lab) => (
                    <div key={lab._id} className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-4">{lab.name}</h2>
                        <p className="mb-2">
                            <span className="font-semibold">Education:</span>{' '}
                            {lab.education}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Code:</span>{' '}
                            {lab.code}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Department:</span>{' '}
                            {lab.department}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Description:</span>{' '}
                            {lab.description}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Price:</span>{' '}
                            {lab.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LabAndTest
