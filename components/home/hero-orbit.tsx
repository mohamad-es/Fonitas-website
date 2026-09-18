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
      element.style.setProperty("--mx", `${x * 10}px`);
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
      className="hero-orbit relative mx-auto w-full max-w-[720px] select-none"
      aria-hidden="true"
    >
      <div className="absolute left-[20%] top-[22%] h-[50%] w-[62%] rounded-full bg-[#ff5a1f]/[0.09] blur-[110px]" />
      <div className="absolute right-[4%] top-[28%] h-[35%] w-[28%] rounded-full bg-[#ff7a3d]/[0.08] blur-[90px]" />

      <div
        className="relative transition-transform duration-700 ease-out"
        style={{
          transform:
            "translate3d(var(--mx, 0px), var(--my, 0px), 0) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src="/fonitas-hero-transparent.png"
          alt=""
          className="relative z-10 block h-auto w-full object-contain drop-shadow-[0_0_45px_rgba(255,90,31,.12)]"
          draggable={false}
        />
      </div>

      <div className="absolute right-[7%] top-[12%] h-1.5 w-1.5 rounded-full bg-[#ff7a3d] shadow-[0_0_24px_8px_rgba(255,90,31,.3)]" />
      <div className="absolute left-[12%] bottom-[17%] h-1 w-1 rounded-full bg-white/35" />
    </div>
  );
}
