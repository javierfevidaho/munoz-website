import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const appointment = await prisma.appointment.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: new Date(data.date),
        time: data.time,
        service: data.service,
        message: data.message
      }
    });

    const message = `Nueva cita:\nNombre: ${data.name}\nEmail: ${data.email}\nTeléfono: ${data.phone}\nFecha: ${new Date(data.date).toLocaleDateString()}\nHora: ${data.time}\nServicio: ${data.service}\nMensaje: ${data.message}`;
    
    return NextResponse.json({ 
      success: true, 
      appointment,
      whatsappUrl: `https://wa.me/9862269662?text=${encodeURIComponent(message)}`
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Error al crear la cita' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: {
        date: 'asc'
      }
    });
    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Error al obtener las citas' },
      { status: 500 }
    );
  }
}