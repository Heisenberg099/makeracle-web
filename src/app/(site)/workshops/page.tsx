import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { common, seo, workshops } from "@/content/en";

export const metadata: Metadata = {
  title: { absolute: seo.workshops.title },
  description: seo.workshops.description,
  alternates: { canonical: "/workshops" },
};

// Bar colours for the six parts of the 90 minutes (widths come from the timings).
const bar = [
  { bg: "#111", fg: "#fff" },
  { bg: "#fff", fg: "#111" },
  { bg: "var(--red)", fg: "#fff", main: true },
  { bg: "#111", fg: "#fff" },
  { bg: "#fff", fg: "#111" },
  { bg: "var(--grey)", fg: "#111" },
];

function minutes(when: string) {
  const [a, b] = when.replace(" min", "").split("–").map(Number);
  return b - a;
}

export default function WorkshopsPage() {
  const { hero, timeline, need, who, book, feedback } = workshops;
  return (
    <>
      <section className="wrap row-between" style={{ paddingTop: 70, paddingBottom: 80, alignItems: "flex-end", gap: 48 }}>
        <div style={{ flex: "1 1 700px", minWidth: 0 }}>
          <p className="lbl">{hero.eyebrow}</p>
          <h1 className="cap" style={{ fontSize: "clamp(56px, 8.4vw, 136px)", lineHeight: 0.88 }}>
            {hero.title}
          </h1>
          <p className="lead" style={{ maxWidth: 600, marginTop: 28 }}>
            {hero.sub}
          </p>
          <div style={{ marginTop: 28 }}>
            <Link href="#book" className="btn">
              {common.cta.book} →
            </Link>
          </div>
        </div>
        <dl className="stack" style={{ flex: "0 1 340px", gap: 14, margin: 0 }}>
          {[
            [who.title, who.body],
            [need.title, need.body],
          ].map(([k, v]) => (
            <div key={k} className="sm">
              <dt style={{ display: "inline", fontWeight: 700 }}>{k}</dt> — <dd style={{ display: "inline", margin: 0 }}>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap" style={{ paddingBottom: 90 }}>
        <p className="lbl">
          {timeline.title} · {timeline.items.length} parts
        </p>
        <div aria-hidden="true" style={{ display: "flex", flexWrap: "wrap", borderRadius: 6, overflow: "hidden" }}>
          {timeline.items.map((a, i) => {
            const min = minutes(a.when);
            return (
              <div
                key={a.when}
                style={{
                  flex: `${min} 1 ${min * 6}px`,
                  minHeight: 96,
                  background: bar[i].bg,
                  color: bar[i].fg,
                  padding: 12,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minWidth: 0,
                }}
              >
                <span className="sm" style={{ opacity: 0.75 }}>
                  {a.when}
                </span>
                <span className="ttl" style={{ fontSize: bar[i].main ? 26 : 20 }}>
                  {a.title.replace(/\.$/, "")}
                </span>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }} aria-hidden="true">
          <span className="sm muted">0 min</span>
          <span className="sm muted">90 min</span>
        </div>

        <ol className="grid g3" style={{ listStyle: "none", padding: 0, margin: "48px 0 0", gap: 28 }}>
          {timeline.items.map((a) => (
            <li key={a.when} className="rule-top" style={{ paddingTop: 18 }}>
              <p className="lbl">{a.when}</p>
              <h2 className="ttl" style={{ fontSize: 26 }}>
                {a.title}
              </h2>
              <p className="body" style={{ marginTop: 8 }}>
                {a.body}
              </p>
            </li>
          ))}
        </ol>

        {/* TODO(content): add real photos/clips from past workshops (with consent). */}
      </section>

      <section id="book" className="bg-ink" style={{ scrollMarginTop: 80 }}>
        <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
          <div style={{ flex: "0 1 380px" }}>
            <p className="lbl">{hero.eyebrow}</p>
            <h2 className="cap" style={{ fontSize: "clamp(48px, 5.6vw, 88px)", lineHeight: 0.9 }}>
              {book.title}
            </h2>
            <p className="body" style={{ marginTop: 22, color: "#d6d6d6" }}>
              {book.body}
            </p>
          </div>
          <div className="card" style={{ flex: "1 1 640px", minWidth: 0, color: "var(--ink)", padding: 40 }}>
            <LeadForm type="workshop" />
          </div>
        </div>
      </section>

      <section className="wrap sec-sm">
        <p className="sm">
          {feedback.prompt}{" "}
          <Link href="/workshops/feedback" className="ul">
            {feedback.link}
          </Link>
        </p>
      </section>
    </>
  );
}
