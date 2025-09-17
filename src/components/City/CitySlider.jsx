'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { cities } from '@/data/data';
import CityCard from '@/components/City/CityCards';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';

const CitySlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className='relative group'>
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerGroup={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 4 }, // Desktop
        }}
        onSwiper={setSwiperInstance}
      >
        {cities.map((city) => (
          <SwiperSlide key={city.id}>
            <CityCard city={city} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      <div
        ref={prevRef}
        className='absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 
        bg-white shadow-md w-10 h-10 rounded-full flex items-center 
        justify-center text-gray-600 cursor-pointer opacity-0 
        group-hover:opacity-100 transition'
      >
        <FaChevronLeft />
      </div>
      <div
        ref={nextRef}
        className='absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 
        bg-white shadow-md w-10 h-10 rounded-full flex items-center 
        justify-center text-gray-600 cursor-pointer opacity-0 
        group-hover:opacity-100 transition'
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default CitySlider;
