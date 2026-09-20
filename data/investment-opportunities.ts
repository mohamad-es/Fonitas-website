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
  investment: {
    label: string;
    value: string;
  };
};

// Static showcase data for the public investor experience.
// These entries are intentionally marked as "Demo listing" until the investment API/CMS
// is connected. Do not treat the investment terms below as live offers.
export const investmentOpportunities: InvestmentOpportunity[] = [
  {
    slug: "flowdesk",
    name: "Flowdesk",
    tagline: "A focused workspace for teams that want less operational noise.",
    description:
      "Flowdesk is a productivity application concept built around lightweight workflows, shared visibility and a calmer way to coordinate recurring work.",
    category: "Productivity",
    stage: "Demo listing",
    highlights: [
      "Focused workflow experience",
      "Designed for small and growing teams",
      "Clear path from product usage to recurring revenue",
    ],
    metrics: [
      { label: "Listing", value: "Demo" },
      { label: "Focus", value: "B2B SaaS" },
    ],
    investment: {
      label: "Status",
      value: "Demo — API pending",
    },
  },
  {
    slug: "medora",
    name: "Medora",
    tagline: "A simpler digital experience for everyday health coordination.",
    description:
      "Medora is a healthcare application concept focused on organizing appointments, reminders and communication in one approachable digital experience.",
    category: "HealthTech",
    stage: "Demo listing",
    highlights: [
      "Consumer-first product experience",
      "Designed around recurring engagement",
      "Built for a scalable digital service model",
    ],
    metrics: [
      { label: "Listing", value: "Demo" },
      { label: "Focus", value: "Consumer app" },
    ],
    investment: {
      label: "Status",
      value: "Demo — API pending",
    },
  },
  {
    slug: "routepilot",
    name: "RoutePilot",
    tagline: "Smarter planning for teams that move people and goods.",
    description:
      "RoutePilot is a logistics application concept that brings planning, visibility and operational coordination into a single focused workspace.",
    category: "Logistics",
    stage: "Demo listing",
    highlights: [
      "Operational planning workspace",
      "Built around measurable workflow improvements",
      "Potential for recurring business subscriptions",
    ],
    metrics: [
      { label: "Listing", value: "Demo" },
      { label: "Focus", value: "B2B platform" },
    ],
    investment: {
      label: "Status",
      value: "Demo — API pending",
    },
  },
];
