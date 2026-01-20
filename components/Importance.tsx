import React, { useState, useRef, useEffect } from 'react';
import { Globe2, TrendingUp, Lock, ScanEye, Lightbulb, LightbulbOff } from 'lucide-react';

const Importance: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check de dispositivo (Pointer Coarse = Touch OU Largura < 1024px)
    const checkMobile = () => {
        setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Se for mobile, não adicione listeners de mouse pesados
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleWindowMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    let rafId: number;
    const updatePosition = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = mouseRef.current.x - rect.left;
        const y = mouseRef.current.y - rect.top;

        sectionRef.current.style.setProperty('--x', `${x}px`);
        sectionRef.current.style.setProperty('--y', `${y}px`);

        const isInside = 
          mouseRef.current.x >= rect.left && 
          mouseRef.current.x <= rect.right && 
          mouseRef.current.y >= rect.top && 
          mouseRef.current.y <= rect.bottom;

        if (isInside !== isHovering) {
            setIsHovering(isInside);
        }
      }
      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(rafId);
    };
  }, [isHovering]);

  const toggleLight = () => setIsLightOn(!isLightOn);

  // Layout de Conteúdo
  const ContentLayer = ({ isLit = false }: { isLit?: boolean }) => (
    <div className={`max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col justify-center transition-colors duration-700 ${isLit ? 'text-white' : 'text-primary'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Lado Esquerdo */}
        <div className="lg:sticky lg:top-28">
            <span className={`font-serif italic text-xl mb-3 block transition-colors duration-500 ${isLit ? 'text-neutral-400' : 'text-secondary/60'}`}>
                A Realidade Digital
            </span>
            <h2 className="text-4xl lg:text-6xl font-light tracking-tighter mb-6 leading-[0.95]">
              Você não é <br />
              dono do seu <br />
              <span className={`font-medium transition-colors duration-500 ${isLit ? 'text-neutral-500' : 'text-secondary'}`}>negócio.</span>
            </h2>
            <p className={`text-lg font-light leading-relaxed mb-6 max-w-md transition-colors duration-500 ${isLit ? 'text-neutral-300' : 'text-secondary'}`}>
              Parece duro, mas é verdade. Se sua única vitrine é uma rede social, você é um inquilino digital. A qualquer momento, as regras mudam e seu faturamento desaparece.
            </p>
        </div>
        
        {/* Lado Direito */}
        <div className="grid gap-12 mt-4 lg:mt-0 lg:pt-8">
          {[
            {
              icon: <Lock className="h-6 w-6" />,
              title: "Refém do Algoritmo",
              text: "Você gasta horas criando conteúdo para atingir 2% da sua audiência. Um site é o único lugar onde você dita as regras e controla 100% da narrativa."
            },
            {
              icon: <Globe2 className="h-6 w-6" />,
              title: "Invisibilidade Custa Caro",
              text: "Quem rola o feed busca entretenimento. Quem pesquisa no Google tem intenção de compra. Sem site, você entrega seus melhores clientes para o concorrente."
            },
            {
              icon: <TrendingUp className="h-6 w-6" />,
              title: "Autoridade Imediata",
              text: "O cliente decide se confia em você nos primeiros 3 segundos. Um site premium elimina a pechincha e justifica cobrar mais caro sem precisar explicar o porquê."
            }
          ].map((point, idx) => (
             <div key={idx} className="flex gap-6 items-start group">
                <div className={`mt-1 p-0 transition-all duration-500 ${isLit ? 'text-white scale-110' : 'text-primary scale-100 group-hover:scale-110'}`}>
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 tracking-tight">{point.title}</h3>
                  <p className={`text-base font-light leading-relaxed max-w-sm transition-colors duration-500 ${isLit ? 'text-neutral-400' : 'text-secondary'}`}>
                    {point.text}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );

  // RENDERIZAÇÃO MOBILE OTIMIZADA (Sem Flashlight, Layout Relativo Simples)
  if (isMobile) {
    return (
        <section id="importance" className="relative min-h-screen py-24 bg-background border-t border-line flex flex-col justify-center">
            <ContentLayer isLit={false} />
        </section>
    );
  }

  // RENDERIZAÇÃO DESKTOP (Com Flashlight Effect e Proteção de Overflow)
  return (
    <section 
        id="importance" 
        ref={sectionRef}
        className={`relative min-h-screen py-24 group transition-colors duration-1000 flex flex-col justify-center ${isLightOn ? 'bg-background cursor-auto' : 'bg-black cursor-none'}`}
    >
        {/* Button Toggle */}
        <div className="absolute top-8 right-6 lg:right-12 z-[60]">
             <button 
                onClick={toggleLight}
                className={`p-3 rounded-full border transition-all duration-500 flex items-center gap-2 group/btn 
                  ${isLightOn 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-neutral-300' 
                    : 'bg-transparent text-white border-white/20 hover:bg-white/10'
                  }`}
                aria-label={isLightOn ? "Apagar luz" : "Acender luz"}
             >
                {isLightOn ? <LightbulbOff className="w-5 h-5" /> : <Lightbulb className="w-5 h-5" />}
                <span className={`text-sm font-medium pr-1 overflow-hidden transition-all duration-300 ${isLightOn ? 'max-w-[100px] opacity-100' : 'max-w-0 opacity-0 group-hover/btn:max-w-[100px] group-hover/btn:opacity-100'}`}>
                    {isLightOn ? 'Apagar' : 'Acender'}
                </span>
             </button>
        </div>

        {/* Cover com Instrução */}
        <div className={`absolute inset-0 z-50 pointer-events-none flex items-center justify-center transition-opacity duration-700 ease-in-out ${(isHovering || isLightOn) ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex flex-col items-center gap-6 animate-pulse">
                <div className="p-4 rounded-full border border-white/20 bg-white/5">
                    <ScanEye className="w-8 h-8 text-white/80" />
                </div>
                <p className="text-white/60 font-light tracking-[0.2em] text-sm uppercase">
                    Passe o mouse
                </p>
            </div>
        </div>

        {/* Efeito de Luz CSS Var */}
        <div 
            className="pointer-events-none fixed w-[600px] h-[600px] rounded-full bg-white/5 blur-[80px] z-0 mix-blend-overlay transition-opacity duration-300 will-change-transform"
            style={{ 
                left: 'var(--x)', 
                top: 'var(--y)', 
                transform: 'translate(-50%, -50%)',
                opacity: (isHovering && !isLightOn) ? 1 : 0
            }}
        />
        <div 
            className="pointer-events-none absolute w-12 h-12 rounded-full border border-white/30 z-50 transition-opacity duration-300 hidden lg:block will-change-transform"
            style={{ 
                left: 'var(--x)', 
                top: 'var(--y)', 
                transform: 'translate(-50%, -50%)',
                opacity: (isHovering && !isLightOn) ? 1 : 0
            }}
        />

        {/* CAMADA ESCURA (FANTASMA) - Fundo "Desligado" */}
        {/* CORREÇÃO: Usar isLit={true} com baixa opacidade para garantir contraste no fundo preto. */}
        <div className={`relative z-10 transition-all duration-500 pointer-events-none ${isLightOn ? 'opacity-0' : 'opacity-[0.15]'}`}>
            <ContentLayer isLit={true} />
        </div>

        {/* CAMADA CLARA (REVEAL) - Fundo "Ligado" / Lanterna */}
        <div 
            className="absolute inset-0 z-20 pointer-events-none will-change-[mask-image] flex flex-col justify-center"
            style={{
                maskImage: isLightOn 
                    ? 'none' 
                    : (isHovering 
                        ? `radial-gradient(circle 300px at var(--x) var(--y), black 10%, transparent 100%)`
                        : 'none'),
                WebkitMaskImage: isLightOn 
                    ? 'none' 
                    : (isHovering 
                        ? `radial-gradient(circle 300px at var(--x) var(--y), black 10%, transparent 100%)`
                        : 'transparent'),
                opacity: (isHovering || isLightOn) ? 1 : 0
            }}
        >
            <ContentLayer isLit={!isLightOn} />
        </div>
    </section>
  );
};

export default Importance;