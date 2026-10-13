"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/personal";
import { HeroGraphic } from "./hero-graphic";
import { RotatingSkill } from "./rotating-skill";
import { useLanguage } from "@/context/language-context";
import { content } from "@/data/translations";

export function Hero() {
  const [timeStr, setTimeStr] = useState<string>("");
  const { lang } = useLanguage();
  const t = content[lang].hero;

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      // Format WIB (UTC+7)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeStr(
        new Intl.DateTimeFormat("id-ID", options).format(now) + " WIB",
      );
    }
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] flex-col justify-center py-12 md:py-20"
    >
      <div className="grid items-center gap-10 md:grid-cols-12 lg:gap-14">
        {/* Kolom Kiri: Copywriting & Actions */}
        <div className="flex flex-col gap-6 md:col-span-7">
          {/* Status & Live Telemetry Pill */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1.5 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] font-medium tracking-wide text-[var(--foreground)]">
                {t.status}
              </span>
            </div>

            {timeStr && (
              <span className="hidden font-mono text-[11px] text-[var(--muted)] sm:inline-block">
                Surabaya · {timeStr}
              </span>
            )}
          </div>

          {/* Headline Utama */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              <span>{t.institution}</span>
              <span>·</span>
              <span className="text-[var(--signal)] font-semibold">
                {t.period}
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              {t.headlinePrefix}
              <RotatingSkill />.
            </h1>
          </div>

          {/* Mobile Profile Graphic preview (Hanya tampil di mobile di bawah headline) */}
          <div className="flex justify-center md:hidden my-2">
            <HeroGraphic />
          </div>

          {/* Value proposition / Tagline */}
          <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {t.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-[var(--signal)] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-[var(--signal)]/25 transition-all duration-200 hover:bg-[var(--signal)]/90 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.btnProjects}</span>
              <span className="transition-transform duration-200 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-2 rounded-md border border-[var(--line-strong)] bg-[var(--surface)] px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-[var(--foreground)] shadow-2xs transition-all hover:border-[var(--signal)] hover:text-[var(--signal)] hover:-translate-y-0.5"
            >
              <span>{t.btnResume}</span>
              <span className="text-[11px]">↗</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-3 font-mono text-xs font-medium uppercase tracking-wider text-[var(--muted)] transition-all hover:border-[var(--line-strong)] hover:text-[var(--foreground)] hover:bg-[var(--surface-raised)]"
            >
              <span>{t.btnContact}</span>
              <span>✉</span>
            </a>
          </div>

          {/* Technical Metadata Bar */}
          <div className="mt-2 grid grid-cols-2 gap-4 border-t border-[var(--line)] pt-5 sm:grid-cols-3">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                {t.metaProgram}
              </span>
              <span className="mt-1 block text-xs font-semibold text-[var(--foreground)]">
                {t.metaDegreeVal}
              </span>
            </div>

            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                {t.metaLoc}
              </span>
              <span className="mt-1 block text-xs font-semibold text-[var(--foreground)]">
                {t.metaLocVal}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                {t.metaStack}
              </span>
              <span className="mt-1 block font-mono text-xs font-medium text-[var(--signal)]">
                {t.metaStackVal}
              </span>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: 3D Graphic (Desktop) */}
        <div className="hidden justify-center md:col-span-5 md:flex md:justify-end">
          <HeroGraphic />
        </div>
      </div>
    </section>
  );
}
