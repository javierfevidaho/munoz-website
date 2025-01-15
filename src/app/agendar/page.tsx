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
  address: string; // Agregado para servicios de AC
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
    address: '', // Nuevo campo para dirección
    message: '',
    service: 'installation',
  });

  const generateTimeSlots = (date: Date | null) => {
    if (!date) return [];
    
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const isToday = date.toDateString() === currentDate.toDateString();
    
    const day = date.getDay();
    const isWeekend = day === 6; // Sábado
    const slots: string[] = [];
    
    const startHour = isWeekend ? 9 : 8; // 8 AM entre semana, 9 AM sábados
    const endHour = isWeekend ? 14 : 18; // 2 PM sábados, 6 PM entre semana
    
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
      alert('Por favor selecciona fecha y hora');
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
        throw new Error(error.error || 'Error al agendar la cita');
      }

      const result = await response.json();
      window.location.href = result.whatsappUrl;
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        service: 'installation',
      });
      setSelectedDate(null);
      setSelectedTime('');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Error inesperado');
    } finally {
      setIsLoading(false);
    }
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const day = date.getDay();
      if (day === 0) { // Domingo
        return 'text-red-500 bg-gray-100'; // Domingo no disponible
      } else if (day === 6) { // Sábado
        return 'text-blue-500'; // Sábado con horario especial
      }
      return 'text-black';
    }
    return '';
  };

  const tileDisabled = ({ date }: { date: Date }) => {
    return date.getDay() === 0; // Deshabilitar domingos
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Agendar Servicio</h1>
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
            <input
              type="text"
              name="address"
              placeholder="Dirección del Servicio"
              value={formData.address}
              onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Tipo de Servicio</h2>
            <select
              name="service"
              value={formData.service}
              onChange={e => setFormData({...formData, service: e.target.value})}
              required
              className="w-full border rounded-lg p-2"
            >
              <option value="installation">Instalación de A/C</option>
              <option value="maintenance">Mantenimiento Preventivo</option>
              <option value="repair">Reparación</option>
              <option value="insulation">Servicio de Insulación</option>
              <option value="emergency">Emergencia 24/7</option>
            </select>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Selecciona una Fecha</h2>
            <Calendar
              onChange={value => setSelectedDate(Array.isArray(value) ? value[0] : value)}
              value={selectedDate}
              minDate={new Date()}
              className="border rounded-lg"
              tileClassName={tileClassName}
              tileDisabled={tileDisabled}
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
                      ? 'bg-blue-500 text-white'
                      : isTimeSlotAvailable(time)
                      ? 'bg-gray-100 hover:bg-gray-200 text-black'
                      : 'bg-gray-300 cursor-not-allowed text-gray-500'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Descripción del Servicio</h2>
            <textarea
              name="message"
              placeholder="Describe brevemente el servicio que necesitas..."
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              required
              className="w-full border rounded-lg p-2 h-32"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !selectedDate || !selectedTime}
            className={`w-full py-3 rounded-lg text-white font-semibold ${
              isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading ? 'Procesando...' : 'Agendar Servicio'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;