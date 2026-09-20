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

export const investmentOpportunities: InvestmentOpportunity[] = [];

// Add approved Fonitas opportunities here until the public website is connected
// to the investment API/CMS. Keeping this list empty avoids publishing
// unverified investment information.
