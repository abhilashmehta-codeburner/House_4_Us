/**
 * Custom 404 Page
 * Shown when a route does not exist
 */

import Link from 'next/link';
import Image from 'next/image';

/**
 * Metadata
 */
export const metadata = {
  title: '404 - Page Not Found',
  description:
    'The page you are looking for might have been removed, renamed, or is temporarily unavailable.',
};

const PageNotFound = () => {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center'>
      {/* 404 Image */}
      <div className='max-w-5xl'>
        <Image
          src='/images/404.png'
          alt='404 Not Found'
          width={1200}
          height={800}
          priority
          className='mx-auto'
        />
      </div>

      {/* Text Section */}
      <h1 className='mt-6 text-3xl font-bold text-gray-800 md:text-4xl'>
        404 - PAGE NOT FOUND
      </h1>
      <p className='mt-3 text-gray-600 max-w-md mx-auto'>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link
        href='/'
        className='mt-6 inline-block rounded-full bg-red-500 px-6 py-2 text-white text-sm font-semibold shadow-md transition hover:bg-red-600'
      >
        GO TO HOMEPAGE
      </Link>
    </section>
  );
};

export default PageNotFound;
