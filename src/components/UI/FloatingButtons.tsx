import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your travel packages.');
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919876543210');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      <button
        onClick={handleWhatsApp}
        className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
      <button
        onClick={handleCall}
        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Call Us"
      >
        <Phone className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingButtons;