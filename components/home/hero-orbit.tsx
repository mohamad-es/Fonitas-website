"use client";

import { useEffect, useRef } from "react";

const fragments = [
  { className: "left-[13%] top-[27%] h-10 w-10 rotate-12" },
  { className: "left-[23%] top-[18%] h-7 w-7 -rotate-12" },
  { className: "left-[27%] top-[39%] h-12 w-12 rotate-45" },
  { className: "left-[12%] top-[53%] h-8 w-8 -rotate-12" },
  { className: "left-[23%] top-[62%] h-6 w-6 rotate-45" },
  { className: "left-[32%] top-[69%] h-10 w-10 -rotate-6" },
  { className: "left-[31%] top-[12%] h-4 w-4 rotate-45" },
];

const stores = [
  { name: "A", label: "App Store" },
  { name: "G", label: "Google Play" },
  { name: "M", label: "Microsoft Store" },
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
      element.style.setProperty("--mx", `${x * 10}px`);
      element.style.setProperty("--my", `${y * 10}px`);
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
      className="hero-orbit relative mx-auto aspect-square w-full max-w-[600px] select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-[8%] rounded-full border border-white/[0.035]" />
      <div className="hero-orbit-ring absolute inset-[16%] rounded-full border border-[#ff5a1f]/15" />
      <div className="absolute inset-[25%] rounded-full border border-white/[0.045]" />

      <div className="absolute left-[7%] top-[17%] h-[58%] w-[48%] rounded-full bg-[#ff5a1f]/[0.045] blur-[80px]" />
      <div className="absolute right-[3%] top-[22%] h-[50%] w-[34%] rounded-full bg-[#ff5a1f]/[0.08] blur-[75px]" />

      {fragments.map((fragment, index) => (
        <div
          key={index}
          className={`absolute ${fragment.className} rounded-[10px] border border-white/[0.14] bg-gradient-to-br from-white/[0.13] to-white/[0.025] shadow-[0_0_25px_rgba(255,255,255,.025)] backdrop-blur-sm`}
          style={{
            animation: `fragment-drift ${4.5 + index * 0.35}s ease-in-out ${index * 0.12}s infinite alternate`,
          }}
        />
      ))}

      <div className="absolute left-[33%] top-1/2 h-px w-[23%] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#ff5a1f]/40 to-[#ff5a1f]/80" />
      <div className="absolute left-[56%] top-1/2 h-px w-[24%] -translate-y-1/2 bg-gradient-to-r from-[#ff5a1f]/80 via-[#ff5a1f]/35 to-transparent" />

      <div
        className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700"
        style={{ transform: "translate(calc(-50% + var(--mx, 0px)), calc(-50% + var(--my, 0px)))" }}
      >
        <div className="absolute inset-[4%] rounded-full border border-white/[0.08] bg-white/[0.018] backdrop-blur-sm" />
        <div className="absolute inset-[13%] rounded-full border border-[#ff6a2a]/25 bg-gradient-to-br from-[#ff7a3d]/20 via-transparent to-[#ff5a1f]/10 shadow-[0_0_100px_rgba(255,90,31,.12)]" />
        <div className="hero-orbit-shape absolute inset-[25%] rounded-[38%] border border-[#ff7a3d]/40 bg-gradient-to-br from-[#ff8b52]/80 via-[#ff5a1f]/70 to-[#8f250b]/90 shadow-[0_0_80px_rgba(255,90,31,.3)]" />
        <div className="absolute left-1/2 top-1/2 h-[25%] w-[25%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#090909] shadow-[0_0_45px_rgba(255,90,31,.3),inset_0_0_25px_rgba(255,90,31,.2)]" />
        <div className="absolute left-1/2 top-1/2 h-[8%] w-[8%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffb08a] shadow-[0_0_30px_8px_rgba(255,90,31,.55)]" />
      </div>

      <div className="absolute right-[1%] top-[20%] flex flex-col gap-4">
        {stores.map((store, index) => (
          <div
            key={store.name}
            className="hero-float-delayed flex items-center gap-3 rounded-xl border border-white/[0.09] bg-[#0d0d0d]/85 px-3 py-2.5 backdrop-blur-xl"
            style={{ animationDelay: `${index * 0.35}s` }}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-[10px] font-semibold text-white/65">
              {store.name}
            </span>
            <span className="text-[9px] uppercase tracking-[.12em] text-white/35">{store.label}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-[18%] left-[8%] rounded-xl border border-[#ff5a1f]/15 bg-[#0d0d0d]/80 px-4 py-3 backdrop-blur-xl">
        <p className="text-[8px] uppercase tracking-[.2em] text-white/25">Controlled</p>
        <p className="mt-1 text-sm font-medium text-white/70">From build to market</p>
      </div>

      <div className="hero-dot absolute right-[18%] top-[10%] h-1.5 w-1.5 rounded-full bg-[#ff5a1f] shadow-[0_0_22px_7px_rgba(255,90,31,.3)]" />
      <div className="absolute left-[19%] bottom-[17%] h-1 w-1 rounded-full bg-white/45" />
    </div>
  );
}
