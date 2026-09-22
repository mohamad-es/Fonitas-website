export type InvestmentOpportunity = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  stage: string;
  logo?: string;
  coverImage?: string;
  highlights: string[];
  metrics: Array<{ label: string; value: string }>;
  snapshot: Array<{ label: string; value: string }>;
  market: string;
  businessModel: string;
  traction: string;
  problem: string;
  solution: string;
  targetMarket: string;
  whyNow: string;
  investment: {
    label: string;
    value: string;
  };
  terms: Array<{ label: string; value: string }>;
  financials: Array<{ label: string; value: string }>;
  useOfFunds: string[];
  risks: string[];
  verified: string[];
  diligence: string[];
};

export const investmentOpportunities: InvestmentOpportunity[] = [
  {
    slug: "flowdesk",
    name: "Flowdesk",
    tagline: "A focused workspace for teams that want less operational noise.",
    description:
      "Flowdesk is a productivity application built around lightweight workflows, shared visibility and a calmer way to coordinate recurring work.",
    category: "Productivity",
    stage: "Growth",
    highlights: [
      "Focused workflow experience",
      "Designed for small and growing teams",
      "Recurring subscription revenue model",
    ],
    metrics: [
      { label: "Monthly revenue", value: "$48K" },
      { label: "Revenue growth", value: "+18% MoM" },
    ],
    snapshot: [
      { label: "Market", value: "B2B SaaS" },
      { label: "Business model", value: "Subscription" },
      { label: "Current users", value: "12,400" },
      { label: "Monthly revenue", value: "$48K" },
      { label: "Revenue growth", value: "+18% MoM" },
      { label: "Target raise", value: "$500K" },
    ],
    market: "B2B SaaS",
    businessModel: "Recurring subscription",
    traction: "12,400 users with $48K monthly revenue",
    problem: "Small teams lose time across fragmented tools, recurring tasks and operational handoffs.",
    solution: "Flowdesk brings recurring workflows, ownership and visibility into one focused workspace.",
    targetMarket: "Small and growing teams that need lightweight operational coordination.",
    whyNow: "Teams are consolidating fragmented workflows while demand for focused productivity software continues to grow.",
    investment: { label: "Target raise", value: "$500K" },
    terms: [
      { label: "Target raise", value: "$500K" },
      { label: "Minimum investment", value: "$25K" },
      { label: "Target valuation", value: "$4.5M" },
      { label: "Instrument", value: "Equity" },
      { label: "Round status", value: "Open" },
    ],
    financials: [
      { label: "Monthly revenue", value: "$48K" },
      { label: "Annualized revenue", value: "$576K" },
      { label: "Revenue growth", value: "+18% MoM" },
      { label: "Gross margin", value: "78%" },
    ],
    useOfFunds: ["Product development", "Growth acquisition", "Sales expansion"],
    risks: ["Competitive B2B SaaS market", "Customer acquisition efficiency", "Execution against growth plan"],
    verified: ["Product reviewed", "Business model reviewed", "Financial information reviewed", "Market assessment completed"],
    diligence: ["Product walkthrough", "Architecture overview", "Business model", "Market assessment", "Revenue review", "Company structure"],
  },
  {
    slug: "medora",
    name: "Medora",
    tagline: "A simpler digital experience for everyday health coordination.",
    description:
      "Medora is a healthcare application focused on organizing appointments, reminders and communication in one approachable digital experience.",
    category: "HealthTech",
    stage: "Early growth",
    highlights: ["Consumer-first product experience", "Recurring engagement model", "Scalable digital service"],
    metrics: [
      { label: "Monthly active users", value: "31K" },
      { label: "Revenue growth", value: "+11% MoM" },
    ],
    snapshot: [
      { label: "Market", value: "Consumer HealthTech" },
      { label: "Business model", value: "Subscription + services" },
      { label: "Monthly active users", value: "31K" },
      { label: "Monthly revenue", value: "$72K" },
      { label: "Revenue growth", value: "+11% MoM" },
      { label: "Target raise", value: "$750K" },
    ],
    market: "Consumer HealthTech",
    businessModel: "Subscription + services",
    traction: "31K monthly active users with $72K monthly revenue",
    problem: "Everyday health coordination is fragmented across appointments, reminders and disconnected communication.",
    solution: "Medora combines those touchpoints into one approachable digital experience.",
    targetMarket: "Consumers managing recurring appointments and everyday health coordination.",
    whyNow: "Consumers increasingly expect simple digital coordination for routine health services.",
    investment: { label: "Target raise", value: "$750K" },
    terms: [
      { label: "Target raise", value: "$750K" },
      { label: "Minimum investment", value: "$50K" },
      { label: "Target valuation", value: "$6.2M" },
      { label: "Instrument", value: "Equity" },
      { label: "Round status", value: "Open" },
    ],
    financials: [
      { label: "Monthly revenue", value: "$72K" },
      { label: "Annualized revenue", value: "$864K" },
      { label: "Revenue growth", value: "+11% MoM" },
      { label: "Gross margin", value: "71%" },
    ],
    useOfFunds: ["Product expansion", "Customer growth", "Compliance and operations"],
    risks: ["Healthcare regulation", "Consumer acquisition costs", "Market competition"],
    verified: ["Product reviewed", "Business model reviewed", "Market assessment completed", "Management information reviewed"],
    diligence: ["Product walkthrough", "Market assessment", "Business model", "Customer metrics", "Financial review", "Legal structure"],
  },
  {
    slug: "routepilot",
    name: "RoutePilot",
    tagline: "Smarter planning for teams that move people and goods.",
    description:
      "RoutePilot is a logistics application that brings planning, visibility and operational coordination into a single focused workspace.",
    category: "Logistics",
    stage: "Scale",
    highlights: ["Operational planning workspace", "Measurable workflow improvements", "Recurring business subscriptions"],
    metrics: [
      { label: "Monthly revenue", value: "$96K" },
      { label: "Revenue growth", value: "+14% MoM" },
    ],
    snapshot: [
      { label: "Market", value: "B2B logistics" },
      { label: "Business model", value: "SaaS subscription" },
      { label: "Active accounts", value: "184" },
      { label: "Monthly revenue", value: "$96K" },
      { label: "Revenue growth", value: "+14% MoM" },
      { label: "Target raise", value: "$1.2M" },
    ],
    market: "B2B logistics",
    businessModel: "SaaS subscription",
    traction: "184 active accounts with $96K monthly revenue",
    problem: "Logistics teams still coordinate planning, visibility and operational decisions across disconnected systems.",
    solution: "RoutePilot centralizes planning and operational visibility for teams moving people and goods.",
    targetMarket: "Logistics operators and fleet-based businesses with recurring planning needs.",
    whyNow: "Operational teams are under pressure to improve efficiency while keeping planning systems connected.",
    investment: { label: "Target raise", value: "$1.2M" },
    terms: [
      { label: "Target raise", value: "$1.2M" },
      { label: "Minimum investment", value: "$50K" },
      { label: "Target valuation", value: "$8.5M" },
      { label: "Instrument", value: "Equity" },
      { label: "Round status", value: "Open" },
    ],
    financials: [
      { label: "Monthly revenue", value: "$96K" },
      { label: "Annualized revenue", value: "$1.15M" },
      { label: "Revenue growth", value: "+14% MoM" },
      { label: "Gross margin", value: "74%" },
    ],
    useOfFunds: ["Enterprise sales", "Product development", "Market expansion"],
    risks: ["Enterprise sales cycles", "Competitive landscape", "Expansion execution"],
    verified: ["Product reviewed", "Business model reviewed", "Financial information reviewed", "Market assessment completed"],
    diligence: ["Product walkthrough", "Architecture overview", "Business model", "Customer metrics", "Financial review", "Legal structure"],
  },
];
