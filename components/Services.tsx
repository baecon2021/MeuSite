import React, { memo } from 'react';
import { Smartphone, Zap, Bot, DollarSign } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Bot className="h-7 w-7 md:h-8 md:w-8 text-cyan-400" />,
      title: "Integração com IA",
      description: "Chatbots de atendimento e automações inteligentes que elevam sua produtividade."
    },
    {
      icon: <Zap className="h-7 w-7 md:h-8 md:w-8 text-cyan-400" />,
      title: "Entrega Ágil",
      description: "Seu site online em tempo recorde mantendo o rigor técnico e estético absoluto."
    },
    {
      icon: <DollarSign className="h-7 w-7 md:h-8 md:w-8 text-cyan-400" />,
      title: "Investimento Inteligente",
      description: "Qualidade premium com foco total em ROI para o seu modelo de negócio."
    },
    {
      icon: <Smartphone className="h-7 w-7 md:h-8 md:w-8 text-cyan-400" />,
      title: "Conversion Focused",
      description: "Estrutura otimizada para anúncios que convertem cliques em faturamento real."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-navy-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10">
        <div className="text-left md:text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Crescimento digital sem atrito
          </h2>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl md:mx-auto leading-relaxed">
            Uma solução completa, do design à tecnologia, desenhada para quem não aceita o básico.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-navy-900/40 backdrop-blur-sm p-7 lg:p-8 rounded-2xl border border-white/5 hover:border-cyan-500/50 hover:bg-navy-800/60 transition-all duration-300 group">
              <div className="bg-cyan-500/10 w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/10">
                {service.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);