'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <div className="text-primary-600 font-bold text-xl">G</div>
          </div>
          <span className="text-2xl font-bold">GEMTAX</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-primary-200">
            Inicio
          </Link>
          <Link href="/servicios" className="hover:text-primary-200">
            Servicios
          </Link>
          <Link href="/precios" className="hover:text-primary-200">
            Precios
          </Link>
          <Link href="/contacto" className="hover:text-primary-200">
            Contacto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-primary-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12' // Close Icon
                    : 'M4 6h16M4 12h16M4 18h16' // Hamburger Icon
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-700 text-white transition-all duration-300">
          <Link href="/" className="block px-4 py-2 hover:bg-primary-500">
            Inicio
          </Link>
          <Link href="/servicios" className="block px-4 py-2 hover:bg-primary-500">
            Servicios
          </Link>
          <Link href="/precios" className="block px-4 py-2 hover:bg-primary-500">
            Precios
          </Link>
          <Link href="/contacto" className="block px-4 py-2 hover:bg-primary-500">
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
