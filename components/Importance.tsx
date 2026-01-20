
import React, { useState, useRef, useEffect } from 'react';
import { Globe2, TrendingUp, Lock, ScanEye, Lightbulb, LightbulbOff } from 'lucide-react';

const Importance: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
        setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

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

  const ContentLayer = ({ isLit = false }: { isLit?: boolean }) => (
    <div className={`max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col justify-center transition-colors duration-700 ${isLit ? 'text-white' : 'text-primary'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-28">
            <span className={`font-serif italic text-xl mb-3 block transition-colors duration-500 ${isLit ? 'text-neutral-400' : 'text-secondary/60'}`}>
                A Realidade Digital
            </span>
            <h2 className={`text-4xl lg:text-6xl font-light tracking-tighter mb-6 leading-[0.95] transition-colors duration-500 ${isLit ? 'text-white' : 'text-primary'}`}>
              Você não é <br />
              dono do seu <br />
              <span className={`font-medium transition-colors duration-500 ${isLit ? 'text-neutral-300' : 'text-secondary'}`}>negócio.</span>
            </h2>
            <p className={`text-lg font-light leading-relaxed mb-6 max-w-md transition-colors duration-500 ${isLit ? 'text-neutral-300' : 'text-secondary'}`}>
              Parece duro, mas é verdade. Se sua única vitrine é uma rede social, você é um inquilino digital. A qualquer momento, as regras mudam e seu faturamento desaparece.
            </p>
        </div>
        
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
                <div className={`mt-1 transition-all duration-500 ${isLit ? 'text-white scale-110' : 'text-primary scale-100 group-hover:scale-110'}`}>
                  {point.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-medium mb-2 tracking-tight transition-colors duration-500 ${isLit ? 'text-white' : 'text-primary'}`}>
                    {point.title}
                  </h3>
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

  if (isMobile) {
    return (
        <section id="importance" className="relative py-24 bg-background border-t border-line">
            <ContentLayer isLit={false} />
        </section>
    );
  }

  return (
    <section 
        id="importance" 
        ref={sectionRef}
        className={`relative min-h-screen py-24 group transition-colors duration-1000 flex flex-col justify-center overflow-hidden ${isLightOn ? 'bg-background' : 'bg-black'}`}
    >
        <div className="absolute top-8 right-6 lg:right-12 z-[60]">
             <button 
                onClick={toggleLight}
                className={`p-3 rounded-full border transition-all duration-500 flex items-center gap-2 group/btn 
                  ${isLightOn 
                    ? 'bg-primary text-white border-primary shadow-lg' 
                    : 'bg-transparent text-white border-white/20 hover:bg-white/10'
                  }`}
             >
                {isLightOn ? <LightbulbOff className="w-5 h-5" /> : <Lightbulb className="w-5 h-5" />}
                <span className={`text-sm font-medium pr-1 overflow-hidden transition-all duration-300 ${isLightOn ? 'max-w-[100px] opacity-100' : 'max-w-0 opacity-0 group-hover/btn:max-w-[100px] group-hover/btn:opacity-100'}`}>
                    {isLightOn ? 'Apagar' : 'Acender'}
                </span>
             </button>
        </div>

        <div className={`absolute inset-0 z-50 pointer-events-none flex items-center justify-center transition-opacity duration-700 ${(isHovering || isLightOn) ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex flex-col items-center gap-4">
                <ScanEye className="w-8 h-8 text-white/40" />
                <p className="text-white/40 font-light tracking-[0.2em] text-xs uppercase">Passe o mouse para iluminar</p>
            </div>
        </div>

        {/* Efeito de Lanterna */}
        <div 
            className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
            style={{
                background: isLightOn ? 'transparent' : (isHovering ? `radial-gradient(circle 250px at var(--x) var(--y), transparent 0%, rgba(0,0,0,0.95) 100%)` : 'black'),
                opacity: 1
            }}
        />

        <div className="relative z-10">
            <ContentLayer isLit={!isLightOn} />
        </div>
    </section>
  );
};

export default Importance;
