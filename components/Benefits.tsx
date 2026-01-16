import React from 'react';
import { TrendingUp, ShieldCheck, Zap, Layout, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-cyan-400" />,
      title: "Mais clientes todos os dias",
      desc: "Estrutura pensada para transformar visitantes em contatos reais."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyan-400" />,
      title: "Credibilidade Profissional",
      desc: "Um design que passa confiança imediata para quem visita sua marca."
    },
    {
      icon: <Zap className="h-6 w-6 text-cyan-400" />,
      title: "Performance Ultra-Rápida",
      desc: "Ninguém gosta de site lento. Os meus carregam em instantes."
    },
    {
      icon: <Layout className="h-6 w-6 text-cyan-400" />,
      title: "Design Responsivo",
      desc: "Perfeito em celulares, tablets e computadores de qualquer tamanho."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-cyan-400" />,
      title: "Suporte e Ajustes",
      desc: "Não te abandono após a entrega. Suporte para pequenos ajustes."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-navy-950 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
              Por que investir em um site profissional comigo?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              A maioria dos sites hoje são lentos, feios ou não funcionam no celular. Eu resolvo isso entregando uma experiência premium por um valor que cabe no seu bolso.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{benefit.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-40 animate-pulse"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-white">Resultados reais</h3>
                <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-slate-700 pb-4">
                        <div>
                            <p className="text-slate-400 text-sm">Aumento de conversão médio</p>
                            <p className="text-3xl font-bold text-green-400">+150%</p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-green-400" />
                    </div>
                    <div className="flex justify-between items-end border-b border-slate-700 pb-4">
                        <div>
                            <p className="text-slate-400 text-sm">Velocidade de carregamento</p>
                            <p className="text-3xl font-bold text-blue-400">&lt; 2s</p>
                        </div>
                        <Zap className="h-8 w-8 text-blue-400" />
                    </div>
                    <div className="bg-blue-600/10 p-4 rounded-lg border border-blue-500/30">
                        <p className="text-sm text-blue-200 italic">"O site ficou incrível e meus clientes elogiam a facilidade de uso!"</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;