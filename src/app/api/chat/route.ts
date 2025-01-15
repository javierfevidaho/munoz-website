import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Sistema prompt como constante local
const SYSTEM_PROMPT = `Eres un asistente virtual experto en servicios de aire acondicionado e insulación que trabaja para Muñoz A/C & Insulations...`;

// Solo exportamos la función de la ruta
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