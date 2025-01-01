// app/api/appointments/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
 try {
   const data = await req.json();
   const dateStr = new Date(data.date).toISOString();

   const existing = await prisma.appointment.findFirst({
     where: {
       AND: {
         date: dateStr,
         time: data.time,
         status: { not: 'cancelled' }
       }
     }
   });

   if (existing) {
     return NextResponse.json({ error: 'Horario no disponible' }, { status: 409 });
   }

   const appointment = await prisma.appointment.create({
     data: {
       name: data.name,
       email: data.email,
       phone: data.phone,
       date: dateStr,
       time: data.time,
       service: data.service,
       message: data.message || '',
       status: 'pending'
     }
   });

   try {
     const emailResult = await resend.emails.send({
       from: 'Citas GemTax <no-reply@gemtaxexpert.com>',
       to: 'info@gemtaxexpert.com',
       subject: 'Nueva Cita Agendada',
       html: `
         <div style="font-family: Arial, sans-serif; padding: 20px;">
           <h2 style="color: #2563eb;">Nueva Cita Agendada</h2>
           <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
             <p><strong>Nombre:</strong> ${data.name}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Teléfono:</strong> ${data.phone}</p>
             <p><strong>Fecha:</strong> ${new Date(dateStr).toLocaleDateString()}</p>
             <p><strong>Hora:</strong> ${data.time}</p>
             <p><strong>Servicio:</strong> ${data.service}</p>
             ${data.message ? `<p><strong>Mensaje:</strong> ${data.message}</p>` : ''}
           </div>
         </div>
       `
     });
     console.log('Email sent:', emailResult);
   } catch (emailError) {
     console.error('Email error:', emailError);
   }

   const message = `Nueva cita:
📝 Nombre: ${data.name}
📧 Email: ${data.email}
📱 Tel: ${data.phone}
📅 Fecha: ${new Date(dateStr).toLocaleDateString()}
⏰ Hora: ${data.time}
💼 Servicio: ${data.service}
${data.message ? `💬 Mensaje: ${data.message}` : ''}`;

   return NextResponse.json({
     success: true,
     appointment,
     whatsappUrl: `https://wa.me/+19862269662?text=${encodeURIComponent(message)}`
   });

 } catch (error) {
   console.error('Error:', error);
   return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
 }
}

export async function GET() {
 try {
   const appointments = await prisma.appointment.findMany({
     orderBy: [
       { date: 'asc' },
       { time: 'asc' }
     ]
   });
   return NextResponse.json(appointments);
 } catch (error) {
   console.error('Error:', error);
   return NextResponse.json({ error: 'Error al obtener citas' }, { status: 500 });
 }
}