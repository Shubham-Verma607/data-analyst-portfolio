import { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Database, 
  BarChart3, 
  TrendingUp, 
  Sliders, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { timeSeriesData, categoryBreakdown, outletTiers } from '../data/analyticsSampleData';
import { sampleQueries } from '../data/portfolioData';

export default function AnalyticsPlayground({ onShowToast }) {
  // KPI Simulator state
  const [traffic, setTraffic] = useState(25000);
  const [conversionRate, setConversionRate] = useState(3.4);
  const [aov, setAov] = useState(148);
  const [margin, setMargin] = useState(26);

  // Time Series Chart State
  const [timeframe, setTimeframe] = useState('monthly');
  const [activeMetric, setActiveMetric] = useState('revenue'); // revenue, profit, orders

  // SQL Query Runner Simulator State
  const [selectedQueryId, setSelectedQueryId] = useState(sampleQueries[0].id);
  const [isRunningQuery, setIsRunningQuery] = useState(false);
  const [queryResult, setQueryResult] = useState(sampleQueries[0]);

  // Derived KPI Calculations
  const calculatedOrders = Math.round((traffic * (conversionRate / 100)));
  const calculatedGrossRevenue = Math.round(calculatedOrders * aov);
  const calculatedNetProfit = Math.round(calculatedGrossRevenue * (margin / 100));

  function resetSimulator() {
    setTraffic(25000);
    setConversionRate(3.4);
    setAov(148);
    setMargin(26);
    onShowToast({ type: 'info', message: 'KPI Simulator reset to baseline.' });
  }

  function handleRunQuery(queryObj) {
    setIsRunningQuery(true);
    setTimeout(() => {
      setQueryResult(queryObj);
      setIsRunningQuery(false);
      onShowToast({
        type: 'success',
        message: `Query executed in ${queryObj.executionTimeMs}ms (${queryObj.rowsAffected} rows affected)`
      });
    }, 280);
  }

  const activeSeries = timeSeriesData[timeframe] || timeSeriesData.monthly;
  const maxMetricValue = Math.max(...activeSeries.map(item => item[activeMetric]));

  return (
    <section id="playground" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#07090e]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold uppercase mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Data Engineering Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Analytics Playground & SQL Simulator
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Real data analysts prove their intuition through interactive simulations. Test hypothetical retail levers and execute authentic SQL pipelines below.
          </p>
        </div>

        {/* Part 1: Interactive KPI Simulator */}
        <div className="mb-16 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-6 sm:p-8 shadow-xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5 mb-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Sliders className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Executive Retail KPI Simulator
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Simulate commercial revenue & margin sensitivity in real time
                </p>
              </div>
            </div>

            <button
              onClick={resetSimulator}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors self-start sm:self-auto"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Baseline</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls: 4 Interactive Sliders */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Traffic */}
              <div>
                <div className="flex justify-between items-center text-xs font-medium mb-1.5">
                  <span className="text-slate-700 dark:text-slate-300">Monthly Store Footfall / Traffic</span>
                  <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400">
                    {traffic.toLocaleString()} visits
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="1000"
                  value={traffic}
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-200 dark:bg-slate-800 accent-cyan-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>5,000</span>
                  <span>50,000</span>
                  <span>100,000</span>
                </div>
              </div>

              {/* Slider 2: Conversion Rate */}
              <div>
                <div className="flex justify-between items-center text-xs font-medium mb-1.5">
                  <span className="text-slate-700 dark:text-slate-300">Conversion Rate</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {conversionRate.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="8.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-200 dark:bg-slate-800 accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>1.0%</span>
                  <span>4.0%</span>
                  <span>8.0%</span>
                </div>
              </div>

              {/* Slider 3: Average Order Value */}
              <div>
                <div className="flex justify-between items-center text-xs font-medium mb-1.5">
                  <span className="text-slate-700 dark:text-slate-300">Average Order Value (AOV)</span>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                    ${aov}
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="350"
                  step="5"
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-200 dark:bg-slate-800 accent-blue-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>$40</span>
                  <span>$180</span>
                  <span>$350</span>
                </div>
              </div>

              {/* Slider 4: Net Margin */}
              <div>
                <div className="flex justify-between items-center text-xs font-medium mb-1.5">
                  <span className="text-slate-700 dark:text-slate-300">Target Net Profit Margin</span>
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    {margin}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="45"
                  step="1"
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-200 dark:bg-slate-800 accent-indigo-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>10% (Discount heavy)</span>
                  <span>25%</span>
                  <span>45% (High efficiency)</span>
                </div>
              </div>

            </div>

            {/* Right Output: Real-Time Dynamic KPI Cockpit */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 text-center shadow-sm">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Projected Gross Revenue</span>
                <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
                  ${(calculatedGrossRevenue / 1000).toFixed(1)}k
                </div>
                <span className="mt-1 block text-[11px] text-slate-400">
                  {calculatedOrders.toLocaleString()} Orders × ${aov}
                </span>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 dark:border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 p-5 text-center shadow-sm">
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Projected Net Margin</span>
                <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                  ${(calculatedNetProfit / 1000).toFixed(1)}k
                </div>
                <span className="mt-1 block text-[11px] text-emerald-500 font-semibold">
                  {margin}% Profit Realization
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 text-center shadow-sm">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Transaction Velocity</span>
                <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
                  {calculatedOrders.toLocaleString()}
                </div>
                <span className="mt-1 block text-[11px] text-slate-400">
                  Successful Checkouts
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 text-center shadow-sm">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Revenue Run Rate</span>
                <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                  ${((calculatedGrossRevenue * 12) / 1000000).toFixed(2)}M
                </div>
                <span className="mt-1 block text-[11px] text-slate-400">
                  Annualized Run-Rate
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Part 2: Interactive Multi-Timeframe Chart */}
        <div className="mb-16 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Time-Series Performance Slicer
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Interactive multi-period aggregation engine
                </p>
              </div>
            </div>

            {/* Controls: Timeframe & Metric */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Timeframe selector */}
              <div className="flex bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
                <button
                  onClick={() => setTimeframe('monthly')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    timeframe === 'monthly'
                      ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-300 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setTimeframe('quarterly')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    timeframe === 'quarterly'
                      ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-300 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Quarterly
                </button>
                <button
                  onClick={() => setTimeframe('yearly')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    timeframe === 'yearly'
                      ? 'bg-white dark:bg-slate-700 text-cyan-600 dark:text-cyan-300 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Yearly
                </button>
              </div>

              {/* Metric selector */}
              <div className="flex bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
                <button
                  onClick={() => setActiveMetric('revenue')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeMetric === 'revenue'
                      ? 'bg-cyan-500 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Revenue ($)
                </button>
                <button
                  onClick={() => setActiveMetric('profit')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeMetric === 'profit'
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Profit ($)
                </button>
                <button
                  onClick={() => setActiveMetric('orders')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeMetric === 'orders'
                      ? 'bg-blue-500 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Orders (Units)
                </button>
              </div>
            </div>
          </div>

          {/* Responsive Bar Chart Visualization */}
          <div className="mt-8">
            <div className="h-60 w-full flex items-end gap-2 sm:gap-4 pt-6 pb-2 border-b border-slate-200 dark:border-slate-800">
              {activeSeries.map((item, idx) => {
                const heightPercent = (item[activeMetric] / maxMetricValue) * 100;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                    {/* Tooltip on Hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-10 bg-slate-900 text-white text-[11px] font-mono px-2 py-1 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20 border border-slate-700">
                      {item.period}: {activeMetric === 'orders' ? item.orders.toLocaleString() : `$${item[activeMetric].toLocaleString()}`}
                    </div>

                    {/* Bar element */}
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full rounded-t-lg transition-all duration-500 ease-out cursor-pointer ${
                        activeMetric === 'revenue'
                          ? 'bg-gradient-to-t from-cyan-600 to-cyan-400 group-hover:from-cyan-500 group-hover:to-cyan-300'
                          : activeMetric === 'profit'
                          ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 group-hover:from-emerald-500 group-hover:to-emerald-300'
                          : 'bg-gradient-to-t from-blue-600 to-blue-400 group-hover:from-blue-500 group-hover:to-blue-300'
                      }`}
                    />
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-2 truncate w-full text-center">
                      {item.period}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>Displaying {timeframe} aggregated performance records</span>
              <span className="text-cyan-500 font-semibold">Hover bars for precision values</span>
            </div>
          </div>
        </div>

        {/* Part 3: Real SQL Query Runner Simulator */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-6 sm:p-8 text-slate-100 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Database className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Live SQL Query Runner
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Execute authentic production queries from the Blinkit & Retail Sales datasets
                </p>
              </div>
            </div>

            {/* Query Selector Dropdown/Buttons */}
            <div className="flex flex-wrap gap-2">
              {sampleQueries.map((q) => (
                <button
                  key={q.id}
                  onClick={() => {
                    setSelectedQueryId(q.id);
                    handleRunQuery(q);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                    selectedQueryId === q.id
                      ? 'bg-cyan-500 text-white shadow-sm'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {q.name.split(':')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Query Display & Execution Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: SQL Editor View */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] ml-1">{queryResult.name}</span>
                </div>
                
                <button
                  onClick={() => handleRunQuery(sampleQueries.find(q => q.id === selectedQueryId))}
                  disabled={isRunningQuery}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors disabled:opacity-50"
                >
                  <Play className={`h-3 w-3 ${isRunningQuery ? 'animate-spin' : ''}`} />
                  <span>{isRunningQuery ? 'Running...' : 'Run Query'}</span>
                </button>
              </div>

              <pre className="text-cyan-300 leading-relaxed overflow-x-auto max-h-64 py-2">
                {queryResult.sql}
              </pre>
            </div>

            {/* Right: Tabular Query Output */}
            <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Query OK ({queryResult.rowsAffected} rows)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Latency: {queryResult.executionTimeMs}ms</span>
                  </div>
                </div>

                {/* Formatted Output Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400">
                        {queryResult.outputColumns.map((col, idx) => (
                          <th key={idx} className="pb-2 font-semibold">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-200">
                      {queryResult.outputRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-800/40">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="py-2.5 font-medium">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
                Description: {queryResult.description}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
