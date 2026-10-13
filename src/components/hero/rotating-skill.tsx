"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";
import { content } from "@/data/translations";

export function RotatingSkill() {
  const { lang } = useLanguage();
  const skills = content[lang].hero.skills;
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % skills.length);
        setIsAnimating(false);
      }, 350);

      return () => clearTimeout(timeout);
    }, 2800);

    return () => clearInterval(interval);
  }, [skills.length]);

  const currentSkill = skills[index % skills.length];

  return (
    <span className="relative inline text-[var(--signal)]">
      <span
        className={`inline transition-all duration-300 ease-out ${
          isAnimating
            ? "-translate-y-2 opacity-0 blur-[1px]"
            : "translate-y-0 opacity-100 blur-none"
        }`}
      >
        {currentSkill}
      </span>
      {/* Terminal cursor blink indicator */}
      <span className="ml-1 inline-block h-[0.8em] w-[2.5px] bg-[var(--signal)] animate-pulse align-middle" />
      {/* Decorative hairline underline */}
      <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[var(--signal)]/35" />
    </span>
  );
}
