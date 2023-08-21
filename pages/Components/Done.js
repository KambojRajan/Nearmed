import { ReferedAppointment } from './ReferringPhy';
import { GiButterfly } from 'react-icons/gi';
import Link from 'next/link';

function Done({
    patientFirstName,
    patientLastName,
    address,
    referingDoctorName,
    referedDoctorName,
    appointmentDate,
    email,
}) {
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
                            {referedDoctorName && <p className="text-lg"><strong>Doctor referred:</strong> {referedDoctorName}</p>}
                            {referingDoctorName && <p className="text-lg"><strong>Referred by:</strong> {referingDoctorName}</p>}
                            <p className="text-lg"><strong>Patient First Name:</strong> {patientFirstName}</p>
                            <p className="text-lg"><strong>Patient Last Name:</strong> {patientLastName}</p>
                            {address && <p className="text-lg"><strong>Address:</strong> {address}</p>}
                            {email && <p className="text-lg"><strong>Patient email:</strong> {email}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const {
        patientFirstName,
        patientLastName,
        address,
        referingDoctorName,
        referedDoctorName,
        appointmentDate,
        email,
    } = context.query;

    // Assuming you have a MongoDB model called ReferedAppointment
    // Create the record in the database with the received data
    try {
        await ReferedAppointment.create({
            patientFirstName,
            patientLastName,
            address,
            referingDoctorName,
            referedDoctorName,
            appointmentDate,
        });
    } catch (err) {
        console.log("Error while referring", err);
    }

    // Conditionally include fields in the props based on whether they are present
    const props = {
        patientFirstName: patientFirstName || null,
        patientLastName: patientLastName || null,
        appointmentDate: appointmentDate || null,
    };

    // Include optional fields if they are present
    if (address) {
        props.address = address;
    }
    if (referingDoctorName) {
        props.referingDoctorName = referingDoctorName;
    }
    if (referedDoctorName) {
        props.referedDoctorName = referedDoctorName;
    }
    if (email) {
        props.email = email;
    }

    // You can also perform any validation or additional data processing here if needed

    return {
        props,
    };
}

export default Done;
