import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fonitas — Application Publishing Operating System",
  description:
    "Fonitas connects application intake, evaluation, contracts, QA, publishing, revenue and settlement in one application publishing operating system.",
  keywords: [
    "Fonitas",
    "application publishing",
    "app publishing platform",
    "application lifecycle",
    "publishing operations",
  ],
  icons: {\n    icon: "/foonitas-logo.svg",\n  },\n  openGraph: {
    title: "Fonitas — Application Publishing Operating System",
    description:
      "From application intake to publishing and settlement, Fonitas connects the operational lifecycle around an application.",
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
