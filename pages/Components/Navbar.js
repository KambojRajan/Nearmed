import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { GiButterfly } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { FiSearch } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { DropCare, DropHealth, DropProf } from './NavbarUtils';
import { UserContext } from '../UserContext';
import { useRouter } from 'next/router';

function Navbar() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const router = useRouter();
  const [careDrop, setCareDrop] = useState(false);
  const [professional, setProfessional] = useState(false);
  const [health, setHealth] = useState(false);
  const [searchNavActive, setSearchNavActive] = useState(false);

  const handleClickCare = () => {
    setCareDrop(!careDrop);
    setProfessional(false);
    setHealth(false);
  };

  const handleClickProfessional = () => {
    setCareDrop(false);
    setProfessional(!professional);
    setHealth(false);
  };

  const handleClickHealth = () => {
    setCareDrop(false);
    setProfessional(false);
    setHealth(!health);
  };

  const handleClickSearch = () => {
    setSearchNavActive(!searchNavActive);
  };
  console.log("hello")
  console.log(userInfo)

  const NonSearchNav = () => (
    <div className='bg-gray-800 border-gray-800 border-2'>
      <nav className='mx-[5%]'>
        <div className='flex items-center justify-between py-4'>
          <div className='flex items-center gap-4'>
            <Link href='/'>
              <GiButterfly className='text-5xl text-indigo-400' />
            </Link>
            <div className='flex gap-7'>
              <Link href='/'>
                <h1 className='text-3xl font-bold text-white'>Nearmed</h1>
              </Link>
              <h3
                className={`font-semibold text-md text-gray-400 hover:border-b-2 hover:cursor-pointer hover:border-indigo-400 p-1 ${careDrop ? 'border-b-2 border-indigo-400' : ''
                  }`}
                onClick={handleClickCare}
              >
                Nearmed Care
              </h3>
              <h3
                className={`font-semibold text-md text-gray-400 hover:border-b-2 hover:cursor-pointer hover:border-indigo-400 p-1 ${professional ? 'border-b-2 border-indigo-400' : ''
                  }`}
                onClick={handleClickProfessional}
              >
                Medical professional
              </h3>
              <h3
                className={`font-semibold text-md text-gray-400 hover:border-b-2 hover:cursor-pointer hover:border-indigo-400 p-1 ${health ? 'border-b-2 border-indigo-400' : ''
                  }`}
                onClick={handleClickHealth}
              >
                Health
              </h3>
            </div>
          </div>
          <ul className='flex items-center gap-7'>
            <Link href='/Components/Appointment'>
              <li className='p-2 hover:cursor-pointer text-lg font-semibold text-white hover:bg-indigo-400 rounded-full'>
                Request Appointment
              </li>
            </Link>
            <Link href='/Components/Donation'>
              <li className='p-2 hover:cursor-pointer text-lg font-semibold text-white hover:bg-indigo-400 rounded-full cursor-pointer'>
                Donate
              </li>
            </Link>
            {console.log(userInfo)}
            {userInfo && Object.keys(userInfo).length > 0 ? (
              <Link href={`/Components/${userInfo.id}`}>
                <li className='p-2 hover:cursor-pointer text-lg font-semibold flex items-center gap-1 text-white hover:bg-indigo-400 rounded-full'>
                  <CgProfile className='text-3xl' /> {userInfo.firstName.split(" ")[0]}
                </li>
              </Link>
            ) : (
              <Link href='/Components/LoginPage'>
                <li className='p-2 hover:cursor-pointer text-lg font-semibold flex items-center gap-1 text-white hover:bg-indigo-400 rounded-full'>
                  <CgProfile className='text-3xl' /> Login
                </li>
              </Link>
            )}
            <li>
              <FiSearch
                onClick={handleClickSearch}
                className='p-2 hover:cursor-pointer text-4xl font-bold text-white hover:bg-indigo-400 rounded-full'
              />
            </li>
          </ul>
        </div>
      </nav>
      {careDrop && <DropCare />}
      {professional && <DropProf />}
      {health && <DropHealth />}
    </div>
  );


  const SearchNav = () => (
    <div>
      <div className='bg-gray-800 border-gray-800 border-2 flex justify-center p-5 items-center'>
        <FiSearch className='text-3xl text-white' />
        <input
          type='text'
          name='text'
          id='input'
          placeholder='Search'
          className='w-[40%] px-4 py-2 ml-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
        />
        <RxCross1
          className='text-3xl text-white ml-2 cursor-pointer'
          onClick={() => {
            setSearchNavActive(false);
          }}
        />
      </div>
    </div>
  );

  return <div>{searchNavActive ? <SearchNav /> : <NonSearchNav />}</div>;
}

export default Navbar;