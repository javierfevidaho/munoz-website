import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <div className="text-blue-900 font-bold text-xl">G</div>
          </div>
          <span className="text-2xl font-bold">GEMTAX</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-200">Inicio</Link>
          <Link href="/servicios" className="hover:text-blue-200">Servicios</Link>
          <Link href="/precios" className="hover:text-blue-200">Precios</Link>
          <Link href="/contacto" className="hover:text-blue-200">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}