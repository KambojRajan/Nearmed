import React, { useEffect, useState } from 'react';

function Drugs() {
    const [drugs, setDrugs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/aboutDrug")
            .then((response) => response.json())
            .then((data) => setDrugs(data))
            .catch((error) => console.error('Error fetching drugs:', error));
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">About Our Drugs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {drugs.map((drug) => (
                    <div key={drug._id} className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-4">{drug.name}</h2>
                        <div className="mb-2">
                            <span className="font-semibold">Salts:</span>
                            {drug.salts.map((salt) => (
                                <div key={salt.name} className="flex items-center">
                                    <span>{salt.name}</span>
                                    <span className="ml-2 text-gray-600">
                                        ({parseFloat(salt.percentage.toString()).toFixed(2)}%)
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Other fields */}
                        <p className="mb-2">
                            <span className="font-semibold">Manufactured By:</span> {drug.manufacturedBy}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Manufacturing Date:</span> {formatDate(drug.manufacturingDate)}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Expiry Date:</span> {formatDate(drug.expiryDate)}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Storage Conditions:</span> {drug.storageConditions}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Dosage:</span> {drug.dosage}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Legal Code:</span> {drug.legalCode}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Prescription Drug:</span> {drug.prescriptionDrug ? "Yes" : "No"}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold"> Treats:</span> {drug.treats.join(', ')}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Drugs;
