import { ImageResponse } from "next/og";

export const alt = "makeracle — From curiosity to creation.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview: logo + tagline, in the site's black/red theme. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#111111", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="120" height="100" viewBox="0 0 60 50">
            <circle cx="30" cy="13" r="9" fill="#fff" />
            <path d="M0 6 L30 20 L30 44 L0 30 Z" fill="#ff2d46" />
            <path d="M60 6 L30 20 L30 44 L60 30 Z" fill="#c8102e" />
            <path d="M0 30 L30 44 L60 30 L60 35 L30 49 L0 35 Z" fill="#fff" />
          </svg>
          <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -2 }}>makeracle</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, color: "#ff2d46", lineHeight: 1, textTransform: "uppercase" }}>From curiosity</div>
          <div style={{ fontSize: 96, fontWeight: 800, color: "#ff2d46", lineHeight: 1, textTransform: "uppercase" }}>to creation.</div>
          <div style={{ fontSize: 32, marginTop: 28, color: "#d6d6d6" }}>AI, web and app projects for CBSE schools · Classes 3–12</div>
        </div>
      </div>
    ),
    size,
  );
}
