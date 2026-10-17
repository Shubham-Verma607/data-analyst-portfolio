import { useState } from 'react';
import { 
  HelpCircle, 
  Database, 
  Sparkles, 
  Cpu, 
  LayoutDashboard, 
  Lightbulb, 
  CheckCircle,
  ChevronRight,
  Code
} from 'lucide-react';
import { analyticalWorkflow } from '../data/portfolioData';

const stageIcons = [
  HelpCircle,
  Database,
  Sparkles,
  Cpu,
  LayoutDashboard,
  Lightbulb,
  CheckCircle
];

export default function DataPipeline() {
  const [selectedStageIndex, setSelectedStageIndex] = useState(2); // default to 'Cleaning' to highlight data hygiene

  const activeStage = analyticalWorkflow[selectedStageIndex];
  const ActiveIcon = stageIcons[selectedStageIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#07090e]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            Analytical Thinking & Methodology
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            From Raw Data to Business Insight
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            A disciplined, 7-stage analytical pipeline executed on every project. Click each stage to inspect technical execution.
          </p>
        </div>

        {/* Pipeline Stepper (Interactive Horizontal Flow) */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-4 pt-2 no-scrollbar">
          {analyticalWorkflow.map((stage, idx) => {
            const Icon = stageIcons[idx];
            const isSelected = selectedStageIndex === idx;
            return (
              <div key={stage.step} className="flex items-center shrink-0">
                <button
                  onClick={() => setSelectedStageIndex(idx)}
                  className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-200 min-w-[110px] text-center ${
                    isSelected
                      ? 'bg-cyan-500/15 border-2 border-cyan-500 text-cyan-500 dark:text-cyan-400 scale-105 shadow-md shadow-cyan-500/10'
                      : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-700'
                  }`}
                >
                  <div className={`h-8 w-8 rounded-xl flex items-center justify-center mb-1.5 ${
                    isSelected ? 'bg-cyan-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Step {stage.step}
                  </span>
                  <span className="text-xs font-bold mt-0.5 truncate">
                    {stage.stage}
                  </span>
                </button>

                {idx < analyticalWorkflow.length - 1 && (
                  <div className="px-1 text-slate-300 dark:text-slate-700 hidden sm:block">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="mt-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Detail Info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold uppercase mb-3">
                <ActiveIcon className="h-3.5 w-3.5" />
                <span>Stage {activeStage.step}: {activeStage.stage}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {activeStage.title}
              </h3>

              <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeStage.description}
              </p>

              <div className="mt-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Real Project Implementation Example
                </span>
                <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                  "{activeStage.detail}"
                </p>
              </div>

              {/* Tools Chips */}
              <div className="mt-5">
                <span className="text-xs font-mono text-slate-400 mr-2">Tools & Standards:</span>
                <div className="inline-flex flex-wrap gap-1.5 mt-1">
                  {activeStage.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Code / Pattern Preview */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-4 text-slate-200 shadow-inner font-mono text-xs overflow-x-auto">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] ml-1">pipeline_stage_{activeStage.stage.toLowerCase()}.sql</span>
                </div>
                <Code className="h-3.5 w-3.5 text-cyan-400" />
              </div>

              {selectedStageIndex === 0 && (
                <pre className="text-slate-300 leading-relaxed">
{`-- FRAME OBJECTIVE:
-- 1. Identify underperforming store tiers
-- 2. Detect category discount erosion
-- 3. Calculate YoY sales variance`}
                </pre>
              )}

              {selectedStageIndex === 1 && (
                <pre className="text-cyan-300 leading-relaxed">
{`-- INGEST & VALIDATE RAW CSV:
SELECT COUNT(*) as raw_count,
       COUNT(DISTINCT Item_Identifier) as unique_skus
FROM raw_grocery_feed;
-- Result: 8,523 total transaction rows`}
                </pre>
              )}

              {selectedStageIndex === 2 && (
                <pre className="text-emerald-300 leading-relaxed">
{`-- DATA CLEANING VIA SQL CASE:
UPDATE blinkit_data
SET Item_Fat_Content = 
    CASE 
        WHEN Item_Fat_Content IN ('LF', 'low fat') 
            THEN 'Low Fat'
        WHEN Item_Fat_Content = 'reg' 
            THEN 'Regular'
        ELSE Item_Fat_Content
    END;`}
                </pre>
              )}

              {selectedStageIndex === 3 && (
                <pre className="text-indigo-300 leading-relaxed">
{`-- STAR-SCHEMA DAX MODELING:
Date Table = CALENDAR(
    DATE(2022, 01, 01),
    DATE(2026, 06, 12)
)
-- 1-to-many relationship:
-- Date Table[Date] -> Sales[Order Date]`}
                </pre>
              )}

              {selectedStageIndex === 4 && (
                <pre className="text-blue-300 leading-relaxed">
{`// POWER BI DAX TIME INTELLIGENCE:
Same Period Last Year Net Sales = 
CALCULATE(
    [Total Net Sales],
    SAMEPERIODLASTYEAR('Date Table'[Date])
)`}
                </pre>
              )}

              {selectedStageIndex === 5 && (
                <pre className="text-amber-300 leading-relaxed">
{`-- INSIGHT DISCOVERY:
-- Tier 1 Outlets: 65% Low Fat (Health Premium)
-- Tier 3 Outlets: 54% Regular Fat (Volume Driver)
-- Finding: Tailor merchandising by store tier`}
                </pre>
              )}

              {selectedStageIndex === 6 && (
                <pre className="text-rose-300 leading-relaxed">
{`// EXECUTIVE DECISION:
-- 1. Reallocate Low-Fat inventory to Tier 1
-- 2. Cap promotional discounts at 12% in Electronics
-- 3. Automate weekly stock reorder triggers`}
                </pre>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
