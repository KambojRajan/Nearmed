import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai'
import { useRouter } from 'next/router';

function NewPatientsP1() {
    const [isYes, SetYes] = useState(false);
    const router = useRouter()
    const isAPatient = router.query.response
    const [relation,setRelation] = useState(null)
    const [relName,setRelName] = useState(null)
    const handleNextClick =()=>{
        const queryParams = [
            isAPatient,
            relName,
            relation
        ]
        const queryString = Object.keys(queryParams)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
            ).join('&')
        router.push(`/NewPatientsP3?${queryString}`)
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-100 to-gray-300">
            <div className="w-2/3 h-1/2 bg-white shadow-lg flex rounded-full">
                <div className="w-1/2 border-r border-gray-400 p-4 flex flex-col justify-between">
                    <h2 className="text-lg font-bold flex justify-center py-36">
                        Please enter your Details
                    </h2>
                </div>
                <div className="w-1/2 p-4 flex flex-col justify-center gap-y-2">
                    <div className="flex justify-center">
                        <label htmlFor="FName" className="block font-semibold mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="FName"
                            className="focus:border-none w-full border-b-2 border-black py-2 px-4 mb-4"
                            placeholder="First Name"
                            onChange={(e)=>setRelName(e.target.value)}
                        />
                    </div>
                    <hr className="font-bold" />
                    <div className="flex justify-center">
                        <label htmlFor="LName" className="block font-semibold mb-2">
                            Relation to Patient
                        </label>
                        <select
                            id='Relation'
                            className="focus:border-none w-full focus:outline-none py-2 px-4 mb-4"
                            defaultValue=""
                            onChange={(e)=>setRelation(e.target.value)}
                        >
                            <option value="" disabled>
                                Select Relation
                            </option>
                            <option value="Mother">Mother</option>
                            <option value="Father">Father</option>
                            <option value="Son">Son</option>
                            <option value="Doughter">Doughter</option>
                            <option value="Uncle">Uncle</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
            </div>
            <Link href={`./NewPatientsP3?isAPatient=${isAPatient}&relName=${relName}&relation=${relation}`}>
                <AiOutlineRight className='text-4xl text-gray-400 hover:text-gray-800' />
            </Link>
        </div>
    );
}

export default NewPatientsP1;
