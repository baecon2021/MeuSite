import React from 'react';
import Button from './ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy-950">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[100px]" />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
          <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Disponível para novos projetos</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
          Sites Profissionais, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
            Rápidos e com IA Integrada.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Eu crio sites que não apenas impressionam visualmente, mas convertem visitantes em clientes. 
          Performance extrema, design futurista e automação inteligente por um custo acessível.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button href="#contact" variant="glow" className="w-full sm:w-auto text-lg px-8">
            Quero um site profissional <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button href="https://wa.me/554792491544" target="_blank" variant="outline" className="w-full sm:w-auto">
            Falar no WhatsApp
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-y-4 gap-x-8 text-sm font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-cyan-500" />
            <span>Otimizado para Vendas</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-cyan-500" />
            <span>Integração com IA</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-cyan-500" />
            <span>Suporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;