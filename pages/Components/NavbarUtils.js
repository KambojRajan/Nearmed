import React from 'react';
import Link from 'next/link';

const MenuItem = ({ href, title }) => (
    <Link href={href}>
        <li className="text-gray-800 hover:text-indigo-400 cursor-pointer font-sans">{title}</li>
    </Link>
);

const DropDown = ({ options }) => (
    <div className="absolute z-10 w-full bg-white py-3 shadow-md text-lg font-thin">
        <div className="mx-[5%] flex justify-around">
            <ul className="flex gap-4">
                {options[0].map((item) => (
                    <MenuItem key={item.href} href={item.href} title={item.title} />
                ))}
            </ul>
            <ul className="flex gap-4">
                {options[1].map((item) => (
                    <MenuItem key={item.href} href={item.href} title={item.title} />
                ))}
            </ul>
        </div>
    </div>
);

export const DropCare = () => {
    const options = [
        [
            { href: "/Components/InfoPage", title: "Care at Nearmed" },
            { href: "/Components/AboutDoctors", title: "About our Doctors" },
            { href: "/Components/Clinic", title: "Clinic" },
            { href: "/Components/Insurance", title: "Insurance and Payments" },
        ],
        [
            { href: "/Components/FindADoctor", title: "Find Doctor" },
            { href: "/Components/Departments", title: "Department" },
            { href: "/Components/Contacts", title: "Contact Us" },
        ],
    ];

    return <DropDown options={options} />;
};

export const DropProf = () => {
    const options = [
        [
            { href: "/Components/Sorry", title: "Medical Professional Resources" },
            { href: "/Components/ReferringPhy", title: "Refer a Patient" },
            { href: "/Components/Clinic", title: "Clinic Laboratories" },
        ],
        [
            { href: "/Components/Sorry", title: "Publications" },
            { href: "/Components/Sorry", title: "Research" },
        ],
    ];

    return <DropDown options={options} />;
};

export const DropHealth = () => {
    const options = [
        [
            { href: "/Components/Disease", title: "Diseases & Conditions" },
            { href: "/Components/LabAndTest", title: "Lab Tests" },
        ],
        [
            { href: "/Components/Drugs", title: "Drugs & Supplements" },
            { href: "/Components/Sorry", title: "Books" },
        ],
    ];

    return <DropDown options={options} />;
};
