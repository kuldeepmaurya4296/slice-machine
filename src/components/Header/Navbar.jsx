'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import TopHeader from './TopHeader';
import { MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import Link from 'next/link';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sidebarRef = useRef(null);

    const pathname = usePathname(); // Get current pathname

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
                setLastScrollY(currentScrollY);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 1024);
            };

            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const isAtTop = typeof window !== 'undefined' && lastScrollY < window.innerHeight;

    const isActive = (route) => pathname === route ? 'text-[#c69240]' : 'text-white'; // Highlight active route

    return (
        <nav className="overflow-x-hidden">
            <AnimatePresence>
                {!isMobile && isAtTop && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <TopHeader />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.nav
                className={`fixed top-0 w-full z-50 bg-gray-800 uppercase ${isMobile ? 'top-0 py-3' : ''} ${
                    isAtTop ? (isMobile ? 'top-0 py-3' : 'top-20') : 'top-0'
                }`}
                initial={{ y: 0 }}
                animate={{
                    y: scrollDirection === 'down' ? '-100%' : '0',
                    transition: { duration: 0.4 },
                }}
            >
                <div className="w-full flex items-center justify-between px-4 lg:px-8 lg:py-4 max-w-full overflow-x-hidden">
                    {!(!isMobile && isAtTop) && (
                        <div className="text-white font-bold text-lg w-[20%]">
                            <Link href="/">
                                <Image
                                    src="/uPVCnova.png"
                                    width={100}
                                    height={100}
                                    alt="nova logo"
                                    className="bg-white p-1 w-10  rounded-lg"
                                />
                            </Link>
                        </div>
                    )}

                    {!isMobile && (
                        <div
                            className={`${
                                isAtTop ? 'w-full' : 'w-[80%]'
                            } flex text-lg items-center justify-center`}
                        >
                            <ul className="w-auto flex justify-between gap-12 text-white">
                                <li><Link href="/" className={`text-hover ${isActive('/')}`}>Home</Link></li>
                                <li><Link href="/about-us" className={`text-hover ${isActive('/about-us')}`}>About Us</Link></li>
                                <li><Link href="/why-nova" className={`text-hover ${isActive('/why-nova')}`}>Why Us</Link></li>
                                <li><Link href="/windows" className={`text-hover ${isActive('/windows')}`}>Windows</Link></li>
                                <li><Link href="/doors" className={`text-hover ${isActive('/doors')}`}>Doors</Link></li>
                                <li><Link href="/brochure" className={`text-hover ${isActive('/brochure')}`}>Brochure</Link></li>
                                <li><Link href="/contact-us" className={`text-hover ${isActive('/contact-us')}`}>Contact Us</Link></li>
                            </ul>
                        </div>
                    )}

                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-white focus:outline-none text-xl"
                    >
                        {isOpen ? 'Close' : <MenuIcon className='w-10 h-10' />}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && isMobile && (
                        <motion.div
                            ref={sidebarRef}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-2/3  bg-gray-800 text-white z-40 p-6 shadow-lg overflow-y-auto"
                        >
                            <button
                                onClick={toggleMenu}
                                className="text-white text-xl mb-6 focus:outline-none"
                            >
                                ✕
                            </button>
                            <ul className="flex flex-col space-y-6">
                                <li><Link href="/" onClick={toggleMenu} className={isActive('/')}>Home</Link></li>
                                <li><Link href="/about-us" onClick={toggleMenu} className={isActive('/about-us')}>About Us</Link></li>
                                <li><Link href="/why-nova" onClick={toggleMenu} className={isActive('/why-nova')}>Why Us</Link></li>
                                <li><Link href="/windows" onClick={toggleMenu} className={isActive('/windows')}>Windows</Link></li>
                                <li><Link href="/doors" onClick={toggleMenu} className={isActive('/doors')}>Doors</Link></li>
                                <li><Link href="/brochure" onClick={toggleMenu} className={isActive('/brochure')}>Brochure</Link></li>
                                <li><Link href="/contact-us" onClick={toggleMenu} className={isActive('/contact-us')}>Contact Us</Link></li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </nav>
    );
};
