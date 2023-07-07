import React, { useState } from 'react';
import { GiButterfly } from 'react-icons/gi';
import Login from './AppointmentSignIn'
import Link from 'next/link'

function LoginPage() {

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-center items-center bg-gray-950 h-1/4">
        <Link href = "/"><GiButterfly className='text-7xl font-thin text-white' /></Link>
        </div>
        <div className="container mx-auto px-4 py-12">
          <p className="text-gray-700 text-lg text-center mb-6">{"Welcome to our health care app, where your health and prosperity matter deeply to us. We understand that your well-being is not just a goal but a fundamental part of your happiness and quality of life. With heartfelt compassion, we are here to guide and support you on your journey towards better health."}</p>
          <p className="text-gray-700 text-lg text-center mb-6">{"Our dedicated team of caring professionals is committed to providing you with the highest level of care, tailored to your unique needs. Trust us to be your partner in achieving a healthier, happier, and more fulfilling life. Together, we can embrace a future filled with vitality and well-being."}</p>

          <div className='flex justify-center gap-x-3'>
            <Link href="./login">
              <button className='bg-indigo-500 font-thin text-white text-3xl py-2 px-8 rounded-full shadow-md hover:bg-indigo-600 transition-colors duration-300'>
                Log in
              </button>
            </Link>
            <Link href="./createAccount">
              <button className='bg-white border font-thin border-indigo-500 text-indigo-500 text-3xl py-2 px-8 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition-colors duration-300'>
                Create account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
