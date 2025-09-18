'use client';

import { useState } from 'react';
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

  const [showTerms, setShowTerms] = useState(false);

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
    <div className='bg-white border border-gray-200 rounded-xl shadow-lg p-8'>
      <h2 className='text-2xl font-bold mb-2 text-center text-gray-800'>
        Enquire Now
      </h2>
      <div className='h-[3px] bg-gradient-to-r from-[#FF5733] to-[#ff784d] w-20 mx-auto mb-8 rounded-full'></div>

      <form
        onSubmit={handleSubmit}
        className='space-y-6'
      >
        <Input
          type='text'
          name='name'
          placeholder='Full Name*'
          value={formData.name}
          onChange={handleChange}
          required
          className='py-5 px-4 text-base rounded-md border-gray-300'
        />

        <Input
          type='email'
          name='email'
          placeholder='Email Address*'
          value={formData.email}
          onChange={handleChange}
          required
          className='py-5 px-4 text-base rounded-md border-gray-300'
        />

        <Input
          type='tel'
          name='phone'
          placeholder='Contact Number*'
          value={formData.phone}
          onChange={handleChange}
          required
          className='py-5 px-4 text-base rounded-md border-gray-300'
        />

        <Select
          onValueChange={(val) => setFormData({ ...formData, planning: val })}
        >
          <SelectTrigger className='py-5 px-4 text-base rounded-md border-gray-300'>
            <SelectValue placeholder='How soon are you planning?' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='immediately'>Immediately</SelectItem>
            <SelectItem value='1-3 months'>1 - 3 Months</SelectItem>
            <SelectItem value='3-6 months'>3 - 6 Months</SelectItem>
            <SelectItem value='later'>Later</SelectItem>
          </SelectContent>
        </Select>

        <div className='flex flex-col space-y-2'>
          <label className='flex items-start space-x-3'>
            <input
              type='checkbox'
              name='agree'
              checked={formData.agree}
              onChange={handleChange}
              className='mt-1 w-4 h-4'
              required
            />
            <span className='text-sm text-gray-600'>
              By clicking submit, you agree to our terms.
            </span>
          </label>

          <button
            type='button'
            onClick={() => setShowTerms(!showTerms)}
            className='text-blue-600 hover:underline text-left text-sm'
          >
            {showTerms ? 'Show less' : 'Read more'}
          </button>

          {showTerms && (
            <p className='text-sm text-gray-500 leading-relaxed'>
              You authorize Home4Us and project experts to contact you regarding
              this or related projects. This authorization overrides any
              DNC/NDNC registration. See our Privacy Policy for details.
            </p>
          )}
        </div>

        <Button
          type='submit'
          className='w-full bg-[#FF5733] hover:bg-[#e04d2e] text-white py-5 text-lg rounded-md'
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
