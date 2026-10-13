"use client";

import { TerminalWidget } from "@/components/terminal/terminal-widget";
import { useLanguage } from "@/context/language-context";
import { content } from "@/data/translations";

export function About() {
  const { lang } = useLanguage();
  const t = content[lang].about;

  return (
    <section id="about" className="border-t border-[var(--line)] py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[200px_1fr]">
        {/* Section Label */}
        <div>
          <div className="sticky top-28 space-y-2">
            <span className="inline-block rounded border border-[var(--line)] bg-[var(--surface-raised)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--signal)] font-semibold">
              {t.tag}
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              {t.sub}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold leading-snug tracking-tight text-[var(--foreground)] sm:text-3xl lg:text-4xl">
              {t.title}
            </h2>
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              {t.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Interactive Systems Terminal Widget */}
          <TerminalWidget />

          {/* 3 Engineering Pillars */}
          <div className="space-y-4 pt-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              {t.pillarsTitle}
            </h3>

            <div className="grid gap-4 sm:grid-cols-3">
              {t.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="group relative flex flex-col justify-between rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[var(--line-strong)] hover:shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                      <span className="font-mono text-[10px] font-bold text-[var(--signal)]">
                        0{idx + 1}. {pillar.title.toUpperCase()}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--line-strong)] transition-colors group-hover:bg-[var(--signal)]" />
                    </div>

                    <h4 className="mt-3 text-sm font-semibold text-[var(--foreground)]">
                      {pillar.subtitle}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[var(--line)] pt-3">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-[var(--line)] bg-[var(--surface-raised)] px-2 py-0.5 font-mono text-[10px] text-[var(--muted)] transition-colors group-hover:text-[var(--foreground)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
