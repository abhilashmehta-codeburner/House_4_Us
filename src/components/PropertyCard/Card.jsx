// components/PropertyCard/Card.jsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaBed, FaKey, FaCalendarAlt } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  return (
    <Link href={`/property/${property.id}`}>
      <div className='bg-white overflow-hidden rounded-lg shadow-lg group cursor-pointer'>
        {/* Image */}
        <div className='relative overflow-hidden'>
          <Image
            src={property.imageUrl}
            alt={property.propertyName}
            width={600}
            height={400}
            className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute bottom-4 left-4 flex items-center text-white bg-black/50 px-3 py-1 rounded-md text-sm'>
            <FaMapMarkerAlt className='mr-2' />
            <span>{property.location}</span>
          </div>
        </div>

        {/* Details */}
        <div className='p-5'>
          <h1 className='text-lg font-bold text-gray-900'>
            {property.propertyName}{' '}
            {property.builder && (
              <span className='font-normal'>By {property.builder}</span>
            )}
          </h1>

          <p className='font-medium mt-2 text-[#FF5A3C]'>
            Price Range:{' '}
            <span className='font-semibold text-gray-800'>
              {property.priceRange}
            </span>
          </p>

          {/* BHK & Possession */}
          <div className='flex items-center justify-between mt-4 text-sm'>
            <div className='flex flex-col items-start flex-1'>
              <p className='flex items-center text-gray-700 font-medium'>
                <FaBed className='mr-2 text-gray-700' /> {property.bhk}
              </p>
              <span className='text-gray-400'>Bedroom</span>
            </div>

            <div className='w-[1px] h-10 bg-gray-300 mx-4'></div>

            <div className='flex flex-col items-start flex-1'>
              <p className='flex items-center text-gray-700 font-medium'>
                <FaKey className='mr-2 text-gray-700' /> {property.possession}
              </p>
              <span className='text-gray-400'>Possession</span>
            </div>
          </div>

          <div className='w-full h-[1px] my-4 bg-gray-200'></div>

          <div className='text-md text-gray-600'>
            <p className='flex items-center'>
              <FaCalendarAlt className='mr-2 text-[#FF5A3C]' />
              Property updated on {property.lastUpdated}
            </p>
            <p className='font-semibold text-black mt-1'>{property.builder}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
