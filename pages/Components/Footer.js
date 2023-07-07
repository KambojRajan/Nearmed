import React from 'react';
import Link from 'next/link';

function Footer() {
    const CoustomLink = ({ path = '/', title }) => {
        return (
            <Link href={path} className='text-lg block font-thin mt-2 hover:cursor-pointer hover:underline'>
                {title}
            </Link>
        );
    }
    return (
        <div>
            <div className='pt-4 px-[10%] bg-indigo-800 text-white flex justify-between'>
                <div>
                    <h1 className='font-serif text-2xl'>About nearmed:</h1>
                    <CoustomLink title= "Developer"/>
                    <CoustomLink title= "Contact us"/>
                    <CoustomLink title= "Location"/>
                </div>
                <div>
                    <h1 className='font-serif text-2xl'>Research:</h1>
                    <CoustomLink title= "File for new research"/>
                    <CoustomLink title= "Publisher wanted"/>
                    <CoustomLink title= "Enroll for research"/>
                    <CoustomLink title= "News"/>
                </div>
                <div>
                    <h1 className='font-serif text-2xl'>Current Students:</h1>
                    <CoustomLink title= "Admissions"/>
                    <CoustomLink title= "Degree and Program"/>
                </div>
                <div>
                    <h1 className='font-serif text-2xl'>Country Location</h1>
                    <CoustomLink title= "=----="/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
