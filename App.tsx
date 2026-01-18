import React, { Suspense, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Loader from './components/ui/Loader';

// Lazy load non-critical sections
const Services = React.lazy(() => import('./components/Services'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Benefits = React.lazy(() => import('./components/Benefits'));
const AISection = React.lazy(() => import('./components/AISection'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));

const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center">
    <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Forçar o scroll para o topo no recarregamento para evitar saltos
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  return (
    <div className="bg-navy-950 text-slate-300 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen relative">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <CustomCursor />
      
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>
      
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          {/* Só renderiza o Hero se não estiver carregando para garantir o início das animações no tempo certo */}
          {!isLoading && <Hero />}
          
          <Suspense fallback={<SectionLoader />}>
            <Services />
            <Portfolio />
            <Benefits />
            <AISection />
            <About />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;