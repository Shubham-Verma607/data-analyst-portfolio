import { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  Award, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const typeIcons = {
  Education: GraduationCap,
  Leadership: Users,
  "Academic Achievement": Award
};

export default function ExperienceTimeline() {
  const [filter, setFilter] = useState('All');
  const [expandedIndices, setExpandedIndices] = useState([0, 1, 2]); // default expanded

  const filteredItems = experienceData.filter((item) => {
    if (filter === 'All') return true;
    return item.type === filter;
  });

  function toggleExpand(idx) {
    setExpandedIndices((prev) => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  }

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#07090e]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              Career & Professional Journey
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Education & Leadership Milestones
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Verified undergraduate academics, technical leadership, and collegiate hackathon coordination.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 self-start sm:self-auto">
            {['All', 'Education', 'Leadership'].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  filter === t
                    ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {filteredItems.map((item, idx) => {
            const Icon = typeIcons[item.type] || Award;
            const isExpanded = expandedIndices.includes(idx);

            return (
              <div key={idx} className="relative group">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1 h-9 w-9 rounded-2xl border-2 border-white dark:border-slate-900 bg-cyan-500 text-white flex items-center justify-center shadow-md shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <Icon className="h-4 w-4" />
                </div>

                {/* Timeline Card */}
                <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all">
                  
                  {/* Top Bar: Role, Org, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                          <MapPin className="h-3 w-3" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {item.organization}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-xl border border-slate-200 dark:border-slate-700">
                        <Calendar className="h-3.5 w-3.5 text-cyan-500" />
                        <span>{item.period}</span>
                      </div>
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        aria-label={isExpanded ? "Collapse details" : "Expand details"}
                      >
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Expandable Responsibilities & Outcomes */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 animate-in fade-in">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Key Responsibilities & Verified Outcomes:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.skills.map((sk, skIdx) => (
                          <span
                            key={skIdx}
                            className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
