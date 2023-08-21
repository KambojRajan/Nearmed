import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {AiOutlineRight} from 'react-icons/ai'

function NewPatientsP4() {
    const router = useRouter();
    const { query } = router;
    const { isAPatient, firstName, lastName,relation } = query;
    const [description, setDescription] = useState('');
    const { setUserInfo } = useContext(UserContext);

    const handleNextClick = async () => {
        try {
            const response = await fetch('http://localhost:5000/newPatient', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, description, relation }),
            });

            if (!response.ok) {
                throw new Error('Error while submitting data');
            }

            // Assuming the backend returns a JSON object with success as true
            const data = await response.json();
            if (data.success) {
                setUserInfo({ firstName, lastName, description, relation });
                router.push('/Components/Done');
            } else {
                throw new Error('Server response indicates failure');
            }
        } catch (error) {
            console.error('Error during API call:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-100 to-gray-300">
            <div className="w-2/3 h-1/2 bg-white shadow-lg flex rounded-full">
                <div className="w-1/2 border-r border-gray-400 p-4">
                    <h2 className="text-lg font-bold flex justify-center py-32">What are you here for?</h2>
                </div>
                <div className="w-1/2 p-4 flex flex-col justify-center gap-y-2">
                    <div className="flex justify-center">
                        <textarea
                            name="hereFor"
                            id="hereFor"
                            cols="50"
                            rows="10"
                            className="bg-gray-50 rounded-lg focus:outline-none"
                            placeholder="details"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                </div>
            </div>
            <Link
                href={`/Components/Done?isAPatient=${isAPatient}&firstName=${firstName}&lastName=${lastName}&relation=${relation|null || ''}&description=${description}`}
            >
                <AiOutlineRight className="text-4xl text-gray-400 hover:text-gray-800" onClick={handleNextClick} />
            </Link>
        </div>
    );
}

export default NewPatientsP4;
