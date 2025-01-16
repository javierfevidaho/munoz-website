import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Muñoz A/C & Insulations</h3>
            <p className="text-blue-200 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Servicios profesionales de climatización e insulación
            </p>
            <a 
              href="https://www.google.com/maps/place/10890+Red+I+Ranch+County+Rd,+Raymondville,+TX+78580/@26.4891209,-97.8321684,789m/data=!3m2!1e3!4b1!4m5!3m4!1s0x86658bd599c11215:0x8cf0a96bab7fa248!8m2!3d26.4891209!4d-97.8321684?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-200 hover:text-blue-100 flex items-start gap-2 mt-2 pl-6"
            >
              10890 Red I Ranch County Rd
              Raymondville Tx 78580<br />
              Weslaco, TX 78599
            </a>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="text-blue-200 space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@munozac.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (956)521-2480
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Horario de Servicio</h3>
            <div className="text-blue-200 space-y-2">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Lunes - Viernes: 8:00 AM - 6:00 PM
              </p>
              <p className="ml-6">Sábado: 9:00 AM - 2:00 PM</p>
              <p className="text-yellow-200">Servicio de emergencia 24/7</p>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Muñoz A/C & Insulations. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;