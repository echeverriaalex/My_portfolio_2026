import { Github, Linkedin, Mail, Globe, Shield, Database, Code2, GraduationCap, BookOpen } from "lucide-react";

export const ABOUT_MY = {
  item: {
    long: "Alex Echeverria",
    short: "A. Echeverria",
    name: "Alex",
    surname: "Echeverria",
    role: "Desarrollador Fullstack",
  },
} as const;

export const STACK = [
  {
    icon: Code2,
    category: "Frontend",
    items: [
      "React",
      "Angular",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    icon: Database,
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "MySQL", "MongoDB", "Mongoose"],
  },
  {
    icon: Globe,
    category: "Cloud Platforms",
    items: [
      "Vercel",
      "Render",
      "GitHub",
      "MongoDB Atlas",
    ],
  },
  {
    icon: Shield,
    category: "Security",
    items: [
      "OAuth 2.0",
      "JWT",
      "Bcrypt",
    ],
  },
];

export const EXPERIENCE = [
  {
    company: "Municipalidad de Mar del Plata",
    role: "Desarrollador de Software",
    period: "2023 — 2026",
    level: " ",
    active: true,
  },
  /*
  {
    company: "Cloudloop",
    role: "Fullstack Developer",
    period: "2020 — 2022",
    level: "L4",
    active: false,
  },
  {
    company: "Byte Lab (YC S19)",
    role: "Software Developer",
    period: "2019 — 2020",
    level: "L3",
    active: false,
  },
  */
];

export const STATS = [
  { label: "Años coding", value: "9+" },
  { label: "Proyectos", value: "20+" },
  { label: "Repositorios", value: "100+" },
  { label: "Tecnologías", value: "10+" },
];

export const CONTACTS = [
  {
    icon: Mail,
    label: "alexnahuelecheverria@gmail.com",
    sub: "Principal",
    href: "mailto:alexnahuelecheverria@gmail.com",
    color: "#00d4ff",
  },
  {
    icon: Github,
    label: "github.com/echeverriaalex",
    sub: "Repos",
    href: "https://github.com/echeverriaalex",
    color: "#7b61ff",
  },
  {
    icon: Linkedin,
    label: "in/alexnahuelecheverria",
    sub: "Profesional",
    href: "https://www.linkedin.com/in/alexnahuelecheverria/",
    color: "#00ffa3",
  },
];

export const FAVORITES = [
  { label: "React", pct: 95, color: "#00d4ff" },
  { label: "Angular", pct: 83, color: "#ff4800" },
  { label: "TypeScript", pct: 70, color: "#0077ff" },
  { label: "Node.js", pct: 85, color: "#fff461" },
  { label: "MongoDB", pct: 83, color: "#10c528" },
];

export const EDUCATION = [
  {
    institution: "UTN — Mar del Plata",
    title: "Técnico Superior en Programación",
    period: "2021 — 2024",
    icon: GraduationCap,
    highlight: true,
    highlightText: "Título oficial",
    details: "Formación en fundamentos de programación, estructuras de datos, algoritmos y desarrollo de software con C, C++, Java, PHP, JavaScript, TypeScript, MySQL, Angular.",
  },
  {
    institution: "Nucba",
    title: "Desarrollador Full Stack MERN",
    period: "2023 — 2024",
    icon: BookOpen,
    highlight: true,
    highlightText: "Certificado de finalización",
    details: "Desarrollo de aplicaciones web completas con el stack MERN. Autenticación con JWT y Bcrypt, manejo de estado, Tailwind CSS, control de versiones con Git y GitHub y despliegue.",
  },
  {
    institution: "Avalith",
    title: "Desarrollador Backend con Node.js",
    period: "2023",
    icon: BookOpen,
    highlight: true,
    highlightText: "Certificado de finalización",
    details: "Arquitectura de APIs REST, bases de datos relacionales con PostgreSQL, autenticación segura y control de versiones con Git y GitHub.",
  },
];

export const PROJECTS = [
  {
    id: "APP-001",
    title: "Infinity: Movies, TV Series & More",
    year: "2026",
    status: "FUNCIONANDO",
    description:
      "E-commerce con la temática de plataforma de entretenimiento, que permite comercializar una amplia variedad de series, películas, documentales y programas de TV. Con un enfoque amigable en la experiencia del usuario con gestión de sus compras ficticias.",
    tags: ["React", "MongoDB", "Node.js", "Express", "JavaScript"],
    color: "#00d4ff",
    link: "https://proyecto-integrador-node-js-front.vercel.app/",
    github: "https://github.com/echeverriaalex/Proyecto_Integrador-NodeJS-Front",
  },
  {
    id: "API-001",
    title: "Infinity: API Rest ",
    year: "2025",
    status: "FUNCIONANDO",
    description:
      "API REST para la plataforma Infinity que permite el correcto funcionamiento de la app Infinity, gestionar datos de los usuarios relacionados con películas, series y contenido cinematográfico. Proporciona endpoints para obtener información detallada, realizar búsquedas y gestionar recursos de manera eficiente.",
    tags: ["Node.js", "Express", "MongoDB", "JavaScript" ],
    color: "#00ffa3",
    link: "https://proyecto-integrador-node-js-back.vercel.app/",
    github: "https://github.com/echeverriaalex/Proyecto_Integrador-NodeJS-Back",
  },
  {
    id: "APP-002",
    title: "Pokémon World",
    year: "2025",
    status: "CONECTADO",
    description:
      "E-commerce con la temática de Pokémon, que permite a los usuarios explorar y adquirir productos relacionados con el mundo Pokémon. La plataforma ofrece una experiencia de compra interactiva y atractiva para los fanáticos de la franquicia.",
    tags: ["React", "JavaScript"],
    color: "#00ffa3",
    link: "https://proyecto-integrador-reactjs.vercel.app/",
    github: "https://github.com/echeverriaalex/Proyecto_Integrador-ReactJS",
  },
  
  /*
  {
    id: "APP-003",
    title: "Nucba Zappi",
    year: "2023",
    status: "STABLE",
    description:
      "Accessible component library with 60+ primitives, dark mode, and WCAG AA compliance. Used across three internal product teams.",
    tags: ["React", "Radix UI", "Storybook", "Vitest"],
    color: "#00ffa3",
    link: "https://nucba-zappi-one.vercel.app/",
    github: "https://github.com/echeverriaalex/Nucba-Zappi",
  },
  
  {
    id: "APP-004",
    title: "Driftmap",
    year: "2022",
    status: "ARCHIVED",
    description:
      "CLI tool that diffs Terraform state across environments and generates human-readable change reports. 1.1k stars on GitHub.",
    tags: ["Go", "Terraform", "CLI"],
    color: "#00d4ff",
  },
  */
];