'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    planning: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className='w-full lg:w-2/5 border border-gray-200 p-6 rounded-md shadow-sm'>
      <h2 className='text-2xl font-bold mb-1 text-center'>Enquire Now</h2>
      <div className='h-[2px] bg-red-500 w-16 mx-auto mb-6'></div>

      <form
        onSubmit={handleSubmit}
        className='space-y-8'
      >
        <Input
          type='text'
          name='name'
          placeholder='Full Name*'
          value={formData.name}
          onChange={handleChange}
          required
          className='py-6 px-4 text-base'
        />

        <Input
          type='email'
          name='email'
          placeholder='Email Address*'
          value={formData.email}
          onChange={handleChange}
          required
          className='py-6 px-4 text-base'
        />

        <Input
          type='tel'
          name='phone'
          placeholder='Contact Number*'
          value={formData.phone}
          onChange={handleChange}
          required
          className='py-6 px-4 text-base'
        />

        <Select
          onValueChange={(val) => setFormData({ ...formData, planning: val })}
        >
          <SelectTrigger>
            <SelectValue placeholder='How soon are you planning' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='immediately'>Immediately</SelectItem>
            <SelectItem value='1-3 months'>1 - 3 Months</SelectItem>
            <SelectItem value='3-6 months'>3 - 6 Months</SelectItem>
            <SelectItem value='later'>Later</SelectItem>
          </SelectContent>
        </Select>

        <div className='flex items-start space-x-2'>
          <input
            type='checkbox'
            name='agree'
            checked={formData.agree}
            onChange={handleChange}
            className='mt-1 py-6 px-4 text-base'
            required
          />
          <p className='text-sm text-gray-600'>
            By clicking the above button, you acknowledge and agree to be
            bound...{' '}
            <Link
              href='#'
              className='text-blue-600 hover:underline'
            >
              Read more
            </Link>
          </p>
        </div>

        <Button
          type='submit'
          className='w-full bg-[#FF5733] hover:bg-[#e04d2e] text-white py-6 text-lg'
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
