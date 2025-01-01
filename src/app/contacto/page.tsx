'use client';

import React from 'react';
import { Phone, Clock, MapPin, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const phoneNumber = "9862269662";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleWhatsAppClick();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ... resto del código sin cambios ... */}
    </div>
  );
};

export default ContactPage;