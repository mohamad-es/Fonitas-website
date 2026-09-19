import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { AboutPage } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About — Fonitas",
  description:
    "Learn how Fonitas approaches application publishing as an accountable operating lifecycle, from intake to financial close.",
};

export default function About() {
  return (
    <>
      <Header />
      <AboutPage />
    </>
  );
}
