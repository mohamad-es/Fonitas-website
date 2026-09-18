"use client";

import { useEffect, useRef } from "react";

const fragments = [
  [86, 176, 36, 22, -18],
  [132, 112, 25, 15, 14],
  [151, 246, 44, 42, -8],
  [62, 318, 30, 26, 20],
  [122, 394, 24, 13, -18],
  [190, 430, 34, 19, 8],
  [192, 76, 15, 15, 34],
  [48, 228, 13, 13, -12],
  [96, 450, 17, 10, 22],
];

const stores = [
  { symbol: "A", y: 145 },
  { symbol: "G", y: 300 },
  { symbol: "M", y: 455 },
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
      element.style.setProperty("--mx", `${x * 12}px`);
      element.style.setProperty("--my", `${y * 12}px`);
      element.style.setProperty("--rx", `${y * -2.5}deg`);
      element.style.setProperty("--ry", `${x * 3}deg`);
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
      className="hero-orbit relative mx-auto aspect-square w-full max-w-[640px] select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-[5%] rounded-full border border-white/[0.035]" />
      <div className="hero-orbit-ring absolute inset-[12%] rounded-full border border-[#ff5a1f]/15" />
      <div className="absolute inset-[20%] rounded-full border border-dashed border-white/[0.04]" />
      <div className="absolute inset-[28%] rounded-full border border-[#ff7a3d]/[0.07]" />

      <div className="absolute left-[5%] top-[18%] h-[62%] w-[48%] rounded-full bg-[#ff5a1f]/[0.05] blur-[90px]" />
      <div className="absolute right-[3%] top-[21%] h-[58%] w-[34%] rounded-full bg-[#ff5a1f]/[0.075] blur-[90px]" />

      <div
        className="absolute inset-[3%] transition-transform duration-700 ease-out"
        style={{
          transform:
            "translate3d(var(--mx, 0px), var(--my, 0px), 0) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
          transformStyle: "preserve-3d",
        }}
      >
        <svg viewBox="0 0 600 600" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="hero-flow-in" x1="0" x2="1">
              <stop offset="0" stopColor="#ff5a1f" stopOpacity="0" />
              <stop offset=".52" stopColor="#ff6a2a" stopOpacity=".55" />
              <stop offset="1" stopColor="#ffb08a" stopOpacity=".9" />
            </linearGradient>
            <linearGradient id="hero-flow-out" x1="0" x2="1">
              <stop offset="0" stopColor="#ffb08a" stopOpacity=".9" />
              <stop offset=".5" stopColor="#ff6a2a" stopOpacity=".5" />
              <stop offset="1" stopColor="#ff5a1f" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="hero-core" cx="38%" cy="35%">
              <stop offset="0" stopColor="#ffe0d1" />
              <stop offset=".13" stopColor="#ff9a6b" />
              <stop offset=".42" stopColor="#ff5a1f" />
              <stop offset=".78" stopColor="#c83e12" />
              <stop offset="1" stopColor="#541607" />
            </radialGradient>
            <linearGradient id="hero-metal" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity=".24" />
              <stop offset=".28" stopColor="#ffffff" stopOpacity=".04" />
              <stop offset=".58" stopColor="#ff7a3d" stopOpacity=".13" />
              <stop offset="1" stopColor="#000000" stopOpacity=".5" />
            </linearGradient>
            <linearGradient id="hero-tile" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#303030" />
              <stop offset=".5" stopColor="#111111" />
              <stop offset="1" stopColor="#050505" />
            </linearGradient>
            <filter id="hero-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="hero-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>

          <ellipse cx="300" cy="300" rx="175" ry="238" fill="#ff5a1f" opacity=".055" filter="url(#hero-soft-glow)" />

          <g className="hero-energy-in" filter="url(#hero-glow)">
            <path d="M 70 176 C 166 195, 210 246, 254 278" fill="none" stroke="url(#hero-flow-in)" strokeWidth="1.2" />
            <path d="M 48 228 C 164 252, 205 275, 254 290" fill="none" stroke="url(#hero-flow-in)" strokeWidth="1.1" />
            <path d="M 55 318 C 150 310, 205 306, 254 304" fill="none" stroke="url(#hero-flow-in)" strokeWidth="1.3" />
            <path d="M 82 394 C 166 370, 211 335, 254 316" fill="none" stroke="url(#hero-flow-in)" strokeWidth="1.1" />
            <path d="M 116 440 C 180 402, 220 350, 260 322" fill="none" stroke="url(#hero-flow-in)" strokeWidth=".9" />
          </g>

          <g className="hero-energy-out" filter="url(#hero-glow)">
            <path d="M 346 280 C 405 253, 430 190, 492 155" fill="none" stroke="url(#hero-flow-out)" strokeWidth="1.2" />
            <path d="M 346 300 C 410 300, 445 300, 495 300" fill="none" stroke="url(#hero-flow-out)" strokeWidth="1.25" />
            <path d="M 346 320 C 405 348, 430 410, 492 445" fill="none" stroke="url(#hero-flow-out)" strokeWidth="1.2" />
          </g>

          <g opacity=".28" fill="none">
            <ellipse cx="300" cy="300" rx="128" ry="196" stroke="#fff" strokeWidth="1" />
            <ellipse cx="300" cy="300" rx="105" ry="164" stroke="#fff" strokeWidth="1" />
            <ellipse cx="300" cy="300" rx="80" ry="130" stroke="#ff7a3d" strokeWidth="1" />
          </g>

          <g className="hero-core-assembly">
            <ellipse cx="300" cy="300" rx="92" ry="148" fill="url(#hero-metal)" stroke="#fff" strokeOpacity=".17" strokeWidth="1.2" />
            <ellipse cx="300" cy="300" rx="76" ry="126" fill="#080808" fillOpacity=".5" stroke="#ff9b70" strokeOpacity=".24" strokeWidth="1.5" />
            <ellipse cx="300" cy="300" rx="59" ry="103" fill="url(#hero-metal)" stroke="#ff7a3d" strokeOpacity=".5" strokeWidth="2" />
            <ellipse cx="300" cy="300" rx="43" ry="80" fill="url(#hero-core)" filter="url(#hero-glow)" />
            <ellipse cx="300" cy="300" rx="26" ry="52" fill="#090909" stroke="#ffb08a" strokeOpacity=".8" strokeWidth="1.2" />
            <circle cx="300" cy="300" r="8" fill="#fff0e8" filter="url(#hero-glow)" />
            <circle cx="300" cy="300" r="15" fill="none" stroke="#ff7a3d" strokeOpacity=".65" strokeWidth="1" />
          </g>

          <g fill="#0b0b0b" stroke="#fff" strokeOpacity=".17" strokeWidth="1.4">
            {fragments.map(([x, y, w, h, rotate], index) => (
              <g key={index} className="hero-fragment" style={{ animationDelay: `${index * 0.16}s` }}>
                <rect
                  x={x - w / 2}
                  y={y - h / 2}
                  width={w}
                  height={h}
                  rx="7"
                  transform={`rotate(${rotate} ${x} ${y})`}
                  fill="url(#hero-tile)"
                />
                <path
                  d={`M ${x - w / 2 + 4} ${y - h / 2 + 4} L ${x + w / 2 - 4} ${y - h / 2 + 4}`}
                  stroke="#fff"
                  strokeOpacity=".12"
                  strokeWidth="1"
                  transform={`rotate(${rotate} ${x} ${y})`}
                />
              </g>
            ))}
          </g>

          {stores.map((store) => (
            <g key={store.symbol} transform={`translate(492 ${store.y - 25})`}>
              <rect x="5" y="5" width="78" height="50" rx="12" fill="#ff5a1f" opacity=".08" filter="url(#hero-soft-glow)" />
              <rect width="76" height="48" rx="11" fill="url(#hero-tile)" stroke="#fff" strokeOpacity=".16" strokeWidth="1.2" />
              <rect x="8" y="8" width="28" height="32" rx="8" fill="#fff" fillOpacity=".045" stroke="#fff" strokeOpacity=".08" />
              <text x="22" y="29" textAnchor="middle" fill="#fff" fillOpacity=".75" fontSize="12" fontWeight="600">{store.symbol}</text>
              <circle cx="-6" cy="24" r="3" fill="#ff7a3d" filter="url(#hero-glow)" />
            </g>
          ))}
        </svg>
      </div>

      <div className="hero-dot absolute right-[13%] top-[9%] h-1.5 w-1.5 rounded-full bg-[#ff7a3d] shadow-[0_0_22px_7px_rgba(255,90,31,.28)]" />
      <div className="absolute left-[14%] bottom-[16%] h-1 w-1 rounded-full bg-white/40" />
      <div className="absolute right-[18%] bottom-[18%] h-1 w-1 rounded-full bg-[#ff5a1f]/70 shadow-[0_0_12px_4px_rgba(255,90,31,.25)]" />
    </div>
  );
}
