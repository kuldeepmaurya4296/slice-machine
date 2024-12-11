'use client'; // Ensures the component is rendered on the client side

import Image from 'next/image';
import React from 'react';

export const Production = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-12 bg-gray-50">
      {/* Logo inside a circle */}
      <div className="w-28 h-28 border border-[#c69240] rounded-full flex items-center justify-center mb-6">
        <Image width={100} height={100} src={'/uPVCnova.png'} alt='upvc nova logo' className='w-20 h-20'/> {/* You can replace this with your logo */}
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-6">
        Production Process
      </h2>

      {/* Annual Capacity & Years of Experience */}
      <div className="flex items-center justify-center gap-10 py-10">
        {/* Annual Capacity */}
        <div className="text-center w-[50%] md:pr-20">
          <p className="text-[40px] md:text-[100px] font-thin text-[#c6934080]">22000</p>
          <p className="text-lg md:text-2xl text-[#c69240] uppercase">MT ANNUAL PRODUCTION CAPACITY</p>
        </div>

        {/* Vertical Line */}
        <div className="border-l-2 h-32 md:h-48 border-gray-400"></div>

        {/* Years of Experience */}
        <div className="text-center w-[50%] md:pl-20">
          <p className="text-[40px] md:text-[100px] font-thin text-[#c6934080]">70+</p>
          <p className="text-lg md:text-2xl text-[#c69240] uppercase">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};
