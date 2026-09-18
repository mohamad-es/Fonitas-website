import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { ContactPage } from "@/components/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact — Fonitas",
  description:
    "Start a conversation with Fonitas about application publishing, QA, partnerships, and the platform.",
};

export default function ContactRoute() {
  return (
    <>
      <Header />
      <ContactPage />
    </>
  );
}
