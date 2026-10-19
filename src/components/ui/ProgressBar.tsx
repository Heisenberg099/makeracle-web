/** Horizontal progress bar with an accessible value. */
export function ProgressBar({ value, max, label, tone = "red" }: { value: number; max: number; label: string; tone?: "red" | "ink" | "muted" }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={`pbar${tone === "red" ? "" : ` ${tone}`}`} role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={max} aria-valuenow={value}>
      <span style={{ width: `${pct}%` }} />
    </div>
  );
}

/** Five-segment level meter (e.g. CT strengths). */
export function LevelBar({ level, max = 5, label }: { level: number; max?: number; label: string }) {
  return (
    <div className="levels" role="img" aria-label={`${label}: level ${level} of ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < level ? "on" : undefined} />
      ))}
    </div>
  );
}
