'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Desktop banners
const desktopImages = [
  '/bannerimage1.webp',
  '/bannerimage2.webp',
  '/bannerimage3.webp',
];
// Mobile banners
const mobileImages = ['/banner1.webp', '/banner2.webp', '/banner3.webp'];

const Section3 = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='relative w-full overflow-hidden bg-black'>
      {/* Slider Wrapper */}
      <div
        className='flex transition-transform duration-700 ease-in-out'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className='relative flex-shrink-0 w-full 
                       h-[250px] sm:h-[350px] md:h-[450px] lg:h-[400px]'
          >
            <Image
              src={src}
              alt={`Banner ${idx + 1}`}
              fill
              priority={idx === 0} // preload first image
              className='object-cover'
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2'>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              current === idx ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Section3;
