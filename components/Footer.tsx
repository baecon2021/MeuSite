import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Anthony Velho. Todos os direitos reservados.
        </div>
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#services" className="hover:text-cyan-400 transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfólio</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;