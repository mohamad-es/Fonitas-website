import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { PlatformPage } from "@/components/platform/platform-page";

export const metadata: Metadata = {
  title: "Platform — Fonitas",
  description:
    "See the platform principles, operational foundations and future capabilities behind the Fonitas application publishing operating system.",
};

export default function Platform() {
  return (
    <>
      <Header />
      <PlatformPage />
    </>
  );
}
