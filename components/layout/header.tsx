"use client";

import { useState } from "react";

const links = [
  ["Solutions", "#solutions"],
  ["Work", "#work"],
  ["About", "#about"],
  ["Insights", "#insights"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-[#070707]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#" className="text-xl font-bold tracking-[-0.05em]">
          Foonitas<span className="text-[#ff5a1f]">.</span>
        </a>

        <nav className="hidden items-center gap-9 text-sm text-white/60 md:flex">
          {links.map(([label, href]) => (
            <a key={href} className="transition hover:text-white" href={href}>{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden rounded-full bg-[#ff5a1f] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#ff7a3d] sm:block">
            Let&apos;s talk ↗
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          >
            <span className="text-lg">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/[0.07] bg-[#070707] px-6 py-5 md:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/[0.07] py-4 text-lg text-white/75 last:border-0">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-[#ff5a1f] px-5 py-3 text-center text-sm font-semibold text-black">Let&apos;s talk ↗</a>
        </nav>
      )}
    </header>
  );
}
