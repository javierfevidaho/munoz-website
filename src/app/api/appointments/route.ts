import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validar los datos de entrada
    if (!data.name || !data.email || !data.phone || !data.date || !data.time || !data.service) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados.' },
        { status: 400 }
      );
    }

    // Verificar si la fecha y hora ya están reservadas
    const existingAppointment = await prisma.appointment.findFirst({
      where: {
        date: new Date(data.date),
        time: data.time,
        status: {
          not: 'cancelled', // Solo permite citas canceladas en la misma fecha y hora
        },
      },
    });

    if (existingAppointment) {
      return NextResponse.json(
        { error: 'Esta fecha y hora ya están reservadas. Por favor, selecciona otro horario.' },
        { status: 400 }
      );
    }

    // Crear nueva cita
    const appointment = await prisma.appointment.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: new Date(data.date),
        time: data.time,
        service: data.service,
        message: data.message || '', // Mensaje opcional
        status: 'pending', // Estado inicial predeterminado
      },
    });

    // Mensaje de confirmación para WhatsApp
    const message = `Nueva cita:\nNombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone}\nFecha: ${new Date(data.date).toLocaleDateString()}\nHora: ${data.time}\nServicio: ${data.service}\nMensaje: ${data.message || 'N/A'}`;
    const whatsappUrl = `https://wa.me/9862269662?text=${encodeURIComponent(message)}`;

    return NextResponse.json({
      success: true,
      appointment,
      whatsappUrl,
    });
  } catch (error: unknown) {
    console.error('Error al crear la cita:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error al procesar tu solicitud. Inténtalo nuevamente más tarde.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: {
        date: 'asc',
      },
    });

    return NextResponse.json(appointments);
  } catch (error: unknown) {
    console.error('Error al obtener las citas:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error al obtener las citas. Inténtalo nuevamente más tarde.' },
      { status: 500 }
    );
  }
}
