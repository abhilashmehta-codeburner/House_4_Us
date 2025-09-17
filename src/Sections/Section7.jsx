'use client';

import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const EMICalculator = () => {
  const [principal, setPrincipal] = useState(50000000); // ₹5 Cr
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(9.8);
  const [emi, setEmi] = useState(0);
  const [interest, setInterest] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [principal, years, rate]);

  const calculateEMI = () => {
    const monthlyRate = rate / 12 / 100;
    const n = years * 12;

    const emiCalc =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);

    const totalPayment = emiCalc * n;
    const totalInterest = totalPayment - principal;

    setEmi(Math.round(emiCalc));
    setInterest(Math.round(totalInterest));
  };

  const pieData = {
    labels: ['Principal Amount', 'Interest Amount'],
    datasets: [
      {
        data: [principal, interest],
        backgroundColor: ['#FF6B6B', '#4ECDC4'],
        hoverBackgroundColor: ['#FF8787', '#45B7AF'],
      },
    ],
  };

  return (
    <div className='max-w-5xl mt-10 mb-10 mx-auto p-6 bg-white shadow rounded-lg'>
      <h2 className='text-xl font-bold border-l-4 border-orange-500 pl-2 mb-6'>
        EMI Calculator
      </h2>

      <div className='grid md:grid-cols-2 gap-6'>
        {/* Left Inputs */}
        <div className='space-y-6'>
          {/* Loan Amount */}
          <div>
            <label className='flex justify-between font-medium'>
              Loan Amount (₹)
              <input
                type='number'
                value={principal}
                min={500000}
                max={100000000}
                step={100000}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className='w-40 border rounded px-2 py-1 text-right'
              />
            </label>
            <input
              type='range'
              min={500000}
              max={100000000}
              step={100000}
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className='w-full mt-2'
            />
            <div className='flex justify-between text-sm text-gray-500'>
              <span>5L</span>
              <span>10Cr</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div>
            <label className='flex justify-between font-medium'>
              Loan Tenure (Years)
              <input
                type='number'
                value={years}
                min={5}
                max={30}
                onChange={(e) => setYears(Number(e.target.value))}
                className='w-20 border rounded px-2 py-1 text-right'
              />
            </label>
            <input
              type='range'
              min={5}
              max={30}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className='w-full mt-2'
            />
            <div className='flex justify-between text-sm text-gray-500'>
              <span>5Y</span>
              <span>30Y</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className='flex justify-between font-medium'>
              Interest Rate (% p.a)
              <input
                type='number'
                value={rate}
                min={7}
                max={20}
                step={0.1}
                onChange={(e) => setRate(Number(e.target.value))}
                className='w-20 border rounded px-2 py-1 text-right'
              />
            </label>
            <input
              type='range'
              min={7}
              max={20}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className='w-full mt-2'
            />
            <div className='flex justify-between text-sm text-gray-500'>
              <span>7%</span>
              <span>20%</span>
            </div>
          </div>
        </div>

        {/* Right Result */}
        <div className='bg-green-50 p-6 rounded-lg text-center'>
          <p className='text-gray-600'>Your home loan EMI is</p>
          <h3 className='text-2xl font-bold text-green-700 mb-2'>
            ₹ {emi.toLocaleString('en-IN')} /-
          </h3>
          <div className='flex justify-between text-sm mb-4'>
            <p>
              Principal amount:{' '}
              <span className='font-semibold'>
                ₹ {principal.toLocaleString('en-IN')}
              </span>
            </p>
            <p>
              Interest amount:{' '}
              <span className='font-semibold'>
                ₹ {interest.toLocaleString('en-IN')}
              </span>
            </p>
          </div>
          <div className='w-56 mx-auto'>
            <Pie data={pieData} />
          </div>
        </div>
      </div>

      {/* Apply button */}
      <div className='mt-6 text-center'>
        <a
          href='/contact-us'
          className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg'
        >
          Apply loan now
        </a>
      </div>
    </div>
  );
};

export default EMICalculator;
