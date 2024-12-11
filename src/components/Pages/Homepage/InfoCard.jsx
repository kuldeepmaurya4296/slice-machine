'use client';  // Ensure this component is client-side rendered

import React from 'react';

// Reusable InfoCard Component with Default Props for content
export const InfoCard = ({ title,  content = [] }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Card Header with Icon */}
      <div className="flex items-center justify-between p-4 bg-[#bc8a3d] text-white">
        {/* Dynamically render the icon */}
        {/* <div className="text-white text-3xl">{icon}</div> */}
        <h2 className="font-bold text-lg text-center">{title}</h2>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <ul className="space-y-2">
          {content.length > 0 ? (
            content.map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                {item}
              </li>
            ))
          ) : (
            <li className="text-gray-700">No content available.</li>
          )}
        </ul>
      </div>
    </div>
  );
};
