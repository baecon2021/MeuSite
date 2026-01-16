import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppBtn: React.FC = () => {
  return (
    <a
      href="https://wa.me/554792491544"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-semibold hidden group-hover:block pr-1">Falar Agora</span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </a>
  );
};

export default WhatsAppBtn;