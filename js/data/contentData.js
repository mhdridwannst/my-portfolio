export const EMAIL = "mhdridwan1331@gmail.com";

export const projects = [
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

export const roles = {
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

export const skills = {
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
