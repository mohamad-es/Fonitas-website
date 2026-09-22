import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fonitas — Application Growth & Investment",
  description:
    "Fonitas helps application owners bring products to market and gives investors a simple way to discover selected application opportunities.",
  keywords: [
    "Fonitas",
    "application publishing",
    "application growth",
    "investment opportunities",
    "app investment",
  ],
  icons: {
    icon: "/fonitas-logo.svg",
  },
  openGraph: {
    title: "Fonitas — Application Growth & Investment",
    description:
      "A simple place for application owners to grow and investors to discover selected opportunities.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fonitas — Application Growth & Investment",
    description:
      "A simple place for application owners to grow and investors to discover selected opportunities.",
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
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
