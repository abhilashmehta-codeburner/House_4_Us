import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-16 bg-[#f5f9fa]'>
      <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b border-gray-300'>
        {/* Logo + About */}
        <section>
          <Image
            src='/images/logo1.png'
            alt='Home4Us - Real Estate Platform'
            width={160}
            height={60}
            className='object-contain'
          />
          <p className='text-gray-600 mt-4 leading-relaxed text-sm'>
            Welcome To Home4Us, a Real-Estate Aggregator Platform bridging the
            gap between developers and consumers. We simplify property searching
            with powerful tools and resources.
          </p>
        </section>

        {/* Explore Real Estate */}
        <section className='md:mx-auto'>
          <h2 className='text-xl font-bold mb-4'>Explore Real Estate In</h2>
          <div className='grid grid-cols-2 gap-2 text-gray-600 text-sm'>
            {[
              'Delhi',
              'Pune',
              'Mumbai',
              'Chennai',
              'Kolkata',
              'Gurgaon',
              'Bangalore',
              'Noida',
              'Hyderabad',
              'Jaipur',
              'Ahmedabad',
              'Surat',
            ].map((city) => (
              <Link
                key={city}
                href={`/properties/${city.toLowerCase()}`}
                className='hover:text-red-500 transition'
              >
                Flats in {city}
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <nav className='lg:mx-auto'>
          <h2 className='text-lg font-bold mb-4'>Quick Links</h2>
          <ul className='space-y-2 text-gray-600 text-sm'>
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Projects', href: '/projects' },
              { label: 'Terms & Conditions', href: '/terms' },
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Contact Us', href: '/contact' },
              { label: 'EMI Calculator', href: '/emi-calculator' },
              { label: 'Sitemap', href: '/sitemap' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className='hover:text-red-500 transition'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <section className='md:mx-auto'>
          <h2 className='text-lg font-bold mb-4'>Follow Us</h2>
          <div className='flex items-center space-x-4'>
            <Link
              href='https://instagram.com'
              target='_blank'
            >
              <FaInstagram className='w-6 h-6 text-gray-600 hover:text-pink-500 cursor-pointer' />
            </Link>
            <Link
              href='https://facebook.com'
              target='_blank'
            >
              <FaFacebookF className='w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer' />
            </Link>
            <Link
              href='https://linkedin.com'
              target='_blank'
            >
              <FaLinkedinIn className='w-6 h-6 text-gray-600 hover:text-blue-700 cursor-pointer' />
            </Link>
            <Link
              href='https://twitter.com'
              target='_blank'
            >
              <FaTwitter className='w-6 h-6 text-gray-600 hover:text-sky-500 cursor-pointer' />
            </Link>
          </div>
        </section>
      </div>

      {/* Copyright */}
      <p className='text-center mt-6 text-xs text-gray-500'>
        © {new Date().getFullYear()} Home4Us. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
