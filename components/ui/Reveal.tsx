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
  duration = 1.0, 
  variant = "blur" 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        
        const totalTime = (duration * 1000) + (delay * 1000) + 100;
        const timer = setTimeout(() => {
            setIsAnimationComplete(true);
        }, totalTime);
        
        return () => clearTimeout(timer);
      }
    }, { 
        threshold: 0.2, 
        rootMargin: "0px 0px -50px 0px" 
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
          transition: `transform ${duration}s cubic-bezier(0.2, 0.6, 0.2, 1) ${delay}s, opacity ${duration}s cubic-bezier(0.2, 0.6, 0.2, 1) ${delay}s, filter ${duration}s cubic-bezier(0.2, 0.6, 0.2, 1) ${delay}s`,
          // PERFORMANCE: Remove will-change após a animação para economizar memória
          willChange: isAnimationComplete ? "auto" : "transform, opacity, filter"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;