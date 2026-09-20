"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primaryLinks = [
  ["Product owners", "/product-owners"],
  ["Investors", "/investors"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  const pathname = usePathname();
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

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/[0.07] bg-[#070707]/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-6 lg:px-10">
          <Link href="/" aria-label="Fonitas home" className="relative z-10 block w-[148px] transition-opacity hover:opacity-85 sm:w-[175px]">
            <Image
              src="/foonitas-logo.png"
              alt="Fonitas"
              width={350}
              height={92}
              priority
              className="h-auto w-full"
            />
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.025] p-1 lg:flex">
            {primaryLinks.map(([label, href]) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-[13px] transition-all ${
                    active
                      ? "bg-white/[0.08] text-white"
                      : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {active && <span className="absolute left-1/2 top-1 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[#ff5a1f]" />}
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden rounded-full bg-[#ff5a1f] px-4 py-2.5 text-[13px] font-semibold text-black shadow-[0_0_28px_rgba(255,90,31,0.12)] transition hover:bg-[#ff7a3d] sm:block">
              Talk to Fonitas <span aria-hidden="true">↗</span>
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white transition hover:border-white/20 hover:bg-white/[0.06] lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className="relative block h-4 w-4" aria-hidden="true">
                <span className={`absolute left-0 top-[3px] h-px w-4 bg-white transition-transform duration-200 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-[11px] h-px w-4 bg-white transition-transform duration-200 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className={`overflow-hidden border-b border-white/[0.07] bg-[#070707]/95 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
        open ? "max-h-[calc(100vh-72px)] opacity-100" : "pointer-events-none max-h-0 opacity-0"
      }`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation" className="mx-auto max-w-[1400px] overflow-y-auto px-5 py-4 sm:px-6">
          <div className="divide-y divide-white/[0.07]">
            {primaryLinks.map(([label, href], index) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  tabIndex={open ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between py-4 text-lg transition ${
                    active ? "text-white" : "text-white/65 hover:text-white"
                  }`}
                >
                  <span>{label}</span>
                  <span className={active ? "text-sm text-[#ff5a1f]" : "text-sm text-white/25"}>
                    {String(index + 1).padStart(2, "0")} ↗
                  </span>
                </Link>
              );
            })}
          </div>

          <Link href="/contact" tabIndex={open ? 0 : -1} className="mt-5 flex items-center justify-center rounded-full bg-[#ff5a1f] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#ff7a3d]">
            Talk to Fonitas ↗
          </Link>
        </nav>
      </div>
    </header>
  );
}
