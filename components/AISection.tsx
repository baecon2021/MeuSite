import React from 'react';
import { MessageSquare, Users, Zap, ArrowRight } from 'lucide-react';
import Reveal from './ui/Reveal';

const AISection: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      label: "PASSO 01",
      title: "Captação Automática",
      desc: "Seu site não dorme. Capture contatos e tire dúvidas básicas 24h por dia, garantindo que nenhum cliente fique sem resposta fora do horário comercial."
    },
    {
      icon: <Users className="h-6 w-6" />,
      label: "PASSO 02",
      title: "Filtro de Clientes",
      desc: "Pare de perder tempo com curiosos. Formulários estratégicos qualificam quem tem real potencial de compra antes mesmo de chegar até você."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      label: "PASSO 03",
      title: "Integração Imediata",
      desc: "Conecte o site direto ao seu WhatsApp ou CRM. O cliente preenche os dados e a notificação chega na sua tela instantaneamente para o fechamento."
    }
  ];

  return (
    <section 
        data-cursor-inverse="true"
        className="bg-primary text-surface py-20 md:py-24 lg:py-32 relative overflow-hidden border-t border-white/10"
    >
      
      {/* Background Grid Sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Estrutural */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 lg:mb-20 border-b border-white/10 pb-12">
            <div className="lg:col-span-7">
                <Reveal>
                    <span className="font-mono text-xs text-neutral-500 tracking-widest mb-4 block">
                        /// SYSTEM_OPTIMIZATION
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-white mb-6">
                        Máquina de <br />
                        <span className="text-neutral-500">Vendas.</span>
                    </h2>
                </Reveal>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
                <Reveal delay={0.2} variant="slide">
                    <p className="text-neutral-400 font-light leading-relaxed text-lg border-l border-white/10 pl-6">
                        Esqueça a complexidade. Transformo seu site em uma ferramenta simples que trabalha por você: atrai, filtra e entrega o cliente pronto para fechar negócio.
                    </p>
                </Reveal>
            </div>
        </div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-white/10">
            {features.map((feature, idx) => (
                <Reveal key={idx} delay={idx * 0.1} variant="blur" width="100%">
                    <div className="group border-r border-b border-t md:border-t-0 border-white/10 p-8 md:p-8 lg:p-12 hover:bg-white/5 transition-colors duration-500 h-full flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-8">
                                <div className="text-white opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                    {feature.icon}
                                </div>
                                <span className="font-mono text-[10px] text-neutral-600 border border-neutral-800 px-2 py-1 rounded-sm">
                                    {feature.label}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-medium text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                {feature.desc}
                            </p>
                        </div>

                        <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-xs font-mono text-white/60">
                            <span>DETALHES</span>
                            <ArrowRight className="w-3 h-3" />
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>

      </div>
    </section>
  );
};

export default AISection;