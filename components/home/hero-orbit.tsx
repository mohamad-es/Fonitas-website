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
      <div className="absolute inset-[8%] border border-white/[0.035] [clip-path:polygon(18%_0,82%_0,100%_18%,100%_82%,82%_100%,18%_100%,0_82%,0_18%)]" />
      <div className="hero-orbit-ring absolute inset-[15%] border border-[#ff5a1f]/15 [clip-path:polygon(14%_0,86%_0,100%_20%,100%_80%,86%_100%,14%_100%,0_80%,0_20%)]" />
      <div className="absolute inset-[23%] border border-dashed border-white/[0.045] [clip-path:polygon(12%_0,88%_0,100%_25%,100%_75%,88%_100%,12%_100%,0_75%,0_25%)]" />

      <div className="absolute left-[4%] top-[22%] h-[55%] w-[52%] bg-[#ff5a1f]/[0.045] blur-[85px] [clip-path:polygon(0_35%,55%_0,100%_25%,82%_75%,42%_100%,8%_72%)]" />
      <div className="absolute right-[3%] top-[25%] h-[50%] w-[35%] bg-[#ff5a1f]/[0.07] blur-[80px] [clip-path:polygon(12%_0,100%_18%,82%_100%,0_78%)]" />

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
              <stop offset=".55" stopColor="#ff6a2a" stopOpacity=".6" />
              <stop offset="1" stopColor="#ffb08a" stopOpacity=".9" />
            </linearGradient>
            <linearGradient id="hero-flow-out" x1="0" x2="1">
              <stop offset="0" stopColor="#ffb08a" stopOpacity=".9" />
              <stop offset=".5" stopColor="#ff6a2a" stopOpacity=".55" />
              <stop offset="1" stopColor="#ff5a1f" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="hero-core-face" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ff9a6b" />
              <stop offset=".35" stopColor="#ff5a1f" />
              <stop offset=".7" stopColor="#b7350f" />
              <stop offset="1" stopColor="#531506" />
            </linearGradient>
            <linearGradient id="hero-glass" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity=".18" />
              <stop offset=".35" stopColor="#fff" stopOpacity=".035" />
              <stop offset=".65" stopColor="#ff7a3d" stopOpacity=".12" />
              <stop offset="1" stopColor="#000" stopOpacity=".55" />
            </linearGradient>
            <linearGradient id="hero-tile" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#303030" />
              <stop offset=".5" stopColor="#111" />
              <stop offset="1" stopColor="#050505" />
            </linearGradient>
            <filter id="hero-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="hero-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="16" />
            </filter>
          </defs>

          <g className="hero-energy-in" filter="url(#hero-glow)">
            <path d="M 62 176 L 214 246 L 273 281" fill="none" stroke="url(#hero-flow-in)" strokeWidth="1.25" />
            <path d="M 42 230 L 205 274 L 273 292" fill="none" stroke="url(#hero-flow-in)" strokeWidth="1.15" />
            <path d="M 54 300 L 205 300 L 273 300" fill="none" stroke="url(#hero-flow-in)" strokeWidth="1.4" />
            <path d="M 70 394 L 210 330 L 273 309" fill="none" stroke="url(#hero-flow-in)" strokeWidth="1.15" />
            <path d="M 112 444 L 220 354 L 276 318" fill="none" stroke="url(#hero-flow-in)" strokeWidth=".9" />
          </g>

          <g className="hero-energy-out" filter="url(#hero-glow)">
            <path d="M 347 281 L 420 245 L 493 155" fill="none" stroke="url(#hero-flow-out)" strokeWidth="1.2" />
            <path d="M 347 300 L 420 300 L 495 300" fill="none" stroke="url(#hero-flow-out)" strokeWidth="1.3" />
            <path d="M 347 319 L 420 355 L 493 445" fill="none" stroke="url(#hero-flow-out)" strokeWidth="1.2" />
          </g>

          <g opacity=".25" fill="none">
            <path d="M 212 210 L 270 174 L 382 174 L 440 210 L 440 390 L 382 426 L 270 426 L 212 390 Z" stroke="#fff" />
            <path d="M 238 235 L 282 208 L 358 208 L 402 235 L 402 365 L 358 392 L 282 392 L 238 365 Z" stroke="#ff7a3d" />
            <path d="M 260 252 L 292 233 L 348 233 L 380 252 L 380 348 L 348 367 L 292 367 L 260 348 Z" stroke="#fff" strokeOpacity=".5" />
          </g>

          <g className="hero-core-assembly">
            <path d="M 222 255 L 278 218 L 382 218 L 438 255 L 438 345 L 382 382 L 278 382 L 222 345 Z" fill="url(#hero-glass)" stroke="#fff" strokeOpacity=".17" strokeWidth="1.2" />
            <path d="M 245 267 L 290 238 L 370 238 L 415 267 L 415 333 L 370 362 L 290 362 L 245 333 Z" fill="#080808" fillOpacity=".68" stroke="#ff9b70" strokeOpacity=".28" strokeWidth="1.5" />
            <path d="M 267 278 L 302 255 L 358 255 L 393 278 L 393 322 L 358 345 L 302 345 L 267 322 Z" fill="url(#hero-core-face)" filter="url(#hero-glow)" />
            <path d="M 286 286 L 310 271 L 350 271 L 374 286 L 374 314 L 350 329 L 310 329 L 286 314 Z" fill="#090909" stroke="#ffb08a" strokeOpacity=".8" strokeWidth="1.2" />
            <path d="M 306 291 L 316 285 L 344 285 L 354 291 L 354 309 L 344 315 L 316 315 L 306 309 Z" fill="#fff0e8" filter="url(#hero-glow)" />
          </g>

          <g fill="#0b0b0b" stroke="#fff" strokeOpacity=".17" strokeWidth="1.4">
            {fragments.map(([x, y, w, h, rotate], index) => (
              <g key={index} className="hero-fragment" style={{ animationDelay: `${index * 0.16}s` }}>
                <rect
                  x={x - w / 2}
                  y={y - h / 2}
                  width={w}
                  height={h}
                  rx="6"
                  transform={`rotate(${rotate} ${x} ${y})`}
                  fill="url(#hero-tile)"
                />
                <path d={`M ${x - w / 2 + 4} ${y - h / 2 + 4} L ${x + w / 2 - 4} ${y - h / 2 + 4}`} stroke="#fff" strokeOpacity=".1" strokeWidth="1" transform={`rotate(${rotate} ${x} ${y})`} />
              </g>
            ))}
          </g>

          {stores.map((store) => (
            <g key={store.symbol} transform={`translate(492 ${store.y - 25})`}>
              <path d="M 5 5 L 78 5 L 83 11 L 83 44 L 78 50 L 5 50 L 0 44 L 0 11 Z" fill="#ff5a1f" opacity=".07" filter="url(#hero-soft-glow)" />
              <path d="M 0 7 L 73 7 L 78 12 L 78 43 L 73 48 L 0 48 Z" fill="url(#hero-tile)" stroke="#fff" strokeOpacity=".16" strokeWidth="1.2" />
              <path d="M 9 15 L 20 9 L 32 15 L 32 34 L 20 40 L 9 34 Z" fill="#fff" fillOpacity=".045" stroke="#fff" strokeOpacity=".08" />
              <text x="20" y="28" textAnchor="middle" fill="#fff" fillOpacity=".75" fontSize="11" fontWeight="600">{store.symbol}</text>
              <path d="M -7 24 L 0 24" stroke="#ff7a3d" strokeWidth="1.5" />
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
