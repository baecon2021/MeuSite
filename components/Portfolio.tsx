import React, { useState, memo } from 'react';
import { ExternalLink, ArrowRight, LayoutTemplate, Layers } from 'lucide-react';
import Button from './ui/Button';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
  tags: string[];
}

const ProjectCard = memo(({ project }: { project: Project }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="group relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video flex items-center justify-center bg-navy-900 w-full">
        <img 
          src={imgError ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop' : project.image}
          alt={`Projeto: ${project.title}`}
          width="800"
          height="450"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          onError={() => setImgError(true)}
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
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-900/20 border border-cyan-500/30 text-cyan-300 rounded-full text-xs md:text-sm font-semibold tracking-wide">
          <LayoutTemplate className="h-3 w-3" />
          {project.category}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">{project.description}</p>
        <ul className="space-y-3">
          {project.tags.map((tag, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm md:text-base">
              <span className="mt-1.5 h-1.5 w-1.5 min-w-[6px] bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></span>
              {tag}
            </li>
          ))}
        </ul>
        <div className="pt-4">
          <Button href={project.link} target="_blank" variant="outline" fullWidth={true} className="md:w-auto border-white/20 hover:bg-navy-900 text-white">
            Acessar Projeto <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
});

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Batata Bistrô",
      category: "Landing Page",
      image: "https://lh3.googleusercontent.com/d/1MNxGUES-Vc7WHIYr5DpmZShU7B3eI8_E",
      link: "https://batatabistro.vercel.app",
      description: "Site premium desenvolvido para o setor gastronômico, unindo luxo e simplicidade para criar uma experiência de reserva encantadora.",
      tags: ["Design Gastronômico de Luxo", "Foco em Experiência do Usuário", "Otimizado para Conversão e Reservas"]
    },
    {
      id: 2,
      title: "Hinove Consórcios",
      category: "Landing Page",
      image: "https://lh3.googleusercontent.com/d/1BsliUakXoEAvIi062c9JH-kXPu3_rjdc",
      link: "https://hinoveconsorcios.vercel.app",
      description: "Uma landing page estratégica focada totalmente na captação de leads qualificados para venda de consórcios.",
      tags: ["Design limpo e focado em conversão", "Totalmente responsivo (Mobile First)", "Alta performance de carregamento"]
    }
  ];
  
  const filters = ['Todos', 'Landing Page'];
  const filteredProjects = activeFilter === 'Todos' ? projects : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-navy-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projetos Recentes</h2>
            <p className="text-base md:text-lg text-slate-400 max-w-xl">Confira como transformo ideias em páginas de alta conversão.</p>
          </div>
        </div>
        <div className="flex overflow-x-auto pb-4 md:pb-0 gap-3 mb-8 md:mb-12 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-navy-900 border-navy-800 text-slate-400 hover:border-slate-600 hover:text-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-16 lg:gap-24">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
          ) : (
            <div className="py-20 text-center border border-dashed border-navy-800 rounded-2xl bg-navy-900/30">
              <Layers className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400 text-lg">Nenhum projeto encontrado nesta categoria ainda.</p>
            </div>
          )}
        </div>
        
        <div className="mt-16 md:mt-24 text-center">
            <p className="text-slate-400 mb-6 px-4">Seu site pode ser o próximo destaque aqui.</p>
            <Button href="#contact" fullWidth={true} className="md:w-auto">Solicitar meu orçamento agora</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;