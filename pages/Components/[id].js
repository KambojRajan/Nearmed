import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; // Import the correct module
import { UserContext } from '../UserContext';

function Profile() {
    const [profile, setProfile] = useState([]);
    const router = useRouter(); 
    const { userInfo } = useContext(UserContext);
    const { id } = router.query;
    const { firstName, age, gender, address, phone, email } = userInfo;
    useEffect(() => {
        if (id && userInfo && Object.keys(userInfo).length > 0) {
            fetch(`http://localhost:5000/profile/${id}`)
                .then((response) => response.json())
                .then((profile) => {
                    setProfile(profile);
                })
                .catch((error) => {
                    console.log('Error fetching profile:', error);
                });
        }
        console.log(userInfo)
    }, [id, userInfo]);
    if (!id || !userInfo || Object.keys(userInfo).length === 0) {
        return <div className='min-h-screen flex justify-center items-center text-3xl'>Loading...</div>;
    }

    return (
        <div className='min-h-screen bg-slate-500 flex justify-center items-center'>
            <div className='bg-white w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[80%] 2xl:w-[90%] max-w-7xl p-8 rounded-lg shadow-lg'>
                <div className='flex items-center'>
                    <div className='w-24 h-24 rounded-full overflow-hidden'>
                        <Image
                            alt='dp'
                            src='/Images/medicine (3).jpg'
                            width={200}
                            height={200}
                            className='object-cover'
                        />
                    </div>
                    <div className='ml-4'>
                        <h1 className='text-3xl font-bold'>{firstName}</h1>
                        <p className='text-gray-600'>Age: {age}</p>
                        <p className='text-gray-600'>Gender: {gender}</p>
                    </div>
                </div>
                <div className='border-t border-gray-300 pt-4 mt-6'>
                    <h2 className='text-xl font-bold'>Contact Information</h2>
                    <div className='mt-2 text-gray-600'>
                        <p>Address: {address}</p>
                        <p>Phone: {phone}</p>
                        <p>Email: {email}</p>
                    </div>
                </div>
                <div className='border-t border-gray-300 pt-4 mt-6'>
                    <h2 className='text-xl font-bold'>Previous medications</h2>
                    <div className='w-full h-60 rounded-lg shadow-md mt-4'>
                        {/* Display previous medications here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
