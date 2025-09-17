'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { MapPin, Home, IndianRupee, Users, X } from 'lucide-react';

// Format budget numbers
function formatCurrency(num) {
  if (num >= 10000000) {
    return `${(num / 10000000).toFixed(0)} Cr`;
  } else if (num >= 100000) {
    return `${(num / 100000).toFixed(0)} Lakh`;
  }
  return `₹${num.toLocaleString()}`;
}

export default function FilterBar() {
  const [location, setLocation] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [propertyType, setPropertyType] = useState([]);
  const [budget, setBudget] = useState([0, 850000000]);
  const [builder, setBuilder] = useState([]);

  const cities = [
    'Delhi',
    'Mumbai',
    'Kolkata',
    'Bangalore',
    'Hyderabad',
    'Ahmedabad',
    'Chennai',
    'Pune',
    'Noida',
    'Gurgaon',
    'Gandhinagar',
    'Surat',
  ];

  const propertyOptions = [
    'Residential Land',
    'Flat/Apartment',
    'Commercial',
    'Plots/Land',
    'Villa',
  ];

  const builders = [
    '153 Skye',
    '24 BUNGLOW PLOTS',
    '3 BHK Luxurious Villas',
    'A V ASSOCIATES',
    'A V BHAT DEVELOPERS LLP',
    'A.K.B. DEVELOPERS & PROMOTERS',
    'A&T ENGINEERS',
    'Aad One',
    'AADHAAR',
  ];

  return (
    <div className='w-full bg-[#161a28] py-4 shadow-md'>
      {/* ---------------- Mobile Filters ---------------- */}
      <div className='sm:hidden w-full bg-[#161a28] p-4'>
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className='w-full rounded-full bg-white text-black font-medium'
          >
            Search Property
          </Button>
        )}

        {isOpen && (
          <div className='bg-white rounded-lg shadow-md p-4 relative'>
            <button
              className='absolute top-2 right-2 text-gray-500 hover:text-black'
              onClick={() => setIsOpen(false)}
            >
              <X className='h-5 w-5' />
            </button>

            <Accordion type='single' collapsible className='w-full'>
              {/* Location */}
              <AccordionItem value='location'>
                <AccordionTrigger className='flex items-center gap-2'>
                  <MapPin className='text-rose-600 h-4 w-4' />
                  Location
                </AccordionTrigger>
                <AccordionContent>
                  <Input placeholder='Search city...' className='mb-2' />
                  <ScrollArea className='h-[150px]'>
                    {cities.map((city) => (
                      <div
                        key={city}
                        className='cursor-pointer py-1 px-2 hover:bg-gray-100 rounded'
                      >
                        {city}
                      </div>
                    ))}
                  </ScrollArea>
                </AccordionContent>
              </AccordionItem>

              {/* Budget */}
              <AccordionItem value='budget'>
                <AccordionTrigger className='flex items-center gap-2'>
                  <IndianRupee className='text-rose-600 h-4 w-4' />
                  Budget
                </AccordionTrigger>
                <AccordionContent>
                  <Slider defaultValue={[0, 5000000]} max={10000000} step={100000} />
                </AccordionContent>
              </AccordionItem>

              {/* Property Type */}
              <AccordionItem value='property'>
                <AccordionTrigger className='flex items-center gap-2'>
                  <Home className='text-rose-600 h-4 w-4' />
                  Property Type
                </AccordionTrigger>
                <AccordionContent>
                  <div className='space-y-2'>
                    {propertyOptions.map((type) => (
                      <div key={type} className='flex items-center space-x-2'>
                        <Checkbox />
                        <span>{type}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Builder */}
              <AccordionItem value='builder'>
                <AccordionTrigger className='flex items-center gap-2'>
                  <Users className='text-rose-600 h-4 w-4' />
                  Builder
                </AccordionTrigger>
                <AccordionContent>
                  <Input placeholder='Search builder...' className='mb-2' />
                  <ScrollArea className='h-[150px]'>
                    {builders.map((b) => (
                      <div key={b} className='flex items-center space-x-2 py-1'>
                        <Checkbox />
                        <span>{b}</span>
                      </div>
                    ))}
                  </ScrollArea>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button className='mt-4 w-full bg-rose-600 hover:bg-rose-700 text-white rounded-md'>
              SEARCH INVENTORY
            </Button>
          </div>
        )}
      </div>

      {/* ---------------- Desktop Filters ---------------- */}
      <div className='hidden sm:flex w-[90%] xl:w-[80%] mx-auto gap-4 items-center justify-between'>
        {/* Location */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              className='rounded-full bg-white text-black flex items-center gap-2 px-4'
            >
              <MapPin className='text-rose-600 h-4 w-4' />
              {location || 'Enter Location'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-60 p-3'>
            <Input
              placeholder='Search...'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='mb-2'
            />
            <ScrollArea className='h-[200px]'>
              {cities.map((city) => (
                <div
                  key={city}
                  className='cursor-pointer py-1 px-2 hover:bg-gray-100 rounded'
                  onClick={() => setLocation(city)}
                >
                  {city}
                </div>
              ))}
            </ScrollArea>
          </PopoverContent>
        </Popover>

        {/* Budget */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              className='rounded-full bg-white text-black flex items-center gap-2 px-4'
            >
              <IndianRupee className='text-rose-600 h-4 w-4' />
              Budget
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-80 p-4'>
            <div className='flex justify-between mb-2 text-sm font-medium'>
              <span>Min: {formatCurrency(budget[0])}</span>
              <span>Max: {formatCurrency(budget[1])}</span>
            </div>
            <Slider
              value={budget}
              onValueChange={setBudget}
              max={850000000}
              step={1000000}
            />
          </PopoverContent>
        </Popover>

        {/* Property Type */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              className='rounded-full bg-white text-black flex items-center gap-2 px-4'
            >
              <Home className='text-rose-600 h-4 w-4' />
              Property Type
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-60 p-3'>
            <div className='space-y-2'>
              {propertyOptions.map((type) => (
                <div key={type} className='flex items-center space-x-2'>
                  <Checkbox
                    checked={propertyType.includes(type)}
                    onCheckedChange={(checked) => {
                      setPropertyType((prev) =>
                        checked ? [...prev, type] : prev.filter((t) => t !== type)
                      );
                    }}
                  />
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Builder */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              className='rounded-full bg-white text-black flex items-center gap-2 px-4'
            >
              <Users className='text-rose-600 h-4 w-4' />
              Builder
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-72 p-3'>
            <Input placeholder='Search...' className='mb-2' />
            <div className='flex justify-between mb-2 text-sm'>
              <span
                className='cursor-pointer text-blue-600'
                onClick={() => setBuilder([...builders])}
              >
                Select All
              </span>
              <span
                className='cursor-pointer text-blue-600'
                onClick={() => setBuilder([])}
              >
                Deselect All
              </span>
            </div>
            <ScrollArea className='h-[200px]'>
              {builders.map((b) => (
                <div key={b} className='flex items-center space-x-2 py-1'>
                  <Checkbox
                    checked={builder.includes(b)}
                    onCheckedChange={(checked) => {
                      setBuilder((prev) =>
                        checked ? [...prev, b] : prev.filter((x) => x !== b)
                      );
                    }}
                  />
                  <span>{b}</span>
                </div>
              ))}
            </ScrollArea>
          </PopoverContent>
        </Popover>

        <Button className='bg-rose-600 hover:bg-rose-700 text-white rounded-full px-6'>
          SEARCH
        </Button>
      </div>
    </div>
  );
}
