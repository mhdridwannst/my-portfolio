import { projects } from "../data/contentData.js";

let lastTrigger = null;

export function setupModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  const closeButtons = document.querySelectorAll("[data-close-modal]");

  window.openProject = function (id, trigger) {
    const p = projects.find((proj) => proj.id === id);
    if (!p) return;

    lastTrigger = trigger;

    document.getElementById("modalMeta").textContent =
      `${p.categoryLabel} — ${p.technologies[0]}`;
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalDescription").textContent = p.description;
    document.getElementById("modalContribution").textContent = p.contribution;
    document.getElementById("modalTech").textContent =
      p.technologies.join(", ");
    document.getElementById("modalLearning").textContent = p.learning;

    const repoBtn = document.getElementById("modalRepo");
    if (p.repo) {
      repoBtn.href = p.repo;
      repoBtn.hidden = false;
    } else {
      repoBtn.hidden = true;
    }

    document.getElementById("siteHeader").inert = true;
    document.querySelector("main").inert = true;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  window.closeProject = function () {
    document.getElementById("siteHeader").inert = false;
    document.querySelector("main").inert = false;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (lastTrigger) lastTrigger.focus();
  };

  closeButtons.forEach((el) =>
    el.addEventListener("click", window.closeProject),
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      window.closeProject();
    }
  });
}
