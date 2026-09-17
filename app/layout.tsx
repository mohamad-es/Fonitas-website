import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foonitas — Application Publishing Operating System",
  description:
    "Foonitas connects application intake, evaluation, contracts, QA, publishing, revenue and settlement in one application publishing operating system.",
  keywords: [
    "Foonitas",
    "Fonitas",
    "application publishing",
    "app publishing platform",
    "application lifecycle",
    "publishing operations",
  ],
  openGraph: {
    title: "Foonitas — Application Publishing Operating System",
    description:
      "From application intake to publishing and settlement, Foonitas connects the operational lifecycle around an application.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
