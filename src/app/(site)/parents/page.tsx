import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { parents, seo } from "@/content/en";

export const metadata: Metadata = {
  title: { absolute: seo.parents.title },
  description: seo.parents.description,
  alternates: { canonical: "/parents" },
};

export default function ParentsPage() {
  const { hero, blocks, bootcamps, askSchool, waitlist } = parents;
  const { ages, portfolio, showcase, safety } = blocks;
  return (
    <>
      <section className="wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <p className="lbl">{hero.eyebrow}</p>
        <h1 className="cap" style={{ fontSize: "clamp(48px, 7vw, 116px)", lineHeight: 0.9 }}>
          {hero.title}
        </h1>
        <p className="lead" style={{ maxWidth: 560, marginTop: 32 }}>
          {hero.sub}
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
          <Link href="/for-schools" className="btn">
            {askSchool} →
          </Link>
          <Link href="#bootcamps" className="btn btn-ghost">
            {waitlist}
          </Link>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {/* A sample portfolio */}
          <div id="sample-portfolio" className="card-line stack" style={{ flex: "1 1 480px", minWidth: 0, gap: 22, scrollMarginTop: 90 }}>
            <h2 className="cap h-m">{portfolio.title}</h2>
            <p className="body">{portfolio.body}</p>
            <div className="tilt-l" style={{ border: "1.5px solid #111", borderRadius: 6, padding: 16, background: "var(--ground)", maxWidth: 360 }}>
              <p className="lbl" style={{ margin: "0 0 8px" }}>
                {portfolio.sampleUrl}
              </p>
              <div
                className="ttl"
                style={{ height: 96, borderRadius: 4, background: "#111", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}
              >
                {portfolio.sampleProjects[0]}
              </div>
              <p className="sm" style={{ marginTop: 10, fontWeight: 600 }}>
                {portfolio.sampleName}
              </p>
              <p className="sm" style={{ marginTop: 4 }}>
                {portfolio.sampleProjects.map((p) => (
                  <span key={p} className="chip">
                    {p}
                  </span>
                ))}
              </p>
              <p className="sm muted">
                <span className="chip chip-red">{portfolio.sampleTag}</span> {portfolio.sampleNote}
              </p>
            </div>
          </div>

          <div className="stack" style={{ flex: "1 1 420px", minWidth: 0, gap: 24 }}>
            <div className="card-ink stack" style={{ gap: 14 }}>
              <h2 className="ttl" style={{ fontSize: 30 }}>
                {ages.title}
              </h2>
              <p className="body" style={{ color: "#e6e6e6" }}>
                {ages.body}
              </p>
              <p className="sm">
                <Link href="/programmes" className="ul" style={{ color: "#fff", fontWeight: 600 }}>
                  {ages.link} →
                </Link>
              </p>
            </div>
            <div className="card-line stack" style={{ gap: 14 }}>
              <h2 className="ttl" style={{ fontSize: 30 }}>
                {showcase.title}
              </h2>
              <p className="body">{showcase.body}</p>
            </div>
            <div className="card-line stack" style={{ gap: 14 }}>
              <h2 className="ttl" style={{ fontSize: 30 }}>
                {safety.title}
              </h2>
              <p className="body">{safety.body}</p>
              <p className="sm">
                <Link href="/safety" className="ul" style={{ fontWeight: 600 }}>
                  {safety.link} →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="bootcamps" className="bg-red" style={{ scrollMarginTop: 80 }}>
        <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 420px", minWidth: 0 }}>
            <p className="lbl">{waitlist}</p>
            <h2 className="cap white" style={{ fontSize: "clamp(44px, 5.6vw, 92px)", lineHeight: 0.92 }}>
              {bootcamps.title}
            </h2>
            <p className="lead" style={{ marginTop: 24, maxWidth: 480 }}>
              {bootcamps.body}
            </p>
          </div>
          <div className="card shadow" style={{ flex: "1 1 520px", minWidth: 0, color: "var(--ink)" }}>
            <LeadForm type="bootcamp" />
          </div>
        </div>
      </section>
    </>
  );
}
