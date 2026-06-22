export function HudCorners({
  color = "#00d4ff",
  size = 12,
}: {
  color?: string;
  size?: number;
}) {
  const s = size;
  const style = { borderColor: color } as React.CSSProperties;
  return (
    <>
      <span
        className="absolute top-0 left-0 border-t-2 border-l-2"
        style={{ ...style, width: s, height: s }}
      />
      <span
        className="absolute top-0 right-0 border-t-2 border-r-2"
        style={{ ...style, width: s, height: s }}
      />
      <span
        className="absolute bottom-0 left-0 border-b-2 border-l-2"
        style={{ ...style, width: s, height: s }}
      />
      <span
        className="absolute bottom-0 right-0 border-b-2 border-r-2"
        style={{ ...style, width: s, height: s }}
      />
    </>
  );
}