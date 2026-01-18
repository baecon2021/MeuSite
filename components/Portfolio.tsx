import React, { memo, useMemo } from 'react';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image?: string;
  link: string;
  gradient: string;
  isPlaceholder?: boolean;
}

const ProjectCard = memo(({ project }: { project: Project }) => {
  return (
    <div className="group relative flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out will-change-transform">
      {/* Container Principal Otimizado para GPU */}
      <div 
        className={`relative w-full aspect-[4/5] md:aspect-[3/4.5] rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden transition-all duration-700 group-hover:scale-[0.97] flex flex-col items-center pt-8 px-5 pb-8 shadow-2xl translate-z-0`}
        style={{ background: project.gradient }}
      >
        {/* Camada de Textura e Profundidade */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/20 blur-[100px] rounded-full group-hover:bg-white/30 transition-colors pointer-events-none"></div>

        {/* Brand Header (Glass Pill) */}
        <div className="relative z-20 mb-8 w-full max-w-[260px]">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl py-3 px-2 text-center group-hover:bg-white/20 transition-all shadow-lg">
            <h3 className="text-lg md:text-2xl font-black text-white tracking-tighter uppercase italic leading-none drop-shadow-md">
              {project.title}
            </h3>
            <div className="flex items-center justify-center gap-1.5 mt-1.5">
               <span className="w-1 h-1 rounded-full bg-white/50 animate-pulse"></span>
               <span className="text-[8px] text-white/70 uppercase font-black tracking-[0.2em]">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Image Showcase (Floating 3D Perspective) */}
        <div className="relative w-full flex-1 flex items-end justify-center perspective-1000">
          {project.isPlaceholder ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="bg-white/10 p-8 rounded-[2rem] border border-white/20 backdrop-blur-md group-hover:rotate-[15deg] transition-all duration-700 shadow-xl">
                <Sparkles className="h-10 w-10 text-white/90 animate-pulse" />
              </div>
              <p className="text-white font-black text-[10px] uppercase tracking-[0.2em] opacity-80">Próxima Parada</p>
            </div>
          ) : (
            <div className="relative w-[105%] md:w-[110%] aspect-video bg-navy-950 rounded-lg border-[3px] md:border-[4px] border-white/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] overflow-hidden transform translate-z-0 group-hover:-translate-y-6 md:group-hover:-translate-y-8 group-hover:rotate-1 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover select-none"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"></div>
            </div>
          )}
        </div>

        {/* Action Reveal */}
        <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-navy-950/40 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center pointer-events-none group-hover:pointer-events-auto">
            <h4 className="text-white font-black text-2xl md:text-3xl mb-5 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 italic uppercase">
                {project.isPlaceholder ? 'Sua marca em foco' : 'Design de Elite'}
            </h4>
            <a 
              href={project.link}
              target={project.isPlaceholder ? "_self" : "_blank"}
              rel={project.isPlaceholder ? "" : "noopener noreferrer"}
              className="bg-white text-navy-950 px-8 py-3.5 md:px-12 md:py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest shadow-2xl flex items-center gap-2.5 transform scale-90 group-hover:scale-100 transition-all hover:bg-white/90 active:scale-95"
              onClick={(e) => {
                if (project.isPlaceholder) {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {project.isPlaceholder ? 'Começar' : 'Ver Site'}
              {project.isPlaceholder ? <ArrowRight className="h-4 w-4 md:h-5 md:w-5" /> : <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />}
            </a>
        </div>
      </div>
    </div>
  );
});

const Portfolio: React.FC = () => {
  const projects = useMemo((): Project[] => [
    {
      id: 1,
      title: "Batata Bistrô",
      category: "Alta Gastronomia",
      image: "https://lh3.googleusercontent.com/d/1MNxGUES-Vc7WHIYr5DpmZShU7B3eI8_E",
      link: "https://batatabistro.vercel.app",
      gradient: "linear-gradient(135deg, #78350f 0%, #b45309 100%)"
    },
    {
      id: 2,
      title: "Consórcio Hinove",
      category: "Setor Financeiro",
      image: "https://lh3.googleusercontent.com/d/1BsliUakXoEAvIi062c9JH-kXPu3_rjdc",
      link: "https://hinoveconsorcios.vercel.app",
      gradient: "linear-gradient(135deg, #064e3b 0%, #059669 100%)"
    },
    {
      id: 3,
      title: "Seu projeto aqui",
      category: "Próximo Case",
      link: "#contact",
      gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      isPlaceholder: true
    }
  ], []);

  return (
    <section id="portfolio" className="py-20 lg:py-40 bg-navy-950 relative overflow-hidden content-visibility-auto">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2 will-change-[filter,opacity]"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-2xl text-left">
            <span className="text-cyan-500 font-black tracking-[0.4em] uppercase text-[9px] mb-4 block bg-cyan-500/10 px-3 py-1.5 rounded-full w-fit">Curated Works</span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.9] md:leading-[0.85]">
              Portfolio <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Select</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base md:text-xl max-w-sm text-left md:text-right font-medium leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-cyan-500/30 pl-5 md:pl-0 md:pr-6">
            Projetos de alto impacto que transformam a percepção digital da sua marca.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);