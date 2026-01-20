import React, { memo } from 'react';
import { Zap, Layout, Search, Smartphone, Brain, PenTool } from 'lucide-react';
import Reveal from './ui/Reveal';
import Typewriter from './ui/Typewriter';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Design Estratégico",
      desc: "Não é apenas 'bonito'. É projetado psicologicamente para guiar o olho do cliente até o botão de compra."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Inteligência Artificial",
      desc: "Automações que respondem clientes e organizam processos. Tecnologia trabalhando para o seu lucro."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Perfection",
      desc: "80% do tráfego vem do celular. Seus clientes terão uma experiência fluida, sem zoom, sem travamentos."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Velocidade Extrema",
      desc: "Cada segundo de espera reduz 20% das vendas. Meus sites carregam instantaneamente para não perder ninguém."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Otimizado",
      desc: "Estrutura de código limpa que o Google ama, colocando sua marca na frente de quem está procurando."
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Copywriting",
      desc: "Textos que vendem. Ajudo a estruturar a mensagem para tocar na dor e apresentar sua solução."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
            <div className="mb-16 md:mb-20 max-w-2xl">
            <span className="font-serif italic text-xl text-secondary/60 mb-4 block">O Método</span>
            <h2 className="text-3xl lg:text-5xl font-light text-primary tracking-tight mb-6 min-h-[3em] lg:min-h-auto">
                Muito além do código. <br/>
                Entrego{' '}
                <Typewriter 
                    words={["crescimento.", "autoridade.", "performance.", "vendas.", "resultados."]} 
                    className="font-semibold text-primary"
                    typingSpeed={100}
                    deletingSpeed={30}
                    pauseTime={1500}
                />
            </h2>
            <p className="text-secondary font-light text-lg">
                Um site bonito que não vende é apenas arte digital. Meu processo une design minimalista, psicologia de vendas e performance técnica para criar máquinas de conversão.
            </p>
            </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.1} variant="blur" width="100%">
                <div className="h-full p-8 border border-line bg-surface hover:border-primary hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-500 group relative overflow-hidden md:border-opacity-100">
                
                {/* Mobile: Borda sempre ativa sutilmente. Desktop: Hover effect */}
                <div className="absolute inset-0 border border-primary opacity-5 md:opacity-0 md:group-hover:opacity-10 pointer-events-none transition-opacity duration-500"></div>

                {/* Corner Decoration */}
                <div className="absolute -top-[1px] -right-[1px] w-20 h-20 bg-surface border-l border-b border-line group-hover:border-l-primary group-hover:border-b-primary rounded-bl-[3rem] z-10 transition-colors duration-500"></div>
                
                <div className="text-primary mb-6 relative z-20 md:group-hover:scale-110 transition-transform origin-left">
                    {s.icon}
                </div>
                <h3 className="text-xl font-medium text-primary mb-4 relative z-20">{s.title}</h3>
                <p className="text-sm text-secondary leading-relaxed font-light relative z-20">
                    {s.desc}
                </p>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);