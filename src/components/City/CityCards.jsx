'use client';
import Image from 'next/image';
import React from 'react';

const CityCard = ({ city }) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center transition-transform duration-300 hover:shadow-lg cursor-pointer'>
      {/* Image Wrapper */}
      <div className='overflow-hidden rounded-full w-48 h-48 mt-6'>
        <Image
          src={city.image}
          alt={city.cityName}
          width={200}
          height={200}
          className='w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110'
        />
      </div>

      {/* City Name */}
      <h1 className='text-lg font-bold mt-4 text-gray-900 transition-colors duration-300 hover:text-red-500'>
        {city.cityName}
      </h1>

      {/* Find A Home */}
      <p className='mt-2 mb-4 text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-red-500'>
        Find A Home →
      </p>
    </div>
  );
};

export default CityCard;
