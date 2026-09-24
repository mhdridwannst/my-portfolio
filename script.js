const root = document.documentElement;
const EMAIL = "mhdridwan1331@gmail.com";
const $ = (id) => document.getElementById(id);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

const projects = [
  {
    id: "door-security",
    category: "systems",
    categoryLabel: "Systems / IoT",
    title: "Sistem Monitoring Keamanan Pintu Rumah",
    description:
      "A home-security simulation that combines ESP32, sensors, messaging, backend services, and a web dashboard into one end-to-end system.",
    contribution:
      "Worked across the device layer, messaging flow, backend communication, and dashboard so sensor events could move through the system cleanly.",
    technologies: ["ESP32", "Wokwi", "MQTT", "WebSocket", "Go", "React"],
    learning:
      "How embedded devices, communication protocols, backend services, and UI state fit together in a single system.",
    repo: "https://github.com/wannn-sion95/Sistem-Monitoring-Keamanan-Pintu-Rumah",
    visual: "iot",
  },
  {
    id: "networking",
    category: "networking",
    categoryLabel: "Networking",
    title: "Linux Networking Practicum",
    description:
      "A virtualized Ubuntu–Debian lab for IP addressing, interfaces, routing, DHCP, connectivity checks, and packet inspection.",
    contribution:
      "Configured interfaces and private networks, traced connectivity, inspected routes, and used command-line tooling to troubleshoot behavior.",
    technologies: ["Linux", "Ubuntu", "Debian", "DHCP", "VirtualBox", "TShark"],
    learning:
      "How interfaces, addressing, routes, services, and packet inspection come together in a small network.",
    repo: "https://github.com/wannn-sion95",
    visual: "network",
  },
  {
    id: "security",
    category: "security",
    categoryLabel: "Cyber Security",
    title: "Cyber-Security Learning Repo",
    description:
      "Hands-on practice around CTFs, reconnaissance, packet analysis, reverse engineering, debugging, and security tooling.",
    contribution:
      "Built a repeatable Linux lab workflow around Nmap, Wireshark, GDB, Ghidra, pwntools, and Python.",
    technologies: ["Python", "Ghidra", "GDB", "pwntools", "Wireshark", "Nmap"],
    learning:
      "How to investigate systems methodically and follow evidence instead of guessing.",
    repo: "https://github.com/wannn-sion95/Cyber-Security",
    visual: "security",
  },
  {
    id: "next-appmusic",
    category: "software",
    categoryLabel: "Software",
    title: "Next-AppMusic",
    description:
      "A web music application built while learning modern frontend patterns, APIs, deployment, and real project workflows.",
    contribution:
      "Worked on the interface, client-side behavior, API integration, and deployment troubleshooting.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
    learning:
      "How product structure, UI decisions, state, and deployment constraints affect a real application.",
    repo: "https://github.com/wannn-sion95/Next-AppMusic",
    visual: "software",
  },
  {
    id: "one-movie",
    category: "software",
    categoryLabel: "Software",
    title: "One-Movie",
    description:
      "A responsive movie and TV platform built around API-driven interfaces and a streaming-style browsing experience.",
    contribution:
      "Built the frontend experience, handled API data, responsive layout, and client-side interaction.",
    technologies: ["React", "Vite", "JavaScript", "TMDB API"],
    learning:
      "How API-driven applications translate raw data into a usable product experience.",
    repo: "https://github.com/wannn-sion95/One-Movie",
    visual: "movie",
  },
  {
    id: "storage-one",
    category: "software",
    categoryLabel: "Software",
    title: "StorageOne Inventory",
    description:
      "A CRUD inventory application focused on adding, tracking, updating, and managing warehouse items.",
    contribution:
      "Worked on the interface and application flow for core inventory operations.",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    learning:
      "How data models, CRUD flows, and interface decisions interact in a practical application.",
    repo: "https://github.com/wannn-sion95/storage-one-inventory",
    visual: "inventory",
  },
  {
    id: "tambak",
    category: "systems",
    categoryLabel: "Systems / IoT",
    title: "Tambak Garam IoT Monitoring",
    description:
      "An ESP32-based monitoring concept for temperature, weather, and humidity data with a web-facing interface.",
    contribution:
      "Worked with the embedded side and the web/application layer while experimenting with telemetry and dashboard presentation.",
    technologies: ["ESP32", "Next.js", "Go", "API", "Wokwi"],
    learning:
      "How sensor data travels from device to application and where failures can happen along the way.",
    repo: "https://github.com/wannn-sion95/Sistem-Monitoring-Suhu-Cuaca-Kelembapan-Udara-Berbasis-ESP32",
    visual: "telemetry",
  },
];

const roles = {
  networking: {
    title: "Networking",
    copy: "Understanding how hosts, services, routes, and packets fit together — then troubleshooting the part that does not.",
    tags: ["Linux", "TCP/IP", "Wireshark"],
  },
  security: {
    title: "Cyber Security",
    copy: "Learning security through CTFs, packet analysis, reverse engineering, and a lot of terminal time.",
    tags: ["Nmap", "Ghidra", "pwntools"],
  },
  software: {
    title: "Software",
    copy: "Building practical web projects, APIs, dashboards, and small applications while learning how the pieces fit together.",
    tags: ["Python", "JavaScript", "React"],
  },
  systems: {
    title: "Systems",
    copy: "Connecting devices, containers, services, and dashboards — especially where networking and software meet.",
    tags: ["Linux", "Docker", "ESP32"],
  },
};

const skills = {
  networking: {
    eyebrow: "NETWORKING",
    title: "Networking",
    description:
      "Practical work around TCP/IP, interfaces, DHCP, routing, packet analysis, and virtual network labs.",
    tags: [
      "TCP/IP",
      "DHCP",
      "Routing",
      "Wireshark",
      "TShark",
      "GNS3",
      "CPT",
      "VirtualBox",
      "Linux",
    ],
    foot: "Linux · GNS3/CPT · Wireshark · TShark · VirtualBox",
  },
  security: {
    eyebrow: "CYBER SECURITY",
    title: "Cyber Security",
    description:
      "Hands-on security learning through CTFs, reconnaissance, packet analysis, reverse engineering, and debugging.",
    tags: [
      "Nmap",
      "Wireshark",
      "Ghidra",
      "GDB",
      "pwntools",
      "Python",
      "CTF",
      "Cryptography",
    ],
    foot: "CTF practice · Reverse engineering · Packet analysis · Security tooling",
  },
  software: {
    eyebrow: "SOFTWARE",
    title: "Software",
    description:
      "Frontend and application development across small products, dashboards, API-driven interfaces, and experiments.",
    tags: [
      "Python",
      "C/C++",
      "Go",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "HTML/CSS",
      "Git",
    ],
    foot: "Web apps · API integration · UI implementation · Git/GitHub",
  },
  systems: {
    eyebrow: "SYSTEMS & IOT",
    title: "Systems & IoT",
    description:
      "Working with Linux environments, containers, embedded devices, messaging, monitoring, and connected services.",
    tags: [
      "Linux",
      "Docker",
      "Docker Compose",
      "Prometheus",
      "Grafana",
      "ESP32",
      "MQTT",
      "WebSocket",
      "Wokwi",
      "Supabase",
    ],
    foot: "Containers · Monitoring · Embedded telemetry · Service connectivity",
  },
};

function visualMarkup(type) {
  const map = {
    network: [
      "NETWORK TRACE",
      "$ ip addr",
      "$ ip route",
      "$ tshark -i enp0s8",
      "route → service → packet",
    ],
    security: [
      "SECURITY LAB",
      "$ nmap -sC target",
      "$ strings binary",
      "$ gdb ./binary",
      "observe → test → understand",
    ],
    software: [
      "APPLICATION",
      "GET /api/projects",
      "state → UI → interaction",
      "responsive layout",
      "ship → test → iterate",
    ],
    movie: [
      "WEB APP",
      "TMDB API",
      "discover → details → search",
      "React + Vite",
      "data → interface",
    ],
    inventory: [
      "CRUD FLOW",
      "CREATE → READ",
      "UPDATE → DELETE",
      "MySQL / Laravel",
      "form → data → table",
    ],
    iot: [
      "DEVICE → DASHBOARD",
      "ESP32",
      "MQTT → WebSocket",
      "Go → React",
      "sensor → service → UI",
    ],
    telemetry: [
      "TELEMETRY",
      "ESP32 sensors",
      "API → dashboard",
      "temperature / weather",
      "device → data → view",
    ],
  };
  const [label, ...lines] = map[type] || map.software;
  return `<div class="project-visual"><div class="visual-grid"></div><div class="visual-label">${label}</div><div class="visual-window"><div class="dots"><i></i><i></i><i></i></div>${lines.map((line, i) => `<div class="code-line">${i === 0 ? "$ " : ""}${line.replace(/(ESP32|MQTT|WebSocket|React|Linux|Ghidra|Nmap|TMDB API|MySQL|Laravel|Go)/g, "<b>$1</b>")}</div>`).join("")}</div></div>`;
}

function projectCard(p, index, featured = false) {
  return `<article class="project-card ${featured ? "featured" : ""} reveal" data-category="${p.category}" data-project-id="${p.id}" tabindex="0" aria-label="Open ${p.title} details">
    ${visualMarkup(p.visual)}
    <div class="project-content">
      <span class="project-no">${String(index + 1).padStart(2, "0")}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-tags">${p.technologies
        .slice(0, featured ? 6 : 5)
        .map((t) => `<span>${t}</span>`)
        .join("")}</div>
      <div class="project-footer"><span class="project-type">${p.categoryLabel}</span><span class="project-link">View case study ↗</span></div>
    </div>
  </article>`;
}

function renderProjects(filter = "all") {
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const ordered = [...filtered];
  $("projectsGrid").innerHTML = ordered
    .map((p, i) => projectCard(p, i, i === 0 && filter === "all"))
    .join("");
  requestAnimationFrame(() => {
    document.querySelectorAll("#projectsGrid .reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), Math.min(i * 45, 160));
    });
  });
}

function setTheme(theme) {
  root.dataset.theme = theme;
  $("themeIcon").textContent = theme === "dark" ? "☾" : "☀";
  $("themeToggle").setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
  );
  try {
    localStorage.setItem("ridwan-theme", theme);
  } catch (_) {}
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

const modal = $("projectModal");
let lastTrigger = null;

function openProject(id, trigger) {
  // ... kode Anda sebelumnya ...
  $("siteHeader").inert = true;
  document.querySelector("main").inert = true;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("modalClose").focus(); // Memastikan fokus langsung ke tombol close
}

function closeProject() {
  // ... kode Anda sebelumnya ...
  $("siteHeader").inert = false;
  document.querySelector("main").inert = false;

  modal.classList.remove("open");
  // ... sisa kode ...
}

$("themeToggle").addEventListener("click", () =>
  setTheme(root.dataset.theme === "dark" ? "light" : "dark"),
);

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

$("projectFilters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  document
    .querySelectorAll(".filter")
    .forEach((x) => x.classList.toggle("active", x === btn));

  // Menggunakan View Transitions API jika didukung browser
  if (!document.startViewTransition) {
    renderProjects(btn.dataset.filter);
  } else {
    document.startViewTransition(() => renderProjects(btn.dataset.filter));
  }
});

$("projectsGrid").addEventListener("click", (e) => {
  const card = e.target.closest(".project-card");
  if (card) openProject(card.dataset.projectId, card);
});
$("projectsGrid").addEventListener("keydown", (e) => {
  const card = e.target.closest(".project-card");
  if (card && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    openProject(card.dataset.projectId, card);
  }
});

document
  .querySelectorAll("[data-close-modal]")
  .forEach((el) => el.addEventListener("click", closeProject));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeProject();
});

const nav = $("siteNav");
$("menuToggle").addEventListener("click", () => {
  const open = !nav.classList.contains("open");
  nav.classList.toggle("open", open);
  $("menuToggle").setAttribute("aria-expanded", String(open));
  $("menuToggle").setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    nav.classList.remove("open");
    $("menuToggle").setAttribute("aria-expanded", "false");
    $("menuToggle").setAttribute("aria-label", "Open menu");
  }
});

addEventListener(
  "scroll",
  () => {
    $("siteHeader").classList.toggle("scrolled", scrollY > 12);
    const max = document.documentElement.scrollHeight - innerHeight;
    $("scrollProgress").style.width =
      max > 0 ? `${Math.min(100, (scrollY / max) * 100)}%` : "0%";
  },
  { passive: true },
);

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

$("copyEmail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    showToast("Email copied");
  } catch {
    location.href = `mailto:${EMAIL}`;
  }
});
function showToast(message) {
  const t = $("toast");
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => t.classList.remove("show"), 1700);
}
$("backTop").addEventListener("click", () =>
  scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }),
);
$("year").textContent = new Date().getFullYear();

setTheme(root.dataset.theme === "light" ? "light" : "dark");
setRole("networking");
setSkill("networking");
renderProjects();

// Tambahan di script.js
$("projectsGrid").addEventListener("mousemove", (e) => {
  for (const card of document.querySelectorAll(".project-card")) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
});

const dynamicText = document.getElementById("dynamic-text");

// Daftar variasi kalimat yang ingin ditampilkan
const phrases = [
  "figuring out <em>how things work.</em>",
  "building <em>secure networks.</em>",
  "solving <em>a CTF Challenge</em>",
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
}, 3500);
