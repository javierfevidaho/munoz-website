'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calculator, Calendar, FileText } from 'lucide-react';
import ChatWidget from './chat/ChatWidget';

const TaxWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="text-blue-900 font-bold text-xl">G</div>
            </div>
            <span className="text-2xl font-bold">GEMTAX</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200">
              Inicio
            </Link>
            <Link href="/servicios" className="hover:text-blue-200">
              Servicios
            </Link>
            <Link href="/precios" className="hover:text-blue-200">
              Precios
            </Link>
            <Link href="/contacto" className="hover:text-blue-200">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Expertos en Taxes a tu Servicio
              </h1>
              <p className="text-xl mb-8">
                Maximiza tu reembolso con nuestro servicio profesional de impuestos
              </p>
              <button 
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
                onClick={() => window.location.href = '/contacto'}
              >
                Agenda tu Consulta
              </button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[400px] h-[300px]">
                <Image 
                  src="/images/tax-services.jpg" 
                  alt="Servicios de Impuestos" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105">
            <Calculator className="w-12 h-12 text-blue-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Declaración de Impuestos
            </h3>
            <p className="text-gray-600">
              Personal y empresarial con máxima devolución garantizada
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105">
            <FileText className="w-12 h-12 text-blue-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Planificación Fiscal
            </h3>
            <p className="text-gray-600">
              Estrategias personalizadas para optimizar tus impuestos
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105">
            <Calendar className="w-12 h-12 text-blue-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Consultoría Continua
            </h3>
            <p className="text-gray-600">
              Asesoramiento durante todo el año
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contáctanos hoy mismo para una consulta gratuita
            </p>
            <button 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              onClick={() => window.location.href = '/contacto'}
            >
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">GEMTAX</h3>
              <p className="text-blue-200">
                Expertos en servicios de impuestos y asesoría fiscal
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              <p className="text-blue-200">
                Email: info@gemtaxexpert.com<br />
                Tel: (555) 123-4567
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Horario</h3>
              <p className="text-blue-200">
                Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                Sábado: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} GEMTAX. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default TaxWebsite;