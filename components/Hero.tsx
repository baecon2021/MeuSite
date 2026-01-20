import React, { useEffect, useRef } from 'react';
import Reveal from './ui/Reveal';

const Hero: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Performance Guard: Não rodar paralaxe pesado em mobile/touch
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let request_id: number;
    
    const handleScroll = () => {
      request_id = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // Parallax Background
        if (gridRef.current) gridRef.current.style.transform = `translate3d(0, ${scrollY * 0.2}px, 0)`;
        if (orbsRef.current) orbsRef.current.style.transform = `translate3d(0, ${scrollY * 0.08}px, 0)`;

        // Parallax Text
        if (titleRef.current) titleRef.current.style.transform = `translate3d(-${scrollY * 0.18}px, 0, 0)`;
        if (subtitleRef.current) subtitleRef.current.style.transform = `translate3d(${scrollY * 0.12}px, 0, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (request_id) cancelAnimationFrame(request_id);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[120vh] md:min-h-[150vh] lg:min-h-[190vh] flex flex-col items-center bg-background overflow-hidden">
      
      {/* 
        CINEMATIC BACKGROUND 
      */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
          {/* Noise */}
          <div className="absolute inset-0 z-[1] opacity-30 mix-blend-multiply bg-grain"></div>
          
          {/* Grid Lines */}
          <div ref={gridRef} className="absolute inset-0 z-0 opacity-40 will-change-transform hidden md:block">
            <div className="absolute left-[15%] top-[-10%] bottom-[-10%] w-px bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
            <div className="absolute right-[15%] top-[-10%] bottom-[-10%] w-px bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
          </div>

          {/* Breathing Orbs - Desativado em mobile para performance */}
          <div ref={orbsRef} className="absolute inset-0 z-0 will-change-transform hidden md:block">
             <div className="absolute top-[10%] right-[5%] w-[60vw] h-[60vw] bg-gradient-to-b from-neutral-200/80 to-transparent rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
             <div className="absolute bottom-[10%] left-[5%] w-[50vw] h-[50vw] bg-neutral-300/20 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
          </div>
      </div>

      {/* Meta Data */}
      <div className="absolute top-24 md:top-12 w-full max-w-[90rem] px-6 lg:px-24 flex justify-between items-center text-[10px] tracking-[0.25em] uppercase text-secondary/40 font-medium z-20">
            <span className="hidden md:block">Est. 2026</span>
            <span className="md:ml-auto">Digital Artist</span>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[90rem] px-4 flex flex-col items-center pt-[18vh] md:pt-[25vh]">
        
        {/* Headline */}
        <div className="relative text-center select-none w-full overflow-hidden">
            <Reveal duration={1.5} variant="blur" width="100%">
                <div className="pt-10 md:pt-20 pb-2 flex justify-center w-full">
                    <h1 
                        ref={titleRef}
                        className="w-full text-center font-display font-light text-[15vw] md:text-[17vw] lg:text-[13rem] leading-[0.85] text-primary tracking-[-0.04em] uppercase md:will-change-transform"
                    >
                        ESTÉTICA
                    </h1>
                </div>
            </Reveal>

            {/* Subheadline - Centralizado */}
            <div className="flex justify-center mt-4 md:-mt-4">
                <Reveal delay={0.3} duration={1.2} variant="slide">
                    <div 
                        ref={subtitleRef}
                        className="flex items-center gap-4 md:will-change-transform"
                    >
                        {/* Linha decorativa removida para centralização perfeita */}
                        <span className="font-serif italic font-normal text-[8vw] md:text-6xl text-secondary block">
                            Absoluta.
                        </span>
                    </div>
                </Reveal>
            </div>
        </div>

        {/* Manifesto Solitário */}
        <div className="mt-32 md:mt-56 lg:mt-96 max-w-xl text-center relative z-20 pb-32 md:pb-48 lg:pb-64 flex flex-col items-center">
            <Reveal delay={0.6} variant="fade">
                <div className="flex flex-col items-center px-6">
                    {/* Linha Vertical Alongada */}
                    <div className="w-px h-16 md:h-32 lg:h-48 bg-gradient-to-b from-primary/0 via-neutral-300 to-primary/0 mb-8 md:mb-12"></div>
                    
                    <p className="text-base md:text-xl text-neutral-500 font-light leading-relaxed tracking-wide">
                        O silêncio visual fala mais alto. <br className="hidden md:block"/>
                        Elimino o ruído para que sua marca seja a <br className="hidden md:block"/>
                        <strong className="text-primary font-medium">única voz</strong> na sala.
                    </p>
                    
                    <span className="text-[10px] uppercase tracking-[0.3em] text-secondary/30 mt-16 md:mt-24 animate-pulse opacity-60">
                        Role para explorar
                    </span>
                </div>
            </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Hero;