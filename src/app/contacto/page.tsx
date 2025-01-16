'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

const PromoSection = () => {
  const phoneNumber = "9565212480";
  
  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleAddressClick = () => {
    window.open('https://www.google.com/maps/place/10890+Red+I+Ranch+County+Rd,+Raymondville,+TX+78580/@26.4891209,-97.8321684,789m/data=!3m2!1e3!4b1!4m5!3m4!1s0x86658bd599c11215:0x8cf0a96bab7fa248!8m2!3d26.4891209!4d-97.8321684?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <div className="bg-blue-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">🔥 No sufras de calor en esta temporada 🔥</h2>
        <p className="text-lg mb-6">
          Llámanos y te daremos la mejor opción para tu 🏡 ❄️ 
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-lg font-medium mb-6">
          <span className="bg-white text-blue-700 px-4 py-2 rounded-lg shadow-md">❄️ Free estimates</span>
          <span className="bg-white text-blue-700 px-4 py-2 rounded-lg shadow-md">❄️ Sales</span>
          <span className="bg-white text-blue-700 px-4 py-2 rounded-lg shadow-md">❄️ Installation</span>
          <span className="bg-white text-blue-700 px-4 py-2 rounded-lg shadow-md">❄️ Service</span>
        </div>
        <p className="text-lg mb-6">
          El mejor servicio y calidad en equipos de aire central y mini-split.
        </p>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleCallClick}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            ☎️ Llámanos al (956) 521-2480
          </button>
          <button
            onClick={handleAddressClick}
            className="flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
          >
            <MapPin className="w-5 h-5" />
            10890 Red I Ranch County Rd
            Raymondville Tx
            78580
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;