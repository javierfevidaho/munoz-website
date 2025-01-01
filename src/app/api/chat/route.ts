import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const SYSTEM_PROMPT = `Eres un asistente virtual experto en impuestos que trabaja para GEMTAX. 
Proporcionas información sobre servicios de impuestos, precios y agendamiento de citas.
Los servicios principales son:
- Declaración de impuestos personales (desde $150)
- Declaración de impuestos para negocios (desde $299)
- Consultoría fiscal (desde $499)
- Planificación fiscal
Horario de atención: Lunes a Viernes 9:00 AM - 6:00 PM, Sábados 10:00 AM - 2:00 PM
Para agendar citas, los clientes deben proporcionar nombre, teléfono y correo electrónico.

Responde de manera amigable y profesional. Si te preguntan sobre precios, menciona los rangos de precios y sugiere agendar una consulta para un presupuesto más preciso.
Si te preguntan sobre citas, pide la información necesaria (nombre, teléfono, correo) y sugiere los horarios disponibles.
Mantén las respuestas concisas pero informativas.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.error('Error en la API de chat:', error);
    return NextResponse.json(
      { error: 'Error al procesar tu mensaje' },
      { status: 500 }
    );
  }
}