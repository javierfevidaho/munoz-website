'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Thermometer, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Thermometer className="w-8 h-8 text-blue-900" />
            </div>
            <div>
              <span className="text-xl font-bold block">Muñoz A/C</span>
              <span className="text-xs text-blue-200">& Insulations</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-blue-200 transition-colors">
              Inicio
            </Link>
            <Link href="/servicios" className="text-white hover:text-blue-200 transition-colors">
              Servicios
            </Link>
            <Link href="/insulacion" className="text-white hover:text-blue-200 transition-colors">
              Insulación
            </Link>
            <Link href="/emergencias" className="text-white hover:text-blue-200 transition-colors">
              Emergencias
            </Link>
            <Link href="/contacto" className="text-white hover:text-blue-200 transition-colors">
              Contacto
            </Link>
          </div>

          {/* Call to Action Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/presupuesto" 
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Solicitar Presupuesto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-200 focus:outline-none"
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
      {isOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="/servicios" 
              className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition-colors"
            >
              Servicios
            </Link>
            <Link 
              href="/insulacion" 
              className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition-colors"
            >
              Insulación
            </Link>
            <Link 
              href="/emergencias" 
              className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition-colors"
            >
              Emergencias
            </Link>
            <Link 
              href="/contacto" 
              className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition-colors"
            >
              Contacto
            </Link>
            <Link 
              href="/presupuesto" 
              className="block px-3 py-2 mt-4 text-center bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;