'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Thermometer, Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-blue-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Thermometer className="w-7 h-7 text-white" />
            </div>
            <div className="transform transition-transform duration-300 group-hover:translate-x-1">
              <span className="text-xl font-bold block text-white">Muñoz A/C</span>
              <span className="text-sm text-gray-300">Climatización Profesional</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/', label: 'Inicio' },
              { href: '/servicios', label: 'Servicios' },
              { href: '/insulacion', label: 'Galería' },
              { href: '/emergencias', label: 'Emergencias' },
              { href: '/contacto', label: 'Contacto' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-white hover:text-red-100 transition-colors duration-300 group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
            <div className="ml-6 flex items-center space-x-4">
              <a
                href="tel:+19565212480"
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Llamar Ahora</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-800 backdrop-blur-lg">
          <div className="flex flex-col h-full pt-20 px-4">
            {[
              { href: '/', label: 'Inicio' },
              { href: '/servicios', label: 'Servicios' },
              { href: '/insulacion', label: 'Galería' },
              { href: '/emergencias', label: 'Emergencias' },
              { href: '/contacto', label: 'Contacto' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-4 text-lg text-white hover:text-red-100 transition-colors duration-300 border-b border-white/10"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+19565212480"
              className="mt-8 flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Llamar Ahora</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .menu-item-hover {
          position: relative;
          overflow: hidden;
        }

        .menu-item-hover::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: currentColor;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .menu-item-hover:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  );
};

export default Navigation;