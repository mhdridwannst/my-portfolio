"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const nextTheme = !dark;

    document.documentElement.classList.toggle("dark", nextTheme);

    setDark(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      className="font-mono text-lg uppercase tracking-[0.12em] text-(--muted)  transition-colors hover:text-(--foreground)"
    >
      {dark ? "◐" : "◐"}
    </button>
  );
}
