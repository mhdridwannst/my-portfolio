export function visualMarkup(type) {
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
  return `<div class="project-visual">
    <div class="visual-grid"></div>
    <div class="visual-label">${label}</div>
    <div class="visual-window">
      <div class="dots"><i></i><i></i><i></i></div>
      ${lines.map((line, i) => `<div class="code-line">${i === 0 ? "$ " : ""}${line.replace(/(ESP32|MQTT|WebSocket|React|Linux|Ghidra|Nmap|TMDB API|MySQL|Laravel|Go)/g, "<b>$1</b>")}</div>`).join("")}
    </div>
  </div>`;
}

export function projectCard(p, index, featured = false) {
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
      <div class="project-footer">
        <span class="project-type">${p.categoryLabel}</span>
        <span class="project-link">View case study ↗</span>
      </div>
    </div>
  </article>`;
}
