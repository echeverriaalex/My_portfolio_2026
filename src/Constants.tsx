export const ORBITRON = { fontFamily: "'Orbitron', sans-serif" };
export const EXO = { fontFamily: "'Exo 2', sans-serif" };
export const MONO = { fontFamily: "'Share Tech Mono', monospace" };

export const PROJECTS = [
  {
    id: "SYS-001",
    title: "Kargo",
    year: "2024",
    status: "ONLINE",
    description:
      "Real-time logistics platform handling 2M+ daily shipment events. Go microservices, Kafka event bus, and a React command dashboard. Reduced operational overhead by 40%.",
    tags: ["Go", "Kafka", "React", "PostgreSQL"],
    color: "#00d4ff",
  },
  {
    id: "SYS-002",
    title: "Vaultex",
    year: "2023",
    status: "ONLINE",
    description:
      "Open-source secrets manager with end-to-end AES-256 encryption and team access control. 3.8k GitHub stars. Deployed by 200+ organizations worldwide.",
    tags: ["Node.js", "TypeScript", "AES-256", "Docker"],
    color: "#7b61ff",
  },
  {
    id: "SYS-003",
    title: "Pulsar UI",
    year: "2023",
    status: "STABLE",
    description:
      "Accessible component library with 60+ primitives, dark mode, and WCAG AA compliance. Used across three internal product teams.",
    tags: ["React", "Radix UI", "Storybook", "Vitest"],
    color: "#00ffa3",
  },
  {
    id: "SYS-004",
    title: "Driftmap",
    year: "2022",
    status: "ARCHIVED",
    description:
      "CLI tool that diffs Terraform state across environments and generates human-readable change reports. 1.1k stars on GitHub.",
    tags: ["Go", "Terraform", "CLI"],
    color: "#00d4ff",
  },
];