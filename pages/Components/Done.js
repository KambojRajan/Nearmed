import React from 'react'

function Done() {
    return (
        <div className='h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-4xl flex flex-col justify-center items-center'>
            <div className="text-6xl font-bold mb-8">Appointment Confirmed</div>
            <div className='text-2xl mb-4'>Thank you for scheduling your appointment!</div>
            <div className='text-lg mb-4'>Date of appointment: ________</div>
            <div className='text-lg'>Time of appointment: ________</div>
        </div>
    )
}

export default Done
