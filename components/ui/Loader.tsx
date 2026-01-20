import React, { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let mounted = true;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    setTimeout(() => {
      if (mounted) {
        setFadeOut(true);
        setTimeout(onComplete, 800);
      }
    }, 2500);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-1000 ease-in-out ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-center">
          <div className="font-display text-8xl font-black text-primary tracking-tighter mb-4 flex items-baseline justify-center">
            <span className="tabular-nums">{progress}</span>
            <span className="text-secondary text-4xl ml-1">%</span>
          </div>
          <div className="w-64 h-[1px] bg-neutral-200 overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;