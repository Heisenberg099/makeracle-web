type Props = {
  /** "light" = on light backgrounds, "dark" = on black/red backgrounds */
  tone?: "light" | "dark";
  size?: number;
  withWordmark?: boolean;
  className?: string;
};

/** The Makeracle mark (open book + rising sun) in the red/white theme. */
export function LogoMark({ tone = "light", size = 34 }: { tone?: "light" | "dark"; size?: number }) {
  const sun = tone === "light" ? "#111" : "#fff";
  const base = tone === "light" ? "#111" : "#fff";
  return (
    <svg width={size} height={(size * 50) / 60} viewBox="0 0 60 50" aria-hidden="true">
      <circle cx="30" cy="13" r="9" fill={sun} />
      <path d="M0 6 L30 20 L30 44 L0 30 Z" fill="var(--red)" />
      <path d="M60 6 L30 20 L30 44 L60 30 Z" fill={tone === "light" ? "var(--red-dark)" : "#c8102e"} />
      <path d="M0 30 L30 44 L60 30 L60 35 L30 49 L0 35 Z" fill={base} />
    </svg>
  );
}

export function Logo({ tone = "light", size = 34, withWordmark = true, className }: Props) {
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <LogoMark tone={tone} size={size} />
      {withWordmark && (
        <span
          style={{
            fontFamily: "var(--font-brand)",
            fontWeight: 800,
            fontSize: size * 0.66,
            letterSpacing: "-0.02em",
            color: tone === "light" ? "var(--ink)" : "#fff",
            lineHeight: 1,
          }}
        >
          makeracle
        </span>
      )}
    </span>
  );
}
