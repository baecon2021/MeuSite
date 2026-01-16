import React from 'react';
import { Bot, MessageSquare, Sparkles } from 'lucide-react';

const AISection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-navy-950 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-900/30 border border-purple-700/50 text-purple-300 font-semibold text-sm mb-4">
            Inovação Exclusiva
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Potencialize seu site com Inteligência Artificial
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Não construo apenas sites estáticos. Integro soluções de IA que trabalham por você enquanto você dorme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Bot className="h-24 w-24 text-purple-500" />
            </div>
            <div className="bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-purple-500/20">
              <Bot className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Chatbots Inteligentes</h3>
            <p className="text-slate-400">
              Atenda clientes 24h por dia, tire dúvidas frequentes e qualifique leads antes mesmo de você falar com eles.
            </p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all duration-300 relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sparkles className="h-24 w-24 text-blue-500" />
            </div>
            <div className="bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-blue-500/20">
              <Sparkles className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Formulários Dinâmicos</h3>
            <p className="text-slate-400">
              Perguntas que se adaptam conforme a resposta do cliente, aumentando a taxa de preenchimento e conversão.
            </p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-green-500/50 transition-all duration-300 relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageSquare className="h-24 w-24 text-green-500" />
            </div>
            <div className="bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-green-500/20">
              <MessageSquare className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Respostas Automáticas</h3>
            <p className="text-slate-400">
              Sugestões automáticas de respostas rápidas para WhatsApp e E-mail, economizando seu tempo de gestão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;