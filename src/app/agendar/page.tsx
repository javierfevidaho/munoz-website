'use client';

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface Appointment {
  id: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: string;
}

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'personal',
  });

  // Generar horarios disponibles (9 AM - 6 PM)
  const generateTimeSlots = () => {
    const slots: string[] = [];
    for (let i = 9; i <= 18; i++) {
      slots.push(`${i.toString().padStart(2, '0')}:00`);
      if (i !== 18) slots.push(`${i.toString().padStart(2, '0')}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Fetch citas del servidor
  useEffect(() => {
    fetchAppointments();
  }, [selectedDate]);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('/api/appointments');
      if (!response.ok) {
        throw new Error('Error al cargar las citas.');
      }
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const isTimeSlotAvailable = (time: string) => {
    return !appointments.some(
      (apt) =>
        apt.date === selectedDate?.toISOString().split('T')[0] &&
        apt.time === time &&
        apt.status !== 'cancelled',
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Por favor selecciona una fecha y hora');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: selectedDate.toISOString().split('T')[0],
          time: selectedTime,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al agendar la cita.');
      }

      alert('¡Cita agendada exitosamente! Te contactaremos pronto para confirmar.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'personal',
      });
      setSelectedDate(null);
      setSelectedTime('');
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Ocurrió un error inesperado. Por favor, inténtalo de nuevo.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Agendar Cita</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 space-y-6">
          {/* Información Personal */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Información Personal</h2>
            <input
              type="text"
              name="name"
              placeholder="Nombre Completo"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Selección de Fecha */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Selecciona una Fecha</h2>
            <Calendar
              onChange={(value) => {
                if (value && !Array.isArray(value)) {
                  setSelectedDate(value); // Si es una fecha individual, asignarla
                } else if (Array.isArray(value) && value.length > 0) {
                  setSelectedDate(value[0]); // Si es un rango, toma la primera fecha
                } else {
                  setSelectedDate(null); // Si es null, asigna null
                }
              }}
              value={selectedDate}
              minDate={new Date()}
              className="border rounded-lg"
            />

          </div>

          {/* Selección de Hora */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Selecciona una Hora</h2>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  disabled={!isTimeSlotAvailable(time)}
                  className={`p-2 rounded-lg ${
                    selectedTime === time
                      ? 'bg-blue-500 text-white'
                      : isTimeSlotAvailable(time)
                      ? 'bg-gray-100 hover:bg-gray-200'
                      : 'bg-gray-300 cursor-not-allowed text-gray-500'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Tipo de Servicio */}
          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            >
              <option value="personal">Impuestos Personales</option>
              <option value="business">Impuestos Empresariales</option>
              <option value="consulting">Consultoría Fiscal</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading || !selectedDate || !selectedTime}
            className={`w-full py-3 rounded-lg text-white font-semibold ${
              isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading ? 'Agendando...' : 'Agendar Cita'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;
