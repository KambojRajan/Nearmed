import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Departments() {
    const [departments, setdepartments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/aboutDepartment").then((response) => {
            response.json().then((department) => {
                console.log(department)
                setdepartments(department)
            })
        })
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">About Our Departments</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {departments.map((department) => (
                    <div key={department._id} className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-4">{department.name}</h2>
                        <p className="mb-2">
                            <span className="font-semibold">Head of the Department:</span>{' '}
                            {department.hod.name}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Description:</span>{' '}
                            {department.description}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Contact Email:</span>{' '}
                            {department.contactEmail}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Contact Phone Number:</span>{' '}
                            {department.contactPhoneNumber}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Branchs:</span>{' '}
                            {department.branchs.join(", ")}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Departments;
