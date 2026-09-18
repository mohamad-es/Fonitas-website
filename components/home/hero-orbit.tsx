"use client";

import { useEffect, useRef } from "react";

const fragments = [
  [90, 155, 44, 26, -18], [140, 112, 34, 18, 14], [105, 250, 52, 30, 10],
  [68, 338, 34, 26, 20], [125, 405, 38, 20, -18], [192, 438, 42, 22, 8],
  [205, 76, 20, 20, 34], [50, 218, 18, 18, -12], [92, 462, 22, 14, 22],
];

const stores = [
  { symbol: "A", name: "Apple", y: 170 },
  { symbol: "G", name: "Google", y: 300 },
  { symbol: "M", name: "Microsoft", y: 430 },
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
      element.style.setProperty("--rx", `${y * -2}deg`);
      element.style.setProperty("--ry", `${x * 2.5}deg`);
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
    <div ref={ref} className="hero-orbit relative mx-auto aspect-square w-full max-w-[680px] select-none" aria-hidden="true">
      <div className="absolute inset-[4%] rounded-full border border-white/[0.035]" />
      <div className="absolute inset-[10%] rounded-full border border-[#ff5a1f]/10" />
      <div className="absolute inset-[17%] border border-dashed border-white/[0.05] [clip-path:polygon(12%_0,88%_0,100%_18%,100%_82%,88%_100%,12%_100%,0_82%,0_18%)]" />

      <div className="absolute left-[5%] top-[18%] h-[62%] w-[45%] bg-[#ff5a1f]/[0.055] blur-[75px] [clip-path:polygon(0_35%,55%_0,100%_25%,82%_75%,42%_100%,8%_72%)]" />
      <div className="absolute right-[4%] top-[20%] h-[55%] w-[45%] bg-[#ff5a1f]/[0.09] blur-[75px] [clip-path:polygon(12%_0,100%_18%,82%_100%,0_78%)]" />

      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ transform: "translate3d(var(--mx,0px),var(--my,0px),0) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))", transformStyle: "preserve-3d" }}
      >
        <svg viewBox="0 0 600 600" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="hero-in" x1="0" x2="1">
              <stop offset="0" stopColor="#ff5a1f" stopOpacity="0" />
              <stop offset=".55" stopColor="#ff6a2a" stopOpacity=".7" />
              <stop offset="1" stopColor="#ffb08a" stopOpacity=".9" />
            </linearGradient>
            <linearGradient id="hero-out" x1="0" x2="1">
              <stop offset="0" stopColor="#ffb08a" stopOpacity=".95" />
              <stop offset=".55" stopColor="#ff6a2a" stopOpacity=".55" />
              <stop offset="1" stopColor="#ff5a1f" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-core" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ff9a6b" />
              <stop offset=".4" stopColor="#ff5a1f" />
              <stop offset="1" stopColor="#8f2509" />
            </linearGradient>
            <filter id="hero-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="hero-soft" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
          </defs>

          <g fill="none" filter="url(#hero-glow)">
            <path d="M 35 155 C 130 185 180 240 255 275" stroke="url(#hero-in)" strokeWidth="1.4" />
            <path d="M 25 235 C 130 250 180 270 255 292" stroke="url(#hero-in)" strokeWidth="1.2" />
            <path d="M 30 300 L 255 300" stroke="url(#hero-in)" strokeWidth="1.5" />
            <path d="M 45 375 C 145 350 190 325 255 308" stroke="url(#hero-in)" strokeWidth="1.2" />
            <path d="M 70 450 C 150 410 200 350 258 318" stroke="url(#hero-in)" strokeWidth="1" />

            <path d="M 345 280 C 410 250 455 205 520 165" stroke="url(#hero-out)" strokeWidth="1.4" />
            <path d="M 345 300 L 535 300" stroke="url(#hero-out)" strokeWidth="1.5" />
            <path d="M 345 320 C 415 350 465 405 520 445" stroke="url(#hero-out)" strokeWidth="1.4" />
          </g>

          <g fill="none" stroke="#fff" strokeOpacity=".14">
            <path d="M 205 210 L 265 172 L 375 172 L 435 210 L 435 390 L 375 428 L 265 428 L 205 390 Z" />
            <path d="M 225 232 L 282 198 L 358 198 L 415 232 L 415 368 L 358 402 L 282 402 L 225 368 Z" stroke="#ff7a3d" strokeOpacity=".22" />
          </g>

          <g>
            <rect x="82" y="128" width="118" height="56" rx="12" fill="#101010" stroke="#fff" strokeOpacity=".16" />
            <circle cx="100" cy="146" r="4" fill="#ff5a1f" />
            <text x="112" y="149" fill="#fff" fillOpacity=".75" fontSize="9" fontWeight="600">APPLICATION</text>
            <text x="100" y="169" fill="#fff" fillOpacity=".28" fontSize="7">BUILD v2.4.1</text>
          </g>

          <g filter="url(#hero-glow)">
            <path d="M 255 270 L 285 250 L 345 250 L 375 270 L 375 330 L 345 350 L 285 350 L 255 330 Z" fill="url(#hero-core)" />
            <path d="M 274 279 L 298 263 L 332 263 L 356 279 L 356 321 L 332 337 L 298 337 L 274 321 Z" fill="#080808" stroke="#ffb08a" strokeOpacity=".8" />
            <rect x="300" y="286" width="30" height="28" rx="8" fill="#fff0e8" />
          </g>

          <text x="315" y="365" textAnchor="middle" fill="#ff9a6b" fontSize="8" fontWeight="600" letterSpacing="2">FONITAS OS</text>

          {fragments.map(([x, y, w, h, rotate], index) => (
            <g key={index} opacity=".9">
              <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx="6" transform={`rotate(${rotate} ${x} ${y})`} fill="#111" stroke="#fff" strokeOpacity=".14" />
              <circle cx={x - w / 2 + 8} cy={y - h / 2 + 8} r="2" fill="#ff5a1f" fillOpacity=".45" />
            </g>
          ))}

          {stores.map((store) => (
            <g key={store.symbol}>
              <path d={`M 365 ${store.y} L 505 ${store.y}`} stroke="url(#hero-out)" strokeWidth="1" />
              <circle cx="505" cy={store.y} r="3" fill="#ff6a2a" filter="url(#hero-glow)" />
              <rect x="515" y={store.y - 28} width="72" height="56" rx="11" fill="#101010" stroke="#fff" strokeOpacity=".16" />
              <rect x="525" y={store.y - 19} width="20" height="20" rx="6" fill="#fff" fillOpacity=".06" />
              <text x="535" y={store.y - 5} textAnchor="middle" fill="#fff" fillOpacity=".8" fontSize="9" fontWeight="600">{store.symbol}</text>
              <text x="551" y={store.y + 11} fill="#fff" fillOpacity=".28" fontSize="6.5">{store.name.toUpperCase()}</text>
            </g>
          ))}

          <g>
            <rect x="218" y="470" width="194" height="46" rx="12" fill="#0b0b0b" stroke="#fff" strokeOpacity=".12" />
            <text x="235" y="489" fill="#fff" fillOpacity=".3" fontSize="6.5" letterSpacing="1.5">CONTROLLED RELEASE</text>
            <text x="235" y="503" fill="#ff6a2a" fontSize="8" fontWeight="600">SECURE · QA · SUBMIT · TRACK</text>
          </g>
        </svg>
      </div>

      <div className="absolute right-[13%] top-[8%] h-2 w-2 rounded-full bg-[#ff7a3d] shadow-[0_0_24px_8px_rgba(255,90,31,.3)]" />
      <div className="absolute left-[13%] bottom-[18%] h-1 w-1 rounded-full bg-white/40" />
      <div className="absolute right-[17%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-[#ff5a1f] shadow-[0_0_15px_5px_rgba(255,90,31,.25)]" />
    </div>
  );
}
