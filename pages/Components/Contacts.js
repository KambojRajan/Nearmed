import React from 'react';

function Contacts() {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="flex justify-center items-center bg-black text-white text-3xl p-4">
                <h1>Contact Information</h1>
            </div>
            <div className="flex justify-center items-center h-full mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-md shadow-md p-6">
                        <h1 className="text-2xl font-bold mb-4">Phone numbers:</h1>
                        <div className="flex flex-col space-y-2">
                            <p>1234567890</p>
                            <p>1234567890</p>
                            <p>1234567890</p>
                            <p>1234567890</p>
                            <p>1234567890</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-6">
                        <h1 className="text-2xl font-bold mb-4">Email:</h1>
                        <div className="flex flex-col space-y-2">
                            <p>abcd@nearmed.ac.in</p>
                            <p>abcd@nearmed.ac.in</p>
                            <p>abcd@nearmed.ac.in</p>
                            <p>abcd@nearmed.ac.in</p>
                            <p>abcd@nearmed.ac.in</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-6">
                        <h1 className="text-2xl font-bold mb-4">Land-Line Number:</h1>
                        <div className="flex flex-col space-y-2">
                            <p>1234567890</p>
                            <p>1234567890</p>
                            <p>1234567890</p>
                            <p>1234567890</p>
                            <p>1234567890</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-6">
                        <h1 className="text-2xl font-bold mb-4">Address:</h1>
                        <div className="flex flex-col space-y-2">
                            <p>123 Street, City</p>
                            <p>456 Avenue, City</p>
                            <p>789 Road, City</p>
                            <p>321 Lane, City</p>
                            <p>654 Boulevard, City</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
