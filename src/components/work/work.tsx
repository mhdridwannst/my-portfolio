"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { content } from "@/data/translations";

export function Work() {
  const [activeTabs, setActiveTabs] = useState<Record<string, "overview" | "arch" | "decisions">>({
    "01": "overview",
    "02": "overview",
    "03": "overview",
  });

  const { lang } = useLanguage();
  const t = content[lang].work;

  function setTab(projectNumber: string, tab: "overview" | "arch" | "decisions") {
    setActiveTabs((prev) => ({ ...prev, [projectNumber]: tab }));
  }

  return (
    <section id="projects" className="border-t border-[var(--line)] py-20 md:py-28">
      {/* Section Header */}
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="inline-block rounded border border-[var(--line)] bg-[var(--surface-raised)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--signal)] font-semibold">
            {t.tag}
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl md:text-4xl">
            {t.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            {t.description}
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--signal)] animate-pulse" />
          <span>{t.projects.length} {t.verifiedCount}</span>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-10">
        {t.projects.map((project) => {
          const currentTab = activeTabs[project.number] || "overview";

          return (
            <article
              key={project.number}
              className="group relative rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-xs transition-all duration-300 hover:border-[var(--line-strong)] hover:shadow-md md:p-8"
            >
              {/* Top Bar Card */}
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[var(--line)] pb-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--surface-raised)] font-mono text-xs font-bold text-[var(--signal)]">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[var(--muted)]">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="rounded border border-[var(--line)] bg-[var(--surface-raised)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--foreground)]">
                    {project.badge}
                  </span>
                  <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                    ● {project.status}
                  </span>
                  <span className="text-[var(--muted)]">·</span>
                  <span className="text-[var(--muted)]">{project.year}</span>
                </div>
              </div>

              {/* Interactive Tabs Header */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] pb-3">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setTab(project.number, "overview")}
                    className={`rounded px-3 py-1.5 transition-all ${
                      currentTab === "overview"
                        ? "bg-[var(--foreground)] text-[var(--background)] font-medium shadow-2xs"
                        : "bg-[var(--surface-raised)] text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {t.tabOverview}
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab(project.number, "arch")}
                    className={`rounded px-3 py-1.5 transition-all ${
                      currentTab === "arch"
                        ? "bg-[var(--foreground)] text-[var(--background)] font-medium shadow-2xs"
                        : "bg-[var(--surface-raised)] text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {t.tabArch}
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab(project.number, "decisions")}
                    className={`rounded px-3 py-1.5 transition-all ${
                      currentTab === "decisions"
                        ? "bg-[var(--foreground)] text-[var(--background)] font-medium shadow-2xs"
                        : "bg-[var(--surface-raised)] text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {t.tabDecisions}
                  </button>
                </div>

                {project.impactMetric && (
                  <span className="hidden font-mono text-[11px] text-[var(--signal)] lg:inline-block">
                    ★ {project.impactMetric}
                  </span>
                )}
              </div>

              {/* Tab Contents */}
              <div className="mt-6 min-h-[190px]">
                {/* TAB 1: OVERVIEW */}
                {currentTab === "overview" && (
                  <div className="grid gap-8 lg:grid-cols-12">
                    <div className="space-y-5 lg:col-span-7">
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                          {t.overviewHeading}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--foreground)]">
                          {project.overview}
                        </p>
                      </div>

                      <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-raised)] p-4 space-y-2">
                        <p className="text-xs leading-relaxed text-[var(--muted)]">
                          <strong className="font-mono text-[11px] uppercase tracking-wide text-[var(--foreground)]">
                            {t.problemHeading}{" "}
                          </strong>
                          {project.problem}
                        </p>
                        <p className="text-xs leading-relaxed text-[var(--muted)]">
                          <strong className="font-mono text-[11px] uppercase tracking-wide text-[var(--foreground)]">
                            {t.solutionHeading}{" "}
                          </strong>
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                          {t.roleHeading}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
                          {project.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between border-t border-[var(--line)] pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                          {t.featuresHeading}
                        </h4>
                        <ul className="mt-2.5 space-y-2 text-xs text-[var(--foreground)]">
                          {project.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--signal)]" />
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: ARCHITECTURE & PIPELINE */}
                {currentTab === "arch" && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                        {t.pipelineHeading}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-[var(--muted)]">
                        {project.architecture.description}
                      </p>
                    </div>

                    {/* Visual Flow Blocks */}
                    <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-raised)] p-5">
                      <div className="flex flex-col items-stretch gap-2.5 md:flex-row md:items-center md:justify-between">
                        {project.architecture.pipeline.map((step, idx, arr) => (
                          <div key={idx} className="flex flex-1 flex-col md:flex-row items-center gap-2">
                            <div className="w-full flex-1 rounded border border-[var(--line)] bg-[var(--surface)] p-3 text-center shadow-2xs">
                              <span className="block font-mono text-[10px] font-bold text-[var(--signal)]">
                                STEP 0{idx + 1}
                              </span>
                              <span className="mt-1 block font-mono text-xs font-medium text-[var(--foreground)]">
                                {step}
                              </span>
                            </div>
                            {idx < arr.length - 1 && (
                              <>
                                <span className="hidden font-mono text-xs text-[var(--muted)] md:inline-block">
                                  ➔
                                </span>
                                <span className="font-mono text-xs text-[var(--muted)] md:hidden py-0.5">
                                  ↓
                                </span>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: ENGINEERING DECISIONS */}
                {currentTab === "decisions" && (
                  <div className="space-y-4">
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                      {t.decisionsHeading}
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {project.engineeringDecisions.map((decision, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg border border-[var(--line)] bg-[var(--surface-raised)] p-4 shadow-2xs"
                        >
                          <span className="font-mono text-[10px] font-bold text-[var(--signal)]">
                            DECISION 0{idx + 1}
                          </span>
                          <p className="mt-2 text-xs leading-relaxed text-[var(--foreground)]">
                            {decision}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer: Tech Stack & Actions */}
              <div className="mt-6 flex flex-col justify-between gap-4 border-t border-[var(--line)] pt-5 sm:flex-row sm:items-center">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] mr-1">
                    {t.techLabel}
                  </span>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-[var(--line)] bg-[var(--surface-raised)] px-2 py-0.5 font-mono text-[10px] text-[var(--foreground)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 font-mono text-xs font-medium text-[var(--foreground)] transition-all hover:border-[var(--signal)] hover:text-[var(--signal)]"
                    >
                      <span>{t.viewRepo}</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
