'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

interface TimeSlot {
  hour: string;
  available: boolean;
}

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'personal',
    message: ''
  });

  // Generar horarios disponibles (9 AM - 6 PM)
  const timeSlots: TimeSlot[] = Array.from({ length: 18 }, (_, i) => {
    const hour = Math.floor(i / 2) + 9;
    const minute = i % 2 === 0 ? '00' : '30';
    const timeString = `${hour.toString().padStart(2, '0')}:${minute}`;
    return {
      hour: timeString,
      available: true
    };
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    const message = `Nueva cita:\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nFecha: ${selectedDate.toLocaleDateString()}\nHora: ${selectedTime}\nServicio: ${formData.service}\nMensaje: ${formData.message}`;
    window.open(`https://wa.me/9862269662?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Agenda tu Cita</h1>
          <p className="text-xl text-center">
            Selecciona el día y hora que mejor te convenga
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Información Personal */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <User className="w-6 h-6" />
              Información Personal
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border rounded-lg"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border rounded-lg"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Teléfono</label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 border rounded-lg"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Tipo de Servicio</label>
                <select
                  className="w-full p-3 border rounded-lg"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="personal">Impuestos Personales</option>
                  <option value="business">Impuestos Empresariales</option>
                  <option value="consulting">Consultoría Fiscal</option>
                </select>
              </div>
            </div>
          </div>

          {/* Selección de Fecha */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Selecciona la Fecha
            </h2>
            <input
              type="date"
              className="w-full p-3 border rounded-lg"
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          {/* Selección de Hora */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6" />
              Selecciona la Hora
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.hour}
                  type="button"
                  className={`p-2 rounded-lg text-center transition-colors ${
                    selectedTime === slot.hour
                      ? 'bg-blue-600 text-white'
                      : slot.available
                      ? 'bg-gray-100 hover:bg-gray-200'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={() => slot.available && setSelectedTime(slot.hour)}
                  disabled={!slot.available}
                >
                  {slot.hour}
                </button>
              ))}
            </div>
          </div>

          {/* Mensaje Adicional */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              Mensaje Adicional
            </h2>
            <textarea
              className="w-full p-3 border rounded-lg"
              rows={4}
              placeholder="Describe brevemente tu situación o cualquier información adicional que debamos saber..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          {/* Botón de Envío */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Confirmar Cita
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;