'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Thermometer, Shield, Wrench, Phone, ArrowRight, ArrowLeft, Clock, MapPin, Facebook, X, ImageIcon } from 'lucide-react';
import ChatWidget from './chat/ChatWidget';
import { useRouter } from 'next/navigation';

// Datos de los servicios
const SERVICIOS_INFO = {
  instalacion: {
    id: 'instalacion',
    titulo: "Instalación y Mantenimiento",
    descripcion: "Instalación profesional y servicio de mantenimiento para sistemas de aire acondicionado con garantía extendida.",
    detalles: [
      "Instalación de sistemas nuevos de aire acondicionado",
      "Mantenimiento preventivo regular",
      "Limpieza y sanitización de sistemas",
      "Verificación y recarga de refrigerante",
      "Inspección de ductos y componentes",
      "Calibración de termostatos",
      "Garantía extendida en todos los servicios",
      "Programación de mantenimiento periódico"
    ],
    icon: Thermometer,
    precios: "Desde $300 dependiendo del sistema",
    tiempo: "2-4 horas para instalación básica"
  },
  galeria: {
    id: 'galeria',
    titulo: "Galería de Trabajos",
    descripcion: "Explora nuestra galería de instalaciones y proyectos completados.",
    icon: ImageIcon
  },
  reparacion: {
    id: 'reparacion',
    titulo: "Reparación y Emergencias",
    descripcion: "Servicio técnico especializado y atención de emergencias disponible 24/7 para tu tranquilidad.",
    detalles: [
      "Servicio de emergencia 24/7",
      "Diagnóstico preciso del problema",
      "Reparación de todo tipo de sistemas",
      "Reemplazo de componentes",
      "Solución de problemas de refrigeración",
      "Reparación de ductos",
      "Servicio express disponible",
      "Garantía en reparaciones"
    ],
    icon: Wrench,
    precios: "Diagnóstico desde $85",
    tiempo: "Respuesta en menos de 2 horas para emergencias"
  }
};

// Componente principal
const ElegantACWebsite = () => {
  const router = useRouter();
  // Estados
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
    servicio: ''
  });

  // Manejadores de eventos
  const handleServiceClick = (serviceId) => {
    const service = SERVICIOS_INFO[serviceId];
    if (service) {
      if (service.id === 'galeria') {
        router.push('/insulacion');
      } else {
        setSelectedService(service);
        setIsServiceModalOpen(true);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setIsContactModalOpen(false);
    setFormData({ nombre: '', telefono: '', email: '', mensaje: '', servicio: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e3a8a] via-[#1e3a8a] to-[#172554]">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b-4 border-red-600/20">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-white leading-tight animate-fade-in">
                Expertos en
                <span className="block text-red-100">
                  Climatización e Instalación
                </span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                Soluciones profesionales de aire acondicionado y aislamiento térmico 
                que transforman tu espacio en un ambiente perfecto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center group transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                
                <a 
                  href="tel:+19565212480" 
                  className="bg-gray-700/50 hover:bg-gray-700/70 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Phone className="mr-2 group-hover:scale-110 transition-transform" />
                  Llamar Ahora
                </a>
              </div>
            </div>

            <div className="relative flex flex-col items-center">
              <div className="w-72 h-72 mx-auto overflow-hidden rounded-full shadow-2xl ring-4 ring-gray-400/20 transition-transform duration-300 hover:scale-105 hover:ring-red-400/30">
                <Image 
                  src="/images/ACWebPAge.jpg"
                  alt="Muñoz A/C Climatización Profesional"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>
              <div className="mt-6 flex items-center justify-center">
                <a 
                  href="https://www.facebook.com/munozacinsulations" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-300 group"
                >
                  <Facebook className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium">Visítanos en Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section with Frame */}
      <div className="border-t-4 border-b-4 border-red-600/20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para todas tus necesidades de climatización
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card Component - Instalación */}
            <div
              onClick={() => handleServiceClick('instalacion')}
              className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 group hover:bg-gray-800/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-700/50 cursor-pointer transform hover:scale-[1.02]"
            >
              <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Thermometer className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors duration-300">
                Instalación y Mantenimiento
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Instalación profesional y servicio de mantenimiento para sistemas de aire acondicionado con garantía extendida.
              </p>
            </div>

            {/* Card Component - Galería */}
            <div
              onClick={() => handleServiceClick('galeria')}
              className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 group hover:bg-gray-800/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-700/50 cursor-pointer transform hover:scale-[1.02]"
            >
              <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <ImageIcon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors duration-300">
                Galería de Trabajos
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Explora nuestra galería de instalaciones y proyectos completados para ver nuestro trabajo de calidad.
              </p>
            </div>

            {/* Card Component - Reparación */}
            <div
              onClick={() => handleServiceClick('reparacion')}
              className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 group hover:bg-gray-800/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-700/50 cursor-pointer transform hover:scale-[1.02]"
            >
              <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Wrench className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors duration-300">
                Reparación y Emergencias
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                Servicio técnico especializado y atención de emergencias disponible 24/7 para tu tranquilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
{/* Features Section */}
<div className="border-t-4 border-b-4 border-red-600/20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "24/7 Disponible", desc: "Servicio de emergencia" },
              { icon: Shield, title: "Garantía Total", desc: "En todos los servicios" },
              { icon: MapPin, title: "Cobertura Local", desc: "Servicio en toda el área" },
              { icon: Thermometer, title: "Expertos HVAC", desc: "Personal certificado" }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-center space-x-4 bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800/40 hover:shadow-lg hover:border-red-500/20 group"
              >
                <feature.icon className="w-12 h-12 text-red-500 transition-transform duration-300 group-hover:scale-110 group-hover:text-red-400" />
                <div>
                  <h3 className="text-white font-bold group-hover:text-red-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t-4 border-b-4 border-red-600/20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:border-red-500/20 hover:shadow-lg transform hover:scale-[1.01]">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Necesitas un servicio de climatización?
              </h2>
              <p className="text-gray-300 mb-8">
                Contáctanos hoy mismo para obtener una consulta gratuita
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center group transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  Contactar Ahora
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <a 
                  href="tel:+19565212480"
                  className="bg-gray-700/50 hover:bg-gray-700/70 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center group transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  <Phone className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Llamar: (956) 521-2480
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-4 border-red-600/20 bg-gray-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 p-3 rounded-full">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Muñoz A/C</h3>
                <p className="text-gray-300">Climatización Profesional</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://www.facebook.com/munozacinsulations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="tel:+19565212480"
                className="text-white hover:text-red-400 transition-colors duration-300"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a 
                href="https://www.google.com/maps?q=3825+E+Expressway+83+Weslaco+TX+78599"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-colors duration-300"
              >
                <MapPin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Muñoz A/C. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
{/* Service Details Modal */}
{isServiceModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto animate-modal-slide-up">
            <button
              onClick={() => {
                setIsServiceModalOpen(false);
                setSelectedService(null);
              }}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <X className="w-6 h-6 transform hover:rotate-90 transition-transform duration-300" />
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group">
                {React.createElement(selectedService.icon, { 
                  className: "w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" 
                })}
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedService.titulo}
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                {selectedService.descripcion}
              </p>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Servicios Incluidos:
                </h3>
                <ul className="space-y-2">
                  {selectedService.detalles.map((detalle, index) => (
                    <li 
                      key={index} 
                      className="flex items-start group hover:bg-red-50 p-2 rounded-lg transition-colors duration-200"
                    >
                      <ArrowRight className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-200" />
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                        {detalle}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="hover:bg-red-50 p-3 rounded-lg transition-colors duration-200">
                  <h4 className="font-semibold text-gray-900">Precios Estimados:</h4>
                  <p className="text-gray-600">{selectedService.precios}</p>
                </div>
                <div className="hover:bg-red-50 p-3 rounded-lg transition-colors duration-200">
                  <h4 className="font-semibold text-gray-900">Tiempo Estimado:</h4>
                  <p className="text-gray-600">{selectedService.tiempo}</p>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsServiceModalOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Solicitar Este Servicio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-modal-slide-up">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <X className="w-6 h-6 transform hover:rotate-90 transition-transform duration-300" />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Solicitar Presupuesto
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="transform transition-all duration-200 hover:translate-x-1">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                />
              </div>
              
              <div className="transform transition-all duration-200 hover:translate-x-1">
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                />
              </div>
              
              <div className="transform transition-all duration-200 hover:translate-x-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                />
              </div>

              <div className="transform transition-all duration-200 hover:translate-x-1">
                <label htmlFor="servicio" className="block text-sm font-medium text-gray-700">
                  Servicio de Interés
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                >
                  <option value="">Selecciona un servicio</option>
                  {Object.values(SERVICIOS_INFO)
                    .filter(service => service.id !== 'galeria')
                    .map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.titulo}
                      </option>
                    ))}
                </select>
              </div>
              
              <div className="transform transition-all duration-200 hover:translate-x-1">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-red-500 transition-colors duration-200"
                  placeholder="Describe el servicio que necesitas..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      )}
      
      {/* Chat Widget */}
      <ChatWidget />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-modal-slide-up {
          animation: modalSlideUp 0.3s ease-out forwards;
        }

        .max-h-[90vh] {
          scrollbar-width: thin;
          scrollbar-color: #E5E7EB transparent;
        }

        .max-h-[90vh]::-webkit-scrollbar {
          width: 6px;
        }

        .max-h-[90vh]::-webkit-scrollbar-track {
          background: transparent;
        }

        .max-h-[90vh]::-webkit-scrollbar-thumb {
          background-color: #E5E7EB;
          border-radius: 3px;
        }

        input:focus, textarea:focus, select:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
        }

        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientBG 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default ElegantACWebsite;