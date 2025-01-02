// src/app/api/appointments/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server'; // Usar NextRequest y NextResponse de 'next/server'

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

// Exportamos una configuración de API
export const config = {
  api: {
    bodyParser: true, // Asegura que el body de las solicitudes sea procesado
  },
};

// Handler para obtener la cita por ID
export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop();  // Acceder al parámetro 'id' de la URL
  
  if (!id) {
    return NextResponse.json({ message: 'ID de cita no proporcionado' }, { status: 400 });
  }

  try {
    const appointment = await getAppointmentById(id);
    return NextResponse.json(appointment);  // Usamos NextResponse.json() para la respuesta
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: `Error al obtener la cita: ${error.message}` }, { status: 500 });
    }
    return NextResponse.json({ message: 'Error desconocido al obtener la cita' }, { status: 500 });
  }
}

// Handler para actualizar el estado de la cita
export async function PATCH(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop();  // Acceder al parámetro 'id' de la URL
  const { status } = await req.json();  // Obtener el body de la solicitud
  
  if (!id) {
    return NextResponse.json({ message: 'ID de cita no proporcionado' }, { status: 400 });
  }

  try {
    const updatedAppointment = await updateAppointmentStatus(id, status);
    return NextResponse.json(updatedAppointment);  // Usamos NextResponse.json() para la respuesta
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: `Error al actualizar la cita: ${error.message}` }, { status: 500 });
    }
    return NextResponse.json({ message: 'Error desconocido al actualizar la cita' }, { status: 500 });
  }
}

// Función para obtener la cita por ID
async function getAppointmentById(id: string): Promise<Appointment> {
  return {
    id,
    date: '2025-01-02',
    time: '10:00',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '555-1234',
    service: 'Consulta',
    status: 'pending',
  };
}

// Función para actualizar el estado de la cita
async function updateAppointmentStatus(id: string, status: string): Promise<Appointment> {
  return {
    id,
    date: '2025-01-02',
    time: '10:00',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '555-1234',
    service: 'Consulta',
    status,
  };
}
