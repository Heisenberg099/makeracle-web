import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About us",
  description: "Makeracle helps Indian schools turn curiosity into creation: project-first AI and coding, led by the school's own teachers.",
};

const approach = [
  ["Project-first", "Every module ends in something real a student can show — not a quiz score."],
  ["Teacher as facilitator", "The school's own computer teacher leads. We script, train and back them up."],
  ["Cohorts, not videos", "Students build in pairs and present to their class, not alone in front of a screen."],
  ["Durable skills over hype", "Decomposition, testing and honesty about what AI gets wrong outlast any tool."],
];

export default function AboutPage() {
  return (
    <>
      <section className="wrap" style={{ paddingTop: 80, paddingBottom: 90 }}>
        <p className="lbl">About Makeracle</p>
        <h1 className="cap h-xxl">
          Make, <span className="ink">not</span> miracle.
        </h1>
        <p className="lead" style={{ maxWidth: 640, marginTop: 40 }}>
          Our name is about making. We don&apos;t promise that a 12-year-old becomes an AI engineer. We promise that they&apos;ll build something
          real, understand how it works, and be able to explain it to their parents. <strong>From curiosity to creation.</strong>
        </p>
      </section>

      <section className="bg-paper">
        <div className="wrap sec">
          <p className="lbl">Our approach</p>
          <div className="grid g4 ruled" style={{ marginTop: 20 }}>
            {approach.map(([t, b], i) => (
              <div key={t}>
                <p className="cap" style={{ fontSize: 56 }}>
                  0{i + 1}
                </p>
                <h2 className="ttl" style={{ fontSize: 26, marginTop: 14 }}>
                  {t}
                </h2>
                <p className="sm" style={{ marginTop: 10 }}>
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <p className="lbl">Founders and team</p>
        {/* TODO(content): real photos, names, roles and advisors. */}
        <div className="grid g4" style={{ marginTop: 20 }}>
          {["Founder", "Co-founder", "Curriculum lead", "Advisor"].map((r, i) => (
            <div key={r} className={i % 2 ? "tilt-r" : "tilt-l"}>
              <div className="placeholder" style={{ aspectRatio: "4 / 5", background: "#fff" }}>
                [Photo]
              </div>
              <p className="ttl" style={{ fontSize: 22, marginTop: 14 }}>
                [Name]
              </p>
              <p className="sm muted">{r}</p>
            </div>
          ))}
        </div>
        <p className="sm" style={{ marginTop: 40 }}>
          {site.legalName} · {site.address}
        </p>
      </section>

      <section id="careers" className="bg-ink">
        <div className="wrap sec-sm row-between" style={{ alignItems: "flex-end" }}>
          <div>
            <p className="lbl">Careers</p>
            <h2 className="cap h-l">
              Trainers, mentors,
              <br />
              curriculum designers.
            </h2>
          </div>
          <Link href="/contact" className="btn">
            Write to us →
          </Link>
        </div>
      </section>
    </>
  );
}
