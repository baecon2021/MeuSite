import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailingRef = useRef<HTMLDivElement>(null);
  
  const isHovering = useRef(false);
  const isInverse = useRef(false);
  const isVisible = useRef(false);
  const isInitialized = useRef(false);
  const mouse = useRef({ x: 0, y: 0 });
  const trailing = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursorEl = cursorRef.current;
    const trailingEl = trailingRef.current;
    
    const updateCursorStyle = () => {
      if (!cursorEl || !trailingEl) return;

      if (isVisible.current) {
        cursorEl.style.opacity = isHovering.current ? '0' : '1';
        trailingEl.style.opacity = '1';
      } else {
        cursorEl.style.opacity = '0';
        trailingEl.style.opacity = '0';
      }

      // Lógica de Hover (Expandir)
      if (isHovering.current) {
        trailingEl.classList.add('is-hovering');
        cursorEl.classList.add('is-hovering');
      } else {
        trailingEl.classList.remove('is-hovering');
        cursorEl.classList.remove('is-hovering');
      }

      // Lógica de Inversão de Cor (Preto -> Branco Sólido)
      if (isInverse.current) {
        trailingEl.classList.add('is-inverse');
        cursorEl.classList.add('is-inverse');
      } else {
        trailingEl.classList.remove('is-inverse');
        cursorEl.classList.remove('is-inverse');
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isInitialized.current) {
        cursor.current.x = e.clientX;
        cursor.current.y = e.clientY;
        trailing.current.x = e.clientX;
        trailing.current.y = e.clientY;
        isInitialized.current = true;
      }

      if (!isVisible.current) {
        isVisible.current = true;
        updateCursorStyle();
      }
    };
    
    const onMouseLeave = () => {
      isVisible.current = false;
      updateCursorStyle();
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // 1. Check de Interatividade
      const isInteractive = 
        target.matches('a, button, input, textarea, select, [role="button"]') ||
        target.closest('a, button, input, textarea, select, [role="button"]');
        
      const newHoverState = !!isInteractive;
      
      // 2. Check de Inversão de Cor
      const inverseSection = target.closest('[data-cursor-inverse="true"]');
      const newInverseState = !!inverseSection;

      let changed = false;

      if (isHovering.current !== newHoverState) {
        isHovering.current = newHoverState;
        changed = true;
      }

      if (isInverse.current !== newInverseState) {
        isInverse.current = newInverseState;
        changed = true;
      }

      if (changed) {
        updateCursorStyle();
      }
    };

    let animationFrameId: number;

    const animate = () => {
      cursor.current.x += (mouse.current.x - cursor.current.x) * 0.9; 
      cursor.current.y += (mouse.current.y - cursor.current.y) * 0.9;

      trailing.current.x += (mouse.current.x - trailing.current.x) * 0.25;
      trailing.current.y += (mouse.current.y - trailing.current.y) * 0.25;

      if (cursorEl) {
        cursorEl.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0)`;
      }
      
      if (trailingEl) {
        trailingEl.style.transform = `translate3d(${trailing.current.x}px, ${trailing.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-layer {
          will-change: transform, width, height, background-color, border-color, opacity;
          backface-visibility: hidden;
          transition: background-color 0.2s ease, border-color 0.2s ease, width 0.3s ease, height 0.3s ease, margin 0.3s ease;
        }

        /* --- ESTADO PADRÃO (DARK NO LIGHT) --- */
        
        /* Ponto Central */
        div[ref*="cursorRef"] {
            background-color: #0A0A0A; /* Primary */
        }

        /* Anel Externo */
        .cursor-ring {
          width: 3rem; 
          height: 3rem; 
          background-color: transparent;
          border: 1px solid rgba(10, 10, 10, 0.2);
          margin-left: -1.5rem; 
          margin-top: -1.5rem; 
          opacity: 0;
          border-radius: 50%;
        }
        
        /* Hover Padrão */
        .cursor-ring.is-hovering {
          width: 4rem;
          height: 4rem;
          background-color: rgba(10, 10, 10, 0.05); 
          border-color: rgba(10, 10, 10, 0.5); 
          margin-left: -2rem;
          margin-top: -2rem;
        }

        /* --- ESTADO INVERTIDO (LIGHT NO DARK) --- */
        
        /* Ponto Central Branco Sólido */
        .cursor-layer.is-inverse:not(.cursor-ring) {
            background-color: #FFFFFF !important; 
        }

        /* Anel Branco Visível */
        .cursor-ring.is-inverse {
            border-color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Hover Invertido */
        .cursor-ring.is-inverse.is-hovering {
            background-color: rgba(255, 255, 255, 0.1) !important;
            border-color: #FFFFFF !important;
        }
      `}</style>

      <div 
        ref={cursorRef}
        className="cursor-layer fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] hidden md:block transition-opacity duration-300 opacity-0"
        style={{ marginLeft: '-3px', marginTop: '-3px' }}
      />
      
      <div 
        ref={trailingRef}
        className="cursor-layer cursor-ring fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
      />
    </>
  );
};

export default CustomCursor;