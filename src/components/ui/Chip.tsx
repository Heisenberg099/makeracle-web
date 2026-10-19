/** Small pill label. Outline by default; `solid`, `red` and `yellow` fill it. */
export function Chip({ tone = "outline", children }: { tone?: "outline" | "solid" | "red" | "yellow"; children: React.ReactNode }) {
  return <span className={`s-chip${tone === "outline" ? "" : ` ${tone}`}`}>{children}</span>;
}
