'use client'; // Add this line to ensure the component is rendered on the client side.

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js for navigation
import { Phone } from 'lucide-react';

export const CallSchedule = () => {
  return (
  <main className='w-full px-4 md:px-28 bg-gray-50 py-10 '>
      <div className="flex flex-col items-center justify-center py-8  bg-white shadow-lg rounded-xl">
      {/* Calling Logo */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 border border-[#c69240] rounded-full flex items-center justify-center text-white text-4xl">
          <Phone className='w-12 h-12 text-[#c69240]'/>
        </div>
      </div>

      {/* Main Text */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-6">
        Schedule a One-to-One Demo with Our Team
      </h2>
    
      {/* Contact Us Button */}
      <Link href="/contact-us">
        <button className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-all duration-300">
          Schedule a Call Back
        </button>
      </Link>
    </div>
  </main>
  );
};
