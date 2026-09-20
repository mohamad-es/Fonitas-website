import type { Metadata } from "next";
import { InvestorsPage } from "@/components/investors/investors-page";

export const metadata: Metadata = {
  title: "Investment Opportunities — Fonitas",
  description:
    "Discover selected applications in Fonitas and explore the investment opportunities behind them.",
};

export default function Investors() {
  return <InvestorsPage />;
}
