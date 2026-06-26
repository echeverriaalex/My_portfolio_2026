import { ArrowUpRight } from "lucide-react";
import { ORBITRON } from "../../../Constants";

export const ButtonPrimary = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <a
      href={href}
      className="glow-btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs tracking-widest uppercase font-semibold transition-all hover:scale-105"
      style={ORBITRON}
    >
      {children} <ArrowUpRight size={20} />
    </a>
  );
};