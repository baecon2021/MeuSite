import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Feedback visual ativado por 2 segundos
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);

    // Formatação profissional da mensagem
    const message = 
`Olá Anthony! 👋 Vi seu portfólio e gostaria de um orçamento.

*Meus dados:*
Nome: ${formState.name}
Email: ${formState.email}
Whatsapp: ${formState.whatsapp}

*Sobre o projeto:*
${formState.message}`;

    // Codificação correta para URL (essencial para funcionar em todos dispositivos)
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/554792491544?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div>
            <Reveal variant="slide">
                <span className="font-serif italic text-xl text-secondary/60 mb-4 block">Próximo Passo</span>
                <h2 className="text-4xl md:text-5xl font-light text-primary mb-6 tracking-tight">
                    Pare de adiar o <br/><span className="font-medium">inevitável</span>.
                </h2>
                <p className="text-secondary text-lg mb-10 max-w-md font-light leading-relaxed">
                Cada dia sem um posicionamento digital forte é dinheiro deixado na mesa. Vamos construir a versão mais lucrativa da sua marca, agora.
                </p>
                
                <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3 text-secondary font-light">
                        <div className="bg-neutral-100 p-1 rounded-full"><Check className="h-3 w-3 text-primary" /></div>
                        <span>Orçamento personalizado sem compromisso</span>
                    </div>
                    <div className="flex items-center gap-3 text-secondary font-light">
                        <div className="bg-neutral-100 p-1 rounded-full"><Check className="h-3 w-3 text-primary" /></div>
                        <span>Análise da sua presença atual</span>
                    </div>
                </div>

                <div className="space-y-4 text-primary font-medium border-l border-line pl-6">
                    <a href="mailto:anthonybanharavelho@gmail.com" className="flex items-center gap-2 hover:translate-x-2 transition-transform group">
                        <span className="text-sm uppercase tracking-wider text-secondary/50 group-hover:text-primary transition-colors">Email</span>
                        anthonybanharavelho@gmail.com
                    </a>
                </div>
            </Reveal>
          </div>

          <div className="lg:pt-8">
            <Reveal delay={0.2} variant="blur">
                <form onSubmit={handleSubmit} className="space-y-8 p-6 md:p-8 bg-background border border-line shadow-sm">
                    {/* Grid ajustado para MD (Tablets) também usar 2 colunas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nome"
                                className="w-full bg-transparent border-b border-neutral-300 py-4 text-primary placeholder-neutral-400 focus:outline-none focus:border-primary transition-colors font-light text-base md:text-sm"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="group relative">
                            <input
                                type="tel"
                                name="whatsapp"
                                placeholder="WhatsApp"
                                className="w-full bg-transparent border-b border-neutral-300 py-4 text-primary placeholder-neutral-400 focus:outline-none focus:border-primary transition-colors font-light text-base md:text-sm"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="group relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail Corporativo"
                            className="w-full bg-transparent border-b border-neutral-300 py-4 text-primary placeholder-neutral-400 focus:outline-none focus:border-primary transition-colors font-light text-base md:text-sm"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="group relative">
                        <textarea
                            name="message"
                            rows={3}
                            placeholder="Descreva brevemente seu projeto..."
                            className="w-full bg-transparent border-b border-neutral-300 py-4 text-primary placeholder-neutral-400 focus:outline-none focus:border-primary transition-colors resize-none font-light text-base md:text-sm"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <Button type="submit" className="mt-4 w-full md:w-auto h-14 md:h-auto min-w-[220px]">
                        {showSuccess ? (
                          <span className="flex items-center gap-2 animate-[scaleIn_0.3s_ease-out]">
                            Mensagem Enviada <Check className="h-4 w-4 text-white" />
                          </span>
                        ) : (
                          <>
                            Iniciar Transformação <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                    </Button>
                </form>
            </Reveal>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Contact;