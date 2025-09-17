'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaBed, FaKey, FaCalendarAlt } from 'react-icons/fa';

// Helper function to truncate text
const truncateText = (text, maxLength) => {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
};

const PropertyCard = ({ property }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link href={`/property/${property.id}`}>
      <div className='bg-white overflow-hidden rounded-lg shadow-lg group cursor-pointer'>
        {/* Image Section */}
        <div className='relative overflow-hidden w-full h-64 flex items-center justify-center bg-gray-100'>
          {isLoading && (
            <div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
              <span className='loader'></span>
            </div>
          )}

          <Image
            src={property.imageUrl}
            alt={property.propertyName}
            fill
            className={`object-cover transition-opacity duration-500 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoadingComplete={() => setIsLoading(false)}
          />

          {/* Location Badge */}
          {!isLoading && (
            <div
              className='absolute bottom-4 left-4 flex items-center text-white bg-black/75 px-3 py-1 rounded-md text-sm'
              title={property.location}
            >
              <FaMapMarkerAlt className='mr-2' />
              <span>{truncateText(property.location, 24)}</span>
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className='p-5'>
          <h1
            className='text-2xl font-semibold text-gray-900'
            title={property.propertyName}
          >
            {truncateText(property.propertyName, 22)}{' '}
            {property.builder && (
              <span
                className='font-normal'
                title={property.builder}
              ></span>
            )}
          </h1>

          <p
            className='font-medium mt-5 text-[#FF5A3C]'
            title={property.priceRange}
          >
            Price Range:{' '}
            <span className='font-semibold text-gray-800'>
              {truncateText(property.priceRange, 28)}
            </span>
          </p>

          {/* BHK & Possession */}
          <div className='flex items-center justify-around mt-6 text-sm'>
            <div
              className='flex flex-col items-start flex-1'
              title={property.bhk}
            >
              <p className='flex items-center text-gray-700 font-medium'>
                <FaBed className='mr-2 text-gray-700' />{' '}
                {truncateText(property.bhk, 3)}
              </p>
              <span className='text-gray-400'>Bedroom</span>
            </div>

            <div className='w-[1px] h-10 bg-gray-300 mx-2'></div>

            <div
              className='flex flex-col items-start flex-1'
              title={property.possession}
            >
              <p className='flex items-center text-gray-700 font-medium'>
                <FaKey className='mr-2 text-gray-700' />{' '}
                {truncateText(property.possession, 16)}
              </p>
              <span className='text-gray-400'>Possession</span>
            </div>
          </div>

          <div className='w-full h-[1px] my-4 bg-gray-200'></div>

          <div className='text-md text-gray-600 mt-5'>
            <p
              className='flex items-center'
              title={property.lastUpdated}
            >
              <FaCalendarAlt className='mr-2 text-[#FF5A3C]' />
              Property updated on {truncateText(property.lastUpdated, 10)}
            </p>
            <p
              className='font-semibold text-black mt-1'
              title={property.builder}
            >
              {truncateText(property.builder, 10)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
