'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-md fixed w-full z-10 top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-white">
                <span className="font-bold">Goli Yeswanth</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {links.map((link) => (
                <Link key={link.name} href={link.href} className="py-5 px-3 text-gray-300 hover:text-white">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {/* Dark mode toggle placeholder */}
            <button className="py-2 px-3 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-md">
              Theme
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;