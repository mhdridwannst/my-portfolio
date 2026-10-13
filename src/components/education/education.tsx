"use client";

import { useLanguage } from "@/context/language-context";
import { content } from "@/data/translations";

export function Education() {
  const { lang } = useLanguage();
  const t = content[lang].education;

  return (
    <section id="education" className="border-t border-[var(--line)] py-20 md:py-28">
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
        <div className="space-y-6">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-xs transition-colors hover:border-[var(--line-strong)] md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[var(--line)] pb-5">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--signal)] font-semibold">
                  {t.schoolBadge}
                </span>
                <h3 className="mt-1 text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                  {t.institution}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                  {t.degree}
                </p>
              </div>

              <div className="flex flex-col items-end gap-1 font-mono text-xs text-[var(--muted)]">
                <span className="rounded border border-[var(--line)] bg-[var(--surface-raised)] px-2.5 py-1 font-medium text-[var(--foreground)]">
                  {t.period}
                </span>
                <span className="text-[11px] text-[var(--muted)]">{t.location}</span>
              </div>
            </div>

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-[var(--foreground)]">
              <p className="text-[var(--muted)]">
                {t.desc}
              </p>

              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                  {t.competenciesHeading}
                </h4>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {t.competencies.map((comp) => (
                    <div
                      key={comp.title}
                      className="rounded-lg border border-[var(--line)] bg-[var(--surface-raised)] p-3.5 transition-colors hover:border-[var(--line-strong)]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--signal-bg)] font-mono text-[10px] font-bold text-[var(--signal)]">
                          ✓
                        </span>
                        <h5 className="text-xs font-semibold text-[var(--foreground)]">
                          {comp.title}
                        </h5>
                      </div>
                      <p className="mt-2 text-[11px] leading-relaxed text-[var(--muted)]">
                        {comp.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
