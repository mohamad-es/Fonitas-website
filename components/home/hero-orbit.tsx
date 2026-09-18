"use client";

import { useEffect, useRef } from "react";

const fragments = [
  [10, 29, 34, 16, -14],
  [19, 18, 25, 12, 18],
  [24, 42, 42, 42, -8],
  [9, 53, 28, 25, 24],
  [20, 65, 22, 11, -18],
  [31, 68, 31, 17, 8],
  [32, 12, 15, 15, 35],
];

const stores = [
  { label: "APP STORE", symbol: "A", y: 24 },
  { label: "GOOGLE PLAY", symbol: "G", y: 48 },
  { label: "MICROSOFT", symbol: "M", y: 72 },
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
    <div ref={ref} className="hero-orbit relative mx-auto aspect-square w-full max-w-[620px] select-none" aria-hidden="true">
      <div className="absolute inset-[4%] rounded-full border border-white/[0.035]" />
      <div className="hero-orbit-ring absolute inset-[11%] rounded-full border border-[#ff5a1f]/15" />
      <div className="absolute inset-[21%] rounded-full border border-dashed border-white/[0.045]" />

      <div className="absolute left-[5%] top-[20%] h-[58%] w-[50%] rounded-full bg-[#ff5a1f]/[0.045] blur-[85px]" />
      <div className="absolute right-[2%] top-[22%] h-[48%] w-[35%] rounded-full bg-[#ff5a1f]/[0.08] blur-[80px]" />

      <div className="absolute inset-0">
        <svg viewBox="0 0 600 600" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="hero-flow" x1="0" x2="1">
              <stop offset="0" stopColor="#ff5a1f" stopOpacity="0" />
              <stop offset=".45" stopColor="#ff7a3d" stopOpacity=".7" />
              <stop offset="1" stopColor="#ffb08a" stopOpacity=".9" />
            </linearGradient>
            <radialGradient id="hero-core">
              <stop offset="0" stopColor="#ffd0bc" />
              <stop offset=".18" stopColor="#ff8b52" />
              <stop offset=".5" stopColor="#ff5a1f" />
              <stop offset="1" stopColor="#8f250b" />
            </radialGradient>
            <filter id="hero-glow">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <g className="hero-energy-in" filter="url(#hero-glow)">
            <path d="M 95 180 C 190 210, 205 270, 280 292" fill="none" stroke="url(#hero-flow)" strokeWidth="1.5" />
            <path d="M 65 300 C 170 300, 205 302, 280 300" fill="none" stroke="url(#hero-flow)" strokeWidth="1.5" />
            <path d="M 95 420 C 190 390, 205 330, 280 308" fill="none" stroke="url(#hero-flow)" strokeWidth="1.5" />
          </g>

          <g className="hero-energy-out" filter="url(#hero-glow)">
            <path d="M 320 300 C 390 285, 420 190, 505 145" fill="none" stroke="url(#hero-flow)" strokeWidth="1.5" />
            <path d="M 320 300 C 395 300, 430 300, 510 300" fill="none" stroke="url(#hero-flow)" strokeWidth="1.5" />
            <path d="M 320 300 C 390 315, 420 410, 505 455" fill="none" stroke="url(#hero-flow)" strokeWidth="1.5" />
          </g>

          <g opacity=".32" fill="none" stroke="#fff">
            <ellipse cx="300" cy="300" rx="120" ry="185" strokeWidth="1" />
            <ellipse cx="300" cy="300" rx="92" ry="145" strokeWidth="1" />
            <ellipse cx="300" cy="300" rx="66" ry="108" stroke="#ff7a3d" strokeWidth="1" />
          </g>

          <g className="hero-core-assembly">
            <ellipse cx="300" cy="300" rx="78" ry="126" fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.15)" strokeWidth="1" />
            <ellipse cx="300" cy="300" rx="62" ry="104" fill="rgba(255,90,31,.08)" stroke="rgba(255,122,61,.35)" strokeWidth="1.5" />
            <ellipse cx="300" cy="300" rx="45" ry="80" fill="url(#hero-core)" opacity=".92" />
            <ellipse cx="300" cy="300" rx="27" ry="52" fill="#090909" stroke="#ff9b70" strokeOpacity=".7" strokeWidth="1" />
            <circle cx="300" cy="300" r="7" fill="#ffd0bc" filter="url(#hero-glow)" />
          </g>

          <g fill="#111" stroke="rgba(255,255,255,.2)" strokeWidth="1.5">
            {fragments.map(([x, y, w, h, rotate], index) => (
              <rect
                key={index}
                x={x * 6 - w / 2}
                y={y * 6 - h / 2}
                width={w}
                height={h}
                rx="7"
                transform={`rotate(${rotate} ${x * 6} ${y * 6})`}
                className="hero-fragment"
                style={{ animationDelay: `${index * 0.18}s` }}
              />
            ))}
          </g>

          {stores.map((store) => (
            <g key={store.label} transform={`translate(505 ${store.y * 6 - 21})`}>
              <rect width="70" height="42" rx="10" fill="#0d0d0d" stroke="rgba(255,255,255,.14)" />
              <rect x="9" y="9" width="24" height="24" rx="7" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.08)" />
              <text x="21" y="25" textAnchor="middle" fill="rgba(255,255,255,.7)" fontSize="10" fontWeight="600">{store.symbol}</text>
              <circle cx="-5" cy="21" r="2.5" fill="#ff5a1f" />
            </g>
          ))}
        </svg>
      </div>

      <div className="absolute left-[3%] top-[48%] -translate-y-1/2 text-[8px] uppercase tracking-[.28em] text-white/20">
        <span className="block">raw</span>
        <span className="mt-1 block">inputs</span>
      </div>

      <div
        className="absolute left-1/2 top-1/2 h-[25%] w-[25%] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-700"
        style={{ transform: "translate(calc(-50% + var(--mx, 0px)), calc(-50% + var(--my, 0px)))" }}
      >
        <div className="absolute inset-0 rounded-full border border-[#ff5a1f]/20 shadow-[0_0_100px_rgba(255,90,31,.2)]" />
      </div>

      <div className="absolute right-[0%] top-[19%] text-[8px] uppercase tracking-[.22em] text-white/20">
        <span className="block">market</span>
        <span className="mt-1 block">ready</span>
      </div>

      <div className="absolute bottom-[13%] left-[13%] rounded-full border border-white/[0.08] bg-[#0b0b0b]/75 px-3 py-1.5 text-[8px] uppercase tracking-[.18em] text-white/35 backdrop-blur-xl">
        One operating system
      </div>

      <div className="hero-dot absolute right-[17%] top-[10%] h-1.5 w-1.5 rounded-full bg-[#ff5a1f] shadow-[0_0_22px_7px_rgba(255,90,31,.3)]" />
    </div>
  );
}
