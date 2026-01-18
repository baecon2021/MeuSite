import React, { useRef, useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabletContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true); 
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsMobile(isTouch || prefersReducedMotion);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 }
    );
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobile || !isInView) return;

    let requestId: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      targetY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };

    const animate = () => {
      const ease = 0.05;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      if (tabletContainerRef.current) {
        const tiltX = currentX * 12;
        const tiltY = currentY * 12;
        const moveX = currentX * 25;
        const moveY = currentY * 25;

        tabletContainerRef.current.style.transform = 
          `perspective(1000px) rotateY(${tiltX}deg) rotateX(${-tiltY}deg) translateX(${moveX}px) translateY(${moveY}px)`;
      }

      requestId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    requestId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestId);
    };
  }, [isMobile, isInView]);

  return (
    <section 
      ref={containerRef}
      className="relative pt-24 pb-12 lg:pt-0 overflow-hidden bg-navy-950 min-h-[85vh] lg:min-h-screen flex items-center justify-center content-visibility-auto"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem] lg:bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-5"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] lg:h-[400px] bg-blue-900/10 blur-[100px] lg:blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-32">
          <div className="flex-1 text-center lg:text-left z-20 space-y-6 lg:space-y-8">
            <div className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-[9px] md:text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
                  Web Design & Intelligence
                </h2>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1] md:leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both delay-100">
              <span className="text-white block">Experiências</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block mt-1 pb-2">
                Digitais Únicas.
              </span>
            </h1>
            <div className="relative">
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-transparent"></div>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-normal max-w-md mx-auto lg:mx-0 lg:pl-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-both delay-200">
                Estética minimalista aliada à performance de elite. Desenvolvido para marcas que buscam a excelência digital.
              </p>
            </div>
            <div className="pt-2 lg:pt-6 flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8 opacity-60 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <div className="text-[9px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-500">Design Clean</div>
                <div className="text-[9px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-500">Fast Loading</div>
                <div className="text-[9px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-500">Smart AI</div>
            </div>
          </div>

          <div className="flex-1 w-full relative perspective-1000 flex justify-center items-center animate-in fade-in zoom-in-95 duration-1000 delay-300 mt-6 lg:mt-0">
            <div 
              ref={tabletContainerRef}
              className="relative w-[85%] sm:w-[80%] lg:w-full max-w-[550px] z-20 flex justify-center lg:transition-none will-change-transform"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[80px] lg:blur-[120px] rounded-full -z-10"></div>
                <img 
                  src="https://lh3.googleusercontent.com/d/1p00D8Z8Fie2XSQB7YbzbKiyum-H_PQrF" 
                  alt="Interface Showcase" 
                  className="w-full h-auto object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
                  width="600"
                  height="800"
                  fetchPriority="high"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;