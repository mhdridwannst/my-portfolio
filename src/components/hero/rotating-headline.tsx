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
    <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-7xl">
      Hai, I&apos;m Ridwan,
      <br />
      <span className="inline-block">
        Interested in{" "}
        <span
          className={`inline-block min-w-67.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          {interests[index]}.
        </span>
      </span>
    </h1>
  );
}
