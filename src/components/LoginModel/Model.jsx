'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const LoginModal = ({ open, onClose, onLoginSuccess }) => {
  const [step, setStep] = useState(1);
  const [number, setNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Reset modal state when closed
  useEffect(() => {
    if (!open) {
      setStep(1);
      setNumber('');
      setOtp('');
      setName('');
      setEmail('');
    }
  }, [open]);

  const handleContinue = () => {
    if (number.length >= 10) setStep(2);
  };

  const handleVerify = () => {
    if (otp.length === 4) setStep(3);
  };

  const handleFinalSubmit = () => {
    if (name) {
      onLoginSuccess(name); // ✅ Pass entered name to parent
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className='sm:max-w-md rounded-2xl'>
        {/* Step 1: Phone Number */}
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle>Login to your Account</DialogTitle>
              <DialogDescription>
                Enter your number to continue and explore within your grasp
              </DialogDescription>
            </DialogHeader>
            <Input
              type='tel'
              placeholder='Enter Number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className='mt-4'
              maxLength={10}
            />
            <DialogFooter>
              <Button
                className='w-full bg-red-500 hover:bg-red-600'
                onClick={handleContinue}
                disabled={number.length < 10}
              >
                Continue
              </Button>
            </DialogFooter>
          </>
        )}

        {/* Step 2: OTP */}
        {step === 2 && (
          <>
            <DialogHeader>
              <DialogTitle>Enter OTP</DialogTitle>
              <DialogDescription>
                We have sent a 4 digit OTP to your number <b>{number}</b>
              </DialogDescription>
            </DialogHeader>
            <Input
              type='text'
              placeholder='Enter OTP'
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className='mt-4 tracking-[0.5em] text-center'
              maxLength={4}
            />
            <DialogFooter>
              <Button
                className='w-full bg-green-600 hover:bg-green-700'
                onClick={handleVerify}
                disabled={otp.length < 4}
              >
                Verify
              </Button>
            </DialogFooter>
            <p className='text-sm text-gray-500 mt-2 text-center cursor-pointer hover:underline'>
              Resend OTP
            </p>
          </>
        )}

        {/* Step 3: First Time User */}
        {step === 3 && (
          <>
            <DialogHeader>
              <DialogTitle>
                {name ? `Welcome, ${name} 👋` : 'Coming for the first time'}
              </DialogTitle>
              <DialogDescription>Enter your details</DialogDescription>
            </DialogHeader>
            <div className='space-y-3 mt-4'>
              <Input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type='text'
                value={number}
                readOnly
                className='bg-gray-100'
              />
              <Input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button
                className='w-full bg-red-500 hover:bg-red-600'
                onClick={handleFinalSubmit}
                disabled={!name || !email}
              >
                Continue
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
