import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecruiterSnapshot from './components/RecruiterSnapshot';
import About from './components/About';
import DataPipeline from './components/DataPipeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AnalyticsPlayground from './components/AnalyticsPlayground';
import DashboardShowcase from './components/DashboardShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';
import RecruiterQuickViewModal from './components/RecruiterQuickViewModal';
import CaseStudyModal from './components/CaseStudyModal';
import Toast from './components/Toast';
import { useTheme } from './hooks/useTheme';
import { useScrollProgress, useActiveSection } from './hooks/useScrollProgress';
import { projectsData } from './data/portfolioData';

export default function App() {
  const { theme, setTheme } = useTheme();
  const scrollProgress = useScrollProgress();

  const sectionIds = [
    'home',
    'recruiter',
    'about',
    'skills',
    'projects',
    'playground',
    'dashboards',
    'experience',
    'certifications',
    'resume',
    'contact'
  ];

  const activeSection = useActiveSection(sectionIds, 150);

  // Modals & UI state
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [toast, setToast] = useState(null);

  // Toast handler
  function showToast({ type, message }) {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  }

  // Keyboard shortcut listener for Ctrl+K / Cmd+K
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function handleToggleTheme() {
    setTheme((prev) => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'dark';
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isSystemDark ? 'light' : 'dark';
    });
  }

  function handleOpenCaseStudyById(id) {
    const proj = projectsData.find(p => p.id === id);
    if (proj) {
      setSelectedCaseStudy(proj);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-white relative">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-9999 focus:px-4 focus:py-2 focus:bg-cyan-600 focus:text-white focus:rounded-xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Desktop Custom Interactive Cursor */}
      <CustomCursor />

      {/* Toast Notification Banner */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Sticky Global Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
        scrollProgress={scrollProgress}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main id="main-content">
        <Hero
          onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
          onShowToast={showToast}
        />

        <RecruiterSnapshot
          onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
          onOpenCaseStudyById={handleOpenCaseStudyById}
        />

        <About />

        <DataPipeline />

        <Skills
          onOpenCaseStudyById={handleOpenCaseStudyById}
        />

        <Projects
          onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
        />

        <AnalyticsPlayground
          onShowToast={showToast}
        />

        <DashboardShowcase
          onOpenCaseStudyById={handleOpenCaseStudyById}
        />

        <ExperienceTimeline />

        <Certifications />

        <ResumeSection
          onShowToast={showToast}
        />

        <Contact
          onShowToast={showToast}
        />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectTheme={handleToggleTheme}
        onShowToast={showToast}
        onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
      />

      <RecruiterQuickViewModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
        onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
        onShowToast={showToast}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
