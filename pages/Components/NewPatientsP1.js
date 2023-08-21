import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

function NewPatientsP1() {
    const router = useRouter();
    const isAPatient = router.query.response;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { setUserInfo } = useContext(UserContext);

    const handleNextClick = () => {
        const queryParams = {
            isAPatient,
            firstName,
            lastName,
        };

        setUserInfo({ firstName, lastName });

        router.push({
            pathname: '/NewPatientsP4',
            query: queryParams,
        });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-100 to-gray-300">
            <div className="w-2/3 h-1/2 bg-white shadow-lg flex rounded-full">
                <div className="w-1/2 border-r border-gray-400 p-4">
                    <h2 className="text-lg font-bold flex justify-center py-32">
                        Are you the patient?
                    </h2>
                </div>
                <div className="w-1/2 p-4 flex flex-col justify-center gap-y-2">
                    <div className="flex justify-center">
                        <Link href={{ pathname: './NewPatientsP2', query: { response: 'yes' } }}>
                            <button
                                className="w-full pb-20 rounded-md font-bold"
                            >
                                Yes
                            </button>
                        </Link>
                    </div>
                    <hr className="font-bold" />
                    <div className="flex justify-center">
                        <Link href={{ pathname: './NewPatientsP201', query: { response: 'no' } }}>
                            <button
                                className="w-full pt-16 rounded-md font-bold"
                            >
                                No
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPatientsP1;
