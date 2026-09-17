import { Header } from "@/components/layout/header";
import { ContactPage } from "@/components/contact/contact-page";

export const metadata = {
  title: "Contact — Fonitas",
  description: "Start a collaboration with Fonitas and move your application toward publishing.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <ContactPage />
    </>
  );
}
