import { useState } from "react";
import { HudCorners } from "../HudCorners/HudCorners";
import { EXO, MONO, ORBITRON } from "../../../Fonts";
import { ExternalLink, ChevronRight, Github, SquareArrowOutUpRight } from "lucide-react";
import { PulsingDot } from "../PulsingDot/PulsingDot";
import { PROJECTS } from "../../Data";

export function ProjectCard({
  project,
}: {
  project: (typeof PROJECTS)[0];
}) {
  const [open, setOpen] = useState(false);
  const statusColor =
    project.status === "ONLINE" || project.status === "FUNCIONANDO"
      ? "#00ffa3"
      : project.status === "CONECTADO"
        ? "#00d4ff"
        : project.status === "SIN CONEXIÓN"
          ? "#ff4d4d"
          : "#4d7a99";

  return (
    <div
      className="relative border border-border bg-card transition-all duration-300 cursor-pointer card-hover animated-border"
      style={
        open
          ? {
              borderColor: project.color + "55",
              backgroundColor: "var(--card)",
            }
          : {}
      }
      onClick={() => setOpen((v) => !v)}
    >
      <HudCorners color={project.color} size={10} />

      {/* Header row */}
      <div className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:gap-4">
        <span
          className="text-xs text-muted-foreground w-16 flex-shrink-0"
          style={ MONO }
        >
          {project.id}
        </span>
        <div className="min-w-0 flex-1">
          <span
            className="block text-base font-bold tracking-widest uppercase"
            style={{
              ...ORBITRON,
              color: open ? project.color : "var(--foreground)",
            }}
          >
            {project.title}
          </span>

          <div className="mt-3 flex items-center gap-2 md:hidden">
            <ChevronRight
              size={14}
              className="text-muted-foreground transition-transform flex-shrink-0"
              style={{
                transform: open ? "rotate(90deg)" : "none",
                color: open ? project.color : undefined,
              }}
            />

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="border border-border p-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <SquareArrowOutUpRight size={20} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="border border-border p-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 md:ml-auto">
          <PulsingDot color={statusColor} />
          <span
            className="text-xs tracking-widest"
            style={{ ...MONO, color: statusColor }}
          >
            {project.status}
          </span>
        </div>
        <span
          className="text-xs text-muted-foreground hidden md:block"
          style={MONO}
        >
          {project.year}
        </span>

        <div className="hidden md:flex items-center gap-2">
          <ChevronRight
            size={14}
            className="text-muted-foreground transition-transform flex-shrink-0"
            style={{
              transform: open ? "rotate(90deg)" : "none",
              color: open ? project.color : undefined,
            }}
          />

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="border border-border p-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <SquareArrowOutUpRight size={20} />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="border border-border p-3 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Expanded body */}
      {open && (
        <div
          className="px-5 pb-5 border-t pt-4"
          style={{ borderColor: project.color + "30" }}
        >
          <p
            className="text-secondary-foreground text-base leading-relaxed mb-4 max-w-2xl"
            style={EXO}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 border"
                style={{
                  ...MONO,
                  color: project.color,
                  borderColor: project.color + "40",
                  backgroundColor: project.color + "0a",
                }}
              >
                {tag}
              </span>
            ))}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="ml-auto inline-flex items-center gap-1.5 text-xs hover:underline transition-colors"
              style={{ ...MONO, color: project.color }}
            >
              ACCESS <ExternalLink  size={11} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}