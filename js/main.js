import { projects, roles, skills, EMAIL } from "./data/contentData.js";
import { initTheme } from "./utils/theme.js";
import { initAnimations } from "./utils/animations.js";
import { setupModal } from "./components/modal.js";
import { projectCard } from "./components/projectCard.js";

const $ = (id) => document.getElementById(id);

function renderProjects(filter = "all") {
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const grid = $("projectsGrid");
  if (!grid) return;

  grid.innerHTML = filtered
    .map((p, i) => projectCard(p, i, i === 0 && filter === "all"))
    .join("");

  requestAnimationFrame(() => {
    document.querySelectorAll("#projectsGrid .reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), Math.min(i * 45, 160));
    });
  });
}

function setRole(key) {
  const role = roles[key];
  if (!role) return;
  document
    .querySelectorAll(".role-chip")
    .forEach((btn) => btn.classList.toggle("active", btn.dataset.role === key));
  $("roleTitle").textContent = role.title;
  $("roleCopy").textContent = role.copy;
  $("roleTags").innerHTML = role.tags.map((t) => `<span>${t}</span>`).join("");
}

function setSkill(key) {
  const skill = skills[key];
  if (!skill) return;
  document.querySelectorAll(".skill-tab").forEach((btn) => {
    const active = btn.dataset.skill === key;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", String(active));
  });
  $("skillEyebrow").textContent = skill.eyebrow;
  $("skillTitle").textContent = skill.title;
  $("skillDescription").textContent = skill.description;
  $("skillTags").innerHTML = skill.tags
    .map((t) => `<span class="skill-tag">${t}</span>`)
    .join("");
  $("skillFoot").textContent = skill.foot;
}

function showToast(message) {
  const t = $("toast");
  if (!t) return;
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => t.classList.remove("show"), 1700);
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initAnimations();
  setupModal();

  // Roles & Skills
  document
    .querySelectorAll(".role-chip")
    .forEach((btn) =>
      btn.addEventListener("click", () => setRole(btn.dataset.role)),
    );
  document
    .querySelectorAll(".skill-tab")
    .forEach((btn) =>
      btn.addEventListener("click", () => setSkill(btn.dataset.skill)),
    );

  // Filter Projects
  const filterBar = $("projectFilters");
  if (filterBar) {
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      document
        .querySelectorAll(".filter")
        .forEach((x) => x.classList.toggle("active", x === btn));

      if (!document.startViewTransition) {
        renderProjects(btn.dataset.filter);
      } else {
        document.startViewTransition(() => renderProjects(btn.dataset.filter));
      }
    });
  }

  // Grid Events (Click / Keyboard / Mouse Glow Optimised)
  const grid = $("projectsGrid");
  if (grid) {
    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      if (card && window.openProject)
        window.openProject(card.dataset.projectId, card);
    });

    grid.addEventListener("keydown", (e) => {
      const card = e.target.closest(".project-card");
      if (card && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        if (window.openProject)
          window.openProject(card.dataset.projectId, card);
      }
    });

    grid.addEventListener("mousemove", (e) => {
      const card = e.target.closest(".project-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  }

  // Navigation Mobile
  const nav = $("siteNav");
  const menuToggle = $("menuToggle");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = !nav.classList.contains("open");
      nav.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  // Copy Email
  const copyBtn = $("copyEmail");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(EMAIL);
        showToast("Email copied");
      } catch {
        location.href = `mailto:${EMAIL}`;
      }
    });
  }

  // Footer Year
  const yearEl = $("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initial State Load
  setRole("networking");
  setSkill("networking");
  renderProjects();
});
