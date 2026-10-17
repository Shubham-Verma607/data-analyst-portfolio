import { useState } from 'react';
import { 
  Download, 
  Printer, 
  Copy, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, projectsData, certificationsData, experienceData } from '../data/portfolioData';

export default function ResumeSection({ onShowToast }) {
  const [activeTab, setActiveTab] = useState('full');
  const [zoomLevel, setZoomLevel] = useState(100);

  function handleDownloadPDF() {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }
    const a = document.createElement('a');
    a.href = personalInfo.resumePath;
    a.download = 'Shubham_Verma_Resume.pdf';
    a.click();
    onShowToast({
      type: 'success',
      message: 'Official Resume PDF downloaded successfully!'
    });
  }

  function handlePrint() {
    window.print();
  }

  function handleCopyText() {
    const resumeText = `
SHUBHAM VERMA
${personalInfo.role}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub: ${personalInfo.github}

PROFESSIONAL SUMMARY
${personalInfo.bio}

CORE SKILLS
- Business Intelligence: Power BI, DAX, Power Query (M), Star Schema Modeling, Time Intelligence
- Databases: SQL, MySQL, Aggregations, PIVOT, Window Functions, CTEs, Joins
- Programming & Analytics: Python, Pandas, NumPy, Exploratory Data Analysis, Data Cleansing
- Tools & Other: Microsoft Excel (Advanced), Git, GitHub, VS Code, Generative AI (Gemini API)

CORE PROJECTS
1. Retail Sales Executive Intelligence Dashboard (Power BI, DAX, Power Query, Star Schema)
- Built enterprise star-schema linking 4 dimension tables to central sales fact table.
- Formulated 12+ DAX measures (Total Net Sales, Total Profit, SAMEPERIODLASTYEAR) answering C-suite KPIs.

2. Mobile Product Sales Intelligence Dashboard (Power BI, DAX, Excel, Geospatial)
- Built interactive dashboard analyzing 64M in sales, 326 transactions, and 40K AOV across Indian metros.
- Analyzed brand velocity (Apple 14.75M, Vivo 12.43M) and uncovered Friday peak demand patterns (10.9M).

3. Amazon E-Commerce Sales & Profitability Dashboard (Power BI, DAX, Power Query)
- Analyzed 1.00M in revenue, 179.19K net profit, and 3K units across 1K product categories.
- Evaluated SKU margin erosion and defined a strict 20% maximum discount ceiling.

4. Blinkit Quick-Commerce Grocery Analytics & SQL Pipeline (SQL, Power BI, DAX)
- Standardized inconsistent categorical data across 8,523 rows using SQL CASE statements.
- Engineered SQL PIVOT matrix cross-tabulating outlet locations vs fat content.

5. KrishiMitra: AI Agritech Decision Platform (Python, Flask, MySQL, Gemini API)
- Multimodal AI platform for crop advisory with relational database logging.

EDUCATION
- B.Tech in Computer Science & Engineering | AKTU / R.V. Institute of Technology
- Class XII (Senior Secondary) | B.H.D. Inter College (UP Board) — 91.6% Distinction

CERTIFICATIONS
- Advanced SQL — Kaggle Learn (Alexis Cook)
- SQL Course (Self Learning) — Skill Course (Cert ID: SC-E22B3ABD33)
- Data to Dashboard in Power BI — Skill Course (Cert ID: SC-HRQ51CVLM0)
- TCS iON Career Edge - AI Foundation — Tata Consultancy Services (Cert ID: 279243-31098904-1016)
- Mastering Power BI: Data Analysis & Dashboard Creation — Skill India & NSDC (PHN Technology)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    onShowToast({
      type: 'success',
      message: 'Resume plain text copied to clipboard!'
    });
  }

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#07090e]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              Curriculum Vitae
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Interactive Resume & Dossier
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Inspect credentials directly in your browser. Download the official PDF or copy plain text instantly.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Copy plain text resume to clipboard"
            >
              <Copy className="h-3.5 w-3.5" />
              <span>Copy Text</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Print resume"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 transition-all hover:scale-102"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Paper Document Container */}
        <div className="rounded-3xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-2xl overflow-hidden p-6 sm:p-10 text-slate-800 dark:text-slate-200 font-sans">
          
          {/* Resume Header */}
          <div className="border-b-2 border-slate-300 dark:border-slate-700 pb-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                {personalInfo.name}
              </h1>
              <p className="mt-1 text-base font-bold text-cyan-600 dark:text-cyan-400 font-mono">
                {personalInfo.role}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1">
                {personalInfo.location} • Ready for Onsite / Remote
              </p>
            </div>

            <div className="text-xs font-mono space-y-1 text-slate-600 dark:text-slate-400 sm:text-right">
              <div>Email: <a href={`mailto:${personalInfo.email}`} className="text-cyan-600 dark:text-cyan-400 hover:underline">{personalInfo.email}</a></div>
              <div>Phone: <span className="text-slate-800 dark:text-slate-200">{personalInfo.phone}</span></div>
              <div>GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">{personalInfo.githubUsername}</a></div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {personalInfo.bio}
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div className="py-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              Core Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">Business Intelligence & DAX:</strong>
                <p className="text-slate-600 dark:text-slate-400">Power BI, DAX Measures, Power Query (M), Star Schema Modeling, Time-Intelligence (SAMEPERIODLASTYEAR), Custom Visual Themes</p>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">Database & SQL Engineering:</strong>
                <p className="text-slate-600 dark:text-slate-400">SQL, MySQL, Window Functions (RANK, ROW_NUMBER), PIVOT, CTEs, CASE-based Data Cleansing, Schema Integrity</p>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">Programming & Analytics:</strong>
                <p className="text-slate-600 dark:text-slate-400">Python, Pandas, NumPy, Exploratory Data Analysis, Data Cleansing, Matplotlib, Statistical Aggregations</p>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">Spreadsheets & Dev Tools:</strong>
                <p className="text-slate-600 dark:text-slate-400">Microsoft Excel (Pivot Tables, XLOOKUP, VLOOKUP), Git, GitHub, VS Code, Gemini API (Generative AI Integration)</p>
              </div>
            </div>
          </div>

          {/* Key Analytical Projects */}
          <div className="py-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-4">
              Featured Analytical Projects
            </h3>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900 dark:text-white">
                    <span className="text-sm">{proj.title}</span>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-normal">
                      {proj.technologies.slice(0, 4).join(' • ')} | {proj.timeline}
                    </span>
                  </div>
                  <p className="mt-1 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {proj.businessProblem} {proj.quantifiableResult}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Honors */}
          <div className="py-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              Education & Academic Distinction
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <strong className="text-slate-900 dark:text-white">B.Tech in Computer Science & Engineering</strong>
                  <div className="text-slate-500">Dr. A.P.J. Abdul Kalam Technical University (AKTU) / R.V. Institute of Technology</div>
                </div>
                <span className="font-mono text-slate-500">2024 - 2028 (Undergraduate)</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <strong className="text-slate-900 dark:text-white">Class XII (Senior Secondary Examination) — 91.6% Distinction</strong>
                  <div className="text-slate-500">B.H.D. Inter College (UP Board)</div>
                </div>
                <span className="font-mono text-emerald-500 font-semibold">Graduated 2024</span>
              </div>
            </div>
          </div>

          {/* Verified Certifications */}
          <div className="pt-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              Verified Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((c) => (
                <div key={c.id} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>
                    <strong>{c.title}</strong> — {c.issuer} ({c.date})
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
