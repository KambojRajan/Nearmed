import { useRouter } from 'next/router';
import Link from 'next/link';
import { GiButterfly } from 'react-icons/gi';
function Done() {
    const router = useRouter();
    const {
        patientFirstName,
        patientLastName,
        address,
        referingDoctorName,
        referedDoctorName,
        appointmentDate,
        email
    } = router.query;

    return (
        <div>
            <div className='h-[13%] bg-gray-950 flex justify-center items-center'>
                <Link href="/"><GiButterfly className='text-7xl font-thin text-white' /></Link>
            </div>
            <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full mx-4 my-8 text-center">
                    <h1 className="text-4xl font-bold mb-6">Appointment Confirmed</h1>
                    <p className="text-lg mb-6">Thank you for scheduling your appointment!</p>
                    <div>
                        <div className="text-left">
                            <p className="text-lg"><strong>Date of appointment:</strong> {appointmentDate}</p>
                            <p className="text-lg"><strong>Doctor referred:</strong> {referedDoctorName}</p>
                            <p className="text-lg"><strong>Referred by:</strong> {referingDoctorName}</p>
                            <p className="text-lg"><strong>Patient First Name:</strong> {patientFirstName}</p>
                            <p className="text-lg"><strong>Patient Last Name:</strong> {patientLastName}</p>
                            <p className="text-lg"><strong>Address:</strong> {address}</p>
                            <p className="text-lg"><strong>Patient email:</strong> {email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Done;
