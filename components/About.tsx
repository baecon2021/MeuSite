import React from 'react';
import Reveal from './ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-background border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
            
            <div className="w-full md:w-1/3 order-2 md:order-1">
                <Reveal variant="blur">
                    <div className="aspect-[3/4] bg-neutral-200 overflow-hidden relative group">
                        <img 
                            src="https://lh3.googleusercontent.com/d/1B_lFIE4L-vBrX6Yqqi7BiIhOCgJtxJMu"
                            alt="Anthony Velho" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
                    </div>
                </Reveal>
            </div>
            
            <div className="w-full md:w-2/3 order-1 md:order-2">
                <Reveal delay={0.2} variant="slide">
                    <span className="font-serif italic text-2xl text-secondary mb-2 block">O Criador</span>
                    <h2 className="text-4xl md:text-6xl font-light text-primary mb-8 tracking-tighter">Anthony Velho.</h2>
                    
                    <div className="space-y-6 text-secondary text-lg font-light leading-relaxed max-w-xl">
                        <p>
                            A internet está cheia de promessas vazias e templates prontos. Eu escolho o caminho oposto: <span className="italic font-serif text-primary">artesanato digital</span>.
                        </p>
                        <p>
                             Não sou apenas um programador. Sou um parceiro estratégico que entende que cada pixel na tela deve ter um propósito: <strong>fazer seu negócio crescer</strong>.
                        </p>
                        <p>
                            Elimino o ruído, simplifico a jornada do usuário e entrego uma ferramenta poderosa que coloca sua marca em um patamar de excelência inquestionável.
                        </p>
                    </div>

                    <div className="flex gap-16 mt-12 pt-12 border-t border-line">
                        <div>
                            <span className="block text-4xl font-light text-primary tracking-tighter">100%</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-secondary mt-1 block">Compromisso</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-light text-primary tracking-tighter">Global</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-secondary mt-1 block">Padrão</span>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;