// app/api/appointments/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validar campos requeridos
    if (!data.name || !data.email || !data.phone || !data.date || !data.time || !data.service) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios.' },
        { status: 400 }
      );
    }

    const dateObj = new Date(data.date);
    if (isNaN(dateObj.getTime())) {
      return NextResponse.json(
        { error: 'Fecha inválida.' },
        { status: 400 }
      );
    }

    // Verificar si ya existe una cita en el mismo horario
    const existing = await prisma.appointment.findFirst({
      where: {
        AND: {
          date: dateObj.toISOString(),
          time: data.time,
          status: { not: 'cancelled' },
        },
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Horario no disponible.' },
        { status: 409 }
      );
    }

    // Crear la cita en la base de datos
    const appointment = await prisma.appointment.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: dateObj.toISOString(),
        time: data.time,
        service: data.service,
        message: data.message || '',
        status: 'pending',
      },
    });

    // Enviar correo con Resend
    try {
      const emailResult = await resend.emails.send({
        from: 'Citas GemTax <no-reply@gemtaxexpert.com>',
        to: 'info@gemtaxexpert.com', // Cambiar por tu correo real
        subject: 'Nueva Cita Agendada',
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #2563eb;">Nueva Cita Agendada</h2>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
              <p><strong>Nombre:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Teléfono:</strong> ${data.phone}</p>
              <p><strong>Fecha:</strong> ${dateObj.toLocaleDateString()}</p>
              <p><strong>Hora:</strong> ${data.time}</p>
              <p><strong>Servicio:</strong> ${data.service}</p>
              ${data.message ? `<p><strong>Mensaje:</strong> ${data.message}</p>` : ''}
            </div>
          </div>
        `,
      });
      console.log('Correo enviado correctamente:', emailResult);
    } catch (emailError) {
      console.error('Error al enviar el correo:', emailError);
    }

    // Generar mensaje para WhatsApp
    const message = `Nueva cita:
📝 Nombre: ${data.name}
📧 Email: ${data.email}
📱 Tel: ${data.phone}
📅 Fecha: ${dateObj.toLocaleDateString()}
⏰ Hora: ${data.time}
💼 Servicio: ${data.service}
${data.message ? `💬 Mensaje: ${data.message}` : ''}`;

    return NextResponse.json({
      success: true,
      appointment,
      whatsappUrl: `https://wa.me/+19862269662?text=${encodeURIComponent(
        message
      )}`,
    });
  } catch (error) {
    console.error('Error en POST /api/appointments:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany({
      orderBy: [{ date: 'asc' }, { time: 'asc' }],
    });
    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Error en GET /api/appointments:', error);
    return NextResponse.json(
      { error: 'Error al obtener citas.' },
      { status: 500 }
    );
  }
}
