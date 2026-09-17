"use client";

import { useEffect, useRef } from "react";

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

      <div className="hero-float absolute left-[8%] top-[30%] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#101010]/80 text-[#ff6a2a] shadow-2xl backdrop-blur-xl">✦</div>
      <div className="hero-float-delayed absolute bottom-[17%] right-[9%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#101010]/80 text-xs font-semibold text-white/70 shadow-2xl backdrop-blur-xl">FX</div>
      <div className="hero-dot absolute right-[18%] top-[13%] h-2 w-2 rounded-full bg-[#ff5a1f] shadow-[0_0_25px_8px_rgba(255,90,31,.35)]" />
      <div className="absolute bottom-[28%] left-[20%] h-1.5 w-1.5 rounded-full bg-white/60" />
    </div>
  );
}
