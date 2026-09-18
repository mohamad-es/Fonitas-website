import { Header } from "@/components/layout/header";
import { PublishingPage } from "@/components/publishing/publishing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publishing — Fonitas",
  description:
    "A controlled, auditable publishing workflow from store preparation and build validation to QA and submission.",
};

export default function Publishing() {
  return (
    <>
      <Header />
      <PublishingPage />
    </>
  );
}
