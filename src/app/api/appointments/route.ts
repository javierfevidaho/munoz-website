import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validación de campos
    const requiredFields = ['name', 'email', 'phone', 'date', 'time', 'service'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Campos requeridos faltantes: ' + missingFields.join(', ') },
        { status: 400 }
      );
    }

    // Verificar disponibilidad
    const existingAppointment = await prisma.appointment.findFirst({
      where: {
        AND: [
          { date: data.date },
          { time: data.time },
          { status: { not: 'cancelled' } }
        ]
      }
    });

    if (existingAppointment) {
      return NextResponse.json(
        { error: 'Horario no disponible' },
        { status: 409 }
      );
    }

    // Crear cita
    const appointment = await prisma.appointment.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: data.date,
        time: data.time,
        service: data.service,
        message: data.message ?? '',
        status: 'pending'
      }
    });

    // Mensaje WhatsApp
    const message = `Nueva cita:
Nombre: ${data.name}
Email: ${data.email}
Tel: ${data.phone}
Fecha: ${new Date(data.date).toLocaleDateString()}
Hora: ${data.time}
Servicio: ${data.service}
${data.message ? `Mensaje: ${data.message}` : ''}`;

    return NextResponse.json({
      appointment,
      whatsappUrl: `https://wa.me/9862269662?text=${encodeURIComponent(message)}`
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: { date: 'asc' },
      where: { status: { not: 'cancelled' } }
    });

    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error al obtener citas' },
      { status: 500 }
    );
  }
}