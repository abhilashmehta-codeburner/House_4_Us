import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const MobileNav = ({ showNav, closeNav, openLogin, userName }) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div
      className={`fixed inset-0 z-[1000] transition-all duration-500 ${
        showNav ? 'bg-black/50' : 'pointer-events-none'
      }`}
    >
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-white transform ${navOpen} transition-all duration-500 z-[1001] p-6`}
      >
        {/* Logo & Close */}
        <div className='flex items-center justify-between mb-6'>
          <Image
            src='/images/logo1.png'
            alt='Logo'
            width={150}
            height={50}
            priority
          />
          <CgClose
            onClick={closeNav}
            className='w-6 h-6 sm:w-8 sm:h-8 text-black cursor-pointer'
          />
        </div>

        {/* Search Bar */}
        <div className='relative mb-6'>
          <input
            type='text'
            placeholder='Search...'
            className='w-full border px-4 py-2 rounded-md focus:outline-none'
          />
          <FaSearch className='absolute top-3 right-3 text-gray-500' />
        </div>

        {/* Nav Links */}
        <nav className='flex flex-col space-y-6'>
          {navLinks.map((navLink) => (
            <Link
              key={navLink.id}
              href={navLink.url}
              onClick={closeNav} // ✅ Auto-close menu on click
            >
              <p className='text-gray-600 text-lg font-medium hover:text-red-500'>
                {navLink.label}
              </p>
            </Link>
          ))}

          <button
            onClick={() => {
              openLogin();
              closeNav(); // ✅ Also close menu after login click
            }}
            className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition'
          >
            {userName ? `Hi ${userName} 👋` : 'Log In / Sign Up'}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
