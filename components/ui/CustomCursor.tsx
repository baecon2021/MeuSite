import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailingRef = useRef<HTMLDivElement>(null);
  
  const isHovering = useRef(false);
  const isVisible = useRef(false);
  const isInitialized = useRef(false); // Flag para capturar a primeira posição
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

      if (isHovering.current) {
        trailingEl.classList.add('is-hovering');
        cursorEl.classList.add('is-hovering');
      } else {
        trailingEl.classList.remove('is-hovering');
        cursorEl.classList.remove('is-hovering');
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Se é a primeira vez, sincroniza as posições imediatamente para evitar o "salto"
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
      const isInteractive = 
        target.matches('a, button, input, textarea, select, [role="button"]') ||
        target.closest('a, button, input, textarea, select, [role="button"]');
        
      const newState = !!isInteractive;
      
      if (isHovering.current !== newState) {
        isHovering.current = newState;
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
        .cursor-ring {
          width: 3.5rem; 
          height: 3.5rem; 
          background-color: transparent;
          border: 1px solid rgba(59, 130, 246, 0.8);
          margin-left: -1.75rem; 
          margin-top: -1.75rem; 
          opacity: 0;
        }
        .cursor-ring.is-hovering {
          width: 4rem;
          height: 4rem;
          background-color: rgba(59, 130, 246, 0.1); 
          border-color: rgba(96, 165, 250, 0.6); 
          backdrop-filter: blur(2px);
          margin-left: -2rem;
          margin-top: -2rem;
        }
        .cursor-layer {
          will-change: transform, width, height, background-color, border-color, opacity;
          backface-visibility: hidden;
        }
      `}</style>

      <div 
        ref={cursorRef}
        className="cursor-layer fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block transition-opacity duration-300 opacity-0"
        style={{ marginLeft: '-2px', marginTop: '-2px' }}
      />
      
      <div 
        ref={trailingRef}
        className="cursor-layer cursor-ring fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-[width,height,background-color,border-color,margin] duration-300 ease-out hidden md:block"
      />
    </>
  );
};

export default CustomCursor;