'use client';

import React, { useEffect, useState } from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import PropertyCard from '@/components/PropertyCard/Card';
import { properties } from '@/data/data';

const Section2 = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (visibleCount < properties.length) {
      setLoading(true);
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 6);
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <div className='py-16 bg-gray-100'>
      <div className='w-[80%] mx-auto'>
        <SectionHeading heading='Featured Listings' />
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {properties.slice(0, visibleCount).map((property, i) => (
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
      </div>
    </div>
  );
};

export default Section2;
