// app/property/[id]/page.jsx
'use client';

import { useParams } from 'next/navigation';
import { properties } from '@/data/data';
import PropertyInfo from '@/components/Details/Details';
import GallerySection from '@/components/Gallary/gallery';
import EnquiryForm from '@/components/Enquiry/Enquiry';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className='p-10 text-center text-red-500'>Property not found</div>
    );
  }

  return (
    <section className='container max-w-6xl mx-auto my-12 px-4'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {/* Left Section: Gallery + Property Info */}
        <div className='lg:col-span-2 flex flex-col gap-10'>
          <GallerySection images={property.images || []} />
          <PropertyInfo property={property} />
        </div>

        {/* Right Section: Enquiry Form (Sticky) */}
        <div className='lg:col-span-1'>
          {/* Make sticky relative to viewport */}
          <div className='set sticky top-6'>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
