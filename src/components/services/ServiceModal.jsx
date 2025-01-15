'use client';

import React from 'react';
import { X, ArrowRight } from 'lucide-react';

const ServiceModal = ({ service, onClose, onRequestService }) => {
  const Icon = service.icon;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {service.titulo}
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            {service.descripcion}
          </p>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Servicios Incluidos:
            </h3>
            <ul className="space-y-2">
              {service.detalles.map((detalle, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{detalle}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900">Precios Estimados:</h4>
              <p className="text-gray-600">{service.precios}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Tiempo Estimado:</h4>
              <p className="text-gray-600">{service.tiempo}</p>
            </div>
          </div>

          <button
            onClick={onRequestService}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors mt-4"
          >
            Solicitar Este Servicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;