
import React from 'react';
import CitySlider from "@/components/City/CitySlider"

const Section1 = () => {
  return (
    <div className='py-16 bg-gray-50'>
      <div className='w-[85%] mx-auto'>
        <div className='text-center'>
          <span className='px-4 py-1 text-sm bg-orange-100 text-orange-600 rounded-full font-medium'>
            Explore Real Estate In
          </span>
          <h2 className='mt-3 text-3xl md:text-4xl font-bold text-gray-900'>
            Popular Indian Cities
          </h2>
        </div>

        <div className='mt-12'>
          <CitySlider/>
        </div>
      </div>
    </div>
  );
};

export default Section1;
