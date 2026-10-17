/**
 * Sample & Real-World Aggregate Data for the Analytics Playground
 * Demonstrates interactive data exploration, KPI simulation, and time-series drilldowns.
 */

export const timeSeriesData = {
  monthly: [
    { period: "Jan", revenue: 84200, profit: 21800, orders: 580, aov: 145 },
    { period: "Feb", revenue: 79500, profit: 19800, orders: 540, aov: 147 },
    { period: "Mar", revenue: 92300, profit: 25400, orders: 630, aov: 146 },
    { period: "Apr", revenue: 88100, profit: 23600, orders: 595, aov: 148 },
    { period: "May", revenue: 104500, profit: 29800, orders: 710, aov: 147 },
    { period: "Jun", revenue: 112000, profit: 32500, orders: 760, aov: 147 },
    { period: "Jul", revenue: 108300, profit: 30900, orders: 735, aov: 147 },
    { period: "Aug", revenue: 115400, profit: 33800, orders: 780, aov: 148 },
    { period: "Sep", revenue: 121000, profit: 36200, orders: 815, aov: 148 },
    { period: "Oct", revenue: 138900, profit: 42100, orders: 930, aov: 149 },
    { period: "Nov", revenue: 152400, profit: 48600, orders: 1010, aov: 151 },
    { period: "Dec", revenue: 168000, profit: 54200, orders: 1110, aov: 151 }
  ],
  quarterly: [
    { period: "Q1", revenue: 256000, profit: 67000, orders: 1750, aov: 146 },
    { period: "Q2", revenue: 304600, profit: 85900, orders: 2065, aov: 147 },
    { period: "Q3", revenue: 344700, profit: 100900, orders: 2330, aov: 148 },
    { period: "Q4", revenue: 459300, profit: 144900, orders: 3050, aov: 151 }
  ],
  yearly: [
    { period: "2023", revenue: 890000, profit: 228000, orders: 6200, aov: 143 },
    { period: "2024", revenue: 1120000, profit: 298000, orders: 7650, aov: 146 },
    { period: "2025", revenue: 1364600, profit: 398700, orders: 9195, aov: 148 }
  ]
};

export const categoryBreakdown = [
  { name: "Snack Foods & Groceries", share: 31, revenue: "$423.0K", margin: "24.5%", color: "#3b82f6" },
  { name: "Fresh Produce & Dairy", share: 26, revenue: "$354.8K", margin: "19.2%", color: "#10b981" },
  { name: "Household & Personal", share: 20, revenue: "$272.9K", margin: "32.1%", color: "#8b5cf6" },
  { name: "Frozen & Ready Goods", share: 14, revenue: "$191.0K", margin: "28.4%", color: "#f59e0b" },
  { name: "Beverages & Other", share: 9, revenue: "$122.9K", margin: "30.0%", color: "#ec4899" }
];

export const outletTiers = [
  { tier: "Tier 1 (Metro)", lowFatShare: 65, regularShare: 35, avgOrderValue: "$162", count: 3 },
  { tier: "Tier 2 (Urban)", lowFatShare: 58, regularShare: 42, avgOrderValue: "$144", count: 4 },
  { tier: "Tier 3 (Emerging)", lowFatShare: 46, regularShare: 54, avgOrderValue: "$128", count: 3 }
];
