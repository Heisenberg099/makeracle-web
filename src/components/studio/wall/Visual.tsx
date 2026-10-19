import type { WallPost } from "@/lib/types";

const TONE: Record<WallPost["visual"]["tone"], { bg: string; fg: string; border?: string }> = {
  ink: { bg: "var(--ink)", fg: "#fff" },
  red: { bg: "var(--red-deep)", fg: "#fff" },
  yellow: { bg: "var(--yellow)", fg: "var(--ink)" },
  white: { bg: "var(--paper)", fg: "var(--ink)", border: "1.5px solid var(--grey)" },
  green: { bg: "var(--green)", fg: "#fff" },
  grey: { bg: "var(--grey)", fg: "var(--ink)" },
  pink: { bg: "var(--pink)", fg: "var(--ink)" },
};

/** The big picture tile on a wall post or portfolio card. */
export function Visual({ v, height = 88 }: { v: WallPost["visual"]; height?: number }) {
  const t = TONE[v.tone];
  return (
    <div aria-hidden="true" className="s-title" style={{ height, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, background: t.bg, color: t.fg, border: t.border, letterSpacing: "0.02em" }}>
      {v.text}
    </div>
  );
}
