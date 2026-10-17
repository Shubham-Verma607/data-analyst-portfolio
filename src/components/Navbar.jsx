import { useState, useEffect } from 'react';
import { 
  BarChart2, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Monitor, 
  Download, 
  Sparkles, 
  Search,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ 
  theme, 
  onToggleTheme, 
  onOpenCommandPalette, 
  onOpenRecruiterModal,
  scrollProgress,
  activeSection 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'recruiter', label: 'Snapshot' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'playground', label: 'Analytics' },
    { id: 'dashboards', label: 'Showcase' },
    { id: 'experience', label: 'Journey' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  function handleNavClick(e, id) {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll Progress Bar */}
      <div className="h-0.75 w-full bg-slate-200/60 dark:bg-slate-800/40">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navbar Bar */}
      <nav 
        className={`mx-auto transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-[#07090e]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/70 shadow-sm dark:shadow-lg py-2.5 px-4 sm:px-8'
            : 'bg-transparent py-4 px-4 sm:px-8'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <BarChart2 className="h-5 w-5" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-slate-900 dark:text-white text-base">
                SV<span className="text-cyan-500 dark:text-cyan-400">.analytics</span>
              </span>
              <span className="block text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 -mt-1">
                Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/15 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Controls: Search, Theme, Recruiter Snapshot, CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-cyan-500/50 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              title="Search Portfolio (Ctrl + K)"
              aria-label="Open command palette"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="font-mono text-[10px] bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-300">
                ⌘K
              </span>
            </button>

            {/* Recruiter 30s View Pill */}
            <button
              onClick={onOpenRecruiterModal}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-500/20 transition-all shadow-sm"
              title="Quick 30-second candidate summary for recruiters"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
              <span>Recruiter (30s)</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800/80 transition-colors"
              aria-label="Toggle color theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700 dark:text-slate-300" />
              )}
            </button>

            {/* Connect CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-md shadow-cyan-600/20 hover:shadow-cyan-500/30 transition-all hover:scale-102"
            >
              <span>Let's Connect</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl animate-in slide-in-from-top-3">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRecruiterModal();
                }}
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold text-sm mb-2"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-400" />
                  <span>30-Second Recruiter Snapshot</span>
                </div>
                <span className="text-xs bg-amber-500/20 px-2 py-0.5 rounded text-amber-300">Fast Scan</span>
              </button>

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`min-h-[44px] flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={onToggleTheme}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700 dark:text-slate-300" />}
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
                <a
                  href={personalInfo.resumePath}
                  download="Shubham_Verma_Resume.pdf"
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 py-2 px-3 rounded-lg hover:bg-cyan-500/10"
                >
                  <Download className="h-4 w-4" />
                  <span>Resume</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Search className="h-3.5 w-3.5" />
                  <span>⌘K</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
