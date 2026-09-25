export function initAnimations() {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll Progress and Sticky Header
  window.addEventListener(
    "scroll",
    () => {
      const header = document.getElementById("siteHeader");
      const progress = document.getElementById("scrollProgress");
      if (header) header.classList.toggle("scrolled", window.scrollY > 12);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) {
        progress.style.width =
          max > 0 ? `${Math.min(100, (window.scrollY / max) * 100)}%` : "0%";
      }
    },
    { passive: true },
  );

  // Intersection Observers for Navigation and Reveal
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-link")];

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) =>
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${entry.target.id}`,
              ),
            );
          }
        });
      },
      { rootMargin: "-42% 0px -50% 0px" },
    );
    sections.forEach((s) => sectionObserver.observe(s));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((el) => revealObserver.observe(el));
  } else {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("visible"));
  }

  // Dynamic Typewriter / Fading Text
  const dynamicText = document.getElementById("dynamic-text");
  if (dynamicText) {
    const phrases = [
      "figuring out <em>how things work.</em>",
      "building <em>secure networks.</em>",
      "solving <em>complex code puzzles.</em>",
      "developing <em>smart IoT systems.</em>",
    ];
    let currentIndex = 0;

    setInterval(() => {
      dynamicText.classList.add("fade-out");
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % phrases.length;
        dynamicText.innerHTML = phrases[currentIndex];
        dynamicText.classList.remove("fade-out");
      }, 500);
    }, 3000);
  }

  // Back to Top Button
  const backTop = document.getElementById("backTop");
  if (backTop) {
    backTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }),
    );
  }
}
