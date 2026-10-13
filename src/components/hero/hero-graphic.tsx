"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { content } from "@/data/translations";

export function HeroGraphic() {
  const [imgSrc, setImgSrc] = useState("/profile.jpg");
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const { lang } = useLanguage();
  const t = content[lang].heroGraphic;

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 4;
    const rotateX = ((centerY - y) / centerY) * 4;

    setRotation({ x: rotateX, y: rotateY });
  }

  function handlePointerLeave() {
    setRotation({ x: 0, y: 0 });
  }

  return (
    <div className="relative w-full max-w-[420px]">
      {/* Decorative ambient glow backdrop */}
      <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[var(--signal)]/15 via-sky-500/10 to-transparent blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-80" />

      {/* Main 3D Card Container */}
      <div
        className="group relative overflow-hidden rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] p-2.5 shadow-xl transition-transform duration-300 ease-out"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Top Technical Bar */}
        <div className="flex items-center justify-between border-b border-[var(--line)] px-3 py-2 font-mono text-[10px] text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--signal)] animate-pulse" />
            <span className="font-semibold tracking-wider text-[var(--foreground)]">
              {t.badge}
            </span>
          </div>
          <span className="uppercase tracking-widest text-[var(--muted)]">
            {t.institution}
          </span>
        </div>

        {/* Image Frame */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[var(--surface-raised)]">
          {/* Subtle grid on overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

          {/* Actual Photo */}
          <Image
            src={imgSrc}
            alt="Mhd. Ridwan"
            fill
            priority
            sizes="(max-width: 768px) 340px, 420px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            onError={() => {
              if (imgSrc !== "/profile.svg") {
                setImgSrc("/profile.svg");
              }
            }}
          />

          {/* Technical Corner Markers */}
          <span className="absolute left-2.5 top-2.5 z-20 h-3 w-3 border-l-2 border-t-2 border-[var(--signal)]" />
          <span className="absolute right-2.5 top-2.5 z-20 h-3 w-3 border-r-2 border-t-2 border-[var(--signal)]" />
          <span className="absolute bottom-2.5 left-2.5 z-20 h-3 w-3 border-b-2 border-l-2 border-[var(--signal)]" />
          <span className="absolute bottom-2.5 right-2.5 z-20 h-3 w-3 border-b-2 border-r-2 border-[var(--signal)]" />

          {/* Bottom Overlay Info Tag */}
          <div className="absolute inset-x-3 bottom-3 z-20 flex items-center justify-between rounded border border-white/15 bg-black/65 px-3.5 py-2.5 backdrop-blur-md">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/60">
                {t.disciplineLabel}
              </p>
              <p className="font-mono text-xs font-semibold text-white">
                {t.discipline}
              </p>
            </div>
            <div className="text-right font-mono text-[10px] text-white/80">
              <span className="block text-[8px] text-white/50">{t.regionLabel}</span>
              {t.regionVal}
            </div>
          </div>
        </div>

        {/* Bottom Technical Telemetry Bar */}
        <div className="flex items-center justify-between px-3 py-2 font-mono text-[10px] text-[var(--muted)]">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {t.telemetry}
          </span>
          <span className="font-semibold text-[var(--signal)]">{t.status}</span>
        </div>
      </div>
    </div>
  );
}
