"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/i18n-provider";
import { ArrowUpRight, Menu, X } from "lucide-react";

const primaryLinks = [
  ["Investors", "/investors"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  const pathname = usePathname();
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const productActive = pathname.startsWith("/product-owners");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/[0.07] bg-[#070707]/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-6 lg:px-10">
          <Link href="/" aria-label={t("Fonitas home")} className="relative z-10 block w-[148px] transition-opacity hover:opacity-85 sm:w-[175px]">
            <Image src="/fonitas-logo.png" alt="Fonitas" width={350} height={92} priority className="h-auto w-full" />
          </Link>

          <nav aria-label={t("Primary navigation")} className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.025] p-1 lg:flex">
            <Link href="/product-owners" aria-current={productActive ? "page" : undefined} className={`relative rounded-full px-4 py-2 text-[13px] transition-all ${productActive ? "text-white bg-white/5" : "text-white/55 hover:bg-white/[0.04] hover:text-white"}`}>
              {t("Product owners")}
              {productActive && <span className="absolute inset-x-4 bottom-0 left-1/2 -translate-1/2 w-5 h-0.5 rounded-full bg-[#ff5a1f]" />}
            </Link>

            {primaryLinks.map(([label, href]) => {
              const active = isActive(href);
              return (
                <Link key={href} href={href} aria-current={active ? "page" : undefined} className={`relative rounded-full px-4 py-2 text-[13px] transition-all ${active ? "text-white bg-white/5" : "text-white/55 hover:bg-white/[0.04] hover:text-white"}`}>
                  {t(label)}
                  {active && <span className="absolute inset-x-4 bottom-0 left-1/2 -translate-1/2 w-5 h-0.5 rounded-full bg-[#ff5a1f]" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link href="/login" className="btn btn-ghost hidden min-h-0 rounded-full px-4 py-2.5 text-[13px] font-medium text-white/55 hover:bg-white/[0.05] hover:text-white">{t("Sign in")}</Link>
            <Link href="/register" className="btn hidden min-h-0 rounded-full border-0 bg-[#ff5a1f] px-4 py-2.5 text-[13px] font-semibold text-black shadow-[0_0_28px_rgba(255,90,31,0.12)] hover:bg-[#ff7a3d]">{t("Create account")}</Link>
            <button type="button" aria-label={open ? t("Close menu") : t("Open menu")} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white transition hover:border-white/20 hover:bg-white/[0.06] lg:hidden">
              <span className="sr-only">{open ? t("Close menu") : t("Open menu")}</span>
              {open ? <X className="h-4 w-4" strokeWidth={1.8} /> : <Menu className="h-4 w-4" strokeWidth={1.8} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`overflow-hidden border-b border-white/[0.07] bg-[#070707]/95 backdrop-blur-2xl transition-all duration-300 lg:hidden ${open ? "max-h-[calc(100vh-72px)] opacity-100" : "pointer-events-none max-h-0 opacity-0"}`} aria-hidden={!open}>
        <nav aria-label={t("Mobile navigation")} className="mx-auto max-w-[1400px] overflow-y-auto px-5 py-4 sm:px-6">
          <div className="divide-y divide-white/[0.07]">
            <Link href="/product-owners" tabIndex={open ? 0 : -1} className={`relative flex items-center justify-between py-4 text-lg ${productActive ? "text-white" : "text-white/65"}`}>
              <span>{t("Product owners")}</span>
              <ArrowUpRight className="h-4 w-4 text-[#ff5a1f] rtl:-scale-x-100" strokeWidth={1.8} />
              {productActive && <span className="absolute inset-x-0 bottom-1 h-0.5 rounded-full bg-[#ff5a1f]" />}
            </Link>

            {primaryLinks.map(([label, href]) => (
              <Link key={href} href={href} tabIndex={open ? 0 : -1} className={`relative flex items-center justify-between py-4 text-lg ${isActive(href) ? "text-white" : "text-white/65"}`}>
                <span>{t(label)}</span>
                <ArrowUpRight className="h-4 w-4 text-white/20 rtl:-scale-x-100" strokeWidth={1.8} />
                {isActive(href) && <span className="absolute inset-x-0 bottom-1 h-0.5 rounded-full bg-[#ff5a1f]" />}
              </Link>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Link href="/login" tabIndex={open ? 0 : -1} className="btn btn-outline rounded-full border-white/15 bg-transparent text-white/70 hover:border-white/30 hover:bg-white/[0.05]">{t("Sign in")}</Link>
            <Link href="/register" tabIndex={open ? 0 : -1} className="btn rounded-full border-0 bg-[#ff5a1f] text-black hover:bg-[#ff7a3d]">{t("Create account")}</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
