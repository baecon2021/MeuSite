import React, { useEffect, useRef, memo } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailingRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: 0, y: 0 });
  const trailing = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });
  const isInitialized = useRef(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    document.documentElement.classList.add('custom-cursor-active');

    const cursorEl = cursorRef.current;
    const trailingEl = trailingRef.current;
    
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isInitialized.current) {
        cursor.current.x = e.clientX;
        cursor.current.y = e.clientY;
        trailing.current.x = e.clientX;
        trailing.current.y = e.clientY;
        isInitialized.current = true;
        if (cursorEl) cursorEl.style.opacity = '1';
        if (trailingEl) trailingEl.style.opacity = '1';
      }
    };

    const handleInteraction = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest('a, button, input, textarea, [role="button"]');
      const isInverse = !!target.closest('[data-cursor-inverse="true"]');

      if (trailingEl) {
        trailingEl.classList.toggle('is-hovering', isInteractive);
        trailingEl.classList.toggle('is-inverse', isInverse);
      }
      if (cursorEl) {
        cursorEl.classList.toggle('is-inverse', isInverse);
        cursorEl.style.transform = isInteractive ? 'scale(0)' : 'scale(1)';
      }
    };

    let rafId: number;
    const animate = () => {
      cursor.current.x += (mouse.current.x - cursor.current.x) * 0.5; 
      cursor.current.y += (mouse.current.y - cursor.current.y) * 0.5;
      trailing.current.x += (mouse.current.x - trailing.current.x) * 0.15;
      trailing.current.y += (mouse.current.y - trailing.current.y) * 0.15;

      if (cursorEl) cursorEl.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0)`;
      if (trailingEl) trailingEl.style.transform = `translate3d(${trailing.current.x}px, ${trailing.current.y}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', handleInteraction, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleInteraction);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-dot, .cursor-ring {
          position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999; opacity: 0;
          transition: background-color 0.3s, border-color 0.3s, width 0.3s, height 0.3s, opacity 0.5s, transform 0.1s ease-out;
          will-change: transform;
        }
        .cursor-dot { width: 6px; height: 6px; background-color: #0A0A0A; border-radius: 50%; margin: -3px 0 0 -3px; }
        .cursor-ring { width: 40px; height: 40px; border: 1px solid rgba(10, 10, 10, 0.15); border-radius: 50%; margin: -20px 0 0 -20px; }
        .cursor-ring.is-hovering { width: 64px; height: 64px; margin: -32px 0 0 -32px; background: rgba(10, 10, 10, 0.03); border-color: #0A0A0A; }
        .is-inverse.cursor-dot { background-color: #FFFFFF; }
        .is-inverse.cursor-ring { border-color: rgba(255, 255, 255, 0.3); }
        .is-inverse.cursor-ring.is-hovering { background: rgba(255, 255, 255, 0.05); border-color: #FFFFFF; }
      `}</style>
      <div ref={cursorRef} className="cursor-dot hidden md:block" />
      <div ref={trailingRef} className="cursor-ring hidden md:block" />
    </>
  );
};

export default memo(CustomCursor);