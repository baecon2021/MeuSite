import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-navy-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container estilo "Caixa" */}
        <div className="bg-navy-900 rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
            
            {/* Efeitos de Luz de Fundo dentro da caixa */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/5 blur-[80px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
            
            {/* Lado da Imagem */}
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 group">
                    {/* Glow effect atrás da foto */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-700"></div>
                    
                    <img 
                        src="https://media.discordapp.net/attachments/647145748915421189/1461842473474199689/WhatsApp_Image_2026-01-16_at_16.23.57.jpeg?ex=696c0665&is=696ab4e5&hm=41adc6febd48173359f5419e2138688e3303b704c4af72c9c4f1bdc4cdb4fd70&=&format=webp&width=547&height=547"
                        alt="Anthony Velho - Especialista em Web Design" 
                        width="320"
                        height="320"
                        loading="lazy"
                        decoding="async"
                        className="relative w-full h-full object-cover rounded-full border-4 border-navy-900 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>
            
            {/* Lado do Texto */}
            <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Quem é Anthony Velho?</h2>
                
                <div className="space-y-5 text-slate-300 text-base md:text-lg leading-relaxed">
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

                {/* Métricas / Stats */}
                <div className="grid grid-cols-2 gap-8 mt-10 border-t border-white/10 pt-8 max-w-md mx-auto md:mx-0">
                    <div className="border-l-4 border-blue-500 pl-4 text-left">
                        <span className="block font-bold text-white text-2xl md:text-3xl mb-1">100%</span>
                        <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wide">Compromisso com prazo</span>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 text-left">
                        <span className="block font-bold text-white text-2xl md:text-3xl mb-1">24/7</span>
                        <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wide">Seu site vendendo</span>
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