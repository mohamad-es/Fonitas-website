"use client";

import { useState } from "react";

const primaryLinks = [
  ["How it works", "/how-it-works"],
  ["Publishing", "/publishing"],
  ["Platform", "/platform"],
  ["About", "/about"],
];

const exploreLinks = [
  ["Publishing models", "/models", "Choose how Fonitas fits your publishing operation."],
  ["For developers", "/for-developers", "Understand the path from application to market."],
  ["FAQ", "/faq", "Answers about publishing, source code and the platform."],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-[#070707]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="/" aria-label="Foonitas home" className="block w-[165px] sm:w-[195px]">
          <img src="/foonitas-logo.svg" alt="Foonitas — application publishing operating system" className="h-auto w-full" />
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/60 lg:flex">
          {primaryLinks.map(([label, href]) => (
            <a key={href} className="transition hover:text-white" href={href}>{label}</a>
          ))}
          <div className="relative">
            <button
              type="button"
              aria-expanded={exploreOpen}
              onClick={() => setExploreOpen((value) => !value)}
              className="flex items-center gap-2 transition hover:text-white"
            >
              Explore <span className={`text-[10px] transition-transform ${exploreOpen ? "rotate-180" : ""}`}>⌄</span>
            </button>
            {exploreOpen && (
              <div className="absolute right-0 top-10 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-2 shadow-2xl shadow-black/40">
                {exploreLinks.map(([label, href, description]) => (
                  <a key={href} href={href} onClick={() => setExploreOpen(false)} className="block rounded-xl p-4 transition hover:bg-white/[0.05]">
                    <div className="text-sm text-white">{label}</div>
                    <div className="mt-1 text-xs leading-5 text-white/35">{description}</div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <a href="/login" className="hidden text-sm text-white/60 transition hover:text-white sm:block">Sign in</a>
          <a href="/register" className="hidden rounded-full bg-[#ff5a1f] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#ff7a3d] sm:block">Get started ↗</a>
          <button type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden">
            <span className="text-lg">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-white/[0.07] bg-[#070707] px-6 py-5 lg:hidden">
          {primaryLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/[0.07] py-4 text-lg text-white/75">{label}</a>
          ))}
          <div className="border-b border-white/[0.07] py-4">
            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#ff5a1f]">Explore</p>
            {exploreLinks.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 text-base text-white/65">{label}</a>
            ))}
          </div>
          <a href="/contact" onClick={() => setOpen(false)} className="block border-b border-white/[0.07] py-4 text-lg text-white/75">Contact</a>
          <a href="/login" onClick={() => setOpen(false)} className="block border-b border-white/[0.07] py-4 text-lg text-white/75">Sign in</a>
          <a href="/register" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-[#ff5a1f] px-5 py-3 text-center text-sm font-semibold text-black">Get started ↗</a>
        </nav>
      )}
    </header>
  );
}
