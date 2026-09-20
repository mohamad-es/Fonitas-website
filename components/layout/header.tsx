"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const productLinks = [
  ["How it works", "/how-it-works"],
  ["Platform", "/platform"],
  ["Publishing", "/publishing"],
] as const;

const primaryLinks = [
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

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const productActive = pathname.startsWith("/product-owners") || productLinks.some(([, href]) => isActive(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/[0.07] bg-[#070707]/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-6 lg:px-10">
          <Link href="/" aria-label="Fonitas home" className="relative z-10 block w-[148px] transition-opacity hover:opacity-85 sm:w-[175px]">
            <Image src="/foonitas-logo.png" alt="Fonitas" width={350} height={92} priority className="h-auto w-full" />
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.025] p-1 lg:flex">
            <div className="dropdown dropdown-hover">
              <button
                type="button"
                tabIndex={0}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-[13px] transition-all ${productActive ? "bg-white/[0.08] text-white" : "text-white/55 hover:bg-white/[0.04] hover:text-white"}`}
              >
                Product owners <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.8} />
              </button>
              <ul tabIndex={0} className="menu dropdown-content z-[60] mt-2 w-52 rounded-2xl border border-white/10 bg-[#111]/95 p-2 shadow-2xl backdrop-blur-2xl">
                <li>
                  <Link href="/product-owners" className={pathname === "/product-owners" ? "active" : ""}>Overview</Link>
                </li>
                {productLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className={isActive(href) ? "active" : ""}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {primaryLinks.map(([label, href]) => {
              const active = isActive(href);
              return (
                <Link key={href} href={href} aria-current={active ? "page" : undefined} className={`rounded-full px-4 py-2 text-[13px] transition-all ${active ? "bg-white/[0.08] text-white" : "text-white/55 hover:bg-white/[0.04] hover:text-white"}`}>
                  {active && <span className="absolute left-1/2 top-1 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[#ff5a1f]" />}
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/login" className="hidden rounded-full px-4 py-2.5 text-[13px] font-medium text-white/55 transition hover:bg-white/[0.05] hover:text-white sm:block">
              Sign in
            </Link>
            <Link href="/register" className="hidden rounded-full bg-[#ff5a1f] px-4 py-2.5 text-[13px] font-semibold text-black shadow-[0_0_28px_rgba(255,90,31,0.12)] transition hover:bg-[#ff7a3d] sm:block">
              Create account
            </Link>
            <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white transition hover:border-white/20 hover:bg-white/[0.06] lg:hidden">
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <X className="h-4 w-4" strokeWidth={1.8} /> : <Menu className="h-4 w-4" strokeWidth={1.8} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`overflow-hidden border-b border-white/[0.07] bg-[#070707]/95 backdrop-blur-2xl transition-all duration-300 lg:hidden ${open ? "max-h-[calc(100vh-72px)] opacity-100" : "pointer-events-none max-h-0 opacity-0"}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation" className="mx-auto max-w-[1400px] overflow-y-auto px-5 py-4 sm:px-6">
          <div className="divide-y divide-white/[0.07]">
            <Link href="/product-owners" tabIndex={open ? 0 : -1} className={`flex items-center justify-between py-4 text-lg ${productActive ? "text-white" : "text-white/65"}`}>
              <span>Product owners</span><ArrowUpRight className="h-4 w-4 text-[#ff5a1f]" strokeWidth={1.8} />
            </Link>
            <div className="py-2">
              <p className="px-1 py-2 text-[9px] uppercase tracking-[0.22em] text-white/20">Product owner pages</p>
              {productLinks.map(([label, href]) => (
                <Link key={href} href={href} tabIndex={open ? 0 : -1} className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm ${isActive(href) ? "bg-white/[0.05] text-white" : "text-white/45 hover:text-white"}`}>
                  {label}<ArrowUpRight className="h-3.5 w-3.5 text-white/20" strokeWidth={1.8} />
                </Link>
              ))}
            </div>
            {primaryLinks.map(([label, href]) => (
              <Link key={href} href={href} tabIndex={open ? 0 : -1} className={`flex items-center justify-between py-4 text-lg ${isActive(href) ? "text-white" : "text-white/65"}`}>
                <span>{label}</span><ArrowUpRight className="h-4 w-4 text-white/20" strokeWidth={1.8} />
              </Link>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Link href="/login" tabIndex={open ? 0 : -1} className="btn btn-outline rounded-full border-white/15 bg-transparent text-white/70 hover:border-white/30 hover:bg-white/[0.05]">Sign in</Link>
            <Link href="/register" tabIndex={open ? 0 : -1} className="btn rounded-full border-0 bg-[#ff5a1f] text-black hover:bg-[#ff7a3d]">Create account</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
