import { useState, useEffect, useRef } from 'react';
import { Search, FolderKanban, Award, FileText, Mail, Moon, Sun, ArrowUpRight, Terminal, User, Sparkles, X } from 'lucide-react';
import { personalInfo, projectsData, certificationsData } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onSelectTheme, onShowToast, onOpenCaseStudy, onOpenRecruiterModal }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  const items = [
    // Sections
    { id: 'sec-home', label: 'Go to Hero / Home', category: 'Navigation', icon: User, action: () => scrollTo('home') },
    { id: 'sec-recruiter', label: 'Open Recruiter 30-Second Snapshot', category: 'Recruiter', icon: Sparkles, action: () => { onClose(); onOpenRecruiterModal(); } },
    { id: 'sec-about', label: 'Go to About & Methodology', category: 'Navigation', icon: User, action: () => scrollTo('about') },
    { id: 'sec-skills', label: 'Go to Skills & Tech Stack', category: 'Navigation', icon: Terminal, action: () => scrollTo('skills') },
    { id: 'sec-projects', label: 'Go to Projects Showcase', category: 'Navigation', icon: FolderKanban, action: () => scrollTo('projects') },
    { id: 'sec-playground', label: 'Go to Analytics Playground (KPI Simulator)', category: 'Analytics', icon: Sparkles, action: () => scrollTo('playground') },
    { id: 'sec-dashboards', label: 'Go to Power BI Dashboard Showcase', category: 'Analytics', icon: FolderKanban, action: () => scrollTo('dashboards') },
    { id: 'sec-experience', label: 'Go to Experience & Journey', category: 'Navigation', icon: Award, action: () => scrollTo('experience') },
    { id: 'sec-certs', label: 'Go to Certifications', category: 'Navigation', icon: Award, action: () => scrollTo('certifications') },
    { id: 'sec-resume', label: 'Go to Resume Viewer', category: 'Navigation', icon: FileText, action: () => scrollTo('resume') },
    { id: 'sec-contact', label: 'Go to Contact Form', category: 'Navigation', icon: Mail, action: () => scrollTo('contact') },

    // Projects direct
    ...projectsData.map((p) => ({
      id: `proj-${p.id}`,
      label: `Case Study: ${p.title}`,
      category: 'Projects',
      icon: FolderKanban,
      action: () => {
        onClose();
        onOpenCaseStudy(p);
      }
    })),

    // Quick Actions
    {
      id: 'act-resume-dl',
      label: 'Download Resume (PDF)',
      category: 'Actions',
      icon: FileText,
      action: () => {
        onClose();
        const a = document.createElement('a');
        a.href = personalInfo.resumePath;
        a.download = 'Shubham_Verma_Resume.pdf';
        a.click();
        onShowToast({ type: 'success', message: 'Resume downloaded successfully!' });
      }
    },
    {
      id: 'act-copy-email',
      label: `Copy Email (${personalInfo.email})`,
      category: 'Actions',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        onClose();
        onShowToast({ type: 'success', message: 'Email copied to clipboard!' });
      }
    },
    {
      id: 'act-theme-toggle',
      label: 'Toggle Theme (Dark / Light / System)',
      category: 'Actions',
      icon: Sun,
      action: () => {
        onSelectTheme();
        onClose();
      }
    }
  ];

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  function scrollTo(id) {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-9995 flex items-start justify-center bg-black/60 pt-20 backdrop-blur-sm p-4 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search header */}
        <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3.5">
          <Search className="h-5 w-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project, or section name... (e.g. 'Power BI', 'SQL', 'Resume')"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
            aria-label="Close command palette"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-96 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-400">
              No matching commands or projects found for "{query}".
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 text-sm transition-colors ${
                    isSelected ? 'bg-cyan-500/15 text-cyan-300' : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`rounded-lg p-1.5 ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-950/60 px-4 py-2.5 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span>Use <kbd className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">↑</kbd> <kbd className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">↓</kbd> to navigate</span>
            <span><kbd className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">Enter</kbd> to select</span>
          </div>
          <span><kbd className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">ESC</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
}
