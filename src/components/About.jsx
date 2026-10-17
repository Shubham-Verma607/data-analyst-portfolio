import { 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  Code2, 
  TrendingUp, 
  Database, 
  BarChart3,
  Calendar
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#07090e]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            Background & Technical Foundation
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Rigor Meets Business Analytical Thinking
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A look into who I am, how I approach complex enterprise datasets, and the philosophies guiding my analytical work.
          </p>
        </div>

        {/* 2-Column Split: Who I Am + What I Do */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Credential Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              {/* Decorative Ring Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
              
              {/* Photo Container */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full max-w-sm h-[400px] object-cover object-top transition-transform duration-500 group-hover:scale-103"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-black/60 backdrop-blur-md p-3.5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold">{personalInfo.name}</div>
                      <div className="text-xs text-cyan-300 font-mono">B.Tech (CSE) • Data Analyst</div>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      <CheckCircle2 className="h-3 w-3" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Education Badge */}
            <div className="mt-6 w-full max-w-sm rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    AKTU / R.V. Institute of Technology
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    B.Tech in Computer Science & Engineering
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-[10px] text-amber-500 font-semibold font-mono">
                    <span>Class XII (UP Board): 91.6% Distinction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Block 1: Who I Am */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-6 sm:p-7">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-2 mb-2">
                <Code2 className="h-4 w-4" />
                <span>Who I Am</span>
              </h3>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                A Computer Science background specialized in Business Intelligence & Analytical Modeling.
              </h4>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                I am a data analyst who bridges engineering capability with business acumen. With a solid foundation in computer science and database management systems, I look past raw table schemas to understand the real-world operational workflows behind the numbers.
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether writing complex SQL queries for multi-dimensional aggregation or modeling star-schemas in Power BI with optimized DAX, my focus is always on creating trusted, repeatable metrics that help founders and stakeholders make decisions with confidence.
              </p>
            </div>

            {/* Block 2: What I Do */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-6 sm:p-7">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4" />
                <span>What I Do</span>
              </h3>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Solving the 3 critical problems companies face with their data:
              </h4>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <div className="text-cyan-500 font-bold text-sm">1. Dirty & Inconsistent Feeds</div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Fixing fragmented categories, inconsistent schemas, and outlier noise using rigorous SQL transformations.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <div className="text-blue-500 font-bold text-sm">2. Fragile Spreadsheet Chaos</div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Transitioning ad-hoc Excel sheets into structured star-schema relational data models in Power BI.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <div className="text-emerald-500 font-bold text-sm">3. Insight Delivery Friction</div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Designing executive-level cockpits with clear visual hierarchy, eliminating chart-junk and ambiguity.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
