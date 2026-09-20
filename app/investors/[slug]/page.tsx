import type { Metadata } from "next";
import { InvestorOpportunityPage } from "@/components/investors/investor-opportunity-page";

export const metadata: Metadata = {
  title: "Investment Opportunity — Fonitas",
  description: "Review a selected Fonitas application and its investment opportunity.",
};

export default async function InvestorOpportunity({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <InvestorOpportunityPage slug={slug} />;
}
