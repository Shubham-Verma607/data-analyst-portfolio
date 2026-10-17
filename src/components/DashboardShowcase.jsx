import { useState } from 'react';
import { 
  Monitor, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ArrowRight,
  Maximize2
} from 'lucide-react';

export default function DashboardShowcase({ onOpenCaseStudyById }) {
  const [activeTab, setActiveTab] = useState('retail');

  const dashboards = {
    retail: {
      id: "retail-sales-dashboard",
      title: "Retail Sales Executive Intelligence Dashboard",
      tool: "Microsoft Power BI",
      image: "/assets/projects/blinkit_kpi_bg.png",
      tagline: "Enterprise Star-Schema Dimensional Model & Time-Intelligence Cockpit",
      overview: "Designed for C-suite executives (CEO, Founder, Commercial Directors). Consolidates 4 dimension tables (Date Table, Customers, Products, Stores) and the central Sales fact table.",
      kpis: [
        { label: "Total Net Revenue", value: "$1.20M", sub: "YoY Growth +18.4%" },
        { label: "Net Profit Realized", value: "$316.8K", sub: "26.4% Margin" },
        { label: "Average Order Value", value: "$148", sub: "8,523 Transactions" },
        { label: "Return on Ad Spend", value: "4.2x", sub: "Top Category: Fashion" }
      ],
      slicers: [
        "Regional Division (North, South, East, West)",
        "Store Format (Supermarket, Express, Flagship)",
        "Calendar Slicer (CALENDAR() DAX Time-Intelligence)",
        "Customer Demographic & Membership Tier"
      ],
      keyTakeaway: "Uncovered that Tier 1 urban stores delivered 3.2x higher net profit per square foot, and identified unmonitored promotional discounts eroding margin in high-velocity electronics."
    },
    mobile: {
      id: "mobile-product-sales-dashboard",
      title: "Mobile Product Sales Intelligence Dashboard",
      tool: "Microsoft Power BI",
      image: "/assets/projects/mobile_product_sales_dashboard_dashboard.png",
      tagline: "Brand Revenue Velocity, City Heatmaps, and Payment Mode Distribution",
      overview: "An executive smartphone sales cockpit built for brand managers and distributors. Tracks brand market share, metro demand concentrations, and temporal buying patterns.",
      kpis: [
        { label: "Total Sales Volume", value: "64M", sub: "326 Transactions" },
        { label: "Average Order Value", value: "40K", sub: "High-Ticket Handsets" },
        { label: "Quantity Shipped", value: "2K Units", sub: "iPhone, Vivo, Samsung" },
        { label: "Peak Velocity Day", value: "10.9M", sub: "Friday Demand Peak" }
      ],
      slicers: [
        "Brand Slicer (Apple, OnePlus, Samsung, Vivo)",
        "Mobile Model Filter (iPhone 12, Redmi 9, etc.)",
        "Payment Channel (Debit Card, Credit Card, Cash)",
        "Temporal Slicer (Jan–Dec Monthly Buttons)"
      ],
      keyTakeaway: "Discovered Friday captures peak volume (10.9M, 17% above mid-week), while Apple and Vivo account for over 42% of gross revenue, with card payments capturing 44% of volume."
    },
    amazon: {
      id: "amazon-sales-dashboard",
      title: "Amazon E-Commerce Sales & Profitability Dashboard",
      tool: "Microsoft Power BI",
      image: "/assets/projects/amazon_sales_dashboard_dashboard.png",
      tagline: "SKU Profitability, Shipping Mode SLAs, and Maximum Discount Governance",
      overview: "A comprehensive Power BI dashboard analyzing 1.00M in Amazon sales. Uncovers customer purchasing patterns, fulfillment modes, discount impacts, and net profit trajectories.",
      kpis: [
        { label: "Total Gross Sales", value: "$1.00M", sub: "3K Units Shipped" },
        { label: "Net Profit Realized", value: "$179.19K", sub: "17.9% Profit Margin" },
        { label: "Maximum Discount", value: "20.0%", sub: "Margin Ceiling Cap" },
        { label: "Product Categories", value: "1K Types", sub: "Top: Laptops & Chairs" }
      ],
      slicers: [
        "State & Regional Slicer (Interactive Geo Map)",
        "Product Category & Sub-Category Hierarchy",
        "Ship Mode (Same Day, Standard, First, Second)",
        "Calendar Slicer (January to December Timeline)"
      ],
      keyTakeaway: "Revealed that Laptops and Chairs generated highest revenue (~180K each), while monthly profits swung between $12.8K and $17.5K, proving the need for a strict 20% discount ceiling."
    },
    blinkit: {
      id: "blinkit-grocery-analytics",
      title: "Blinkit Quick-Commerce SKU & Outlet Analytics",
      tool: "Power BI & SQL (MySQL)",
      image: "/assets/projects/blinkit_banner.png",
      tagline: "Categorical Standardization, PIVOT Aggregations, and Multi-Tier Outlet Slicers",
      overview: "Analyzes 8,500+ quick-commerce grocery records. Normalizes inconsistent fat content categoricals and cross-tabulates revenue velocity across store tiers.",
      kpis: [
        { label: "Analyzed Sales Volume", value: "$1.20M", sub: "16 Product Categories" },
        { label: "Average SKU Sales", value: "$141", sub: "8,523 Active SKUs" },
        { label: "Customer Rating", value: "3.9 / 5.0", sub: "Resilient Satisfaction" },
        { label: "Top Product Volume", value: "1,232 Items", sub: "Fruits & Vegetables" }
      ],
      slicers: [
        "Outlet Location Type (Tier 1, Tier 2, Tier 3)",
        "Item Fat Content (Standardized: Low Fat vs Regular)",
        "Outlet Size (Small, Medium, High)",
        "Outlet Establishment Year (Historical Cohorts)"
      ],
      keyTakeaway: "Discovered Low Fat products dominate Tier 1 metro outlets (65% health share), whereas Tier 3 outlets generate steady, high-volume demand for regular household staples."
    }
  };

  const current = dashboards[activeTab];

  return (
    <section id="dashboards" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0a0d14]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
              Executive Presentation
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Power BI Dashboard Showcase
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Clean visual hierarchy, strict DAX measures, and zero chart-junk. Inspect the exact reporting architecture delivered to stakeholders.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap bg-slate-200/80 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-300 dark:border-slate-800 self-start md:self-auto gap-1">
            <button
              onClick={() => setActiveTab('retail')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'retail'
                  ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Retail Executive
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'mobile'
                  ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Mobile Sales
            </button>
            <button
              onClick={() => setActiveTab('amazon')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'amazon'
                  ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Amazon Sales
            </button>
            <button
              onClick={() => setActiveTab('blinkit')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'blinkit'
                  ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Blinkit Grocery
            </button>
          </div>
        </div>

        {/* Device Frame Display Container */}
        <div className="rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xl">
          
          {/* Top Mac-style Device Window Bar */}
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 px-6 py-3.5 text-xs text-slate-500 font-mono">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 font-semibold text-slate-700 dark:text-slate-300">{current.title} — {current.tool}</span>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-[11px]">
              <span className="text-emerald-500 font-semibold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Live Architecture Ready
              </span>
            </div>
          </div>

          {/* Showcase Content Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Preview Left */}
            <div className="lg:col-span-7">
              <div className="relative group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-inner">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-72 sm:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-102"
                />

                {/* Overlay Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                      {current.tool} Production Report
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      {current.tagline}
                    </h4>
                  </div>
                </div>
              </div>

              {/* 4 KPI Metric Cards */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {current.kpis.map((kpi, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-3 text-center">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block">
                      {kpi.label}
                    </span>
                    <div className="text-base font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                      {kpi.value}
                    </div>
                    <span className="text-[10px] text-emerald-500 font-semibold block mt-0.5">
                      {kpi.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Information Right */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Business Context & Architecture
                </span>
                <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                  {current.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {current.overview}
                </p>
              </div>

              {/* Slicers List */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-4">
                <span className="text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 block mb-2">
                  Interactive Filters & Slicers Implemented:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {current.slicers.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Takeaway Box */}
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-50/50 dark:bg-cyan-950/20 p-4">
                <span className="text-xs font-mono font-bold uppercase text-cyan-600 dark:text-cyan-400 block mb-1">
                  Strategic Business Takeaway:
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{current.keyTakeaway}"
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenCaseStudyById(current.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 transition-all hover:scale-102"
                >
                  <span>Explore Case Study & DAX Architecture</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
