/**
 * Fullscreen Loader component
 */
import { CgSpinner } from 'react-icons/cg';

export const Loader = () => {
  return (
    <section className='fixed inset-0 z-50 grid h-screen w-screen place-items-center bg-white'>
      <div className='flex items-center gap-2'>
        {/* Spinner */}
        <CgSpinner className='animate-spin text-3xl sm:text-4xl text-gray-700' />

        {/* Loading Text */}
        <span className='text-gray-700 font-medium sm:text-lg'>Loading</span>

        {/* Dots animation */}
        <div className='flex space-x-1'>
          <span className='inline-block size-2 rounded-full bg-gray-700 animate-bounce'></span>
          <span className='inline-block size-2 rounded-full bg-gray-700 animate-bounce [animation-delay:0.2s]'></span>
          <span className='inline-block size-2 rounded-full bg-gray-700 animate-bounce [animation-delay:0.4s]'></span>
        </div>
      </div>
    </section>
  );
};
