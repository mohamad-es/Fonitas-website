import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foonitas — Digital Products & Technology",
  description:
    "Foonitas transforms complex ideas into meaningful digital products and experiences.",
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
