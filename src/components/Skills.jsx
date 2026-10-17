import { useState } from 'react';
import { 
  Code2, 
  BarChart3, 
  Database, 
  Wrench, 
  CheckCircle2, 
  ArrowUpRight,
  Terminal,
  FileCode2,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  analytics: Code2,
  bi: BarChart3,
  database: Database,
  tools: Wrench
};

export default function Skills({ onOpenCaseStudyById }) {
  const [activeCategoryId, setActiveCategoryId] = useState('bi');
  const [inspectedSkill, setInspectedSkill] = useState(null);

  const activeCategory = skillsData.categories.find(c => c.id === activeCategoryId) || skillsData.categories[0];

  const skillSyntaxMap = {
    "Power BI": {
      title: "Power BI Data Model Cardinality & Measures",
      code: `// Dedicated Measures Table Architecture:
Measures[Total Net Sales] = SUM(Sales[Net Sales])
Measures[Total Profit] = SUM(Sales[Profit])
Measures[Total Orders] = DISTINCTCOUNT(Sales[Sales ID])

// Single directional 1:Many relationships:
// 'Date Table'[Date] 1 ────> * Sales[Order Date]
// 'Products'[Product ID] 1 ────> * Sales[Product ID]`
    },
    "DAX (Data Analysis Expressions)": {
      title: "DAX Time-Intelligence & CALCULATE",
      code: `Same Period Last Year Sales = 
CALCULATE(
    [Total Net Sales],
    SAMEPERIODLASTYEAR('Date Table'[Date])
)

Previous Year Sales = 
CALCULATE(
    [Total Net Sales],
    PREVIOUSYEAR('Date Table'[Date])
)`
    },
    "SQL (MySQL / T-SQL)": {
      title: "SQL Window Functions & Aggregation",
      code: `SELECT 
    Item_Type,
    Outlet_Location_Type,
    SUM(Total_Sales) as Total_Revenue,
    RANK() OVER (
        PARTITION BY Outlet_Location_Type 
        ORDER BY SUM(Total_Sales) DESC
    ) as Category_Rank_In_Tier
FROM blinkit_data
GROUP BY Item_Type, Outlet_Location_Type;`
    },
    "PIVOT & Aggregations": {
      title: "SQL PIVOT Cross-Tabulation Matrix",
      code: `SELECT Outlet_Location_Type, 
       ISNULL([Low Fat], 0) AS Low_Fat, 
       ISNULL([Regular], 0) AS Regular
FROM (
    SELECT Outlet_Location_Type, Item_Fat_Content, 
           CAST(SUM(Total_Sales) AS DECIMAL(10,2)) AS Total_Sales
    FROM blinkit_data
    GROUP BY Outlet_Location_Type, Item_Fat_Content
) AS SourceTable
PIVOT (
    SUM(Total_Sales) FOR Item_Fat_Content IN ([Low Fat], [Regular])
) AS PivotTable
ORDER BY Outlet_Location_Type;`
    },
    "Python": {
      title: "Python & Pandas Data Pipeline",
      code: `import pandas as pd
import numpy as np

# Load & Normalize raw orders
df = pd.read_csv('retail_sales.csv')
df['Order Date'] = pd.to_datetime(df['Order Date'])
df['Net Margin %'] = (df['Profit'] / df['Sales Amount']) * 100

# Group-by summary by product segment
kpi_summary = df.groupby('Category').agg({
    'Sales Amount': 'sum',
    'Profit': 'sum',
    'Net Margin %': 'mean'
}).sort_values('Profit', ascending=False)`
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#07090e]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              Technical Capabilities
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Categorized & Evidence-Based Skills
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              No arbitrary percentage bars. Every tool is demonstrated with real project applications, verified datasets, and executable syntax.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
            {skillsData.categories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Code2;
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-700'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{cat.name.split('&')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeCategory.skills.map((skill, sIdx) => {
            const hasSyntaxSample = !!skillSyntaxMap[skill.name];
            return (
              <div
                key={sIdx}
                className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-6 shadow-xs hover:shadow-lg hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                      Verified Skill
                    </span>
                    {hasSyntaxSample && (
                      <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-500/20">
                        Syntax Sample
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.context}
                  </p>

                  <div className="mt-4">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                      Applied In Projects:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.projects.map((projName, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          {projName}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Inspect Syntax Action */}
                {hasSyntaxSample && (
                  <button
                    onClick={() => setInspectedSkill(skill.name)}
                    className="mt-5 w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-colors"
                  >
                    <Terminal className="h-3.5 w-3.5" />
                    <span>View Real Code Sample</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal for Skill Syntax Inspection */}
        {inspectedSkill && (
          <div
            className="fixed inset-0 z-9990 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in"
            onClick={() => setInspectedSkill(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl text-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <FileCode2 className="h-5 w-5 text-cyan-400" />
                  <h4 className="text-base font-bold text-white">
                    {skillSyntaxMap[inspectedSkill]?.title || inspectedSkill}
                  </h4>
                </div>
                <button
                  onClick={() => setInspectedSkill(null)}
                  className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-950 p-4 font-mono text-xs text-cyan-300 overflow-x-auto border border-slate-800 leading-relaxed">
                <pre>{skillSyntaxMap[inspectedSkill]?.code}</pre>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Tested & Production Validated</span>
                </span>
                <button
                  onClick={() => setInspectedSkill(null)}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
