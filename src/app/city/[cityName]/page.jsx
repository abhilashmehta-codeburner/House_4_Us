'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PropertyCard from '@/components/PropertyCard/Card';
import { properties } from '@/data/data';

export default function CityPage() {
  const { cityName } = useParams();
  const decodedCityName = decodeURIComponent(cityName || '');
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  if (!decodedCityName) {
    return <div className='p-10 text-center text-gray-600'>Loading...</div>;
  }

  // Normalize city match (case insensitive, trimmed)
  const cityProperties = properties.filter(
    (property) =>
      property?.city?.toLowerCase().trim() ===
      decodedCityName.toLowerCase().trim()
  );

  useEffect(() => {
    if (visibleCount < cityProperties.length) {
      setLoading(true);
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 6);
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [visibleCount, cityProperties.length]);

  return (
    <div className='py-16 bg-gray-100'>
      <div className='w-[80%] mx-auto'>
        {/* Heading */}
        <h1 className='text-4xl md:text-5xl font-bold text-center capitalize'>
          Properties in {decodedCityName}
        </h1>
        <p className='mt-2 text-lg md:text-xl text-gray-600 text-center'>
          Explore the best projects available in {decodedCityName}.
        </p>

        {cityProperties.length === 0 ? (
          <p className='text-center text-gray-600 mt-10 text-lg'>
            No properties found in{' '}
            <span className='capitalize'>{decodedCityName}</span>.
          </p>
        ) : (
          <>
            {/* Property Grid */}
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
              {cityProperties.slice(0, visibleCount).map((property, i) => (
                <div
                  key={`${property.id}-${i}`}
                  data-aos='fade-up'
                  data-aos-delay={`${i * 150}`}
                  data-aos-anchor-placement='top-center'
                >
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>

            {/* Loading indicator */}
            {loading && (
              <p className='text-center text-gray-600 mt-6 text-lg animate-pulse'>
                Loading...
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
