"use client";

import { useEffect, useRef } from "react";

const flow = [
  ["01", "APP"],
  ["02", "REVIEW"],
  ["03", "QA"],
  ["04", "STORE"],
];

export function HeroOrbit() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      element.style.setProperty("--mx", `${x * 16}px`);
      element.style.setProperty("--my", `${y * 16}px`);
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
    <div ref={ref} className="hero-orbit relative mx-auto aspect-square w-full max-w-[560px] select-none" aria-hidden="true">
      <div className="absolute inset-[5%] rounded-full border border-white/[0.06]" />
      <div className="hero-orbit-ring absolute inset-[14%] rounded-full border border-[#ff5a1f]/20" />
      <div className="absolute inset-[24%] rounded-full border border-white/[0.06]" />

      <div className="hero-orbit-shape absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-[30%] border border-[#ff6a2a]/50 bg-gradient-to-br from-[#ff7a3d]/80 via-[#ff5a1f]/30 to-transparent shadow-[0_0_100px_rgba(255,90,31,.24)] backdrop-blur-sm" />
      <div className="hero-orbit-core absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[28%] bg-[#ff5a1f]" />
      <div className="absolute left-1/2 top-1/2 h-[20%] w-[20%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#080808] shadow-[inset_0_0_40px_rgba(255,90,31,.15)]" />

      <div className="absolute left-1/2 top-1/2 z-10 w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/10 bg-[#0b0b0b]/90 p-5 shadow-2xl backdrop-blur-xl transition-transform duration-500" style={{ transform: "translate(calc(-50% + var(--mx, 0px)), calc(-50% + var(--my, 0px)))" }}>
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-[9px] uppercase tracking-[.25em] text-[#ff6a2a]">Publishing OS</p>
            <p className="mt-1 text-sm font-medium text-white/80">Application lifecycle</p>
          </div>
          <span className="rounded-full border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 px-2.5 py-1 text-[8px] uppercase tracking-[.18em] text-[#ff7a3d]">Active</span>
        </div>
        <div className="mt-5 space-y-3">
          {flow.map(([number, label], index) => (
            <div key={number} className="relative flex items-center gap-3">
              {index < flow.length - 1 && <span className="absolute left-[11px] top-7 h-4 w-px bg-white/10" />}
              <span className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full border text-[8px] ${index === 3 ? "border-[#ff5a1f]/50 bg-[#ff5a1f] text-black" : "border-white/10 bg-[#151515] text-white/40"}`}>{number}</span>
              <span className="text-[10px] uppercase tracking-[.18em] text-white/55">{label}</span>
              <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#ff5a1f] shadow-[0_0_12px_3px_rgba(255,90,31,.3)]" />
            </div>
          ))}
        </div>
      </div>

      <div className="hero-float absolute left-[4%] top-[20%] rounded-2xl border border-white/10 bg-[#101010]/85 px-4 py-3 shadow-2xl backdrop-blur-xl">
        <p className="text-[8px] uppercase tracking-[.2em] text-white/25">Release</p>
        <p className="mt-1 text-sm font-semibold text-white/75">v1.0.4</p>
      </div>
      <div className="hero-float-delayed absolute bottom-[14%] right-[5%] rounded-2xl border border-white/10 bg-[#101010]/85 px-4 py-3 shadow-2xl backdrop-blur-xl">
        <p className="text-[8px] uppercase tracking-[.2em] text-white/25">Settlement</p>
        <p className="mt-1 text-sm font-semibold text-white/75">Reconciled</p>
      </div>
      <div className="hero-dot absolute right-[16%] top-[12%] h-2 w-2 rounded-full bg-[#ff5a1f] shadow-[0_0_25px_8px_rgba(255,90,31,.35)]" />
      <div className="absolute bottom-[27%] left-[16%] h-1.5 w-1.5 rounded-full bg-white/60" />
    </div>
  );
}
