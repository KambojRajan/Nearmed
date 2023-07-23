import React from 'react';
import Footer from './Footer'
import Link from 'next/link';

function MainPage() {
  return (
    <div>
      <div className='flex bg-gray-200'>
        <div className='w-1/3 h-screen flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold mb-4'>Why Choose Nearmed?</h1>
         <Link href = "/Components/InfoPage"> <button className='px-6 py-3 rounded-full bg-indigo-700 hover:bg-indigo-900 text-white text-xl font-semibold'>
            Learn More About Us
          </button></Link>
        </div>
        <div className='flex flex-col justify-center w-2/3'>
          <div className='grid grid-cols-2 gap-6  mr-4'>
            <div className='bg-white rounded-lg p-6'>
              <h2 className='text-2xl font-bold mb-4'>More Experience</h2>
              <p className='text-gray-700'>
                Nearmed has been serving the community for over a decade, providing comprehensive healthcare services and gaining a wealth of experience in treating diverse medical conditions.
              </p>
            </div>
            <div className='bg-white rounded-lg p-6'>
              <h2 className='text-2xl font-bold mb-4'>Correct Diagnosis</h2>
              <p className='text-gray-700'>
                Accurate and timely diagnosis is our priority. Our dedicated team of medical professionals utilizes advanced diagnostic tools and techniques to ensure precise evaluations and tailored treatment plans for each patient.
              </p>
            </div>
            <div className='bg-white rounded-lg p-6'>
              <h2 className='text-2xl font-bold mb-4'>Patients Come First</h2>
              <p className='text-gray-700'>
                At Nearmed, we are committed to patient-centered care. We prioritize your well-being and strive to create a warm and supportive environment, where your needs are heard, and you receive compassionate and personalized attention.
              </p>
            </div>
            <div className='bg-white rounded-lg p-6'>
              <h2 className='text-2xl font-bold mb-4'>Innovation Is Here</h2>
              <p className='text-gray-700'>
                Embracing innovation, we continuously invest in cutting-edge technology and stay at the forefront of medical advancements. Our goal is to provide you with the most effective and innovative treatments available, ensuring better outcomes and improved quality of care.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
