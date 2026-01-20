import React, { useEffect, useRef, useState, Suspense, memo } from 'react';
import Reveal from './ui/Reveal';

const Lottie = React.lazy(() => import('lottie-react'));

const Hero: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 50);

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.01 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (isDesktop) {
      let request_id: number;
      const handleScroll = () => {
        request_id = requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (gridRef.current) gridRef.current.style.transform = `translate3d(0, ${scrollY * 0.1}px, 0)`;
          if (orbsRef.current) orbsRef.current.style.transform = `translate3d(0, ${scrollY * 0.05}px, 0)`;
          if (titleRef.current) titleRef.current.style.transform = `translate3d(-${scrollY * 0.02}px, 0, 0)`;
          if (subtitleRef.current) subtitleRef.current.style.transform = `translate3d(${scrollY * 0.04}px, 0, 0)`;
        });
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (request_id) cancelAnimationFrame(request_id);
      };
    }

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const isActive = hasLoaded && isInView;

  return (
    <section 
      ref={containerRef}
      className="relative w-full flex flex-col items-center bg-background overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <div ref={gridRef} className="absolute inset-0 z-0 opacity-20 hidden md:block">
            <div className="absolute left-[15%] top-0 bottom-0 w-px bg-primary/10"></div>
            <div className="absolute right-[15%] top-0 bottom-0 w-px bg-primary/10"></div>
          </div>

          <div className={`absolute inset-0 z-[2] flex items-center justify-center transition-opacity duration-[3000ms] ${isActive ? 'opacity-[0.03]' : 'opacity-0'}`}>
            <Suspense fallback={null}>
              <div className="w-full h-full max-w-4xl scale-125">
                <Lottie 
                  animationData={{
                    "v": "5.5.7", "fr": 30, "ip": 0, "op": 120, "w": 800, "h": 600, "nm": "Subtle Flow", "layers": [
                      {
                        "ddd": 0, "ind": 1, "ty": 4, "nm": "Wave", "sr": 1,
                        "ks": { "o": { "a": 1, "k": [{ "t": 0, "s": [0] }, { "t": 60, "s": [100] }, { "t": 120, "s": [0] }] }, "p": { "a": 0, "k": [400, 300, 0] }, "s": { "a": 1, "k": [{ "t": 0, "s": [100, 100, 100] }, { "t": 120, "s": [110, 110, 100] }] } },
                        "ao": 0, "shapes": [ { "ty": "gr", "it": [ { "d": 1, "ty": "el", "s": { "a": 0, "k": [400, 400] }, "p": { "a": 0, "k": [0, 0] } }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0, 1] }, "o": { "a": 0, "k": 100 }, "w": { "a": 0, "k": 0.5 } }, { "ty": "tr", "r": { "a": 1, "k": [{ "t": 0, "s": [0] }, { "t": 120, "s": [360] }] } } ] } ], "ip": 0, "op": 120, "st": 0
                      }
                    ]
                  }}
                  loop autoplay style={{ width: '100%', height: '100%' }}
                />
              </div>
            </Suspense>
          </div>

          <div ref={orbsRef} className="absolute inset-0 z-0 opacity-20">
             <div className={`absolute top-[-10%] right-[-5%] w-[70vw] h-[70vw] bg-neutral-300 rounded-full blur-[140px] animate-[pulse_15s_infinite] transition-opacity duration-[2000ms] ${isActive ? 'opacity-100' : 'opacity-0'}`} />
             <div className={`absolute bottom-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-neutral-200 rounded-full blur-[120px] animate-[pulse_20s_infinite_reverse] transition-opacity duration-[2000ms] ${isActive ? 'opacity-100' : 'opacity-0'}`} />
          </div>
      </div>

      {/* 1. DOBRA INICIAL */}
      <div className="relative z-10 w-full min-h-screen px-4 flex flex-col items-center justify-center">
        <div className="relative text-center select-none w-full">
            <div className={`pb-4 transition-all duration-[2000ms] ease-out ${isActive ? 'opacity-100 scale-100 blur-0 tracking-[-0.04em]' : 'opacity-0 scale-[1.05] blur-xl tracking-[0.2em]'}`}>
                <h1 ref={titleRef} className="w-full text-center font-display font-light text-[clamp(3.5rem,16vw,14rem)] leading-[1.1] text-primary uppercase will-change-transform">
                    ESTÉTICA
                </h1>
            </div>

            <div className={`flex justify-center mt-2 transition-all duration-[1500ms] delay-[500ms] ease-out ${isActive ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-md'}`}>
                <div ref={subtitleRef} className="will-change-transform">
                    <span className="font-serif italic font-normal text-[clamp(2rem,8vw,8rem)] text-secondary block">Absoluta.</span>
                </div>
            </div>
        </div>
      </div>

      {/* 2. O CAMPO DE SILÊNCIO (VÁCUO RESPONSIVO) */}
      <div className="h-[80vh] md:h-[140vh] w-full flex items-center justify-center relative bg-background">
         <div className="w-[1px] h-[1px] bg-primary/5"></div>
      </div>

      {/* 3. O RUIDINHO */}
      <div className="relative z-20 w-full max-w-4xl px-6 lg:px-12 py-32 flex flex-col items-center text-center">
          <Reveal variant="blur" duration={1.2}>
              <div className="flex flex-col items-center">
                  <div className="w-px h-12 md:h-20 bg-gradient-to-b from-transparent to-primary/10 mb-8 md:mb-12"></div>
                  
                  <div className="max-w-xl px-2">
                      <p className="font-sans text-base md:text-lg lg:text-xl text-secondary font-light leading-relaxed tracking-tight">
                        O <span className="font-serif italic text-primary">silêncio visual</span> fala mais alto. <br/>
                        Elimino o ruído para que sua marca seja a <br className="hidden md:block"/>
                        <span className="font-medium text-primary uppercase tracking-[0.2em] text-[10px] md:text-xs ml-1">única voz</span> na sala.
                      </p>
                  </div>

                  <div className="mt-10 flex items-center gap-4 opacity-20">
                      <div className="w-4 h-px bg-primary"></div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.5em]">A. Velho</span>
                      <div className="w-4 h-px bg-primary"></div>
                  </div>
              </div>
          </Reveal>
      </div>

      {/* 4. CAMPO DE RESPIRO FINAL */}
      <div className="h-[40vh] md:h-[60vh] w-full bg-background"></div>

      {/* METADATA FIXA (Hiding on small mobiles to avoid clutter) */}
      <div className={`fixed bottom-10 left-8 lg:left-16 z-20 hidden sm:flex items-center gap-4 transition-all duration-[1000ms] delay-[1000ms] pointer-events-none ${isActive ? 'opacity-30' : 'opacity-0'}`}>
        <div className="w-8 h-px bg-primary"></div>
        <span className="text-[9px] tracking-[0.4em] uppercase font-semibold text-primary">Est. 2026</span>
      </div>
      
      <div className={`fixed bottom-10 right-8 lg:right-16 z-20 hidden sm:flex items-center gap-4 transition-all duration-[1000ms] delay-[1000ms] pointer-events-none ${isActive ? 'opacity-30' : 'opacity-0'}`}>
        <span className="text-[9px] tracking-[0.4em] uppercase font-semibold text-primary">Digital Artist</span>
        <div className="w-8 h-px bg-primary"></div>
      </div>
    </section>
  );
};

export default memo(Hero);