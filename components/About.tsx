import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-navy-950 border-t border-white/5 relative content-visibility-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-navy-900 rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-600/5 blur-[60px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 relative z-10">
            
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-700"></div>
                    
                    <img 
                        src="https://lh3.googleusercontent.com/d/1B_lFIE4L-vBrX6Yqqi7BiIhOCgJtxJMu"
                        alt="Anthony Velho - Especialista em Web Design" 
                        width="300"
                        height="300"
                        loading="lazy"
                        decoding="async"
                        className="relative w-full h-full object-cover rounded-full border-4 border-navy-900 shadow-2xl transition-all duration-500"
                    />
                </div>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quem é Anthony Velho?</h2>
                
                <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                    <p>
                        Olá! Me chamo Anthony, e sou especialista em criação de <strong className="text-cyan-400 font-medium">sites modernos, otimizados e de alta performance</strong>.
                    </p>
                    <p>
                        Minha missão é simples: democratizar o acesso a sites de nível internacional para empreendedores e empresas que querem crescer. Não entrego apenas código; entrego uma ferramenta de negócios.
                    </p>
                    <p>
                        Com foco total em design limpo (clean aesthetic) e integração com as tecnologias mais recentes de Inteligência Artificial, garanto que seu projeto não será apenas "mais um site", mas sim o seu melhor vendedor.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8 border-t border-white/10 pt-6 max-w-sm mx-auto md:mx-0">
                    <div className="border-l-4 border-blue-500 pl-4 text-left">
                        <span className="block font-bold text-white text-xl md:text-2xl mb-0.5">100%</span>
                        <span className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wide">Compromisso com prazo</span>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 text-left">
                        <span className="block font-bold text-white text-xl md:text-2xl mb-0.5">24/7</span>
                        <span className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wide">Seu site vendendo</span>
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