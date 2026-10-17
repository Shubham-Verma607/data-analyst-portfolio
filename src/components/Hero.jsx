import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Database, 
  BarChart3, 
  Mail, 
  Phone, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  FileSpreadsheet 
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenRecruiterModal, onShowToast }) {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [activeDatasetFilter, setActiveDatasetFilter] = useState('all');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const roles = [
    "Data Analyst",
    "Power BI Developer",
    "SQL Analyst",
    "Python for Analytics",
    "Business Intelligence Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Dynamic datasets for the hero analytics card
  const filterDatasets = {
    all: {
      sales: "$1.20M",
      orders: "8,523",
      margin: "26.4%",
      growth: "+18.4% YoY",
      points: [35, 48, 42, 65, 58, 82, 74, 95]
    },
    quickCommerce: {
      sales: "$423.5K",
      orders: "3,840",
      margin: "24.5%",
      growth: "+24.2% YoY",
      points: [40, 52, 60, 75, 70, 88, 85, 100]
    },
    retail: {
      sales: "$776.5K",
      orders: "4,683",
      margin: "28.1%",
      growth: "+14.8% YoY",
      points: [30, 42, 38, 55, 52, 74, 68, 88]
    }
  };

  const currentData = filterDatasets[activeDatasetFilter];

  function handleResumeDownload(e) {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch {
      // fallback
    }
    onShowToast({
      type: 'success',
      message: 'Resume download started! (PDF generated from verified credentials)'
    });
  }

  function handleCopyContact(text, label) {
    navigator.clipboard.writeText(text);
    onShowToast({
      type: 'success',
      message: `${label} copied to clipboard!`
    });
  }

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-5 w-80 h-80 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Positioning & Copy */}
        <div className="lg:col-span-7 text-center lg:text-left">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>{personalInfo.status}</span>
          </div>

          {/* Core Positioning Statement */}
          <div className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-3 flex items-center justify-center lg:justify-start gap-2">
            <span>DATA</span>
            <span className="text-slate-400 dark:text-slate-600">→</span>
            <span>INSIGHTS</span>
            <span className="text-slate-400 dark:text-slate-600">→</span>
            <span>DECISIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">{personalInfo.name}</span>.
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
              Transforming messy data into
            </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-600 dark:text-cyan-300">
              executive business clarity.
            </span>
          </h1>

          {/* Dynamic Role Rotator */}
          <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base font-mono">
            <span className="text-slate-500 dark:text-slate-400">Specialization:</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-cyan-600 dark:text-cyan-300 font-semibold transition-all duration-300">
              {roles[activeRoleIndex]}
            </span>
          </div>

          {/* Value Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Data Analyst skilled in <strong className="text-slate-900 dark:text-white font-semibold">SQL</strong>, <strong className="text-slate-900 dark:text-white font-semibold">Power BI (DAX)</strong>, and <strong className="text-slate-900 dark:text-white font-semibold">Python</strong>. I specialize in star-schema dimensional modeling, cleaning messy transactional feeds, and engineering decision-ready dashboards that answer bottom-line questions for leadership.
          </p>

          {/* Quick Metrics Badges */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
            {personalInfo.heroMetrics.map((m, idx) => (
              <div 
                key={idx} 
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm text-center"
              >
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-600/25 transition-all hover:scale-102"
            >
              <span>Explore My Work</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={personalInfo.resumePath}
              download="Shubham_Verma_Resume.pdf"
              onClick={handleResumeDownload}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              <Download className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onOpenRecruiterModal}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 hover:bg-amber-100 dark:hover:bg-amber-500/20 transition-all shadow-sm"
              title="Fast 30-second candidate scan for hiring managers"
            >
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span>Recruiter Scan (30s)</span>
            </button>
          </div>

          {/* Social Proof & Contact Links */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-600 dark:text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>github.com/{personalInfo.githubUsername}</span>
            </a>

            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>

            <button
              onClick={() => handleCopyContact(personalInfo.email, 'Email')}
              className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              title="Click to copy email address"
            >
              <Mail className="h-4 w-4 text-cyan-500" />
              <span>{personalInfo.email}</span>
            </button>

            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>

            <button
              onClick={() => handleCopyContact(personalInfo.phone, 'Phone number')}
              className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              title="Click to copy phone number"
            >
              <Phone className="h-4 w-4 text-emerald-500" />
              <span>{personalInfo.phone}</span>
            </button>
          </div>

        </div>

        {/* Right Column: Interactive Floating Analytics Visual */}
        <div className="lg:col-span-5 relative flex justify-center">
          
          {/* Main Glassmorphic Dashboard Widget */}
          <div className="w-full max-w-md rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xl backdrop-blur-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-cyan-500/10">
            
            {/* Widget Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 dark:text-cyan-400">
                  <BarChart3 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Executive Analytics Cockpit
                  </h3>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                    Star-Schema Data Pipeline
                  </span>
                </div>
              </div>

              {/* Slicer Filter Buttons */}
              <div className="flex bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl text-[10px] font-semibold">
                <button
                  onClick={() => setActiveDatasetFilter('all')}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    activeDatasetFilter === 'all'
                      ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-300 shadow-xs'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveDatasetFilter('quickCommerce')}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    activeDatasetFilter === 'quickCommerce'
                      ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-300 shadow-xs'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Quick-Comm
                </button>
                <button
                  onClick={() => setActiveDatasetFilter('retail')}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    activeDatasetFilter === 'retail'
                      ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-300 shadow-xs'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Enterprise
                </button>
              </div>
            </div>

            {/* KPI Summary Cards */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 p-3">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Total Net Volume</span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-slate-900 dark:text-white font-mono">
                    {currentData.sales}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-500">
                    {currentData.growth}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 p-3">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Orders / Cleaned Rows</span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-slate-900 dark:text-white font-mono">
                    {currentData.orders}
                  </span>
                  <span className="text-[10px] font-semibold text-cyan-500">
                    {currentData.margin} margin
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive SVG Sparkline Trend */}
            <div className="mt-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 p-4">
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
                  <TrendingUp className="h-3.5 w-3.5 text-cyan-500" />
                  <span>Revenue Velocity & Rolling Run-Rate</span>
                </div>
                {hoveredPoint !== null && (
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold animate-in fade-in">
                    Index {hoveredPoint + 1}: {currentData.points[hoveredPoint]}k index
                  </span>
                )}
              </div>

              {/* Responsive SVG Sparkline */}
              <div className="h-28 w-full relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 350 100">
                  <defs>
                    <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Area fill */}
                  <polygon
                    points={`0,100 ${currentData.points.map((p, i) => `${(i / (currentData.points.length - 1)) * 350},${100 - p}`).join(' ')} 350,100`}
                    fill="url(#heroGradient)"
                    className="transition-all duration-500 ease-out"
                  />

                  {/* Line */}
                  <polyline
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={currentData.points.map((p, i) => `${(i / (currentData.points.length - 1)) * 350},${100 - p}`).join(' ')}
                    className="transition-all duration-500 ease-out"
                  />

                  {/* Interactive Points */}
                  {currentData.points.map((p, i) => {
                    const cx = (i / (currentData.points.length - 1)) * 350;
                    const cy = 100 - p;
                    const isHover = hoveredPoint === i;
                    return (
                      <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r={isHover ? 6 : 3.5}
                        className={`transition-all duration-200 cursor-pointer ${
                          isHover
                            ? 'fill-cyan-300 stroke-cyan-500 stroke-2'
                            : 'fill-slate-900 dark:fill-white stroke-cyan-400 stroke-1.5'
                        }`}
                        onMouseEnter={() => setHoveredPoint(i)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      />
                    );
                  })}
                </svg>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>Q1 Ingestion</span>
                <span>Q2 Cleaning</span>
                <span>Q3 DAX Modeling</span>
                <span>Q4 Optimization</span>
              </div>
            </div>

            {/* DAX & SQL Verification Footer */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400 font-mono text-[11px]">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Verified in Kaggle & Power BI Notes</span>
              </div>
              <a
                href="#playground"
                className="text-cyan-500 dark:text-cyan-400 hover:underline flex items-center gap-1 font-medium text-[11px]"
              >
                <span>Playground →</span>
              </a>
            </div>

          </div>

          {/* Floating Dimension Tag Badges for Depth */}
          <div className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 px-3 py-2 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-xl backdrop-blur-md animate-bounce-subtle">
            <Database className="h-3.5 w-3.5 text-cyan-400" />
            <span>Star-Schema (1:N Fact Rel)</span>
          </div>

          <div className="hidden sm:flex absolute -top-4 -right-2 items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 px-3 py-2 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-xl backdrop-blur-md">
            <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-400" />
            <span>SAMEPERIODLASTYEAR() DAX</span>
          </div>

        </div>

      </div>
    </section>
  );
}
