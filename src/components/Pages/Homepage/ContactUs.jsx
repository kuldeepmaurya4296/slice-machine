'use client'
import React, { useState } from 'react';

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


export const ContactUs = () => {
    const [selectedCity, setSelectedCity] = useState(citiesData[0]);

    const handleCityChange = (city) => {
        const cityData = citiesData.find(item => item.city === city);
        setSelectedCity(cityData);
    };

    return (
        <main className='px-4 md:px-6 lg:px-36 bg-gray-50'>


            <div className="flex flex-col md:flex-row py-6 md:px-8 bg-gray-50 shadow-lg rounded-lg gap-5">
                {/* Left Side: List of Cities */}
                <div className="md:w-auto md:pr-8 shadow-lg rounded-lg p-4 w-full">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3 md:mb-6">Cities</h2>
                    <ul className="md:space-y-4 h-fit md:w-fit md:justify-start flex flex-row md:flex-col items-center justify-start w-auto overflow-scroll md:overflow-hidden pb-4">
                        {citiesData.map((cityData) => (
                            <li
                                key={cityData.city}
                                className="cursor-pointer text-sm md:text-lg self-end md:self-start w-full mr-3"
                                onClick={() => handleCityChange(cityData.city)}
                            >

                                <button className="bg-[#c69240] w-full text-white text-nowrap py-3 px-4 md:px-8 rounded-lg hover:bg-green-700 transition-all duration-300">
                                    {cityData.city.length > 12 ? `${cityData.city.slice(0, 12)}...` : cityData.city}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side: Address and Google Map */}
                <div className="w-full md:w-4/5 shadow-lg rounded-lg p-4">
                    <div className="mb-8">
                        <h3 className="text-3xl font-semibold text-gray-800">{selectedCity.city}</h3>
                        <div className="text-lg text-gray-600 mt-2">
                            <p className="font-semibold text-gray-900">Address:</p>
                            <p className="text-xl text-gray-800">{selectedCity.address}</p>
                            <p className="mt-2 text-md text-gray-600">{selectedCity.description}</p>
                        </div>
                    </div>

                    {/* Google Maps iframe */}
                    <div className="w-full h-80">
                        <iframe
                            width="100%"
                            height="100%"
                            src={selectedCity.mapUrl}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
};
