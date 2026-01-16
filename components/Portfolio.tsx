import React, { useState } from 'react';
import { ExternalLink, ArrowRight, LayoutTemplate, Layers } from 'lucide-react';
import Button from './ui/Button';

// Definição dos tipos dos projetos
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
  tags: string[];
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  // Dados dos projetos
  const projects: Project[] = [
    {
      id: 1,
      title: "Hinove Consórcios",
      category: "Landing Page",
      image: "/images/hinove-project.png",
      link: "https://hinoveconsorcios.vercel.app",
      description: "Uma landing page estratégica focada totalmente na captação de leads qualificados para venda de consórcios.",
      tags: [
        "Design limpo e focado em conversão",
        "Totalmente responsivo (Mobile First)",
        "Alta performance de carregamento"
      ]
    }
  ];

  // Opções de filtro
  const filters = ['Todos', 'Landing Page'];

  // Lógica de filtragem
  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Projetos Recentes
            </h2>
            <p className="text-lg text-slate-400 max-w-xl">
              Confira como transformo ideias em páginas de alta conversão.
            </p>
          </div>
        </div>

        {/* Sistema de Filtros */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Lista de Projetos Filtrados */}
        <div className="flex flex-col gap-12">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Project Card */}
                <div className="group relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-video flex items-center justify-center bg-slate-800">
                  <img 
                    src={project.image}
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-navy-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <a 
                        href={project.link} 
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/30 border border-cyan-700/50 text-cyan-300 rounded-full text-sm font-semibold tracking-wide">
                    <LayoutTemplate className="h-3 w-3" />
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="space-y-3">
                    {project.tags.map((tag, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-300">
                        <span className="h-2 w-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></span>
                        {tag}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <Button href={project.link} target="_blank" variant="outline">
                      Acessar Projeto <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center border border-dashed border-slate-700 rounded-2xl bg-slate-900/30">
              <Layers className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400 text-lg">Nenhum projeto encontrado nesta categoria ainda.</p>
            </div>
          )}
        </div>

        {/* Future Projects Placeholder Grid (Mantido visualmente separado) */}
        <div className="mt-20">
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Em breve</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="border-2 border-dashed border-slate-700 rounded-xl h-48 flex flex-col items-center justify-center text-slate-500 p-6 text-center hover:border-cyan-500/50 hover:text-cyan-400 transition-colors bg-white/5">
                        <span className="font-medium">Novo Projeto</span>
                        <span className="text-xs mt-2">Carregando...</span>
                    </div>
                ))}
            </div>
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