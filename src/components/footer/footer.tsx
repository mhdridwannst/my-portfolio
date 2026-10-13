"use client";

import { useState } from "react";
import { personalInfo } from "@/data/personal";
import { useLanguage } from "@/context/language-context";
import { content } from "@/data/translations";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const { lang } = useLanguage();
  const t = content[lang].footer;

  function copyEmail() {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <footer id="contact" className="border-t border-[var(--line)] py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Kolom Kiri: Closing & Direct Message */}
        <div className="lg:col-span-7">
          <span className="inline-block rounded border border-[var(--line)] bg-[var(--surface-raised)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--signal)] font-semibold">
            {t.tag}
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            {t.title}
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
            {t.desc}
          </p>

          {/* Email Direct & Copy Action */}
          <div className="mt-8 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              {t.directTitle}
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2 text-lg font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--signal)] sm:text-xl"
              >
                <span className="border-b border-[var(--line-strong)] pb-0.5 group-hover:border-[var(--signal)]">
                  {personalInfo.email}
                </span>
                <span className="text-sm">↗</span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 font-mono text-xs font-medium text-[var(--foreground)] shadow-2xs transition-all hover:border-[var(--line-strong)] hover:bg-[var(--surface-raised)] active:scale-95"
                title="Salin alamat email ke clipboard"
              >
                {copied ? (
                  <>
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span className="text-emerald-500 font-medium">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <span>❐</span>
                    <span>{t.copyEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Quick Link Profile Cards */}
        <div className="flex flex-col justify-between space-y-8 lg:col-span-5 lg:items-end">
          <div className="w-full space-y-3 sm:w-80">
            <span className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              {t.verifiedLinks}
            </span>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3.5 transition-all hover:border-[var(--line-strong)] hover:bg-[var(--surface-raised)] hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-[#0a66c2]/10 font-mono text-xs font-bold text-[#0a66c2]">
                  in
                </span>
                <span className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--signal)]">
                  LinkedIn Profile
                </span>
              </div>
              <span className="text-xs text-[var(--muted)]">↗</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3.5 transition-all hover:border-[var(--line-strong)] hover:bg-[var(--surface-raised)] hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-[var(--surface-raised)] font-mono text-xs font-bold text-[var(--foreground)]">
                  gh
                </span>
                <span className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--signal)]">
                  GitHub Repositories
                </span>
              </div>
              <span className="text-xs text-[var(--muted)]">↗</span>
            </a>

            <a
              href="#home"
              className="flex items-center justify-between rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3.5 transition-all hover:border-[var(--line-strong)] hover:bg-[var(--surface-raised)]"
            >
              <span className="text-sm font-medium text-[var(--muted)]">
                {t.backToTop}
              </span>
              <span className="text-xs text-[var(--muted)]">↑</span>
            </a>
          </div>

          <div className="font-mono text-xs text-[var(--muted)] lg:text-right">
            <p className="font-semibold text-[var(--foreground)]">{personalInfo.institution}</p>
            <p className="mt-1">
              {t.campusLoc}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 flex flex-col gap-4 border-t border-[var(--line)] pt-8 font-mono text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {personalInfo.name}. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--signal)] animate-pulse" />
          <span>{t.copyrightNote}</span>
        </p>
      </div>
    </footer>
  );
}
