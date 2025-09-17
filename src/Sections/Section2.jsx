import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import PropertyCard from '@/components/PropertyCard/Card';
import { properties } from '@/data/data';

const Section2 = () => {
  return (
    <div className='py-16 bg-gray-100'>
      <div className='w-[80%] mx-auto'>
        <SectionHeading heading='Featured Listings' />
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {properties.map((property, i) => (
            <div
              key={property.id}
              data-aos='fade-up'
              data-aos-delay={`${i * 150}`}
              data-aos-anchor-placement='top-center'
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
