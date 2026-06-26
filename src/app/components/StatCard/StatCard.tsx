import { MONO, ORBITRON } from "../../../Constants";

export const StatCard = ({ stat }: { stat: { label: string; value: string } }) => {
  return (
    <div
        key={stat.label}
        className="border border-border p-2 relative"
    >
        <div
            className="text-3xl font-black leading-none mb-1"
            style={{
                ...ORBITRON,
                color: "#00d4ff",
                textShadow: "0 0 15px rgba(0,212,255,0.4)",
            }}
        >
            {stat.value}
        </div>
        <div
            className="text-xs text-foreground tracking-widest uppercase"
            style={MONO}
        >
            {stat.label}
        </div>
    </div>
  );
}