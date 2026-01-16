import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 group">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 animate-pulse group-hover:opacity-40 transition-opacity"></div>
                {/* Referenciando a imagem diretamente pelo caminho público */}
                <img 
                    src="/images/profile.jpg"
                    alt="Anthony Velho - Especialista em Web Design" 
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                    className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 bg-slate-800"
                />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Quem é Anthony Velho?</h2>
            <div className="prose prose-lg text-slate-400 text-base md:text-lg">
                <p className="mb-4">
                    Olá! Me chamo Anthony, tenho 17 anos e sou especialista em criação de <strong className="text-cyan-400">sites modernos, otimizados e de alta performance</strong>.
                </p>
                <p className="mb-4">
                    Minha missão é simples: democratizar o acesso a sites de nível internacional para empreendedores e empresas que querem crescer. Não entrego apenas código; entrego uma ferramenta de negócios.
                </p>
                <p className="mb-6">
                    Com foco total em design limpo (clean aesthetic) e integração com as tecnologias mais recentes de Inteligência Artificial, garanto que seu projeto não será apenas "mais um site", mas sim o seu melhor vendedor.
                </p>
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
                    <div className="border-l-4 border-blue-500 pl-4 text-left">
                        <span className="block font-bold text-white text-lg md:text-xl">100%</span>
                        <span className="text-xs md:text-sm text-slate-500">Compromisso com prazo</span>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 text-left">
                        <span className="block font-bold text-white text-lg md:text-xl">24/7</span>
                        <span className="text-xs md:text-sm text-slate-500">Seu site vendendo</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;