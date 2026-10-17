import { useEffect, useRef } from 'react';
import { 
  X, 
  ExternalLink, 
  Calendar, 
  Layers, 
  TrendingUp, 
  Database, 
  CheckCircle2, 
  FileText,
  Code
} from 'lucide-react';
import { GithubIcon as Github } from './Icons';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  const contentRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const cs = project.caseStudy;

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div
      className="fixed inset-0 z-9990 flex items-center justify-center bg-black/80 p-2 sm:p-4 md:p-6 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case Study: ${project.title}`}
    >
      <div
        className="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        ref={contentRef}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-cyan-500/10 px-2.5 py-1 text-xs font-mono font-semibold text-cyan-400 border border-cyan-500/20">
              {project.categoryBadge}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-white truncate max-w-md">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-300 hover:bg-slate-700 transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              aria-label="Close case study"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Hero Banner within Case Study */}
        <div className="p-6 sm:p-8 border-b border-slate-800 bg-gradient-to-b from-slate-950/70 to-slate-900">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Calendar className="h-3.5 w-3.5" />
            <span>Timeline: {project.timeline}</span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400 font-semibold">{project.status}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.tagline}
          </h1>

          {/* Quick Metrics Bar */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-xs text-slate-400 uppercase font-mono">Business Problem</span>
              <p className="mt-1 text-xs text-slate-200 line-clamp-2">{project.businessProblem}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-xs text-cyan-400 uppercase font-mono">Core Insight</span>
              <p className="mt-1 text-xs text-cyan-200 line-clamp-2">{project.keyInsight}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <span className="text-xs text-emerald-400 uppercase font-mono">Quantifiable Result</span>
              <p className="mt-1 text-xs text-emerald-200 line-clamp-2">{project.quantifiableResult}</p>
            </div>
          </div>
        </div>

        {/* Case Study Body with Side Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
          
          {/* Left Table of Contents */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-1 text-xs font-mono">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-2 font-bold">
                Table of Contents
              </span>
              <button onClick={() => scrollToSection('cs-overview')} className="block text-left w-full px-3 py-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60">
                1. Overview
              </button>
              <button onClick={() => scrollToSection('cs-problem')} className="block text-left w-full px-3 py-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60">
                2. Business Problem
              </button>
              <button onClick={() => scrollToSection('cs-dataset')} className="block text-left w-full px-3 py-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60">
                3. Dataset Architecture
              </button>
              <button onClick={() => scrollToSection('cs-cleaning')} className="block text-left w-full px-3 py-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60">
                4. Data Cleaning
              </button>
              <button onClick={() => scrollToSection('cs-modeling')} className="block text-left w-full px-3 py-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60">
                5. DAX & Modeling
              </button>
              <button onClick={() => scrollToSection('cs-insights')} className="block text-left w-full px-3 py-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60">
                6. Strategic Insights
              </button>
              <button onClick={() => scrollToSection('cs-impact')} className="block text-left w-full px-3 py-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60">
                7. Business Impact
              </button>
              <button onClick={() => scrollToSection('cs-learned')} className="block text-left w-full px-3 py-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60">
                8. Professional Reflection
              </button>
            </div>
          </div>

          {/* Right Main Narrative */}
          <div className="lg:col-span-9 space-y-10 text-slate-300">
            
            {/* 1. Overview */}
            <section id="cs-overview" className="scroll-mt-24">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
                <FileText className="h-5 w-5 text-cyan-400" />
                <span>1. Project Overview</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                {cs.overview}
              </p>
            </section>

            {/* 2. Business Problem */}
            <section id="cs-problem" className="scroll-mt-24">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-amber-400" />
                <span>2. The Business Problem & Friction</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                {cs.problem}
              </p>
            </section>

            {/* 3. Dataset */}
            <section id="cs-dataset" className="scroll-mt-24">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
                <Database className="h-5 w-5 text-blue-400" />
                <span>3. Dataset & Entity Structure</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                {cs.dataset}
              </p>
            </section>

            {/* 4. Cleaning */}
            <section id="cs-cleaning" className="scroll-mt-24">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
                <Layers className="h-5 w-5 text-emerald-400" />
                <span>4. Data Cleaning & Transformation</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                {cs.cleaning}
              </p>
            </section>

            {/* 5. DAX / SQL Highlights */}
            <section id="cs-modeling" className="scroll-mt-24">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
                <Code className="h-5 w-5 text-cyan-400" />
                <span>5. Data Modeling & Core Code Implementations</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300 mb-4">
                {cs.modeling}
              </p>

              <div className="space-y-4">
                {cs.daxHighlights?.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs">
                    <span className="text-cyan-400 font-bold block mb-2 text-xs">
                      {item.name}
                    </span>
                    <pre className="text-slate-300 overflow-x-auto leading-relaxed">
                      {item.code}
                    </pre>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Insights */}
            <section id="cs-insights" className="scroll-mt-24">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>6. Key Strategic Insights Discovered</span>
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {cs.insights?.map((ins, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-3.5 text-sm">
                    <span className="font-mono text-xs font-bold text-cyan-400 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <p className="text-slate-200">{ins}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Impact */}
            <section id="cs-impact" className="scroll-mt-24">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-indigo-400" />
                <span>7. Business Impact & Decisions Enabled</span>
              </h3>
              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-950/20 p-5 text-sm sm:text-base leading-relaxed text-indigo-200">
                {cs.impact}
              </div>
            </section>

            {/* 8. Learned */}
            <section id="cs-learned" className="scroll-mt-24 border-t border-slate-800 pt-6">
              <h3 className="text-lg font-bold text-white mb-2">
                8. Professional Reflection & Engineering Takeaway
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 italic">
                "{cs.whatILearned}"
              </p>
            </section>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 z-30 flex items-center justify-between border-t border-slate-800 bg-slate-900/95 px-6 py-4 backdrop-blur-md">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t, idx) => (
              <span key={idx} className="rounded-md bg-slate-800 px-2 py-0.5 text-[11px] font-mono text-slate-300">
                {t}
              </span>
            ))}
          </div>
          <button
            onClick={onClose}
            className="rounded-xl bg-cyan-600 hover:bg-cyan-500 px-5 py-2 text-xs font-semibold text-white transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
