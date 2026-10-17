import { 
  Binary, 
  BarChart3, 
  Database, 
  LayoutDashboard, 
  TrendingUp, 
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { recruiterSnapshot } from '../data/portfolioData';

const iconMap = {
  Binary,
  BarChart3,
  Database,
  LayoutDashboard,
  TrendingUp,
  Sparkles
};

export default function RecruiterSnapshot({ onOpenRecruiterModal, onOpenCaseStudyById }) {
  return (
    <section id="recruiter" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0a0d14]/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Evidence-Based Competency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {recruiterSnapshot.title}
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              {recruiterSnapshot.subtitle}
            </p>
          </div>

          <button
            onClick={onOpenRecruiterModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-amber-600 dark:text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all self-start md:self-auto shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>Open 30-Second Executive Summary</span>
          </button>
        </div>

        {/* 6 High-Impact Evidence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recruiterSnapshot.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || BarChart3;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Metric Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-11 w-11 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {pillar.metric}
                    </span>
                  </div>

                  {/* Title & Skills */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {pillar.category}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-1.5 mb-4">
                    {pillar.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Evidence Text */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.evidence}
                  </p>
                </div>

                {/* Evidence Verification Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Verified Project Artifact</span>
                  </span>
                  
                  <a
                    href="#projects"
                    className="text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 flex items-center gap-1 font-semibold group/link"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
