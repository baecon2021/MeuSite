import React, { memo } from 'react';
import { Smartphone, Zap, Bot, DollarSign } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-cyan-400" />,
      title: "Integração com IA",
      description: "Chatbots inteligentes, automações de atendimento e formulários que se adaptam ao cliente."
    },
    {
      icon: <Zap className="h-8 w-8 text-cyan-400" />,
      title: "Entrega Rápida",
      description: "Seu site no ar em tempo recorde sem perder a qualidade visual e técnica."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-cyan-400" />,
      title: "Custo-Benefício",
      description: "Qualidade de agência grande com preço acessível. O melhor investimento para seu negócio."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-cyan-400" />,
      title: "Pronto para Anúncios",
      description: "Estrutura otimizada para campanhas de Google Ads e Instagram Ads converterem mais."
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-navy-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tudo o que você precisa para crescer online
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            Não é apenas um site. É uma ferramenta de vendas completa, moderna e preparada para o futuro.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-navy-900/40 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-white/5 hover:border-cyan-500/50 hover:bg-navy-800/60 transition-all duration-300 group">
              <div className="bg-cyan-500/10 w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/10">
                {service.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3">{service.title}</h3>
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