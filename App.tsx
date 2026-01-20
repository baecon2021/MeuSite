import React, { Suspense, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import Loader from './components/ui/Loader';

// Lazy load non-critical sections
const Services = React.lazy(() => import('./components/Services'));
const AISection = React.lazy(() => import('./components/AISection'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Importance = React.lazy(() => import('./components/Importance'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));

const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center">
    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
      
      {/* Grain Overlay - Performance otimizada com pointer-events-none */}
      <div className="fixed inset-0 bg-grain opacity-[0.03] pointer-events-none z-0 mix-blend-multiply will-change-transform"></div>
      
      {/* Main Wrapper */}
      <div className={`relative z-10 transition-opacity duration-1000 w-full overflow-x-hidden ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          {!isLoading && <Hero />}
          
          <Suspense fallback={<SectionLoader />}>
            <Importance />
            <Services />
            <AISection />
            <Portfolio />
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