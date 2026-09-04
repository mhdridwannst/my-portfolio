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

    const rotateY = ((x - centerX) / centerX) * 4;
    const rotateX = ((centerY - y) / centerY) * 4;

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
      className="group relative w-full max-w-130"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className="relative aspect-square overflow-hidden border border-white/10 bg-white2 transition-transform duration-300 ease-out"
        style={{
          transform: `
            perspective(1000px)
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
          `,
        }}
      >
        {/* Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>

        {/* Crosshair */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />

        {/* Orbit */}
        <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 transition-transform duration-700 group-hover:rotate-12">
          <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white" />
        </div>

        <div className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 transition-transform duration-700 group-hover:-rotate-12">
          <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white/60" />
        </div>

        {/* Center */}
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        </div>

        {/* Meta */}
        <div className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          SYSTEM / 001
        </div>

        <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          SIGNAL ACTIVE
        </div>

        <div className="absolute bottom-6 right-6 font-mono text-[10px] text-white/40">
          07.2575° S
          <br />
          112.7521° E
        </div>
      </div>
    </div>
  );
}
