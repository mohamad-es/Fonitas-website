import { useTranslations } from "next-intl";

"use client";

import { useEffect, useRef } from "react";

const stores = [
  { name: t("Apple App Store"), short: "APPLE" },
  { name: t("Google Play"), short: "GOOGLE" },
  { name: t("Microsoft Store"), short: "MICROSOFT" },
];

export function HeroOrbit() {
  const t = useTranslations();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      element.style.setProperty("--mx", `${x * 8}px`);
      element.style.setProperty("--my", `${y * 8}px`);
      element.style.setProperty("--rx", `${y * -1.5}deg`);
      element.style.setProperty("--ry", `${x * 2}deg`);
    };

    const reset = () => {
      element.style.setProperty("--mx", "0px");
      element.style.setProperty("--my", "0px");
      element.style.setProperty("--rx", "0deg");
      element.style.setProperty("--ry", "0deg");
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
      className="hero-orbit group relative mx-auto w-full max-w-[620px] select-none [perspective:1200px] sm:px-2"
      aria-hidden="true"
    >
      <div className="absolute inset-[4%] animate-[spin_24s_linear_infinite] rounded-full border border-white/[0.035] sm:inset-[8%]" />
      <div className="absolute inset-[10%] animate-[spin_18s_linear_infinite_reverse] rounded-full border border-[#ff5a1f]/15 sm:inset-[15%]" />

      <div className="absolute left-[6%] top-[12%] h-56 w-56 rounded-full bg-[#ff5a1f]/[0.06] blur-[80px]" />
      <div className="absolute right-[2%] bottom-[10%] h-64 w-64 rounded-full bg-[#ff5a1f]/[0.08] blur-[90px]" />

      <div
        className="relative z-10 mx-auto w-[94%] py-8 transition-transform duration-500 ease-out sm:py-10"
        style={{
          transform: "translate3d(var(--mx,0px),var(--my,0px),0) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="grid gap-3 sm:gap-4">
          <div className="flex items-start gap-3 rounded-[24px] sm:items-center sm:gap-4 border border-white/10 bg-[#0d0d0d]/90 p-5 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-xl sm:p-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ff5a1f] text-xs font-bold tracking-[.08em] text-black shadow-[0_0_35px_rgba(255,90,31,.2)] sm:h-16 sm:w-16">
              APP
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff6a2a]">Application</p>
              <p className="mt-1 text-base font-semibold text-white sm:text-lg">Build v2.4.1</p>
              <p className="mt-1 text-xs text-white/35">Registered and ready for the release path</p>
            </div>
            <span className="ml-auto shrink-0 rounded-full border border-white/10 px-2.5 py-1.5 text-[8px] font-medium uppercase tracking-[.14em] text-white/45 sm:px-3 sm:text-[9px]">
              Ready
            </span>
          </div>

          <div className="flex justify-center py-1 text-[#ff5a1f]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ff5a1f]/25 bg-[#ff5a1f]/[.06] text-sm text-[#ff6a2a]">
              ↓
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-[#ff5a1f]/30 bg-[#ff5a1f]/[0.045] p-7 shadow-[0_25px_90px_rgba(255,90,31,.09)] transition-transform duration-700 group-hover:[transform:translateZ(14px)_rotateX(1deg)] sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,90,31,.12),transparent_45%)]" />
            {" "}
            <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 animate-[ping_5s_ease-out_infinite] rounded-full border border-[#ff5a1f]/15" />
            {" "}
            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-20 w-20 animate-[pulse_4s_ease-in-out_infinite] sm:h-28 sm:w-28 items-center justify-center rounded-[26px] bg-[#ff5a1f] text-sm font-black tracking-[.12em] text-black shadow-[0_0_55px_rgba(255,90,31,.32)] ring-1 ring-white/20 transition-transform duration-700 group-hover:scale-[1.04] ">
                FONITAS
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[.22em] text-white/85">
                Publishing Operating System
              </p>
              <p className="mt-2 max-w-sm text-xs leading-6 text-white/35 sm:text-sm">
                Review · Contract · QA · Publishing · Revenue · Settlement
              </p>
            </div>
          </div>

          <div className="flex justify-center py-1 text-[#ff5a1f]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 text-lg">
              ↓
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0d0d0d]/90 p-5 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-xl sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#ff6a2a]">
                Publishing destinations
              </p>
              <span className="text-[9px] uppercase tracking-[.16em] text-white/25">Human-in-the-loop</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              {stores.map((store, index) => (
                <div
                  key={store.name}
                  className={`flex items-center gap-2 rounded-xl border px-3 py-3 ${index === 0 ? "border-[#ff5a1f]/30 bg-[#ff5a1f]/[.06]" : "border-white/10 bg-white/[.02]"}`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-bold ${index === 0 ? "bg-[#ff5a1f] text-black" : "bg-white/10 text-white/60"}`}
                  >
                    {store.short.charAt(0)}
                  </span>
                  <span className="text-[10px] font-medium text-white/65">{store.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
