'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calculator, FileText, Calendar, DollarSign, PieChart, Users, Building, Briefcase, Shield } from 'lucide-react';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: <Calculator className="w-12 h-12 text-blue-600" />,
      title: "Declaración de Impuestos Personales",
      description: "Maximiza tu devolución con nuestro servicio experto de declaración de impuestos personales. Manejamos W-2, 1099s, y todas las deducciones posibles.",
      price: "Desde $150",
      features: [
        "Declaraciones federales y estatales",
        "Revisión de deducciones",
        "Asesoría personalizada",
        "Presentación electrónica"
      ]
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: "Impuestos Empresariales",
      description: "Servicios completos de impuestos para negocios de todos los tamaños. Desde pequeñas empresas hasta corporaciones.",
      price: "Desde $299",
      features: [
        "Declaraciones corporativas",
        "Schedule C para autónomos",
        "Planificación fiscal",
        "Reportes trimestrales"
      ]
    },
    {
      icon: <PieChart className="w-12 h-12 text-blue-600" />,
      title: "Consultoría Fiscal",
      description: "Asesoramiento estratégico para optimizar tu situación fiscal y maximizar tus beneficios a largo plazo.",
      price: "Desde $499",
      features: [
        "Análisis fiscal completo",
        "Estrategias de ahorro",
        "Planificación anual",
        "Consultas ilimitadas"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Nómina y Empleados",
      description: "Gestión completa de nómina y impuestos relacionados con empleados."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Contabilidad Empresarial",
      description: "Servicios contables mensuales y anuales para mantener tu negocio al día."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Representación ante el IRS",
      description: "Te representamos ante el IRS en caso de auditorías o disputas fiscales."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Nuestros Servicios</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Soluciones fiscales integrales para individuos y empresas
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-blue-600 font-bold text-xl mb-4">{service.price}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contacto" 
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Solicitar Servicio
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Servicios Adicionales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda con tus impuestos?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a maximizar tus beneficios fiscales
          </p>
          <Link 
            href="/contacto"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-block transition-colors"
          >
            Agendar Consulta Gratuita
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;