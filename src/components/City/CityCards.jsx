'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CityCard = ({ city }) => {
  return (
    <Link href={`/city/${city.cityName.toLowerCase()}`}>
      <div
        className='
          relative
          bg-white shadow-md rounded-lg overflow-hidden
          flex flex-col items-center cursor-pointer
          transition-transform duration-300 hover:shadow-lg
          hover:[&_.underline]:w-full
          hover:[&_.city-img]:scale-110
          hover:[&_.city-name]:text-red-500
          hover:[&_.city-text]:text-red-500
        '
      >
        {/* Image Wrapper */}
        <div className='overflow-hidden rounded-full w-48 h-48 mt-6'>
          <Image
            src={city.image}
            alt={city.cityName}
            width={200}
            height={200}
            className='city-img w-full h-full object-cover rounded-full transition-transform duration-500'
          />
        </div>

        {/* City Name */}
        <h1 className='city-name text-lg font-bold mt-4 text-gray-900 transition-colors duration-300'>
          {city.cityName}
        </h1>

        {/* Find A Home */}
        <p className='city-text mt-2 mb-4 text-sm font-medium text-gray-500 transition-colors duration-300'>
          Find A Home →
        </p>

        {/* Underline */}
        <div className='absolute bottom-0 left-0 w-full overflow-hidden'>
          <span
            className='
              underline block h-[3px] bg-orange-500
              w-0 transition-all duration-500
            '
          />
        </div>
      </div>
    </Link>
  );
};

export default CityCard;
