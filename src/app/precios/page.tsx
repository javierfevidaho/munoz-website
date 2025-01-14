'use client';

import React from 'react';
import Link from 'next/link';

const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Plan Básico",
      price: "$99",
      description: "Ideal para mantenimientos simples",
      features: [
        "Revisión general del sistema",
        "Limpieza de filtros",
        "Chequeo de refrigerante",
        "Diagnóstico básico",
        "Soporte por email"
      ]
    },
    {
      name: "Plan Premium",
      price: "$299",
      description: "Para mantenimientos completos",
      features: [
        "Todo del Plan Básico",
        "Limpieza profunda de ductos",
        "Ajuste de componentes",
        "Inspección detallada",
        "Prioridad en citas",
        "Soporte personalizado"
      ],
      highlighted: true
    },
    {
      name: "Plan Empresarial",
      price: "Desde $499",
      description: "Para instalaciones y mantenimiento empresarial",
      features: [
        "Todo del Plan Premium",
        "Instalación de sistemas centralizados",
        "Mantenimiento de sistemas comerciales",
        "Diagnóstico avanzado",
        "Soporte técnico continuo",
        "Consultas personalizadas"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Planes y Precios</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Soluciones de climatización e insulación adaptadas a tus necesidades
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.highlighted ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              <div className={`p-6 ${plan.highlighted ? 'bg-blue-500 text-white' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <p className="text-gray-500">{plan.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contacto"
                  className={`mt-8 block w-full text-center py-3 rounded-lg font-semibold ${
                    plan.highlighted 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-gray-800 text-white hover:bg-gray-900'
                  }`}
                >
                  Seleccionar Plan
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿Necesitas un plan personalizado? Contáctanos para una cotización a medida.
          </p>
          <Link
            href="/contacto"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-block"
          >
            Contactar Ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
