import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-blue-700 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Clima Perfecto, Todo el Año</h1>
            <p className="text-xl mb-8">
              Instalación y mantenimiento profesional de aires acondicionados e insulación para tu hogar o negocio.
            </p>
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600">
              Contáctanos Ahora
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/air-conditioning.jpg"
              alt="Servicios de Aire Acondicionado"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
