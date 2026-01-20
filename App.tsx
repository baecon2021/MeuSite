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
      
      {/* Grain Overlay */}
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none z-0 mix-blend-multiply transform-gpu translate-z-0"></div>
      
      {/* Main Wrapper - Removida a transição de opacidade aqui para o Hero cuidar do seu próprio reveal de forma mais imersiva */}
      <div className={`relative z-10 w-full overflow-x-hidden ${isLoading ? 'hidden' : 'block'}`}>
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