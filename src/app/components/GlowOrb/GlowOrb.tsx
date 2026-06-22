/** Glowing orb in the hero background */

export function GlowOrb({
  x,
  y,
  color,
  size,
}: {
  x: string;
  y: string;
  color: string;
  size: number;
}) {
  return (
    <div
      className="pointer-events-none absolute rounded-full opacity-20"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        transform: "translate(-50%, -50%)",
        filter: "blur(40px)",
      }}
    />
  );
}