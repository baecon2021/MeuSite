import React, { useEffect, useRef, useState, memo } from 'react';

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
  duration = 0.8, 
  variant = "blur" 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Usando flag para evitar múltiplos re-renders se já estiver visível
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Opcional: desconectar após a primeira vez para performance extrema
        // observer.disconnect(); 
      } else {
        setIsVisible(false);
      }
    }, { 
        threshold: 0.05,
        rootMargin: "0px"
    });

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const styles = {
    transform: !isVisible 
      ? (variant === "slide" ? "translateY(20px)" : variant === "blur" ? "translateY(10px) scale(0.99)" : "none") 
      : "translateY(0) scale(1)",
    opacity: isVisible ? 1 : 0,
    filter: variant === "blur" ? (isVisible ? "blur(0px)" : "blur(8px)") : "none",
    transition: `transform ${duration}s cubic-bezier(0.2, 0, 0, 1) ${delay}s, 
                 opacity ${duration}s cubic-bezier(0.2, 0, 0, 1) ${delay}s, 
                 filter ${duration}s cubic-bezier(0.2, 0, 0, 1) ${delay}s`,
    willChange: isVisible ? "auto" : "transform, opacity, filter"
  };

  return (
    <div ref={ref} style={{ width, position: "relative" }}>
      <div style={styles}>
        {children}
      </div>
    </div>
  );
};

export default memo(Reveal);