// components/PropertyInfo.jsx
'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Check } from 'lucide-react';

const PropertyInfo = ({ property }) => {
  if (!property) return null;

  const {
    propertyName,
    location,
    lastUpdated,
    builder,
    priceRange,
    bhk,
    possession,
  } = property;

  // Demo features (you can add per-property later in data.js)
  const features = [
    'Kids Play Area',
    'Visitors Parking',
    'Swimming Pool',
    'Car Parking',
    'Spa',
  ];

  return (
    <div className=' px-4 py-8 space-y-10'>
      {/* Section 1 */}
      <Card className='border-none shadow-none'>
        <CardHeader>
          <h2 className='text-4xl font-bold'>{propertyName}</h2>
          <div className='text-sm text-muted-foreground flex items-center gap-2 mt-2'>
            <MapPin className='w-4 h-4 text-orange-600' />
            <span>{location}</span>
            <Separator
              orientation='vertical'
              className='mx-2 h-4'
            />
            <Calendar className='w-4 h-4 text-orange-600' />
            <span>Updated on {lastUpdated}</span>
          </div>
        </CardHeader>

        <CardContent>
          <h3 className='text-lg font-semibold mb-2'>
            <span className='w-4 h-4 text-orange-600'>|</span> Facilities &
            Features
          </h3>
          <ul className='grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm'>
            {features.map((feature, idx) => (
              <li
                key={idx}
                className='flex items-center gap-2 px-3 py-2 rounded'
              >
                <Check className='w-4 h-4 text-orange-600' />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Section 2 */}
      <div className='space-y-4'>
        <h2 className='text-xl font-bold'>
          <span className='w-4 h-4 text-orange-600'>|</span> Property Details
        </h2>
        <Card className='border-none shadow-none'>
          <CardContent className='bg-muted rounded-lg p-10'>
            <ul className='space-y-4 text-sm'>
              <li>
                <strong>Builder:</strong> {builder}
              </li>
              <li>
                <strong>Price Range:</strong> {priceRange}
              </li>
              <li>
                <strong>BHK:</strong> {bhk}
              </li>
              <li>
                <strong>Possession:</strong> {possession}
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertyInfo;
