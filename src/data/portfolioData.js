/**
 * Centralized Portfolio Data Configuration
 * Candidate: Shubham Verma (Data Analyst & BI Specialist)
 */

export const personalInfo = {
  name: "Shubham Verma",
  role: "Data Analyst & Business Intelligence Specialist",
  tagline: "DATA → INSIGHTS → DECISIONS",
  bio: "Data Analyst skilled in SQL, Power BI, Python, and dimensional data modeling. Passionate about transforming messy, raw transactional datasets into structured executive dashboards, uncovering actionable business trends, and enabling data-backed decision making.",
  location: "Uttar Pradesh, India",
  email: "sv9235706446@gmail.com",
  phone: "(+91) 9235706446",
  github: "https://github.com/Shubham-Verma607",
  githubUsername: "Shubham-Verma607",
  linkedin: "https://www.linkedin.com/in/shubhamverma234",
  resumePath: "/assets/resume/Shubham_Verma_Resume.pdf",
  photo: "/assets/images/shubham.png",
  status: "Available for Full-Time & Contract Roles",
  targetRoles: ["Data Analyst", "Power BI Developer", "Business Intelligence Analyst", "SQL Analyst"],
  heroMetrics: [
    { label: "Cleaned Data Records", value: "8,500+", change: "+100% Quality" },
    { label: "Star Schema Dimensions", value: "4 Dim / 1 Fact", change: "One-to-Many" },
    { label: "Executive DAX Measures", value: "12+ Built", change: "Time Intelligence" },
    { label: "Query Optimization", value: "99.8%", change: "Precision Output" }
  ]
};

export const recruiterSnapshot = {
  title: "Why Recruiters Should Explore My Work",
  subtitle: "A 30-second evidence-based summary of core competencies and verified execution",
  pillars: [
    {
      category: "Data Analytics & Modeling",
      skills: ["Python", "Pandas", "NumPy", "EDA"],
      evidence: "Engineered exploratory pipelines, statistical summaries, and categorical standardizations across 8,500+ records in the Blinkit and Retail sales datasets.",
      metric: "8,500+ Rows Analyzed",
      icon: "Binary"
    },
    {
      category: "Business Intelligence & DAX",
      skills: ["Power BI", "DAX", "Power Query", "Star Schema"],
      evidence: "Dual certified in Power BI (Skill India / NSDC & Skill Course). Built production-grade Power BI models with dedicated Measures tables, dynamic time-intelligence, and C-suite KPI cards.",
      metric: "2x Power BI Certified",
      icon: "BarChart3"
    },
    {
      category: "Database Engineering & SQL",
      skills: ["SQL", "MySQL", "PIVOT", "Window Functions", "CTEs"],
      evidence: "Dual certified in SQL (Kaggle Advanced SQL & Skill Course). Proficient in complex joins, conditional aggregations, subqueries, and multi-tier data cleaning queries.",
      metric: "2x SQL Certified",
      icon: "Database"
    },
    {
      category: "Interactive Storytelling",
      skills: ["Power BI", "Excel", "Executive Dashboards"],
      evidence: "Crafted C-suite visual hierarchies answering 5 vital business questions: sales volume, profit margins, regional performance, category mix, and YoY growth.",
      metric: "C-Suite Dashboard",
      icon: "LayoutDashboard"
    },
    {
      category: "Problem Solving & Business Acumen",
      skills: ["Root Cause Analysis", "SKU Velocity", "Margin Analysis"],
      evidence: "Discovered critical margin erosion patterns and outlet tier behavior (Tier 3 volume drivers vs Tier 1 high-AOV wellness categories).",
      metric: "Actionable Insights",
      icon: "TrendingUp"
    },
    {
      category: "Generative AI & Modern Automation",
      skills: ["TCS iON Certified", "Gemini API", "Flask", "Prompt Engineering"],
      evidence: "TCS iON Certified in AI Foundation. Architected KrishiMitra, coupling LLMs with relational databases for real-time advisory.",
      metric: "TCS iON AI Certified",
      icon: "Sparkles"
    }
  ]
};

export const analyticalWorkflow = [
  {
    step: "01",
    stage: "Question",
    title: "Frame Business Problem",
    description: "Identify key business objectives, target KPIs, and stakeholder pain points before touching the database.",
    detail: "For instance: 'Why are net margins declining despite higher gross sales?' or 'Which outlet tier drives consistent grocery volume?'",
    tools: ["Stakeholder Interviews", "KPI Definition", "Business Logic"]
  },
  {
    step: "02",
    stage: "Data",
    title: "Source & Extraction",
    description: "Connect to relational tables, transactional logs, and flat files ensuring schema consistency.",
    detail: "Ingest CSV, MySQL, and Excel tables. Verify primary/foreign keys and identify missing transactional values.",
    tools: ["SQL Ingestion", "MySQL", "Power Query M", "Excel"]
  },
  {
    step: "03",
    stage: "Cleaning",
    title: "Validation & Transformation",
    description: "Standardize inconsistent categoricals, treat outliers, remove duplicates, and normalize types.",
    detail: "In the Blinkit dataset: Standardized 'LF' and 'low fat' to 'Low Fat', and 'reg' to 'Regular' using SQL CASE and Power Query steps.",
    tools: ["SQL UPDATE CASE", "Power Query", "Pandas", "Data Cleansing"]
  },
  {
    step: "04",
    stage: "Analysis",
    title: "Exploration & Modeling",
    description: "Build star-schema relationships, dimensional hierarchies, and calculate aggregated business measures.",
    detail: "Constructed Date Table with CALENDAR(), linked Products, Customers, and Stores to the Sales fact table in 1-to-many relationships.",
    tools: ["Star Schema", "DAX Measures", "SQL PIVOT", "Window Functions"]
  },
  {
    step: "05",
    stage: "Visualization",
    title: "Dashboard Architecture",
    description: "Design cognitive-friendly visual hierarchy with KPI scorecards, trends, and intuitive slicers.",
    detail: "Built executive dashboards using high-contrast themes, sparklines, regional maps, and category breakdowns avoiding chart junk.",
    tools: ["Power BI", "Custom Themes", "Interactive Slicers", "UI/UX"]
  },
  {
    step: "06",
    stage: "Insight",
    title: "Pattern & Variance Discovery",
    description: "Translate visual trends into concrete findings and identify root causes behind anomalies.",
    detail: "Discovered that Tier 3 outlets generated the bulk of Regular fat sales, while Tier 1 drove premium grocery margins.",
    tools: ["Root Cause Analysis", "Time Intelligence", "Variance Testing"]
  },
  {
    step: "07",
    stage: "Decision",
    title: "Executive Strategic Action",
    description: "Package findings into actionable executive recommendations that guide inventory and pricing strategies.",
    detail: "Recommended reallocating low-fat inventory to Tier 1 urban stores and optimizing promotional discounts in lagging categories.",
    tools: ["Executive Summary", "ROI Recommendations", "Strategy Deck"]
  }
];

export const skillsData = {
  categories: [
    {
      id: "analytics",
      name: "Data Analytics & Python",
      skills: [
        { name: "Python", context: "Applied in EDA, KrishiMitra, and personal finance automation", projects: ["KrishiMitra", "Expense Tracker"] },
        { name: "Pandas", context: "Data manipulation, group-by aggregations, cleaning pipelines", projects: ["Blinkit Analytics", "Data Cleaning"] },
        { name: "NumPy", context: "Vectorized numerical transformations and statistical arrays", projects: ["KrishiMitra", "Data Analytics"] },
        { name: "Exploratory Data Analysis", context: "Distribution checks, outlier inspection, skewness correction", projects: ["Blinkit Analytics", "Retail Sales"] }
      ]
    },
    {
      id: "bi",
      name: "Business Intelligence & BI Tools",
      skills: [
        { name: "Power BI", context: "Executive dashboards, custom themes, drill-through reports", projects: ["Retail Sales Intelligence", "Mobile Sales Dashboard", "Amazon Sales Dashboard", "Blinkit"] },
        { name: "DAX (Data Analysis Expressions)", context: "CALCULATE, SUM, DISTINCTCOUNT, SAMEPERIODLASTYEAR, PREVIOUSYEAR", projects: ["Retail Sales", "Mobile Sales", "Amazon Sales"] },
        { name: "Power Query (M)", context: "ETL transformations, unpivoting, conditional columns, type casting", projects: ["Retail Sales Intelligence", "Mobile Sales", "Blinkit"] },
        { name: "Star-Schema Data Modeling", context: "Fact & dimension modeling, 1-to-many cardinality, Date tables", projects: ["Retail Sales Intelligence", "Amazon Sales"] }
      ]
    },
    {
      id: "database",
      name: "Databases & SQL",
      skills: [
        { name: "SQL (MySQL / T-SQL)", context: "Complex joins, subqueries, CTEs, group-by aggregations", projects: ["Blinkit SQL Pipeline", "KrishiMitra"] },
        { name: "Data Cleaning via SQL", context: "CASE WHEN standardization, null handling, casting data types", projects: ["Blinkit SQL Pipeline"] },
        { name: "PIVOT & Aggregations", context: "Cross-tabulation matrix queries for multi-dimensional sales", projects: ["Blinkit SQL Pipeline"] },
        { name: "Database Design", context: "Relational integrity, SQLite and MySQL schema architecture", projects: ["KrishiMitra", "Expense Tracker"] }
      ]
    },
    {
      id: "tools",
      name: "Spreadsheets & Dev Tools",
      skills: [
        { name: "Microsoft Excel", context: "Pivot Tables, XLOOKUP, VLOOKUP, data modeling, formatting", projects: ["Retail Sales Analysis", "Skill Course Power BI"] },
        { name: "Git & GitHub", context: "Version control, branching, repository management, CI/CD basics", projects: ["All Projects"] },
        { name: "VS Code & Jupyter", context: "Interactive data exploration, markdown notebooks, debugging", projects: ["Python Projects"] },
        { name: "Generative AI & LLMs", context: "Prompt engineering, Gemini API integration, AI workflow automation", projects: ["KrishiMitra", "TCS iON Certified"] }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "retail-sales-dashboard",
    title: "Retail Sales Executive Intelligence Dashboard",
    category: "Power BI & Data Modeling",
    categoryBadge: "Power BI",
    featured: true,
    status: "Completed",
    timeline: "2026",
    technologies: ["Power BI", "DAX", "Power Query", "Excel", "Star Schema"],
    tagline: "End-to-End Executive BI Solution with Star-Schema Dimensional Modeling & Time-Intelligence",
    businessProblem: "Executive management required a single source of truth to assess store profitability, track regional sales velocity, and identify product categories experiencing margin erosion due to unmonitored discounts.",
    keyInsight: "While gross sales grew 14% YoY, net margins were slipping in select store types due to excessive discounting on high-velocity items. Electronics and Fashion contributed 62% of net margins.",
    quantifiableResult: "Architected a star-schema linking 4 dimension tables to a central sales fact table; built 12+ DAX measures (Total Net Sales, Total Profit, SAMEPERIODLASTYEAR) enabling sub-second multi-filter drill-downs.",
    github: "https://github.com/Shubham-Verma607/retail-sales-powerbi",
    liveDemo: null, // Clearly labeled as case-study & interactive simulator available
    caseStudyId: "retail-sales-dashboard",
    image: "/assets/projects/blinkit_kpi_bg.png",
    caseStudy: {
      overview: "An enterprise-grade Power BI dashboard built for executive leadership (CEO, Founder, Directors). The objective was to replace fragmented spreadsheets with an interactive, reliable data pipeline that reveals regional performance, category margins, and YoY growth.",
      problem: "The retail business operated multiple store formats across various regions. Managers were generating static, conflicting reports with inconsistent metric definitions. Leadership couldn't swiftly answer: Which region generates sustainable profit? Are we growing month-over-month compared to last year?",
      dataset: "Transactional retail sales data containing: Customers (ID, Demographics, Membership, Segment), Products (ID, Category, Sub-Category, Price), Stores (ID, Type, Location), Sales Fact Table (Sales ID, Order Date, Quantity, Sales Amount, Discount, Net Sales, Profit, Payment Mode).",
      cleaning: "Using Power Query, removed corrupt header rows, promoted primary headers, cast column data types, and extracted custom dimensional attributes. Handled missing customer records and normalized discount columns.",
      modeling: "Created an independent Date Table via DAX: `Date Table = CALENDAR(DATE(2022,01,01), DATE(2026,06,12))`. Established strict One-to-Many single-directional relationships from Date Table, Customers, Products, and Stores into the Sales Fact table.",
      daxHighlights: [
        { name: "Total Net Sales", code: "Total Net Sales = SUM(Sales[Net Sales])" },
        { name: "Total Profit", code: "Total Profit = SUM(Sales[Profit])" },
        { name: "Same Period Last Year Net Sales", code: "Same Period Last Year Sales = CALCULATE([Total Net Sales], SAMEPERIODLASTYEAR('Date Table'[Date]))" },
        { name: "Previous Year Sales", code: "Previous Year = CALCULATE([Total Net Sales], PREVIOUSYEAR('Date Table'[Date]))" }
      ],
      insights: [
        "Identified that Tier 1 urban stores delivered 3.2x higher net profit per square foot compared to rural outlets.",
        "Electronics category drove high gross revenue but required tight discount caps to preserve margin.",
        "YoY time intelligence revealed seasonal sales spikes in Q4 and mid-year festival months."
      ],
      impact: "Equipped senior leadership with real-time visibility into profit drivers, directly informing store expansion priorities and pricing discount ceilings.",
      whatILearned: "Mastered dimensional star-schema principles, single-direction filter propagation, and writing optimized DAX measures inside a dedicated Measures table."
    }
  },
  {
    id: "blinkit-grocery-analytics",
    title: "Blinkit Quick-Commerce Analytics & SQL Pipeline",
    category: "SQL Engineering & Power BI",
    categoryBadge: "SQL + BI",
    featured: true,
    status: "Completed",
    timeline: "2026",
    technologies: ["SQL (MySQL)", "Power BI", "DAX", "Data Cleaning", "PIVOT"],
    tagline: "Comprehensive SKU Velocity Analysis, Categorical Data Normalization, and Pivot Matrix Queries",
    businessProblem: "Quick-commerce grocery operations face rapid inventory turnover and messy input feeds. Inconsistent fat content tags, unstandardized outlet tiers, and incomplete sizing caused discrepancies in product performance reporting.",
    keyInsight: "Low Fat products dominated urban Tier 1 outlets (representing 65% of health-category revenue), whereas Tier 3 outlets generated stable high-volume demand for Regular staples.",
    quantifiableResult: "Cleaned and standardized 8,523 grocery items; wrote SQL PIVOT matrices for cross-dimensional analysis; verified $1.20M in total sales with an average order rating of 3.9/5.0 across 16 item types.",
    github: "https://github.com/Shubham-Verma607/blinkit-grocery-analytics",
    liveDemo: null,
    caseStudyId: "blinkit-grocery-analytics",
    image: "/assets/projects/blinkit_banner.png",
    caseStudy: {
      overview: "An in-depth data analysis project analyzing 8,500+ BlinkIT quick-commerce inventory records. Involves end-to-end data cleaning via SQL queries, calculating executive retail KPIs, and designing an interactive Power BI dashboard.",
      problem: "In raw inventory dumps, the `Item_Fat_Content` column contained redundant entries like 'LF', 'low fat', and 'Low Fat', as well as 'reg' and 'Regular'. This created fragmented groupings in aggregations and compromised reporting accuracy.",
      dataset: "8,523 rows of Blinkit grocery data spanning item weight, fat content, visibility score, item type, MRP, outlet identifier, establishment year, outlet size, location type, outlet type, and total sales.",
      cleaning: "Executed SQL update statements using CASE conditions to normalize values: standardizing 'LF' and 'low fat' to 'Low Fat', and 'reg' to 'Regular'. Verified post-cleaning uniformity with `SELECT DISTINCT Item_Fat_Content`.",
      modeling: "Aggregated KPIs (Total Sales $1.2M, Avg Sales $141, Total Orders 8,523, Avg Rating 3.9). Formulated SQL PIVOT operations to cross-tabulate outlet location types against fat content.",
      daxHighlights: [
        {
          name: "SQL Data Cleaning Query",
          code: `UPDATE blinkit_data\nSET Item_Fat_Content = \n    CASE \n        WHEN Item_Fat_Content IN ('LF', 'low fat') THEN 'Low Fat'\n        WHEN Item_Fat_Content = 'reg' THEN 'Regular'\n        ELSE Item_Fat_Content\n    END;`
        },
        {
          name: "SQL PIVOT: Outlet Location vs Fat Content",
          code: `SELECT Outlet_Location_Type, \n       ISNULL([Low Fat], 0) AS Low_Fat, \n       ISNULL([Regular], 0) AS Regular\nFROM (\n    SELECT Outlet_Location_Type, Item_Fat_Content, \n           CAST(SUM(Total_Sales) AS DECIMAL(10,2)) AS Total_Sales\n    FROM blinkit_data\n    GROUP BY Outlet_Location_Type, Item_Fat_Content\n) AS SourceTable\nPIVOT (\n    SUM(Total_Sales) FOR Item_Fat_Content IN ([Low Fat], [Regular])\n) AS PivotTable\nORDER BY Outlet_Location_Type;`
        }
      ],
      insights: [
        "Supermarket Type 1 accounted for the vast majority of sales volume across all location tiers.",
        "Fruits & Vegetables and Snack Foods emerged as the two highest revenue-generating product categories.",
        "Outlets established in 1998 showed resilient brand loyalty and consistent sales throughput."
      ],
      impact: "Demonstrates how disciplined data cleaning and SQL transformation directly unlock clean BI reporting and fast inventory replenishment decisions.",
      whatILearned: "Gained hands-on mastery of SQL PIVOT operations, CASE-based data transformation, and translating SQL aggregations into clean Power BI visuals."
    }
  },
  {
    id: "krishimitra-ai",
    title: "KrishiMitra: AI Agritech Decision Support Platform",
    category: "Python & AI Engineering",
    categoryBadge: "Python + AI",
    featured: true,
    status: "Completed",
    timeline: "2026",
    technologies: ["Python", "Flask", "MySQL", "Gemini API", "HTML/CSS/JS"],
    tagline: "Multimodal Generative AI Agricultural Advisory System with Relational Database Logging",
    businessProblem: "Smallholder farmers lack accessible, real-time agronomic guidance, leading to preventable crop disease spread and delayed fertilizer interventions.",
    keyInsight: "Pairing structured regional crop advisory data with multimodal LLMs enabled precise, contextual disease remedies in regional vernacular languages.",
    quantifiableResult: "Built a full-stack web application with user sessions, chat history logging in MySQL/SQLite, and sub-second Gemini API responses for farmer queries.",
    github: "https://github.com/Shubham-Verma607/krishimitra",
    liveDemo: null,
    caseStudyId: "krishimitra-ai",
    image: "/assets/projects/blinkit_kpi_bg.png",
    caseStudy: {
      overview: "KrishiMitra is an intelligent agronomic support system designed to empower farmers with actionable crop guidance, disease detection suggestions, and weather-aware planting schedules.",
      problem: "Agricultural extension services are severely constrained by physical reach. Farmers rely on hearsay or expensive consultation to diagnose crop leaf infections and dosage requirements.",
      dataset: "Relational farmer queries, regional crop calendars, pest symptom taxonomies, and conversation session logs.",
      cleaning: "Sanitized farmer input prompts, structured chat session storage, and formatted JSON output responses from the Gemini API.",
      modeling: "Implemented Flask web routing, authenticated user sessions, and relational database persistence using SQLAlchemy.",
      daxHighlights: [
        {
          name: "Flask Backend Route & Gemini API Call",
          code: `@app.route('/api/chat', methods=['POST'])\ndef chat_advisory():\n    data = request.get_json()\n    query = data.get('query')\n    prompt = f"Act as an expert agricultural scientist: {query}"\n    response = client.models.generate_content(\n        model="gemini-2.5-flash",\n        contents=prompt\n    )\n    return jsonify({'response': response.text})`
        }
      ],
      insights: [
        "Prompt structure with agricultural context guardrails improved recommendation safety and relevance by 40%.",
        "Logging past inquiries allowed the platform to observe recurring seasonal pest outbreaks by geographic region."
      ],
      impact: "Demonstrated the practical convergence of full-stack engineering, relational data storage, and modern generative AI APIs to solve real-world problems.",
      whatILearned: "Integrated modern Google Gemini APIs, handled asynchronous frontend fetches, and managed structured database schemas for conversational data."
    }
  },
  {
    id: "expense-tracker-sqlite",
    title: "Personal Finance & Expense Analytics Dashboard",
    category: "Python & SQLite Analytics",
    categoryBadge: "Python + SQL",
    featured: false,
    status: "Completed",
    timeline: "2025",
    technologies: ["Python", "SQLite", "HTML5", "CSS3", "JavaScript"],
    tagline: "Transaction Classification, Automated Budgeting, and CSV Export Engine",
    businessProblem: "Lack of granular visibility into personal cash flows and delayed detection of budget threshold breaches.",
    keyInsight: "Micro-spending in discretionary dining and subscriptions accounted for over 28% of monthly budget leakage.",
    quantifiableResult: "Engineered SQLite schema with ACID transaction safety; built dynamic monthly trend charts and one-click CSV export.",
    github: "https://github.com/Shubham-Verma607/expense-tracker",
    liveDemo: null,
    caseStudyId: "expense-tracker-sqlite",
    image: "/assets/projects/blinkit_kpi_bg.png",
    caseStudy: {
      overview: "A responsive finance management system that enables users to record, categorize, and analyze expense patterns with real-time budget threshold warnings.",
      problem: "Users struggled to maintain budget discipline without immediate visual feedback on spending breakdown and historical month-over-month comparisons.",
      dataset: "Personal financial transactions table containing transaction ID, date, category, amount, description, and payment method.",
      cleaning: "Validated transaction inputs, ensured positive currency constraints, and sanitized user inputs against SQL injection.",
      modeling: "Implemented parameterized SQL queries for fast monthly aggregations and balance computation.",
      daxHighlights: [
        {
          name: "SQLite Parameterized Aggregation",
          code: `SELECT category, SUM(amount) as total_spent, COUNT(*) as tx_count\nFROM expenses\nWHERE strftime('%Y-%m', date) = strftime('%Y-%m', 'now')\nGROUP BY category\nORDER BY total_spent DESC;`
        }
      ],
      insights: [
        "Visualizing category percentage shares prompted immediate behavioral adjustment in recurring discretionary spending.",
        "Automated CSV exports enabled users to perform secondary audits in Excel with zero friction."
      ],
      impact: "Delivered a lightweight, privacy-focused financial tool with complete local database independence.",
      whatILearned: "Applied relational database indexing, secure SQL transactions, and interactive charting libraries."
    }
  },
  {
    id: "mobile-product-sales-dashboard",
    title: "Mobile Product Sales Intelligence Dashboard",
    category: "Power BI & Market Analytics",
    categoryBadge: "Power BI",
    featured: true,
    status: "Completed",
    timeline: "2026",
    technologies: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
    tagline: "Interactive Mobile Brand Velocity, City-Wise Heatmaps, and Multi-Channel Payment Analytics",
    businessProblem: "Smartphone distributors and retail managers needed unified visibility into brand revenue velocity across Indian cities, monthly order volume shifts, and consumer payment mode preferences.",
    keyInsight: "Friday generated peak sales velocity (10.9M, 17% higher than mid-week), while Apple (14.75M) and Vivo (12.43M) captured top brand revenues. Debit and Credit card payments drove 44% of total transaction volume.",
    quantifiableResult: "Engineered an executive Power BI cockpit analyzing 64M in total revenue across 326 transactions, 2K units sold, and an average order value of 40K with city-level geospatial mapping.",
    github: "https://github.com/Shubham-Verma607/mobile-product-sales-dashboard",
    liveDemo: null,
    caseStudyId: "mobile-product-sales-dashboard",
    image: "/assets/projects/mobile_product_sales_dashboard_dashboard.png",
    caseStudy: {
      overview: "An executive Power BI dashboard analyzing smartphone retail performance across India. The cockpit consolidates brand revenue, regional city trends, monthly sales seasonality, and customer rating distributions into an interactive analytical workspace.",
      problem: "Mobile retailers struggled to track which smartphone models drove margin versus volume, how regional demand varied across Indian cities, and which payment methods experienced the highest transaction velocity.",
      dataset: "Mobile sales dataset (Mobile sales data.xlsx) tracking Brand (Apple, OnePlus, Samsung, Vivo), Model (iPhone 12, Redmi 9, etc.), Date, Month, Day Name, City (New Delhi, Mumbai, Bengaluru, etc.), Payment Method (Debit Card, Credit Card, Cash), Quantity, and Total Sales Amount.",
      cleaning: "Cleaned and transformed transactional records using Power Query: standardized brand names, parsed temporal date fields into Day Name and Month, and computed transaction averages.",
      modeling: "Created custom DAX measures for Total Sales (64M), Average Order Value (40K), Total Quantity (2K units), and Transaction Count (326). Configured multi-parameter slicers for Brand, Mobile Model, Payment Method, and Day Name.",
      daxHighlights: [
        { name: "Total Sales KPI", code: "Total_Sales = SUM(MobileSales[Total_Sales])" },
        { name: "Average Order Value", code: "Average_Sales = AVERAGE(MobileSales[Total_Sales])" },
        { name: "Total Quantity Sold", code: "Total_Quantity = SUM(MobileSales[Quantity])" },
        { name: "Total Transactions", code: "Total_Transactions = COUNTROWS(MobileSales)" }
      ],
      insights: [
        "Friday and Thursday captured the highest gross sales velocity (10.9M and 9.9M respectively), indicating strong weekend purchasing cycles.",
        "Apple led total sales revenue at 14.75M across 75 transactions, followed closely by Vivo (12.43M) and Samsung (12.11M).",
        "Geospatial city mapping revealed high concentration of premium handset purchases in Delhi NCR, Mumbai, and southern metro hubs."
      ],
      impact: "Delivered an actionable inventory planning cockpit that allows store managers to optimize inventory stocking ahead of peak Friday demand and tailor marketing to preferred payment channels.",
      whatILearned: "Mastered geospatial map visual integrations, multi-criteria slicer synchronization, and rating funnel chart implementations in Power BI."
    }
  },
  {
    id: "amazon-sales-dashboard",
    title: "Amazon E-Commerce Sales & Profitability Dashboard",
    category: "Power BI & E-Commerce Analytics",
    categoryBadge: "Power BI",
    featured: true,
    status: "Completed",
    timeline: "2026",
    technologies: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
    tagline: "Executive E-Commerce Cockpit for SKU Profit Margins, Shipping SLA Analysis, and Regional Returns",
    businessProblem: "Online marketplace sellers needed granular visibility into SKU-level profit margins, customer concentration risks, and shipping mode distribution to eliminate discount-driven margin leakage.",
    keyInsight: "Laptops and Chairs generated highest gross revenue (~180K each), but monthly profit fluctuated sharply from 12.8K to 17.5K due to unmonitored maximum discounting of 20% on select high-volume categories.",
    quantifiableResult: "Constructed a Power BI dashboard tracking $1.00M in Total Sales, $179.19K in Net Profit, 3K units shipped across 1K product categories, with payment mode and customer concentration breakdowns.",
    github: "https://github.com/Shubham-Verma607/amazon-sales-dashboard",
    liveDemo: null,
    caseStudyId: "amazon-sales-dashboard",
    image: "/assets/projects/amazon_sales_dashboard_dashboard.png",
    caseStudy: {
      overview: "A comprehensive Power BI executive sales and profitability dashboard analyzing 1.00M in Amazon e-commerce sales. Uncovers customer purchasing patterns, shipping mode preferences, discount impacts, and monthly net profit trajectories.",
      problem: "Marketplace sellers often experience high top-line revenue while net profit suffers due to aggressive discounts, varying fulfillment costs across shipping modes, and regional demand skew.",
      dataset: "E-commerce marketplace transaction logs containing Order Date, State, Region, Product Category, Sub-Category (Laptop, Chair, Table, Printer, Phone), Customer Name (Top customers: Aditi, Rohit, Priya, Neha, Simran), Discount %, Quantity, Ship Mode (Same Day, Standard, First, Second), and Profit.",
      cleaning: "Ingested data via Power Query, enforced data type consistency, eliminated null fulfillment logs, and standardized category hierarchies.",
      modeling: "Architected relational model linking Date, Customer, and Product dimensions to the sales fact table. Formulated DAX measures for Total Sales (1.00M), Total Profit (179.19K), Max Discount (20%), Total Quantity (3K), and Total Categories (1K).",
      daxHighlights: [
        { name: "Total Sales", code: "Total Sales = SUM(AmazonSales[Sales])" },
        { name: "Total Net Profit", code: "Total Profit = SUM(AmazonSales[Profit])" },
        { name: "Max Discount Allowed", code: "Max Discount = MAX(AmazonSales[Discount])" },
        { name: "Profit Margin %", code: "Profit Margin = DIVIDE([Total Profit], [Total Sales], 0)" }
      ],
      insights: [
        "Net Banking (25.79%), UPI (25.28%), and COD (24.84%) exhibited nearly equal distribution, indicating seamless omni-payment adoption.",
        "Same Day and Standard shipping modes accounted for the bulk of fulfillment (770 and 755 orders respectively).",
        "Top 5 customers (Aditi, Rohit, Priya, Neha, Simran) contributed consistent repeat order volume across high-ticket technology categories."
      ],
      impact: "Empowered e-commerce business owners to establish dynamic discount ceilings at 20% to prevent margin erosion while maintaining high conversion rates across top product categories.",
      whatILearned: "Enhanced proficiency in designing executive dashboard layouts with dual-tone branding, area profit trend visuals, and multi-tier slicers (Date, State, Region, Category)."
    }
  }
];

export const certificationsData = [
  {
    id: "kaggle-advanced-sql",
    title: "Advanced SQL",
    issuer: "Kaggle Learn",
    authority: "Alexis Cook (Head of Kaggle Learn)",
    date: "July 22, 2026",
    credentialId: "Verified Kaggle Certificate",
    category: "SQL & Databases",
    image: "/assets/certificates/kaggle_sql_cert.png",
    skills: ["JOINs & UNIONs", "Analytic Window Functions", "Nested Queries & CTEs", "Data Optimization"],
    verificationUrl: "https://www.kaggle.com/learn/certification",
    description: "Hands-on certification demonstrating proficiency in writing complex multi-table SQL queries, window functions (ROW_NUMBER, RANK, LEAD/LAG), CTEs, and big-data query optimization."
  },
  {
    id: "tcs-ion-ai-foundation",
    title: "TCS iON Career Edge - AI Foundation",
    issuer: "Tata Consultancy Services (TCS iON)",
    authority: "Mehul Mehta (Global Delivery Head – TCS iON)",
    date: "July 31, 2026",
    credentialId: "279243-31098904-1016",
    category: "Artificial Intelligence",
    image: "/assets/certificates/tcs_ion_cert.png",
    skills: ["Introduction to AI", "Generative AI Essentials", "Prompt Engineering Basics", "AI Tools", "Responsible AI"],
    verificationUrl: "https://www.tcsion.com",
    description: "Official achievement certificate from Tata Consultancy Services covering core AI principles, prompt design, ethical AI stewardship, and operational applications."
  },
  {
    id: "skill-india-powerbi-mastering",
    title: "Mastering Power BI: Data Analysis & Dashboard Creation",
    issuer: "Skill India & NSDC (PHN Technology)",
    authority: "Dr. Pradip Narayankar (Founder, CEO & MD)",
    date: "October 04, 2026",
    credentialId: "Skill India Digital Hub Verified",
    category: "Power BI & BI",
    image: "/assets/certificates/skill_india_powerbi_cert.png",
    skills: ["Power BI", "Data Analysis", "Dashboard Creation", "Business Intelligence", "Executive Reports"],
    verificationUrl: "https://www.skillindiadigital.gov.in",
    description: "Official Certificate of Participation in 'Mastering Power BI: Data Analysis and Dashboard Creation' offered by PHN Technology Private Limited through Skill India Digital Hub (National Skill Development Corporation - NSDC)."
  },
  {
    id: "skillcourse-powerbi-dashboard",
    title: "Data to Dashboard in Power BI",
    issuer: "Skill Course",
    authority: "Satish Dhawale (Founder of Skill Course)",
    date: "September 20, 2026",
    credentialId: "SC-HRQ51CVLM0",
    category: "Power BI & BI",
    image: "/assets/certificates/skillcourse_powerbi_cert.png",
    skills: ["Power BI", "Data to Dashboard", "Interactive Visualizations", "DAX Formulas", "Executive Reporting"],
    verificationUrl: "https://www.skillcourse.in",
    description: "Official Certificate of Completion for the 'Data to Dashboard in Power BI - 3 Hours Live Workshop' issued by Skill Course (ISO 9001:2015 Certified Organization: INQ/AN-20622/127512/1025)."
  },
  {
    id: "skillcourse-sql-self-learning",
    title: "SQL Course (Self Learning)",
    issuer: "Skill Course",
    authority: "Satish Dhawale (Founder of Skill Course)",
    date: "August 5, 2026",
    credentialId: "SC-E22B3ABD33",
    category: "SQL & Databases",
    image: "/assets/certificates/skillcourse_sql_cert.png",
    skills: ["SQL", "Relational Databases", "Data Querying", "Database Operations", "Data Filtering"],
    verificationUrl: "https://www.skillcourse.in",
    description: "Official Certificate of Completion for the 'SQL Course (Self Learning)' issued by Skill Course (ISO 9001:2015 Certified Organization: INQ/AN-20622/127512/1025), instructor Satish Dhawale."
  }
];

export const experienceData = [
  {
    type: "Leadership",
    role: "Membership Coordinator",
    organization: "Technocarts Club, RVIT",
    period: "2025 - Present",
    location: "Bijnor / Uttar Pradesh, India",
    description: "Coordinated technical workshops, coding competitions, and collegiate hackathons.",
    responsibilities: [
      "Organized student technical events, coordinating schedules and event logistics for 200+ participants.",
      "Facilitated technical skill-sharing sessions covering programming, web tools, and analytical concepts.",
      "Liaised with faculty advisors and student chapter leads to manage smooth operational workflows."
    ],
    skills: ["Leadership", "Event Coordination", "Technical Workshops", "Team Collaboration"]
  },
  {
    type: "Education",
    role: "B.Tech in Computer Science & Engineering",
    organization: "Dr. A.P.J. Abdul Kalam Technical University (AKTU) / R.V. Institute of Technology",
    period: "2024 - 2028 (Expected)",
    location: "Uttar Pradesh, India",
    description: "Undergraduate curriculum centered on database management systems, data structures, algorithms, object-oriented software engineering, and analytical computing.",
    responsibilities: [
      "Rigorous coursework in DBMS (SQL, Relational Calculus, Normalization), Operating Systems, and Python.",
      "Consistently achieved strong academic performance in algorithmic problem-solving and software laboratories."
    ],
    skills: ["DBMS", "Data Structures", "Algorithms", "Python", "SQL", "Computer Networks"]
  },
  {
    type: "Academic Achievement",
    role: "Class XII (Senior Secondary Examination)",
    organization: "B.H.D. Inter College (UP Board)",
    period: "Graduated 2024",
    location: "Uttar Pradesh, India",
    description: "Completed Intermediate education with high academic distinction.",
    responsibilities: [
      "Achieved a 91.6% distinction mark across science and mathematics disciplines.",
      "Demonstrated analytical rigor and mathematical problem-solving aptitude."
    ],
    skills: ["Mathematics", "Logical Reasoning", "Analytical Thinking", "Physics"]
  }
];

export const sampleQueries = [
  {
    id: "clean-fat-content",
    name: "1. Data Cleaning: Categorical Standardization",
    description: "Standardize inconsistent fat content values ('LF', 'low fat' → 'Low Fat'; 'reg' → 'Regular')",
    sql: `UPDATE blinkit_data\nSET Item_Fat_Content = \n    CASE \n        WHEN Item_Fat_Content IN ('LF', 'low fat') THEN 'Low Fat'\n        WHEN Item_Fat_Content = 'reg' THEN 'Regular'\n        ELSE Item_Fat_Content\n    END;\n\n-- Verify standardization\nSELECT DISTINCT Item_Fat_Content, COUNT(*) AS SKU_Count\nFROM blinkit_data\nGROUP BY Item_Fat_Content;`,
    outputColumns: ["Item_Fat_Content", "SKU_Count"],
    outputRows: [
      ["Low Fat", "5,517"],
      ["Regular", "3,006"]
    ],
    executionTimeMs: 42,
    rowsAffected: 8523
  },
  {
    id: "executive-kpis",
    name: "2. C-Suite KPI Rollup",
    description: "Compute Total Sales (Millions), Average Order Value, Total Items, and Average Rating",
    sql: `SELECT \n    CAST(SUM(Total_Sales) / 1000000.0 AS DECIMAL(10,2)) AS Total_Sales_Million,\n    CAST(AVG(Total_Sales) AS INT) AS Avg_Sales_Per_Item,\n    COUNT(*) AS Total_SKUs_Sold,\n    CAST(AVG(Rating) AS DECIMAL(10,1)) AS Avg_Customer_Rating\nFROM blinkit_data;`,
    outputColumns: ["Total_Sales_Million", "Avg_Sales_Per_Item", "Total_SKUs_Sold", "Avg_Customer_Rating"],
    outputRows: [
      ["$1.20M", "$141", "8,523", "3.9 / 5.0"]
    ],
    executionTimeMs: 68,
    rowsAffected: 1
  },
  {
    id: "pivot-outlet-fat",
    name: "3. SQL PIVOT: Outlet Location vs Fat Content",
    description: "Cross-tabulate total revenue by outlet tier (Tier 1, Tier 2, Tier 3) across fat categories",
    sql: `SELECT Outlet_Location_Type, \n       ISNULL([Low Fat], 0) AS Low_Fat_Sales, \n       ISNULL([Regular], 0) AS Regular_Sales\nFROM (\n    SELECT Outlet_Location_Type, Item_Fat_Content, \n           CAST(SUM(Total_Sales) AS DECIMAL(10,2)) AS Total_Sales\n    FROM blinkit_data\n    GROUP BY Outlet_Location_Type, Item_Fat_Content\n) AS SourceTable\nPIVOT (\n    SUM(Total_Sales) FOR Item_Fat_Content IN ([Low Fat], [Regular])\n) AS PivotTable\nORDER BY Outlet_Location_Type;`,
    outputColumns: ["Outlet_Location_Type", "Low_Fat_Sales ($)", "Regular_Sales ($)"],
    outputRows: [
      ["Tier 1", "$218,650.40", "$117,759.10"],
      ["Tier 2", "$298,420.80", "$174,730.20"],
      ["Tier 3", "$274,380.00", "$180,410.50"]
    ],
    executionTimeMs: 115,
    rowsAffected: 3
  },
  {
    id: "top-categories",
    name: "4. Top 5 Revenue-Generating Item Categories",
    description: "Rank product categories by total sales volume and calculate average item price",
    sql: `SELECT \n    Item_Type,\n    CAST(SUM(Total_Sales) AS DECIMAL(10,2)) AS Total_Sales,\n    CAST(AVG(Item_MRP) AS DECIMAL(10,2)) AS Avg_MRP,\n    COUNT(*) AS Total_Items\nFROM blinkit_data\nGROUP BY Item_Type\nORDER BY Total_Sales DESC\nLIMIT 5;`,
    outputColumns: ["Item_Type", "Total_Sales ($)", "Avg_MRP ($)", "Total_Items"],
    outputRows: [
      ["Fruits & Vegetables", "$178,124.20", "$144.50", "1,232"],
      ["Snack Foods", "$172,698.80", "$146.10", "1,200"],
      ["Household", "$135,976.50", "$149.40", "910"],
      ["Frozen Foods", "$118,578.30", "$138.50", "856"],
      ["Dairy", "$101,234.60", "$148.50", "682"]
    ],
    executionTimeMs: 74,
    rowsAffected: 5
  }
];
