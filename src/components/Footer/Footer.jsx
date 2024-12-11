import React from 'react';
import Link from 'next/link'; // Correct import for Next.js
import Image from 'next/image';

const citiesData = [
  {
    city: "Bhopal",
    address: "Bhopal, Madhya Pradesh",
    description: "",
    mapUrl: "https://www.google.com/maps?q=Bhopal,+Madhya+Pradesh&output=embed"
  },
  {
    city: "Indore",
    address: "Indore, Madhya Pradesh",
    description: "",
    mapUrl: "https://www.google.com/maps?q=Indore,+Madhya+Pradesh&output=embed"
  },
  {
    city: "Jabalpur",
    address: "Jabalpur, Madhya Pradesh",
    description: "",
    mapUrl: "https://www.google.com/maps?q=Jabalpur,+Madhya+Pradesh&output=embed"
  },
  {
    city: "Raipur",
    address: "Raipur, Chhattisgarh",
    description: "",
    mapUrl: "https://www.google.com/maps?q=Raipur,+Chhattisgarh&output=embed"
  }
];


export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5 md:py-12  relative">
       <Link href="/" className='w-full  md:hidden'>
              <Image
                src="/uPVCnova.png"
                width={100}
                height={100}
                alt="nova logo"
                className="bg-white p-1 w-12 self-center  rounded-lg m-auto mb-6"
              />
            </Link>
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-2  md:grid-cols-4 gap-8">
        {/* First Column: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-3 uppercase">
            <li>
              <Link href="/" className="text-hover">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-hover">
                About Us
              </Link>
            </li>
            <li><Link href="/why-nova" className="text-hover">Why Us</Link></li>

            <li>
              <Link href="/windows" className="text-hover">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-hover">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/brochure" className="text-hover">
                Brochure
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-hover">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Second Column: Cities */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            {citiesData.map((city, index) => (
              <Link href={city.mapUrl} target="_blank" rel="noopener noreferrer" key={index}>
                <li key={index} className="text-gray-400 hover:tracking-widest hover:text-gray-50 transition-all duration-300 ease-in-out text-lg">
                  {city.city}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Third Column: Additional Contact Cities */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Networks</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="https://facebook.com"
                className="text-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                className="text-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                className="text-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com"
                className="text-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        {/* Fourth Column: Social Networks */}
        <div>
          <div className="flex items-center flex-col gap-6 text-white justify-center">
            {/* Calling Logo */}
            <Link href="/" className='hidden md:block'>
              <Image
                src="/uPVCnova.png"
                width={100}
                height={100}
                alt="nova logo"
                className="bg-white p-1 w-20  rounded-lg"
              />
            </Link>

            {/* Contact Details */}
            <p className=" mb-2">
              <span className="font-medium">Email: </span>
              <a href="mailto:novaupvc@gmail.com" className=" hover:text-[#c69240]">
                novaupvc@gmail.com
              </a>
            </p>
            <p className=" mb-2">
              <p className="">
                Phone: <Link href="tel:+91 9826057359" className=" hover:text-[#c69240]">+91 9826057359</Link>
              </p>
            </p>


          </div>
        </div>


      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-12 border-t border-gray-700 pt-6">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()}
          <Link href='https://www.flourishersedge.com/'
            className="text-hover"
          > Flourishers Edge</Link>.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
