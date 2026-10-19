import type { Figure as Fig, PageRef } from "@/content/class6";

const pages = (p: PageRef) => {
  const f = (v?: number | [number, number]) => (v === undefined ? "" : Array.isArray(v) ? `${v[0]}–${v[1]}` : String(v));
  return [p.sh !== undefined ? `Student Handbook p. ${f(p.sh)}` : "", p.th !== undefined ? `Teacher Handbook p. ${f(p.th)}` : ""].filter(Boolean).join(" · ");
};

/**
 * A handbook picture. Until it is extracted (see TODO-images.md) we show a
 * placeholder that describes the picture in words and says where to find it,
 * so the question still makes sense.
 */
export function Figure({ figure, compact }: { figure: Fig; compact?: boolean }) {
  if (figure.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={figure.src} alt={figure.alt} style={{ maxWidth: "100%", height: "auto", display: "block" }} />;
  }
  return (
    <figure className="fig-ph" style={compact ? { padding: "10px 12px" } : undefined}>
      <figcaption>
        <span className="lbl" style={{ display: "block", margin: "0 0 4px" }}>
          Picture · {pages(figure.page)}
        </span>
        <span className={compact ? "sm" : "body"}>{figure.alt}</span>
      </figcaption>
    </figure>
  );
}
