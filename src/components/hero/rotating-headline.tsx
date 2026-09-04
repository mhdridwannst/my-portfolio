"use client";

import { useEffect, useState } from "react";

const interests = ["Networking", "Cybersecurity", "Software Development"];

export function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      const timeout = setTimeout(() => {
        setIndex((current) => (current + 1) % interests.length);
        setVisible(true);
      }, 250);

      return () => clearTimeout(timeout);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl font-medium leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-[5.5rem]">
      <span className="block">Interested in</span>
      <span className="relative block h-[1em] overflow-hidden">
        {interests.map((interest, itemIndex) => (
          <span
            key={interest}
            className={`absolute left-0 top-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              itemIndex === index
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {interest}.
          </span>
        ))}
      </span>
    </h1>
  );
}
