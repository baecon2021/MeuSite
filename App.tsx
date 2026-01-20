import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Loader from './components/ui/Loader';
import Services from './components/Services';
import AISection from './components/AISection';
import Portfolio from './components/Portfolio';
import Importance from './components/Importance';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on refresh
    if (isLoading) {
       window.scrollTo(0, 0);
    }
  }, [isLoading]);

  return (
    <div className="bg-background text-secondary min-h-screen relative selection:bg-primary selection:text-white font-sans antialiased">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      {/* Componentes Globais de UI */}
      <CustomCursor />
      
      {/* Grain Overlay - Performance otimizada: translate-z-0 força GPU layer, evitando repaints da página toda */}
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none z-0 mix-blend-multiply transform-gpu translate-z-0"></div>
      
      {/* Main Wrapper */}
      <div className={`relative z-10 transition-opacity duration-1000 w-full overflow-x-hidden ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          <Hero />
          <Importance />
          <Services />
          <AISection />
          <Portfolio />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;