import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('Iniciando sistema...');
  const [fadeOut, setFadeOut] = useState(false);

  const assets = [
    'https://lh3.googleusercontent.com/d/1p00D8Z8Fie2XSQB7YbzbKiyum-H_PQrF',
    'https://lh3.googleusercontent.com/d/1B_lFIE4L-vBrX6Yqqi7BiIhOCgJtxJMu',
    'https://lh3.googleusercontent.com/d/1MNxGUES-Vc7WHIYr5DpmZShU7B3eI8_E',
    'https://lh3.googleusercontent.com/d/1BsliUakXoEAvIi062c9JH-kXPu3_rjdc'
  ];

  useEffect(() => {
    let mounted = true;
    const startTime = Date.now();
    const minDuration = 3200; // 3.2 segundos para garantir o impacto visual

    // Lógica de Preloading de Imagens
    const preloadImages = async () => {
      const promises = assets.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Continua mesmo se falhar
        });
      });
      await Promise.all(promises);
    };

    // Animação do Contador
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    // Gestão de Mensagens
    const messageInterval = setInterval(() => {
      const messages = [
        'Sincronizando design...',
        'Otimizando performance...',
        'Carregando portfólio...',
        'Preparando experiência...',
        'Quase pronto...'
      ];
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 800);

    preloadImages().then(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDuration - elapsedTime);

      setTimeout(() => {
        if (mounted) {
          setFadeOut(true);
          setTimeout(onComplete, 800); // Tempo para a animação de fade
        }
      }, remainingTime);
    });

    return () => {
      mounted = false;
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950 transition-all duration-1000 ease-in-out ${fadeOut ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-[scan_2s_linear_infinite]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 relative">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-4 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-bounce">
            <Code2 className="h-10 w-10 text-white" />
          </div>
          <div className="absolute -inset-2 bg-cyan-500/20 blur-xl rounded-full animate-pulse"></div>
        </div>

        <div className="text-center">
          <div className="font-display text-6xl md:text-8xl font-black text-white tracking-tighter mb-2 flex items-baseline justify-center">
            <span className="tabular-nums">{progress}</span>
            <span className="text-cyan-500 text-2xl md:text-4xl ml-1">%</span>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-cyan-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 h-5">
              {message}
            </p>
            
            <div className="w-48 md:w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
};

export default Loader;