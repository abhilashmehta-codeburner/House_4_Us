// components/Gallary/gallery.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection({ images = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className='w-full lg:w-3/5'>
        <h2 className='text-2xl font-bold mb-4'>
          <span className='border-l-4 border-red-500 pl-2'>Gallery</span>
        </h2>
        <p className='text-gray-500'>No images available for this property.</p>
      </div>
    );
  }

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);
  const prevImage = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);

  return (
    <div className='w-full lg:w-3/5'>
      <h2 className='text-2xl font-bold mb-4'>
        <span className='border-l-4 border-red-500 pl-2'>Gallery</span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {images.slice(0, 3).map((img, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? 'md:row-span-2' : ''
            } overflow-hidden rounded-lg cursor-pointer`}
            onClick={() => openModal(index)}
          >
            <Image
              src={img}
              alt={`Gallery ${index + 1}`}
              width={600}
              height={index === 0 ? 800 : 400}
              className={`w-full ${
                index === 0 ? 'h-full' : 'h-48 md:h-56 lg:h-64'
              } object-cover rounded-lg hover:scale-105 transition-transform duration-300`}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className='fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center'
          onClick={closeModal}
        >
          <div
            className='relative max-w-4xl max-h-[80vh] mx-auto'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 text-white hover:text-gray-300 z-10'
            >
              <X size={36} />
            </button>

            <button
              onClick={prevImage}
              className='absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10'
            >
              <ChevronLeft size={48} />
            </button>

            <Image
              src={images[activeIndex]}
              alt='Active Image'
              width={900}
              height={700}
              className='object-contain w-full h-full rounded-lg'
            />

            <button
              onClick={nextImage}
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10'
            >
              <ChevronRight size={48} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
