import { X, Download, Mail, ExternalLink, Award, CheckCircle2, FileText, Sparkles, Building, MapPin } from 'lucide-react';
import { personalInfo, recruiterSnapshot, projectsData } from '../data/portfolioData';

export default function RecruiterQuickViewModal({ isOpen, onClose, onOpenCaseStudy, onShowToast }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-9990 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Recruiter 30-Second Executive Snapshot"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-cyan-500/30 bg-slate-900/95 p-6 sm:p-8 text-slate-100 shadow-2xl backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="h-16 w-16 rounded-2xl object-cover ring-2 ring-cyan-500/40"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {personalInfo.status}
              </span>
              <span className="text-xs text-slate-400">⚡ 30-Second Recruiter Summary</span>
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white">
              {personalInfo.name}
            </h2>
            <p className="text-sm text-cyan-400 font-mono">
              Target: Data Analyst • Power BI Developer • SQL Analyst
            </p>
          </div>
        </div>

        {/* 30-Sec Fast Facts Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5">
            <span className="text-xs text-slate-400">Core Tools</span>
            <p className="mt-1 text-sm font-semibold text-white">Power BI • SQL • Python • Excel</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5">
            <span className="text-xs text-slate-400">Data Scale</span>
            <p className="mt-1 text-sm font-semibold text-emerald-400">8,500+ Cleaned Rows</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5">
            <span className="text-xs text-slate-400">Certifications</span>
            <p className="mt-1 text-sm font-semibold text-cyan-300">Kaggle SQL • TCS iON</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-3.5">
            <span className="text-xs text-slate-400">Academic Standing</span>
            <p className="mt-1 text-sm font-semibold text-amber-300">91.6% Distinction</p>
          </div>
        </div>

        {/* Candidate Value Proposition */}
        <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/30 to-blue-950/30 p-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
            Direct Business Value
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
            I don't just produce charts; I design star-schema dimensional models, formulate precision DAX measures, normalize inconsistent transaction feeds in SQL, and construct executive cockpits answering bottom-line margin and volume questions.
          </p>
        </div>

        {/* Top 2 Production Case Studies */}
        <div className="mt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
            Key Verified Work (Click to Inspect)
          </h3>
          <div className="space-y-3">
            {projectsData.slice(0, 2).map((proj) => (
              <div
                key={proj.id}
                onClick={() => {
                  onClose();
                  onOpenCaseStudy(proj);
                }}
                className="group flex cursor-pointer items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 p-3.5 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white group-hover:text-cyan-300 text-sm">
                      {proj.title}
                    </span>
                    <span className="rounded bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-400 font-mono">
                      {proj.categoryBadge}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400 line-clamp-1">
                    {proj.keyInsight}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 shrink-0 ml-3" />
              </div>
            ))}
          </div>
        </div>

        {/* Verified Credentials */}
        <div className="mt-6 border-t border-slate-800 pt-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
            Verified Credentials & Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span><strong>Kaggle:</strong> Advanced SQL Certified (July 2026)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span><strong>TCS iON:</strong> AI Foundation (ID: 279243-31098904)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span><strong>AKTU / RVIT:</strong> B.Tech in CSE (Undergraduate)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span><strong>UP Board:</strong> 91.6% Distinction (Science & Math)</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-6">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <MapPin className="h-3.5 w-3.5 text-cyan-400" />
            <span>Uttar Pradesh, India • Ready for Onsite / Remote</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                navigator.clipboard.writeText(personalInfo.email);
                onShowToast({ type: 'success', message: 'Email copied to clipboard!' });
              }}
              className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition-colors"
            >
              Copy Email
            </button>
            <a
              href={personalInfo.resumePath}
              download="Shubham_Verma_Resume.pdf"
              onClick={() => onShowToast({ type: 'success', message: 'Resume downloaded!' })}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
