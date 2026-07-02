import { MONO, ORBITRON } from "../../../Fonts";

export function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="flex items-center gap-2">
        <span className="text-primary text-xs" style={MONO}>
          //
        </span>
        <span
          className="text-sm tracking-[0.25em] uppercase text-primary font-semibold"
          style={ORBITRON}
        >
          {children}
        </span>
      </div>
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(to right, rgba(0,212,255,0.4), transparent)",
        }}
      />
    </div>
  );
}