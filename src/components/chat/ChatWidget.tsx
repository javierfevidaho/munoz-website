'use client';
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  
  return (
    <>
      {!chatOpen ? (
        <button 
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      ) : (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Asistente Virtual GEMTAX</h3>
            <button onClick={() => setChatOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="bg-blue-100 p-3 rounded-lg mb-2 max-w-[80%]">
              ¡Hola! Soy el asistente virtual de GEMTAX. ¿En qué puedo ayudarte?
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Escribe tu pregunta..." 
                className="flex-1 p-2 border rounded-lg"
              />
              <button className="bg-blue-600 text-white p-2 rounded-lg">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}