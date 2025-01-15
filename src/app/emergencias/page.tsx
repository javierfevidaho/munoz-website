'use client';

import React from 'react';
import { Phone, Clock, Shield, Wrench, AlertTriangle, ArrowRight } from 'lucide-react';

const EmergencyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e3a8a] via-[#1e3a8a] to-[#172554]">
      {/* Hero Emergency Section */}
      <div className="relative overflow-hidden border-b-4 border-red-600/20 pt-20">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Servicio de Emergencia 24/7
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Estamos disponibles las 24 horas del día, los 7 días de la semana para atender cualquier emergencia de climatización.
            </p>
            <a
              href="tel:+19565212480"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Phone className="w-6 h-6 mr-2" />
              Llamar: (956) 521-2480
            </a>
          </div>
        </div>
      </div>

      {/* Emergency Services */}
      <div className="border-b-4 border-red-600/20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Servicios de Emergencia
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Respuesta Rápida",
                description: "Atendemos tu emergencia en menos de 2 horas para restaurar tu comodidad lo antes posible."
              },
              {
                icon: Wrench,
                title: "Reparación Inmediata",
                description: "Diagnosticamos y reparamos el problema en el momento, con las herramientas y repuestos necesarios."
              },
              {
                icon: Shield,
                title: "Servicio Garantizado",
                description: "Todas nuestras reparaciones de emergencia están respaldadas por nuestra garantía de servicio."
              },
              {
                icon: AlertTriangle,
                title: "Diagnóstico Experto",
                description: "Técnicos certificados que identifican y resuelven el problema de raíz."
              },
              {
                icon: Phone,
                title: "Atención 24/7",
                description: "Disponibles a cualquier hora, cualquier día, incluyendo fines de semana y festivos."
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 group hover:bg-gray-800/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-700/50"
              >
                <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  {React.createElement(service.icon, { 
                    className: "w-8 h-8 text-white" 
                  })}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Contact Section */}
      <div className="bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-700/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  ¿Tienes una emergencia?
                </h2>
                <p className="text-gray-300 mb-8">
                  No esperes más. Contáctanos ahora y recibirás atención inmediata de nuestro equipo de expertos.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white">
                    <div className="bg-red-600/20 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Llámanos al</p>
                      <p className="font-semibold">(956) 521-2480</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="bg-red-600/20 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Horario de Emergencias</p>
                      <p className="font-semibold">24 horas / 7 días</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">
                  Solicitar Servicio de Emergencia
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <textarea
                    placeholder="Describe la emergencia"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center group"
                  >
                    Enviar Solicitud
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;