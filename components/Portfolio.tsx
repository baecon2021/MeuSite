import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Projetos Recentes
            </h2>
            <p className="text-lg text-slate-400 max-w-xl">
              Confira como transformo ideias em páginas de alta conversão.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Card */}
          <div className="group relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-video flex items-center justify-center bg-slate-800">
            {/* Real project image using direct path */}
            <img 
              src="components/images/hinove-project.png"
              alt="Hinove Consórcios Landing Page" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-navy-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <a 
                  href="https://hinoveconsorcios.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-navy-950 px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:shadow-lg hover:bg-cyan-50"
                >
                  Ver site ao vivo <ExternalLink className="h-4 w-4" />
                </a>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-cyan-900/30 border border-cyan-700/50 text-cyan-300 rounded-full text-sm font-semibold tracking-wide">
              Landing Page
            </div>
            <h3 className="text-3xl font-bold text-white">
              Hinove Consórcios
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Uma landing page estratégica focada totalmente na captação de leads qualificados para venda de consórcios.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-300">
                <span className="h-2 w-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></span>
                Design limpo e focado em conversão
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="h-2 w-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></span>
                Totalmente responsivo (Mobile First)
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <span className="h-2 w-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></span>
                Alta performance de carregamento
              </li>
            </ul>
            
            <div className="pt-4">
              <Button href="https://hinoveconsorcios.vercel.app" target="_blank" variant="outline">
                Acessar Projeto <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Future Projects Placeholder Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {[1, 2, 3].map((i) => (
                <div key={i} className="border-2 border-dashed border-slate-700 rounded-xl h-48 flex flex-col items-center justify-center text-slate-500 p-6 text-center hover:border-cyan-500/50 hover:text-cyan-400 transition-colors bg-white/5">
                    <span className="font-medium">Espaço reservado para seu projeto</span>
                    <span className="text-xs mt-2">Em breve</span>
                </div>
            ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6">Seu site pode ser o próximo destaque aqui.</p>
            <Button href="#contact">Solicitar meu orçamento agora</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;