import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-blue-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Expertos en Taxes a tu Servicio</h1>
            <p className="text-xl mb-8">Maximiza tu reembolso con nuestro servicio profesional de impuestos</p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600">
              Agenda tu Consulta
            </button>
          </div>
          <div className="flex justify-center">
            <Image src="/images/tax-services.jpg" alt="Tax Services" width={400} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}