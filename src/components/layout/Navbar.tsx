"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/personal";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useLanguage } from "@/context/language-context";
import { content } from "@/data/translations";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = content[lang].nav;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.about },
    { href: "#skills", label: t.skills },
    { href: "#projects", label: t.projects },
    { href: "#education", label: t.education },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur-md shadow-xs"
          : "border-b border-transparent bg-[var(--background)]/60 backdrop-blur-xs"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 md:px-10">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 font-mono text-xs font-semibold tracking-tight"
        >
          <span className="flex h-2 w-2 rounded-full bg-[var(--signal)] animate-pulse" />
          <span className="text-[var(--foreground)] transition-colors group-hover:text-[var(--signal)]">
            {personalInfo.name.toUpperCase()}
          </span>
          <span className="hidden rounded border border-[var(--line)] bg-[var(--surface-raised)] px-1.5 py-0.5 text-[9px] text-[var(--muted)] sm:inline-block">
            D4 TELKOM · PENS
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 font-mono text-xs md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions (Language Toggle, Resume, GitHub, Theme, Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Switcher Button */}
          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-md border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1.5 font-mono text-[11px] font-semibold text-[var(--foreground)] shadow-2xs transition-all hover:border-[var(--signal)] hover:text-[var(--signal)] active:scale-95"
            title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            aria-label="Toggle language"
          >
            <span className={lang === "id" ? "text-[var(--signal)] font-bold" : "text-[var(--muted)]"}>
              ID
            </span>
            <span className="text-[var(--line-strong)]">/</span>
            <span className={lang === "en" ? "text-[var(--signal)] font-bold" : "text-[var(--muted)]"}>
              EN
            </span>
          </button>

          {/* Resume Download Link */}
          <a
            href={personalInfo.resumeUrl}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1.5 font-mono text-[11px] font-medium text-[var(--foreground)] shadow-2xs transition-all hover:border-[var(--signal)] hover:text-[var(--signal)]"
            title={t.resumeTitle}
          >
            <span>{t.resume}</span>
            <span className="text-[10px] text-[var(--muted)]">↗</span>
          </a>

          {/* GitHub Link */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1.5 font-mono text-[11px] text-[var(--foreground)] transition-all hover:border-[var(--line-strong)] hover:bg-[var(--surface-raised)] md:inline-flex"
            aria-label="GitHub profile"
          >
            <svg
              className="h-3.5 w-3.5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="text-[10px] text-[var(--muted)]">↗</span>
          </a>

          {/* Theme Switcher */}
          <ThemeToggle />

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--surface)] text-[var(--foreground)] transition-colors hover:border-[var(--line-strong)] md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <span className="font-mono text-sm leading-none">✕</span>
            ) : (
              <span className="font-mono text-sm leading-none">☰</span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[var(--line)] bg-[var(--background)]/98 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-[var(--line)] pb-3 text-[var(--foreground)] transition-colors hover:text-[var(--signal)]"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[var(--muted)]">→</span>
              </a>
            ))}

            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={personalInfo.resumeUrl}
                className="flex items-center justify-between rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-xs text-[var(--foreground)]"
              >
                <span>{t.resume} (PDF)</span>
                <span className="text-[var(--muted)]">↗</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-xs text-[var(--foreground)]"
              >
                <span>GitHub Repositories</span>
                <span className="text-[var(--muted)]">↗</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-md border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 text-xs text-[var(--foreground)]"
              >
                <span>LinkedIn Profile</span>
                <span className="text-[var(--muted)]">↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
