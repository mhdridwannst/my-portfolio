"use client";

import { useState } from "react";

export function HeroGraphic() {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;

    setRotation({
      x: rotateX,
      y: rotateY,
    });
  }

  function handlePointerLeave() {
    setRotation({
      x: 0,
      y: 0,
    });
  }

  return (
    <div
      className="group relative w-full max-w-[520px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Main panel */}
      <div
        className="relative aspect-square overflow-hidden border border-[var(--line)] bg-black/[0.015] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: `
            perspective(1200px)
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
          `,
        }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 opacity-70">
          <div
            className="
              absolute inset-0
              bg-[linear-gradient(to_right,rgba(23,23,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.06)_1px,transparent_1px)]
              bg-[size:40px_40px]
            "
          />
        </div>

        {/* Center crosshair */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--line)]" />

        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--line)]" />

        {/* Outer orbit */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[62%]
            w-[62%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[var(--line)]
            animate-[spin_18s_linear_infinite]
            transition-transform
            duration-700
            group-hover:[animation-duration:10s]
          "
        >
          {/* Orbiting signal point */}
          <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--signal)] shadow-[0_0_0_4px_rgba(228,87,46,0.12)]" />
        </div>

        {/* Middle orbit */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[42%]
            w-[42%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[var(--line)]
            animate-[spin_11s_linear_infinite_reverse]
            transition-transform
            duration-700
            group-hover:[animation-duration:7s]
          "
        >
          {/* Secondary signal */}
          <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--foreground)] opacity-50" />
        </div>

        {/* Inner orbit */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[24%]
            w-[24%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[var(--line)]
            animate-[spin_7s_linear_infinite]
          "
        >
          <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--signal)] opacity-70" />
        </div>

        {/* Core */}
        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--background)]">
          <div className="h-3 w-3 rounded-full bg-[var(--signal)]" />
        </div>

        {/* Top metadata */}
        <div className="absolute left-6 top-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
            System / 001
          </p>

          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
            RF / Network / Signal
          </p>
        </div>

        {/* Top-right status */}
        <div className="absolute right-6 top-6 flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--signal)]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
            Active
          </span>
        </div>

        {/* Bottom-left metadata */}
        <div className="absolute bottom-6 left-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">
            Signal
          </p>

          <p className="mt-2 font-mono text-[10px] text-[var(--foreground)]">
            5.8 GHz
          </p>
        </div>

        {/* Bottom-right coordinates */}
        <div className="absolute bottom-6 right-6 text-right">
          <p className="font-mono text-[9px] text-[var(--muted)]">07.2575° S</p>

          <p className="mt-1 font-mono text-[9px] text-[var(--muted)]">
            112.7521° E
          </p>
        </div>

        {/* Corner markers */}
        <span className="absolute left-0 top-0 h-4 w-px bg-[var(--signal)]" />
        <span className="absolute left-0 top-0 h-px w-4 bg-[var(--signal)]" />

        <span className="absolute bottom-0 right-0 h-4 w-px bg-[var(--signal)]" />
        <span className="absolute bottom-0 right-0 h-px w-4 bg-[var(--signal)]" />
      </div>
    </div>
  );
}
