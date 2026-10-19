import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { LeadForm } from "@/components/website/forms/LeadForm";
import { common, schools, seo } from "@/content/website/en";
import { site } from "@/content/website/site";

export const metadata: Metadata = {
  title: { absolute: seo.schools.title },
  description: seo.schools.description,
  alternates: { canonical: "/for-schools" },
};

// Visual summary of the infrastructure paragraph (words taken from it).
const infraTiles = [
  { title: "Old lab PCs", icon: "pc" },
  { title: "Shared Android phones", icon: "phone" },
  { title: "A single projector", icon: "proj" },
  { title: "Unplugged version", icon: "pencil" },
];

function InfraIcon({ name }: { name: string }) {
  const p = { width: 56, height: 56, viewBox: "0 0 56 56", fill: "none", stroke: "#111", strokeWidth: 2.5, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "pc")
    return (
      <svg {...p}>
        <rect x="6" y="8" width="44" height="30" rx="3" />
        <path d="M20 48 H36 M28 38 V48" />
      </svg>
    );
  if (name === "phone")
    return (
      <svg {...p}>
        <rect x="16" y="4" width="24" height="48" rx="4" />
        <path d="M24 44 H32" />
      </svg>
    );
  if (name === "proj")
    return (
      <svg {...p}>
        <rect x="4" y="18" width="40" height="20" rx="3" />
        <circle cx="34" cy="28" r="5" fill="var(--red)" />
        <path d="M44 24 L54 18 M44 32 L54 38" />
      </svg>
    );
  return (
    <svg {...p}>
      <path d="M10 46 L34 12 L44 20 L20 54 Z" />
      <path d="M10 46 L8 54 L20 54" />
      <path d="M30 18 L40 26" />
    </svg>
  );
}

const levelStyles: React.CSSProperties[] = [
  { background: "var(--red)", color: "#fff" },
  { background: "#111", color: "#fff" },
  { boxShadow: "inset 0 0 0 1.5px #111" },
];

export default function ForSchoolsPage() {
  const { hero, challenge, get, cbse, delivery, infra, training, pilot, pricing, faq, final } = schools;
  return (
    <>
      {/* 1 · Hero */}
      <section className="wrap" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <p className="lbl">{hero.eyebrow}</p>
        <h1 className="cap" style={{ fontSize: "clamp(44px, 6vw, 100px)", lineHeight: 0.92, maxWidth: 1240 }}>
          {hero.title}
        </h1>
        <div className="row-between" style={{ marginTop: 56, alignItems: "flex-end", gap: 40 }}>
          <p className="lead" style={{ maxWidth: 560 }}>
            {hero.sub}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/workshops#book" className="btn">
              {common.cta.book} →
            </Link>
            <Link href="#pilot" className="btn btn-ghost">
              {common.cta.pilot}
            </Link>
          </div>
        </div>
      </section>

      {/* 2 · The challenge */}
      <section className="bg-paper">
        <div className="wrap sec">
          <p className="lbl">The challenge you’re facing</p>
          <h2 className="cap" style={{ fontSize: "clamp(40px, 4.6vw, 72px)", marginBottom: 44 }}>
            {challenge.title}
          </h2>
          <div className="grid g3" style={{ gap: 28 }}>
            {challenge.cards.map((c) => (
              <div key={c.title} className="card-line">
                <span className="icon-ink">
                  <Icon name={c.icon} size={40} strokeWidth={1.6} />
                </span>
                <h3 className="ttl" style={{ fontSize: 26, marginTop: 14 }}>
                  {c.title}
                </h3>
                <p className="body" style={{ marginTop: 12 }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · What you get */}
      <section className="bg-ink">
        <div className="wrap sec">
          <div className="row-between" style={{ marginBottom: 56, gap: 40 }}>
            <div>
              <p className="lbl">What you get</p>
              <h2 className="cap h-l">{get.title}</h2>
            </div>
            <svg viewBox="0 0 260 180" width="260" role="img" aria-label="An open box with lesson scripts and a rubric rising out of it">
              <g stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="#111">
                <path d="M60 76 L106 40 L126 64 Z" fill="var(--red)" />
                <path d="M200 76 L160 36 L140 62 Z" fill="#fff" />
                <rect x="96" y="20" width="50" height="64" rx="4" transform="rotate(-10 121 52)" fill="#fff" />
                <path d="M106 38 H134 M106 48 H130 M106 58 H136" stroke="#111" transform="rotate(-10 121 52)" />
                <rect x="128" y="30" width="48" height="50" rx="4" transform="rotate(12 152 55)" fill="var(--red)" />
                <path d="M60 76 H200 V160 H60 Z" />
                <path d="M60 76 L130 100 L200 76 M130 100 V170 M60 160 L130 170 L200 160" fill="none" />
              </g>
            </svg>
          </div>
          <div className="grid g3" style={{ gap: "0 28px" }}>
            {get.items.map((x, i) => (
              <div key={x.title} style={{ borderTop: "1.5px solid #fff", padding: "26px 0 34px" }}>
                <p className="lbl">0{i + 1}</p>
                <h3 className="ttl" style={{ fontSize: 26 }}>
                  {x.title}
                </h3>
                <p className="sm" style={{ marginTop: 10, color: "#d6d6d6" }}>
                  {x.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · How we map to CBSE */}
      <section id="cbse" className="wrap sec" style={{ scrollMarginTop: 80 }}>
        <p className="lbl">How we map to CBSE</p>
        <h2 className="cap" style={{ fontSize: "clamp(40px, 4.6vw, 72px)", marginBottom: 40 }}>
          {cbse.title}
        </h2>
        <div className="table-box">
          <table className="tbl" style={{ minWidth: 760 }}>
            <caption className="sm muted" style={{ textAlign: "left", padding: "10px 14px" }}>
              {cbse.caption}
            </caption>
            <thead>
              <tr>
                {cbse.head.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cbse.rows.map(([cls, req, us]) => (
                <tr key={cls}>
                  <th scope="row" style={{ textAlign: "left", whiteSpace: "nowrap" }}>
                    <strong style={{ fontSize: 22 }}>{cls}</strong>
                  </th>
                  <td>{req}</td>
                  <td>{us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="sm muted" style={{ marginTop: 14, maxWidth: 760 }}>
          {cbse.smallPrint}
        </p>
      </section>

      {/* 5 · How delivery works + 6 · Infrastructure */}
      <section className="bg-paper">
        <div className="wrap sec">
          <p className="lbl">How delivery works</p>
          <h2 className="cap" style={{ fontSize: "clamp(40px, 4.6vw, 72px)", marginBottom: 44 }}>
            {delivery.title}
          </h2>
          <ol className="grid g3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {delivery.steps.map((step, i) => (
              <li key={step} className={i === delivery.steps.length - 1 ? "card-ink" : "card-line"}>
                <p className="cap" style={{ fontSize: 64 }}>
                  {i + 1}
                </p>
                <p className="ttl" style={{ fontSize: 24, marginTop: 12 }}>
                  {step}
                </p>
              </li>
            ))}
          </ol>

          <div className="row-between" style={{ marginTop: 110, alignItems: "flex-end", gap: 40 }}>
            <div>
              <p className="lbl">Works with your infrastructure</p>
              <h2 className="cap" style={{ fontSize: "clamp(40px, 4.6vw, 72px)" }}>
                {infra.title}
              </h2>
            </div>
            <p className="body" style={{ maxWidth: 400 }}>
              {infra.body}
            </p>
          </div>
          <div className="grid g4" style={{ marginTop: 36 }}>
            {infraTiles.map((x) => (
              <div key={x.title} style={{ background: "var(--ground)", borderRadius: 6, padding: 26 }}>
                <InfraIcon name={x.icon} />
                <h3 className="ttl" style={{ fontSize: 22, marginTop: 14 }}>
                  {x.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · Teacher training and certification */}
      <section className="wrap sec">
        <div className="card" style={{ padding: 40 }}>
          <p className="lbl">Teacher training &amp; certification</p>
          <h2 className="cap" style={{ fontSize: "clamp(36px, 3.6vw, 56px)" }}>
            {training.title}
          </h2>
          <div className="stack" style={{ marginTop: 32, gap: 12 }}>
            {training.levels.map((l, i) => (
              <div
                key={l.name}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "16px 18px", borderRadius: 6, ...levelStyles[i] }}
              >
                <strong className="ttl" style={{ fontSize: 22 }}>
                  {i > 0 && "→ "}
                  {l.name}
                </strong>
                <span className="sm">{l.body}</span>
              </div>
            ))}
          </div>
          <p className="sm" style={{ marginTop: 20 }}>
            {training.note}
          </p>
        </div>
      </section>

      {/* 8 · Start with a pilot + 9 · Pricing teaser */}
      <section id="pilot" className="bg-red" style={{ scrollMarginTop: 80 }}>
        <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 460px", minWidth: 0 }}>
            <p className="lbl">Start with a pilot</p>
            <h2 className="cap white" style={{ fontSize: "clamp(56px, 7.4vw, 120px)", lineHeight: 0.9 }}>
              {pilot.title}
            </h2>
            <p className="lead" style={{ marginTop: 28, maxWidth: 520 }}>
              {pilot.body}
            </p>
            <div style={{ marginTop: 40, borderTop: "1.5px solid #fff", paddingTop: 22, maxWidth: 520 }}>
              <p className="lbl">{pricing.eyebrow}</p>
              <p className="body">{pricing.body}</p>
              <div style={{ marginTop: 18 }}>
                <Link href="/contact" className="btn btn-white">
                  {pricing.button} →
                </Link>
              </div>
            </div>
          </div>
          <div className="card shadow" style={{ flex: "1 1 520px", minWidth: 0, color: "var(--ink)" }}>
            <LeadForm type="pilot" />
          </div>
        </div>
      </section>

      {/* 10 · FAQ */}
      <section className="wrap sec">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
          <div style={{ flex: "0 1 360px" }}>
            <p className="lbl">FAQ</p>
            <h2 className="cap" style={{ fontSize: "clamp(40px, 4.6vw, 72px)" }}>
              {faq.title}
            </h2>
          </div>
          <div className="faq" style={{ flex: "1 1 600px", minWidth: 0 }}>
            {faq.items.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary className="ttl" style={{ fontSize: 24 }}>
                  {f.q}
                </summary>
                <p className="body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11 · Final call to action */}
      <section className="bg-ink">
        <div className="wrap sec-sm row-between" style={{ alignItems: "flex-end", gap: 32 }}>
          <h2 className="cap" style={{ fontSize: "clamp(44px, 5.6vw, 92px)", lineHeight: 0.92, flex: "1 1 640px" }}>
            {final.title}
          </h2>
          <div className="stack" style={{ minWidth: 260, gap: 12 }}>
            <Link href="/workshops#book" className="btn">
              {common.cta.book} →
            </Link>
            {site.brochureUrl ? (
              <a href={site.brochureUrl} className="btn btn-ghost" download>
                {final.brochure}
              </a>
            ) : (
              // TODO(content): add the brochure PDF and set site.brochureUrl in src/content/site.ts.
              <Link href="/contact" className="btn btn-ghost">
                {final.brochurePending}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
