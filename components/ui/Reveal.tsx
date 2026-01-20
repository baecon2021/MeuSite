import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  variant?: "fade" | "slide" | "blur";
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  duration = 1.0, // Aumentado para 1.0s para ser mais suave e notável
  variant = "blur" 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Entrou na tela
        setIsVisible(true);
        
        const totalTime = (duration * 1000) + (delay * 1000) + 100;
        setTimeout(() => {
            setIsAnimationComplete(true);
        }, totalTime);
      } else {
        // Saiu da tela
        if (entry.boundingClientRect.top > 0 || entry.boundingClientRect.bottom < 0) {
            setIsVisible(false);
            setIsAnimationComplete(false);
        }
      }
    }, { 
        threshold: 0.2, // Precisa de 20% do elemento visível para disparar
        rootMargin: "0px 0px -50px 0px" // Margem negativa embaixo: atrasa a entrada (só anima quando já subiu 50px) e antecipa a saída
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [delay, duration]);

  const getTransform = () => {
    if (!isVisible) {
      // Aumentei os valores de translação para tornar o movimento mais evidente
      if (variant === "slide") return "translateY(100px)"; 
      if (variant === "blur") return "translateY(40px) scale(0.95)";
      return "none";
    }
    return "translateY(0) scale(1)";
  };

  const getOpacity = () => (isVisible ? 1 : 0);
  const getFilter = () => {
    if (variant === "blur") return isVisible ? "blur(0px)" : "blur(12px)";
    return "none";
  };

  return (
    <div 
        ref={ref} 
        style={{ 
            width, 
            position: "relative", 
            overflow: isAnimationComplete ? "visible" : "hidden" 
        }}
    >
      <div
        style={{
          transform: getTransform(),
          opacity: getOpacity(),
          filter: getFilter(),
          // Adicionado transition-delay no CSS para garantir controle preciso
          transition: `transform ${duration}s cubic-bezier(0.2, 0.6, 0.2, 1) ${delay}s, opacity ${duration}s cubic-bezier(0.2, 0.6, 0.2, 1) ${delay}s, filter ${duration}s cubic-bezier(0.2, 0.6, 0.2, 1) ${delay}s`,
          willChange: "transform, opacity, filter"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;