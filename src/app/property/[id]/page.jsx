// app/property/[id]/page.jsx
'use client';

import { useParams } from 'next/navigation';
import { properties } from '@/data/data';
import PropertyInfo from '@/components/Details/Details';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className='p-10 text-center text-red-500'>Property not found</div>
    );
  }

  return (
    <div className='w-[90%] mx-auto py-10'>
      <PropertyInfo property={property} />
    </div>
  );
}
