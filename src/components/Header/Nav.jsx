'use client';
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Image from 'next/image';

const Nav = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? 'bg-white shadow-md' : 'bg-white'
      } h-[10vh] z-[100] w-full transition-all duration-200`}
    >
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
        {/* Logo */}
        <Image
          src='/images/logo1.png'
          alt='Logo'
          width={160}
          height={50}
          priority
        />

        {/* Desktop Menu */}
        <div className='lg:flex items-center space-x-10 hidden'>
          {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.url}>
              <p className='font-medium text-black text-lg hover:text-red-500'>
                {navLink.label}
              </p>
            </Link>
          ))}
          <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition'>
            Log In/Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <HiBars3BottomRight
          onClick={openNav}
          className='lg:hidden w-7 h-7 text-black cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Nav;
