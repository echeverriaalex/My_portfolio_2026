import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, ChevronRight, Cpu, Zap, Menu, X, Monitor, Moon, SunMedium } from "lucide-react";
import { HudCorners } from "./components/HudCorners/HudCorners";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { EXO, MONO, ORBITRON } from "../Fonts";
import { PulsingDot } from "./components/PulsingDot/PulsingDot";
import { SectionLabel } from "./components/SectionLabel/SectionLabel";
import { GridBg } from "./components/GridBg/GridBg";
import { GlowOrb } from "./components/GlowOrb/GlowOrb";
import { Ticker } from "./components/Ticker/Ticker";
import { StatCard } from "./components/StatCard/StatCard";
import { ABOUT_MY, CONTACTS, EDUCATION, EXPERIENCE, FAVORITES, NAV_LINKS, PROJECTS, STACK, STATS } from "./Data";
import { ButtonPrimary } from "./components/Button/ButtonPrimary";
import { ButtonSecondary } from "./components/Button/ButtonSecondary";
import { Navbar } from "./components/Navbar/Navbar";
import { Logo } from "./components/Logo/Logo";
import { RightSide } from "./components/RightSide/RightSide";
import LineChart from "./components/Graphics/Demo";
import { Footer } from "./components/Footer/Footer";

type ThemeMode = "system" | "dark" | "light";

const THEME_STORAGE_KEY = "portfolio-theme";

const THEME_CONTROLS: Array<{
  mode: ThemeMode;
  label: string;
  icon: typeof Monitor;
}> = [
  { mode: "system", label: "Sistema", icon: Monitor },
  { mode: "dark", label: "Oscuro", icon: Moon },
  { mode: "light", label: "Claro", icon: SunMedium },
];

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

/* ─── Main ────────────────────────────────────────── */
export default function App() {

  const navRef = useRef<HTMLElement>(null);

  const [time, setTime] = useState(new Date());
  const [bootSeq, setBootSeq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    return storedTheme === "system" || storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : "dark";
  });
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return getSystemTheme();
  });

  const resolvedTheme = themeMode === "system" ? systemTheme : themeMode;

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setBootSeq((v) => (v < 100 ? v + 2 : 100)),
      40,
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => setSystemTheme(media.matches ? "dark" : "light");

    handleChange();
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark", "light");
    root.classList.add(resolvedTheme);
    root.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  const renderThemeButton = (mode: ThemeMode, sizeClass = "h-10 w-10") => {
    const control = THEME_CONTROLS.find((item) => item.mode === mode);

    if (!control) {
      return null;
    }

    const Icon = control.icon;
    const active = themeMode === mode;

    return (
      <button
        key={mode}
        type="button"
        onClick={() => setThemeMode(mode)}
        aria-label={control.label}
        aria-pressed={active}
        title={control.label}
        className={`${sizeClass} inline-flex items-center justify-center border transition-all ${active ? "border-primary bg-primary text-primary-foreground shadow-[0_0_16px_rgba(0,212,255,0.18)]" : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"}`}
      >
        <Icon size={14} />
      </button>
    );
  };

 



  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden flex flex-col gap-[30px]" style={EXO}>
      <GridBg />

      {/* Subtle scanline */}
      <div
        className="pointer-events-none fixed left-0 right-0 z-0 h-32 opacity-[0.03]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0,212,255,0.4), transparent)",
          animation: "scanline 8s linear infinite",
        }}
      />

      <Ticker />

      {/*
      <LineChart data={[3, 9, 1, 5, 2]} />
      */}

      {/* ── Nav ── */}
      <nav ref={navRef} className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 md:py-0 flex flex-col gap-3 md:block">
          <div className="flex items-center justify-between gap-4 md:hidden">
            <div id="#" className="flex items-center gap-3 flex-shrink-0 min-w-0">
              <div
                className="relative w-8 h-8 flex items-center justify-center border border-primary/40"
                style={{ boxShadow: "0 0 12px color-mix(in srgb, var(--primary) 20%, transparent)" }}
              >
                <Cpu size={16} className="text-primary" />
              </div>
              <div>
                <div
                  className="text-sm font-bold tracking-widest uppercase leading-none hud-text"
                  style={{ ...ORBITRON, color: "var(--primary)" }}
                >
                  { ABOUT_MY.item.short.toUpperCase() }
                </div>
                <div className="text-[12px] text-foreground tracking-widest mt-0.5" style={MONO}>
                  DEV · SYSTEM
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex md:hidden items-center justify-center w-10 h-10 border border-border text-foreground hover:text-primary hover:border-primary/50 transition-colors flex-shrink-0"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-links"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <div className="flex w-full md:hidden items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <PulsingDot />
              <span className="text-[10px] text-primary tabular-nums whitespace-nowrap" style={MONO}>
                {time.toLocaleTimeString("en-GB")}
              </span>
            </div>
            <div className="flex items-center gap-1.5 border border-border px-2 py-1 flex-1">
              <span className="text-[10px] text-muted-foreground" style={MONO}>
                SYS
              </span>
              <div className="w-full h-1 bg-secondary overflow-hidden">
                <div className="h-full bg-primary transition-all duration-75" style={{ width: `${bootSeq}%` }} />
              </div>
              <span className="text-[10px] text-primary" style={MONO}>
                {bootSeq}%
              </span>
            </div>
          </div>

          <div className="flex md:hidden items-center justify-center gap-2 pb-1">
            {renderThemeButton("system", "h-9 w-9")}
            {renderThemeButton("dark", "h-9 w-9")}
            {renderThemeButton("light", "h-9 w-9")}
          </div>

          <div className="hidden md:flex items-center justify-between gap-8 h-14">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div
                className="relative w-8 h-8 flex items-center justify-center border border-primary/40"
                style={{ boxShadow: "0 0 12px rgba(0,212,255,0.2)" }}
              >
                <Cpu size={16} className="text-primary" />
              </div>
              <div>
                <div
                  className="text-sm font-bold tracking-widest uppercase leading-none hud-text"
                  style={{ ...ORBITRON, color: "#00d4ff" }}
                >
                  { ABOUT_MY.item.short.toUpperCase() }
                </div>
                <div className="text-[12px] text-foreground tracking-widest mt-0.5" style={MONO}>
                  DEV · SYSTEM
                </div>
              </div>
            </div>

            <ul className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id.toLowerCase()}`}
                    className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors relative group"
                    style={MONO}
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="flex items-center gap-1 rounded-none border border-border bg-background/80 p-1">
                {renderThemeButton("system")}
                {renderThemeButton("dark")}
                {renderThemeButton("light")}
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <PulsingDot />
                <span className="text-xs text-primary tabular-nums" style={MONO}>
                  {time.toLocaleTimeString("en-GB")}
                </span>
              </div>
              <div className="hidden md:flex items-center gap-1.5 border border-border px-2.5 py-1">
                <span className="text-[10px] text-muted-foreground" style={MONO}>
                  SYS
                </span>
                <div className="w-16 h-1 bg-secondary overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-75" style={{ width: `${bootSeq}%` }} />
                </div>
                <span className="text-[10px] text-primary" style={MONO}>
                  {bootSeq}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

        <div
          id="mobile-nav-links"
          className={`md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ${mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
        >
          <ul className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id.toLowerCase()}`}
                  className="flex items-center justify-between rounded-md border border-border px-4 py-3 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  style={MONO}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  <span className="text-primary">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      {/* ── Hero ── */}
      <section
        id="profile"
        className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 overflow-hidden"
      >
        <GlowOrb x="10%" y="40%" color="#00d4ff" size={500} />
        <GlowOrb x="85%" y="20%" color="#7b61ff" size={400} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-start relative z-10">
          <div className="animate-fade-in-up">
            {/* Status bar */}
            <div className="inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-4 py-2 mb-8 animated-border transition-all uppercase" >
              <PulsingDot />
              <span
                className="text-xs text-primary tracking-widest"
                style={MONO}
              >
                Enlace neuronal establecido · Nodo de Mar del Plata · DISPONIBLE A OPORTUNIDADES
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-4xl md:text-6xl lg:text-8xl font-black leading-none tracking-tight uppercase mb-4 animate-pulse-glow"
              style={ORBITRON}
            >
              <span className="block text-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                { ABOUT_MY.item.name.toUpperCase() }
              </span>
              <span
                className="block animate-fade-in-up"
                style={{
                  color: "#00d4ff",
                  textShadow:
                    "0 0 30px rgba(0,212,255,0.5), 0 0 60px rgba(0,212,255,0.2)",
                  animationDelay: '0.4s'
                }}
              >
                { ABOUT_MY.item.surname.toUpperCase() }
              </span>
            </h1>

            {/* Role */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary/50" />
              <span
                className="text-sm tracking-[0.3em] uppercase text-foreground"
                style={MONO}
              >
                { ABOUT_MY.item.role }
              </span>
            </div>

            <p
              className="text-base text-secondary-foreground leading-relaxed max-w-xl mb-8"
              style={EXO}
            >
              Desarrollador Full-Stack, graduado de la UTN con una fuerte base técnica autodidacta.
              Manejo el stack MERN, MEAN y bases de datos relacionales y no relacionales.
              Con experiencia real construyendo portales web con visualización de datos. 
              Busco oportunidades de trabajo en un entorno profesional donde pueda crecer y aportar mis habilidades.
            </p>

            {/* CTA (Botones de acción) */}
            <div className="flex items-center gap-4 flex-wrap animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <ButtonPrimary children={"Ver proyectos"} href={"#projects"} />
              <ButtonSecondary children={"Contactame"} href={"#contact"} />
              <a
                href="https://github.com/echeverriaalex"
                target="_blank"
                rel="noreferrer"
                className="border border-border p-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/alexnahuelecheverria/"
                target="_blank"
                rel="noreferrer"
                className="border border-border p-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Stats panel */}
          <div className="relative border border-border bg-card/80 p-6 glow-border hidden lg:block animate-fade-in-down card-hover" style={{ animationDelay: '0.4s' }}>
            <HudCorners size={14} />

            <div className="flex items-center justify-between mb-6">
              <span
                className="text-xs text-primary tracking-widest"
                style={MONO}
              >
                FAVORITES STATISTICS
              </span>
              <PulsingDot />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {STATS.map((stat) => (
                <StatCard stat={stat} key={stat.label} />
              ))}
            </div>

            <div className="space-y-2">
              {
                FAVORITES.map((bar) => (
                  <div key={bar.label}>
                    <div
                      className="flex justify-between text-[15px] mb-1"
                      style={MONO}
                    >
                      <span className="text-secondary-foreground">
                        {bar.label}
                      </span>
                      <span style={{ color: bar.color }}>
                        {bar.pct}%
                      </span>
                    </div>
                    <div className="h-1 bg-secondary overflow-hidden">
                      <div
                        className="h-full transition-all duration-1000"
                        style={{
                          width: `${bar.pct}%`,
                          backgroundColor: bar.color,
                          boxShadow: `0 0 6px ${bar.color}80`,
                        }}
                      />
                    </div>
                  </div>
                ))
              }
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <div
                className="text-[11px] text-muted-foreground"
                style={MONO}
              >
                ÚLTIMO COMMIT —{" "}
                <span className="text-primary">9h ago</span> ·
                main · feat/auth-v3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Profile / About ── */}
      <section
        id="aboutme"
        className="max-w-6xl mx-auto px-6 py-20 border-t border-border animated-border"
      >
        <SectionLabel>Sobre mí</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
          <div
            className="space-y-5 text-secondary-foreground text-base leading-relaxed"
            style={EXO}
          >
            <p>
              Soy Técnico Superior en Programación egresado de la UTN, con un perfil orientado
              al desarrollo Full Stack. Mi formación universitaria me dio una base lógica y
              estructural muy sólida, la cual potencio día a día expandiendo mis habilidades
              de forma autodidacta para dominar las tecnologías y frameworks más demandados
              del ecosistema actual.
            </p>
            <p>
              A lo largo de mi recorrido, he trabajado en proyectos que requieren visualización
              avanzada de datos y soluciones escalables, manteniendo siempre un enfoque firme
              en optimizar el rendimiento del código y la experiencia intuitiva y agradable del usuario final.
            </p>
            <p>
              Me motiva enfrentarme a nuevos desafíos técnicos, conectar arquitecturas robustas
              en el backend con interfaces dinámicas en el frontend, y aportar valor real en
              equipos de la industria IT.
            </p>
          </div>
          <div>
            <div
              className="text-xs text-primary tracking-widest mb-5 flex items-center gap-2"
              style={MONO}
            >
              <Zap size={11} />
              EXPERIENCIA
            </div>
            <div className="space-y-4">
              {EXPERIENCE.map((exp) => (
                <div
                  key={exp.company}
                  className="relative pl-5 border-l-2"
                  style={{
                    borderColor: exp.active
                      ? "#00d4ff"
                      : "#071e36",
                  }}
                >
                  {exp.active && (
                    <span
                      className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary"
                      style={{ boxShadow: "0 0 8px #00d4ff" }}
                    />
                  )}
                  <div className="flex items-center gap-2 mb-0.5">
                    <p
                      className="text-foreground text-sm font-semibold uppercase tracking-wide"
                      style={ORBITRON}
                    >
                      {exp.company}
                    </p>
                    <span
                      className="text-[10px] border border-border px-1.5 py-0.5 text-muted-foreground"
                      style={MONO}
                    >
                      {exp.level}
                    </span>
                  </div>
                  <p className="text-secondary-foreground text-sm">
                    {exp.role}
                  </p>
                  <p
                    className="text-muted-foreground text-xs mt-0.5"
                    style={MONO}
                  >
                    {exp.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ── Formación ── */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-20 border-t border-border animated-border">
        <SectionLabel>Formación</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EDUCATION.map((edu, i) => {
            const Icon = edu.icon;
            const color = i === 0 ? "#00d4ff" : i === 1 ? "#7b61ff" : "#00ffa3";
            return (
              <div key={edu.institution} className="relative border border-border bg-card p-5 hover:border-primary/40 transition-colors" style={{ backgroundColor: color + "10", borderColor: color + "50", borderWidth: "1px", borderRadius: "4px" }}>
                <HudCorners color={color} size={9} />
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 border flex items-center justify-center flex-shrink-0" style={{ borderColor: color + "50", backgroundColor: color + "10" }}>
                    <Icon size={15} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase leading-tight mb-0.5" style={{ ...ORBITRON, color }}>
                      {edu.institution}
                    </p>
                    <p className="text-[11px] text-muted-foreground" style={MONO}>{edu.period}</p>
                  </div>
                </div>
                <div className="flex flex-col mb-8">
                  <p className="text-foreground text-sm font-semibold mb-2" style={EXO}>{edu.title}</p>
                  <p className="text-secondary-foreground text-sm leading-relaxed" style={EXO}>{edu.details}</p>
                </div>
                {edu.highlight && (
                  <div
                    className="flex items-center"
                    style={{
                      gap: "5px",
                      backgroundColor: color + "10",
                      borderColor: color + "50",
                      position: "absolute",
                      bottom: "12px",
                      left: "16px",
                      right: "16px",
                      borderWidth: "1px",
                      borderRadius: "4px",
                      padding: "6px 8px",
                    }}
                  >
                    <PulsingDot color={color} />
                    <span className="text-[11px] tracking-widest uppercase" style={{ ...MONO, color, bottom: "2px" }}> {edu.highlightText} </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      
      {/* ── Stack ── */}
      <section id="stack" className="w-full max-w-6xl mx-auto px-6 py-20 border-t border-border animated-border">
        <SectionLabel>Stack Técnico</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STACK.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="relative border border-border bg-card p-5 group hover:border-primary/40 transition-all card-hover animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <HudCorners size={8} />
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={14} className="text-primary" />
                  <span
                    className="text-xs text-primary tracking-widest uppercase font-semibold"
                    style={ORBITRON}
                  >
                    {group.category}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-secondary-foreground"
                      style={EXO}
                    >
                      <ChevronRight
                        size={10}
                        className="text-primary/60 flex-shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        className="w-full max-w-6xl mx-auto px-6 py-20 border-t border-border animated-border"
      >
        <SectionLabel>Proyectos</SectionLabel>
        <p className="text-secondary-foreground text-base mb-6 -mt-4" style={EXO}>
          Proyectos personales desarrollados durante mi formación. Haz clic para ver detalles.
        </p>
        <div className="space-y-3">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="animate-fade-in-up card-hover" style={{ animationDelay: `${idx * 0.15}s`, opacity: 0 }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-border animated-border">
        <SectionLabel>Contacto</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="animate-fade-in-left">
            <h2
              className="text-4xl md:text-5xl font-black leading-none uppercase mb-4"
              style={{
                ...ORBITRON,
                textShadow: "0 0 20px color-mix(in srgb, var(--primary) 30%, transparent)",
              }}
            >
              <span className="text-foreground">Hablemos</span>
              <br />
              <span className="text-primary">del rol.</span>
            </h2>
            <p
              className="text-secondary-foreground leading-relaxed text-base mb-6"
              style={EXO}
            >
              Actualmente me encuentro en la búsqueda de mi primera oportunidad profesional como
              Desarrollador Full Stack. Me entusiasma incorporarme a un equipo donde pueda aportar
              mis conocimientos lógicos y técnicos, afrontar nuevos desafíos y continuar creciendo.
              Tengo total disponibilidad para posiciones remotas o presenciales en Argentina,
              y mantengo una comunicación activa con una tasa de respuesta menor a 24 horas.
            </p>
            <div className="border border-primary/20 bg-primary/5 px-4 py-3 flex items-center gap-3">
              <PulsingDot />
              <span
                className="text-xs text-primary tracking-widest"
                style={MONO}
              >
                CANAL DE TRANSMISIÓN ABIERTO · ENCRIPTADO · &lt;24H RESPUESTA
              </span>
            </div>
          </div>
          <div className="space-y-3 animate-fade-in-right">
            {
              CONTACTS.map(({ icon: Icon, label, sub, href, color }, idx) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center gap-4 p-4 border border-border bg-card hover:bg-card/80 transition-all card-hover animated-border"
                  style={{ borderColor: "color-mix(in srgb, var(--primary) 15%, transparent)", animationDelay: `${idx * 0.1}s` }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      color + "55")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "color-mix(in srgb, var(--primary) 15%, transparent)")
                  }
                >
                  <div
                    className="w-9 h-9 border flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{
                      borderColor: color + "40",
                      backgroundColor: color + "0d",
                    }}
                  >
                    <Icon size={15} style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-foreground text-sm font-medium truncate"
                      style={MONO}
                    >
                      {label}
                    </p>
                    <p
                      className="text-muted-foreground text-xs tracking-widest mt-0.5"
                      style={MONO}
                    >
                      {sub}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                  />
                </a>
              ))
            }
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}