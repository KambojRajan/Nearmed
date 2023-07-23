import React, { useState } from 'react';
import { GiButterfly } from 'react-icons/gi';
import Link from 'next/link';
import { useRouter } from 'next/router';

function ReferringPhy() {
    const [formData, setFormData] = useState({
        patientFirstName: '',
        patientLastName: '',
        address: '',
        referingDoctorName: '',
        referedDoctorName: '',
        appointmentDate: null
    });
    const [errors, setErrors] = useState({
        patientFirstName: '',
        patientLastName: '',
        address: '',
        referingDoctorName: '',
        referedDoctorName: '',
        appointmentDate: null
    });
    const router = useRouter();

    const donate = (event) => {
        event.preventDefault();
        const { patientFirstName, patientLastName, address, referingDoctorName, referedDoctorName, appointmentDate } = formData;

        fetch("http://localhost:5000/referPatient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                patientFirstName,
                patientLastName,
                address,
                referingDoctorName,
                referedDoctorName,
                appointmentDate,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    router.push('/Components/Done');
                } else {
                    throw new Error("Reference failed");
                }
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleChange = (ev) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [ev.target.id]: ev.target.value,
        }));
    };

    return (
        <div className='bg-white min-h-screen flex flex-col'>
            <div className='h-1/5 bg-gray-950 flex justify-center items-center'>
                <Link href='/'>
                    <GiButterfly className='text-7xl font-thin text-white cursor-pointer' />
                </Link>
            </div>
            <div className='flex-1 flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-2/3 h-full overflow-auto'>
                    <form className='bg-white p-8 rounded-lg shadow-lg' onSubmit={donate}>
                        <h2 className='text-3xl font-bold mb-6 text-indigo-500'>Reference generation form</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <label htmlFor='patientFirstName' className='block font-semibold mb-2'>
                                    Patient First Name
                                </label>
                                <input
                                    type='text'
                                    id='patientFirstName'
                                    className='focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4'
                                    value={formData.patientFirstName}
                                    onChange={handleChange}
                                    placeholder='Enter your first name'
                                />
                            </div>
                            <div>
                                <label htmlFor='patientLastName' className='block font-semibold mb-2'>
                                    Patient Last Name
                                </label>
                                <input
                                    type='text'
                                    id='patientLastName'
                                    className='focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4'
                                    value={formData.patientLastName}
                                    onChange={handleChange}
                                    placeholder='Enter your last name'
                                />
                            </div>
                            <div>
                                <label htmlFor='address' className='block font-semibold mb-2'>
                                    Address
                                </label>
                                <input
                                    type='text'
                                    id='address'
                                    className='focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4'
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder='Enter your address'
                                />
                            </div>
                            <div>
                                <label htmlFor='referingDoctorName' className='block font-semibold mb-2'>
                                    Your Name
                                </label>
                                <input
                                    type='text'
                                    id='referingDoctorName'
                                    className='focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4'
                                    value={formData.referingDoctorName}
                                    onChange={handleChange}
                                    placeholder='Enter your name with Designation'
                                />
                            </div>
                            <div>
                                <label htmlFor='referedDoctorName' className='block font-semibold mb-2'>
                                    Doctor to be Referred
                                </label>
                                <input
                                    type='text'
                                    id='referedDoctorName'
                                    className='focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4'
                                    value={formData.referedDoctorName}
                                    onChange={handleChange}
                                    placeholder='Enter doctor name'
                                />
                            </div>
                            <div>
                                <label htmlFor='appointmentDate' className='block font-semibold mb-2'>
                                    Expected Appointment Date
                                </label>
                                <input
                                    type='date'
                                    id='appointmentDate'
                                    className='focus:outline-none w-full border-b-2 border-gray-300 py-2 px-4 mb-4'
                                    value={formData.appointmentDate}
                                    onChange={handleChange}
                                    placeholder='Enter Expected appointment date'
                                />
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg mt-8 hover:bg-indigo-600'
                        >
                            Refer
                        </button>
                    </form>
                </div>
                <div className='w-full md:w-1/3 h-full bg-white overflow-auto pt-10 text-gray-700'>
                    <p className='text-lg leading-relaxed'>
                        {
                            "Nearmed is a social impact app that relies on donations to fund its operations and achieve its goals. Donations can come from individuals, corporations, or foundations that share the same values and believe in Nearmed's mission. If you would like to support Nearmed, you can make a donation through our website, direct mail campaign, referral campaign, or social media platforms. Your support will help us make a difference in the lives of people who need medical assistance."
                        }
                    </p>
                    <p className='mt-4'>
                        {"At Nearmed, we believe that every donation can make a difference. Your support will help us continue our  mission to provide affordable medical care to underserved communities."}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ReferringPhy;
