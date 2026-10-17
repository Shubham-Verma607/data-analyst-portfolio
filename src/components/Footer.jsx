import { 
  BarChart2, 
  ArrowUp, 
  Mail, 
  Phone,
  Heart
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#05070a] text-slate-600 dark:text-slate-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <BarChart2 className="h-4 w-4" />
              </div>
              <span className="font-bold tracking-tight text-slate-900 dark:text-white text-base">
                Shubham Verma<span className="text-cyan-500">.analytics</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              Data Analyst transforming raw transactional datasets into clean, executive-ready Power BI dashboards, dimensional models, and SQL pipelines.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:text-cyan-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:text-cyan-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:text-cyan-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-cyan-500 transition-colors">Home & Positioning</a></li>
              <li><a href="#recruiter" className="hover:text-cyan-500 transition-colors">Recruiter Snapshot (30s)</a></li>
              <li><a href="#about" className="hover:text-cyan-500 transition-colors">About & Analytical Workflow</a></li>
              <li><a href="#skills" className="hover:text-cyan-500 transition-colors">Skills & Code Samples</a></li>
              <li><a href="#projects" className="hover:text-cyan-500 transition-colors">Project Case Studies</a></li>
              <li><a href="#playground" className="hover:text-cyan-500 transition-colors">Analytics Playground</a></li>
              <li><a href="#dashboards" className="hover:text-cyan-500 transition-colors">Power BI Showcase</a></li>
              <li><a href="#certifications" className="hover:text-cyan-500 transition-colors">Certifications</a></li>
              <li><a href="#resume" className="hover:text-cyan-500 transition-colors">Resume Dossier</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Contact & Inquiry
            </h4>
            <div className="space-y-2">
              <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-cyan-500 hover:underline">{personalInfo.email}</a></p>
              <p>Phone: <span className="text-slate-800 dark:text-slate-200">{personalInfo.phone}</span></p>
              <p>Location: <span className="text-slate-800 dark:text-slate-200">{personalInfo.location}</span></p>
              <p className="pt-2 text-emerald-500 font-semibold font-mono">
                ● Available for immediate onboarding
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <p className="text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-1.5">
            <span>Built with curiosity, data, and code.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-500 hover:text-cyan-500 transition-colors"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
