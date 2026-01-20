
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

    // Ativa a classe que esconde o cursor nativo
    document.documentElement.classList.add('custom-cursor-active');

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
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
      const inverseSection = target.closest('[data-cursor-inverse="true"]');

      isHovering.current = !!isInteractive;
      isInverse.current = !!inverseSection;
      updateCursorStyle();
    };

    let animationFrameId: number;
    const animate = () => {
      cursor.current.x += (mouse.current.x - cursor.current.x) * 0.9; 
      cursor.current.y += (mouse.current.y - cursor.current.y) * 0.9;
      trailing.current.x += (mouse.current.x - trailing.current.x) * 0.25;
      trailing.current.y += (mouse.current.y - trailing.current.y) * 0.25;

      if (cursorEl) cursorEl.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0)`;
      if (trailingEl) trailingEl.style.transform = `translate3d(${trailing.current.x}px, ${trailing.current.y}px, 0)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    animate();

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
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
          will-change: transform;
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          transition: background-color 0.2s, border-color 0.2s, width 0.3s, height 0.3s, opacity 0.3s;
        }
        .cursor-dot { width: 6px; height: 6px; background-color: #0A0A0A; border-radius: 50%; margin-left: -3px; margin-top: -3px; }
        .cursor-ring { width: 40px; height: 40px; border: 1px solid rgba(10, 10, 10, 0.2); border-radius: 50%; margin-left: -20px; margin-top: -20px; }
        .cursor-ring.is-hovering { width: 60px; height: 60px; margin-left: -30px; margin-top: -30px; background: rgba(10, 10, 10, 0.05); border-color: #0A0A0A; }
        .is-inverse.cursor-dot { background-color: #FFFFFF !important; }
        .is-inverse.cursor-ring { border-color: rgba(255, 255, 255, 0.4) !important; }
        .is-inverse.cursor-ring.is-hovering { background: rgba(255, 255, 255, 0.1); border-color: #FFFFFF !important; }
      `}</style>
      <div ref={cursorRef} className="cursor-layer cursor-dot hidden md:block" />
      <div ref={trailingRef} className="cursor-layer cursor-ring hidden md:block" />
    </>
  );
};

export default CustomCursor;
