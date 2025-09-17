'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { aboutData } from '@/data/data';

const Section4 = () => {
  return (
    <div className='flex flex-col'>
      {/* Banner */}
      <div className='relative w-full h-[300px] md:h-[450px]'>
        <Image
          src={aboutData.banner}
          alt={aboutData.title}
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
          <h1 className='text-3xl md:text-5xl font-bold text-white'>
            {aboutData.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className='max-w-full mx-auto lg:px-20 py-10 space-y-8'>
        <Card className='border-none'>
          <CardContent className='prose prose-gray max-w-none py-6'>
            <p className='text-[17px] '>{aboutData.intro}</p>

            {aboutData.sections.map((section, idx) => (
              <div key={idx}>
                <Separator className='my-6' />
                <h2 className='text-xl font-semibold'>{section.heading}</h2>
                {section.paragraphs.map((para, i) => (
                  <p
                    className='text-[17px] '
                    key={i}
                  >
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Section4;
