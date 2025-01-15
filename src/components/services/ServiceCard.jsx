'use client';

import React from 'react';

const ServiceCard = ({ service, onClick }) => {
  const Icon = service.icon;

  return (
    <div
      onClick={() => onClick(service)}
      className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 group hover:bg-gray-800/40 transition-all duration-300 hover:-translate-y-1 border border-gray-700/50 cursor-pointer"
    >
      <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">
        {service.titulo}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {service.descripcion}
      </p>
    </div>
  );
};

export default ServiceCard;