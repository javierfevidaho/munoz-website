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
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'personal',
  });

  const generateTimeSlots = (date: Date | null) => {
    if (!date) return [];
    
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const isToday = date.toDateString() === currentDate.toDateString();
    
    const day = date.getDay();
    const isWeekend = day === 0 || day === 6;
    const slots: string[] = [];
    
    const startHour = isWeekend ? 10 : 9;
    const endHour = isWeekend ? 14 : 18;
    
    for (let hour = startHour; hour <= endHour; hour++) {
      const minuteOptions = ['00', '30'];
      for (const minute of minuteOptions) {
        if (isToday && (hour < currentHour || (hour === currentHour && parseInt(minute) <= currentMinutes))) {
          continue; 
        }
        slots.push(`${hour.toString().padStart(2, '0')}:${minute}`);
      }
     }
    
    return slots;
  };

  useEffect(() => {
    if (selectedDate) {
      setTimeSlots(generateTimeSlots(selectedDate));
      fetchAppointments();
    }
  }, [selectedDate]);

  const fetchAppointments = async () => {
    if (!selectedDate) return;
    try {
      const response = await fetch('/api/appointments');
      if (!response.ok) throw new Error('Error al cargar citas');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const isTimeSlotAvailable = (time: string) => {
    if (!selectedDate) return false;
    
    const now = new Date();
    const slotDate = new Date(selectedDate);
    const [hours, minutes] = time.split(':').map(Number);
    slotDate.setHours(hours, minutes, 0);
    
    if (slotDate < now) return false;

    return !appointments.some(
      apt => 
        apt.date === selectedDate.toISOString().split('T')[0] &&
        apt.time === time &&
        apt.status !== 'cancelled'
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Selecciona fecha y hora');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: selectedDate.toISOString().split('T')[0],
          time: selectedTime,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al agendar');
      }

      const result = await response.json();
      window.location.href = result.whatsappUrl;
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'personal',
      });
      setSelectedDate(null);
      setSelectedTime('');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Error inesperado');
    } finally {
      setIsLoading(false);
    }
  };

  // Lógica para cambiar el color de los días de la semana
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    // Solo modificar las celdas en el mes (view === 'month')
    if (view === 'month') {
      const day = date.getDay();
      if (day === 0 || day === 6) { // Domingo (0) y Sábado (6)
        return 'text-red-500'; // Red color for weekends
      } else {
        return 'text-black'; // Black color for weekdays
      }
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Agendar Cita</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Información Personal</h2>
            <input
              type="text"
              name="name"
              placeholder="Nombre Completo"
              value={formData.name}
              onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
              required
              className="w-full border rounded-lg p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
              required
              className="w-full border rounded-lg p-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Selecciona una Fecha</h2>
            <Calendar
              onChange={value => setSelectedDate(Array.isArray(value) ? value[0] : value)}
              value={selectedDate}
              minDate={new Date()}
              className="border rounded-lg"
              tileClassName={tileClassName} 
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Selecciona una Hora</h2>
            <div className="grid grid-cols-4 gap-2">
            {timeSlots.map(time => (
              <button
                key={time}
                type="button"
                onClick={() => setSelectedTime(time)}
                disabled={!isTimeSlotAvailable(time)}
                className={`p-2 rounded-lg ${
                  selectedTime === time
                    ? 'bg-blue-500 text-white' // Seleccionado
                    : isTimeSlotAvailable(time)
                    ? 'bg-gray-100 hover:bg-gray-200 text-black' // Disponible, texto negro
                    : 'bg-gray-300 cursor-not-allowed text-gray-500' // No disponible
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          </div>

          <select
            name="service"
            value={formData.service}
            onChange={e => setFormData({...formData, service: e.target.value})}
            required
            className="w-full border rounded-lg p-2"
          >
            <option value="personal">Impuestos Personales</option>
            <option value="business">Impuestos Empresariales</option>
            <option value="consulting">Consultoría Fiscal</option>
          </select>

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
