import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-10 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-primary font-bold text-lg tracking-tight">
          Anthony Velho.
        </div>
        <div className="text-secondary text-sm">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;