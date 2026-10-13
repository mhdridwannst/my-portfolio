"use client";

import { useState } from "react";
import { personalInfo } from "@/data/personal";
import { useLanguage } from "@/context/language-context";
import { content } from "@/data/translations";

export function Skills() {
  const [filter, setFilter] = useState<string>("all");
  const { lang } = useLanguage();
  const t = content[lang].skills;

  const filteredCategories =
    filter === "all"
      ? personalInfo.skillCategories
      : personalInfo.skillCategories.filter((cat) => cat.category === filter);

  return (
    <section id="skills" className="border-t border-[var(--line)] py-20 md:py-28">
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
        <div>
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
              {t.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              {t.description}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mb-8 flex flex-wrap gap-2">
            {t.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`rounded-md px-3 py-1.5 font-mono text-xs transition-all ${
                  filter === cat.id
                    ? "bg-[var(--signal)] text-white shadow-xs"
                    : "border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--line-strong)] hover:text-[var(--foreground)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skill Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((cat, idx) => (
              <div
                key={cat.name}
                className="group relative flex flex-col justify-between rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[var(--line-strong)] hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--line)] pb-3">
                    <span className="font-mono text-[10px] font-semibold text-[var(--muted)]">
                      CAT 0{idx + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--line-strong)] transition-colors group-hover:bg-[var(--signal)]" />
                  </div>

                  <h3 className="mt-3 font-mono text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
                    {cat.name}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-[var(--line)] bg-[var(--surface-raised)] px-2.5 py-1 font-mono text-xs text-[var(--foreground)] transition-colors group-hover:border-[var(--line-strong)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
