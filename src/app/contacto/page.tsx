'use client';

import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Contáctanos</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Estamos aquí para ayudarte con todas tus necesidades fiscales
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <form
              onSubmit={(e) => e.preventDefault()} // Removido handleWhatsAppClick ya que no se usa
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
            <div className="space-y-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
                <p className="text-gray-600">(986) 226-9662</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Horario de Atención</h3>
                <p className="text-gray-600">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sábado: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
