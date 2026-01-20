import React, { memo } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import Reveal from './ui/Reveal';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background border-t border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section - Ajustado para alinhar à direita no mobile */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
            <Reveal width="100%">
                <div className="text-right md:text-left w-full">
                  <span className="font-serif italic text-xl text-secondary/60 mb-4 block">Arquivo Visual</span>
                  <h2 className="text-4xl md:text-6xl font-light text-primary tracking-tighter">
                      Estudos de <br/> <span className="font-medium">Caso</span>
                  </h2>
                </div>
            </Reveal>
            
            <Reveal delay={0.2} variant="slide" width="100%">
                <div className="max-w-xs ml-auto md:ml-0 text-right md:text-left">
                    <p className="text-secondary text-sm font-light leading-relaxed">
                        A verdadeira profundidade do meu trabalho vive nos detalhes. Mergulhe nos processos, grids e decisões estratégicas.
                    </p>
                </div>
            </Reveal>
        </div>

        {/* The Behance Portal Card */}
        <Reveal width="100%" variant="slide" duration={1}>
            <a 
                href="https://www.behance.net/anthonybanhara/projects" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block w-full bg-surface border border-line overflow-hidden cursor-none-target"
            >
                {/* Background Animation Layer */}
                <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"></div>
                
                <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between md:items-end gap-12 min-h-[350px] md:min-h-[400px]">
                    
                    {/* Content Left */}
                    <div className="flex flex-col justify-between h-full gap-8">
                        <div className="flex items-center gap-3">
                            <Layers className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                            <span className="text-xs font-medium uppercase tracking-[0.25em] text-secondary group-hover:text-white/60 transition-colors duration-500">
                                Behance Portfolio
                            </span>
                        </div>

                        <div>
                            <h3 className="font-display text-4xl md:text-6xl lg:text-8xl font-medium text-primary group-hover:text-white transition-colors duration-500 tracking-tighter mb-4">
                                Ver Projetos
                            </h3>
                            <p className="text-secondary group-hover:text-white/80 transition-colors duration-500 font-light max-w-md text-sm md:text-base">
                                Acesso direto à galeria de interfaces de alta fidelidade, identidades visuais e protótipos interativos.
                            </p>
                        </div>
                    </div>

                    {/* Action Right */}
                    <div className="flex items-end justify-end">
                        <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 border border-primary/20 group-hover:border-white/20 rounded-full flex items-center justify-center transition-colors duration-500 group-hover:rotate-45">
                            <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary group-hover:text-white transition-colors duration-500" />
                        </div>
                    </div>
                </div>
            </a>
        </Reveal>

      </div>
    </section>
  );
};

export default memo(Portfolio);