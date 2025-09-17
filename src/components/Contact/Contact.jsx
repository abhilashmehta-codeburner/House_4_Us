'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // ✅ You can integrate API call here
  };

  return (
    <div className='max-w-3xl mx-auto py-20 px-6 '>
      <h2 className='text-2xl md:text-3xl font-bold text-center mb-8'>
        Contact Form
      </h2>

      <form
        onSubmit={handleSubmit}
        className='space-y-12'
      >
        {/* Input fields with extra padding */}
        <Input
          type='text'
          name='name'
          placeholder='Full Name'
          value={formData.name}
          onChange={handleChange}
          required
          className='py-6 px-4 text-base'
        />

        <Input
          type='email'
          name='email'
          placeholder='Email Address'
          value={formData.email}
          onChange={handleChange}
          required
          className='py-6 px-4 text-base'
        />

        <Input
          type='tel'
          name='phone'
          placeholder='Contact Number'
          value={formData.phone}
          onChange={handleChange}
          required
          className='py-6 px-4 text-base'
        />

        <Textarea
          name='location'
          placeholder='Location/city of the property you are looking for'
          value={formData.location}
          onChange={handleChange}
          rows={3}
          className='py-14 px-4 text-balance'
        />

        <Button
          type='submit'
          className='w-full bg-[#FF5733] hover:bg-[#e04d2e] text-white py-6 text-lg'
        >
          Submit
        </Button>
      </form>

      <div className='mt-6 text-sm text-gray-600 leading-relaxed'>
        <p className='flex items-start gap-1'>
          <span
            role='img'
            aria-label='lock'
          >
            🔒
          </span>
          By clicking the above button, you acknowledge and agree to be bound by
          the{' '}
          <Link
            href='#'
            className='text-red-500 hover:underline'
          >
            Terms & Conditions
          </Link>
          .
        </p>
        <p className='mt-2'>
          Furthermore, you authorize Home4Us and Advertiser Project Experts,
          such as 99 acres, to contact you for additional information regarding
          this project, and/or any other project. This authorization supersedes
          any registration you may have made on the Do-Not-Call (DNC) or
          National Do-Not-Call (NDNC) list. Please refer to our{' '}
          <Link
            href='#'
            className='text-red-500 hover:underline'
          >
            Privacy Policy
          </Link>{' '}
          for further details.
        </p>
      </div>
    </div>
  );
}
