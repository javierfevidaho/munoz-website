'use client';

import React from 'react';
import { Thermometer, Shield, Wrench, Phone, ArrowRight, Clock, MapPin } from 'lucide-react';

const ElegantACWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e3a8a] via-[#1e3a8a] to-[#172554]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Expertos en
                <span className="block text-red-100">
                  Climatización e Insulación
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Soluciones profesionales de aire acondicionado y aislamiento térmico 
                que transforman tu espacio en un ambiente perfecto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center group transition-all shadow-lg">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="bg-gray-700/50 hover:bg-gray-700/70 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center backdrop-blur-sm">
                  <Phone className="mr-2" />
                  Llamar Ahora
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="w-72 h-72 mx-auto bg-[#1e3a8a]/80 backdrop-blur-lg rounded-full flex items-center justify-center p-8 shadow-2xl ring-4 ring-gray-400/20">
                <div className="text-center">
                  <Thermometer className="w-20 h-20 mx-auto text-red-100 mb-4" />
                  <h2 className="text-2xl font-bold text-white">Muñoz A/C</h2>
                  <p className="text-gray-200 mt-2">Climatización Profesional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Ofrecemos soluciones integrales para todas tus necesidades de climatización
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 group hover:bg-gray-800/40 transition-all duration-300 hover:-translate-y-1 border border-gray-700/50">
            <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Thermometer className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Instalación y Mantenimiento
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Instalación profesional y servicio de mantenimiento para sistemas de aire acondicionado con garantía extendida.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 group hover:bg-gray-800/40 transition-all duration-300 hover:-translate-y-1 border border-gray-700/50">
            <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Insulación Térmica
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Soluciones de aislamiento térmico premium para maximizar la eficiencia energética de tu espacio.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 group hover:bg-gray-800/40 transition-all duration-300 hover:-translate-y-1 border border-gray-700/50">
            <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Reparación y Emergencias
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Servicio técnico especializado y atención de emergencias disponible 24/7 para tu tranquilidad.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-gray-900/50 to-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <Clock className="w-12 h-12 text-red-500" />
              <div>
                <h3 className="text-white font-bold">24/7 Disponible</h3>
                <p className="text-gray-300">Servicio de emergencia</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <Shield className="w-12 h-12 text-red-500" />
              <div>
                <h3 className="text-white font-bold">Garantía Total</h3>
                <p className="text-gray-300">En todos los servicios</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <MapPin className="w-12 h-12 text-red-500" />
              <div>
                <h3 className="text-white font-bold">Cobertura Local</h3>
                <p className="text-gray-300">Servicio en toda el área</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <Thermometer className="w-12 h-12 text-red-500" />
              <div>
                <h3 className="text-white font-bold">Expertos HVAC</h3>
                <p className="text-gray-300">Personal certificado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-700/50">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">¿Necesitas un servicio de climatización?</h2>
            <p className="text-gray-300 mb-8">Contáctanos hoy mismo para obtener una consulta gratuita</p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center group transition-all shadow-lg">
              Contactar Ahora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElegantACWebsite;