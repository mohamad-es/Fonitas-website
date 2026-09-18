"use client";

import { useEffect, useRef } from "react";

const lifecycle = [
  ["01", "Application", "Received"],
  ["02", "Review", "Evaluating"],
  ["03", "Contract", "Defined"],
  ["04", "QA", "Validated"],
  ["05", "Publishing", "Ready"],
  ["06", "Settlement", "Tracked"],
];

const stores = ["App Store", "Google Play", "Microsoft Store"];

export function HeroOrbit() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      element.style.setProperty("--mx", `${x * 12}px`);
      element.style.setProperty("--my", `${y * 12}px`);
    };

    const reset = () => {
      element.style.setProperty("--mx", "0px");
      element.style.setProperty("--my", "0px");
    };

    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerleave", reset);

    return () => {
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="hero-orbit relative mx-auto aspect-square w-full max-w-[590px] select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-[4%] rounded-full border border-white/[0.05]" />
      <div className="hero-orbit-ring absolute inset-[11%] rounded-full border border-[#ff5a1f]/20" />
      <div className="absolute inset-[19%] rounded-full border border-dashed border-white/[0.07]" />
      <div className="absolute -right-[2%] top-[8%] h-44 w-44 rounded-full bg-[#ff5a1f]/10 blur-[70px]" />
      <div className="absolute bottom-[8%] left-[4%] h-36 w-36 rounded-full bg-[#ff5a1f]/[0.07] blur-[65px]" />

      <div className="hero-orbit-shape absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-[32%] border border-[#ff6a2a]/30 bg-gradient-to-br from-[#ff7a3d]/25 via-[#ff5a1f]/[0.07] to-transparent" />
      <div
        className="absolute left-1/2 top-1/2 z-10 w-[79%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/10 bg-[#0b0b0b]/95 p-5 shadow-2xl backdrop-blur-2xl transition-transform duration-500 sm:p-6"
        style={{
          transform:
            "translate(calc(-50% + var(--mx, 0px)), calc(-50% + var(--my, 0px)))",
        }}
      >
        <div className="flex items-start justify-between border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#ff5a1f] shadow-[0_0_12px_3px_rgba(255,90,31,.35)]" />
              <p className="text-[9px] font-semibold uppercase tracking-[.25em] text-[#ff6a2a]">
                Fonitas OS
              </p>
            </div>
            <p className="mt-2 text-lg font-medium tracking-[-.02em] text-white/90">
              Application → market
            </p>
            <p className="mt-1 text-[10px] text-white/35">
              One connected publishing lifecycle
            </p>
          </div>
          <span className="rounded-full border border-[#ff5a1f]/25 bg-[#ff5a1f]/10 px-2.5 py-1.5 text-[8px] uppercase tracking-[.16em] text-[#ff7a3d]">
            Live flow
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          {lifecycle.map(([number, title, status], index) => (
            <div
              key={number}
              className="group relative rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 transition hover:border-[#ff5a1f]/25"
            >
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-medium text-white/20">{number}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]/80" />
              </div>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[.13em] text-white/75">
                {title}
              </p>
              <p className="mt-1 text-[9px] text-white/30">{status}</p>
              {index < lifecycle.length - 1 && (
                <span className="absolute -right-1.5 top-1/2 hidden h-1 w-1 rounded-full bg-[#ff5a1f]/60 sm:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
          <span className="mr-1 text-[8px] uppercase tracking-[.18em] text-white/25">
            Store-ready
          </span>
          {stores.map((store) => (
            <span
              key={store}
              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[8px] text-white/45"
            >
              {store}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-float absolute left-[0%] top-[16%] rounded-2xl border border-white/10 bg-[#101010]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
        <p className="text-[8px] uppercase tracking-[.2em] text-white/25">QA</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a1f]" />
          <p className="text-sm font-semibold text-white/75">Approved</p>
        </div>
      </div>

      <div className="hero-float-delayed absolute bottom-[10%] right-[0%] rounded-2xl border border-white/10 bg-[#101010]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
        <p className="text-[8px] uppercase tracking-[.2em] text-white/25">Finance</p>
        <p className="mt-1 text-sm font-semibold text-white/75">Settlement tracked</p>
      </div>

      <div className="hero-dot absolute right-[10%] top-[10%] h-2 w-2 rounded-full bg-[#ff5a1f] shadow-[0_0_25px_8px_rgba(255,90,31,.35)]" />
      <div className="absolute bottom-[24%] left-[10%] h-1.5 w-1.5 rounded-full bg-white/50" />
    </div>
  );
}
