import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/components/i18n-provider";
import { NextIntlClientProvider } from "next-intl";

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
    icon: "/fonitas-logo.png",
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
    <html lang="en" dir="ltr">
      <body suppressHydrationWarning><NextIntlClientProvider><I18nProvider>{children}</I18nProvider></NextIntlClientProvider></body>
    </html>
  );
}
