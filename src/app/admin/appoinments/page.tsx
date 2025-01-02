// src/app/admin/appointments/page.tsx

'use client';

import React, { useEffect, useState } from 'react';

interface Appointment {
  id: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  status: string;
}

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAppointments = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/appointments');
      if (!response.ok) {
        throw new Error('Error al cargar las citas.');
      }
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setError('No se pudieron cargar las citas. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/appointments/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la cita.');
      }

      // Eliminar la variable `updatedAppointment` si no la necesitas
      await response.json(); // Solo realizamos la operación sin asignar el resultado
      setAppointments((prev) =>
        prev.map((appointment) =>
          appointment.id === id ? { ...appointment, status: newStatus } : appointment
        )
      );
    } catch (error) {
      console.error('Error updating appointment:', error);
      alert('Error al actualizar el estado de la cita.');
    }
  };

  if (loading) {
    return <div>Cargando citas...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Administrar Citas</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.time} - {appointment.name} - {appointment.status}
            <button onClick={() => handleStatusChange(appointment.id, 'confirmed')} disabled={appointment.status === 'confirmed'}>
              {appointment.status === 'confirmed' ? 'Confirmada' : 'Confirmar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminAppointments;
