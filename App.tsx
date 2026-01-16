import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Benefits from './components/Benefits';
import AISection from './components/AISection';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppBtn from './components/WhatsAppBtn';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-navy-950 text-slate-300 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen relative">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Benefits />
          <AISection />
          <About />
          <Contact />
        </main>
        <Footer />
        <WhatsAppBtn />
      </div>
    </div>
  );
};

export default App;