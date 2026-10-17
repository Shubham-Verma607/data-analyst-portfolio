import { useState } from 'react';
import { 
  FolderKanban, 
  ExternalLink, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  CheckCircle2, 
  Calendar,
  BarChart3,
  Database,
  Code2
} from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onOpenCaseStudy }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'Power BI', label: 'Power BI & BI' },
    { id: 'SQL', label: 'SQL & Database' },
    { id: 'Python', label: 'Python & AI' },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'Power BI') return p.technologies.includes('Power BI') || p.categoryBadge.includes('Power BI') || p.categoryBadge.includes('BI');
    if (activeFilter === 'SQL') return p.technologies.some(t => t.includes('SQL')) || p.categoryBadge.includes('SQL');
    if (activeFilter === 'Python') return p.technologies.includes('Python') || p.technologies.includes('Flask');
    return true;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0a0d14]/70">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              Verified Project Showcase
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Analytical Case Studies & Dashboards
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Real problem statements, real data models, and verified execution. Inspect end-to-end case studies detailing datasets, cleaning logic, DAX measures, and business decisions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-200/80 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-300 dark:border-slate-800">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === opt.id
                    ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 overflow-hidden shadow-sm hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Card Header & Content */}
              <div className="p-6 sm:p-8">
                {/* Meta Row: Status, Timeline, Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 px-3 py-1 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {project.categoryBadge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {project.timeline}
                    </span>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-cyan-700 dark:text-cyan-300/90 font-medium">
                  {project.tagline}
                </p>

                {/* Structured Evidence Blocks */}
                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-950/50 p-3.5">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Business Problem
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.businessProblem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-950/50 p-3.5">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-500 mb-0.5">
                      Key Insight Discovered
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.keyInsight}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-950/50 p-3.5">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-500 mb-0.5">
                      Quantifiable Outcome
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {project.quantifiableResult}
                    </p>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                      <span>Repository</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 transition-all hover:scale-102"
                >
                  <span>Read Detailed Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
