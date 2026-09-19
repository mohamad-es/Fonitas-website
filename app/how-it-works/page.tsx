import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { HowItWorksPage } from "@/components/how-it-works/how-it-works-page";

export const metadata: Metadata = {
  title: "How it works — Fonitas",
  description:
    "Explore the Fonitas application lifecycle, from collaboration and evaluation through QA, publishing and financial close.",
};

export default function HowItWorks() {
  return (
    <>
      <Header />
      <HowItWorksPage />
    </>
  );
}
