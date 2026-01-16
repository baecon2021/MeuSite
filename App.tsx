import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatsAppBtn from './components/WhatsAppBtn';
import Footer from './components/Footer';

// Lazy load non-critical sections to improve initial load time
const Services = React.lazy(() => import('./components/Services'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Benefits = React.lazy(() => import('./components/Benefits'));
const AISection = React.lazy(() => import('./components/AISection'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));

// Lightweight loading placeholder
const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center">
    <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-navy-950 text-slate-300 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen relative">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          {/* Suspense wrapper handles the loading state of lazy components */}
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
        <WhatsAppBtn />
      </div>
    </div>
  );
};

export default App;