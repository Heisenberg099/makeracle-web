import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { schoolFaqs } from "@/content/home";

export const metadata: Metadata = {
  title: "For Schools — meet the CBSE CT & AI requirement",
  description:
    "A curriculum-in-a-box that lets your existing computer teacher deliver all compulsory CBSE Computational Thinking & AI hours, with real student projects.",
};

const kit = [
  ["Teacher kits", "Minute-by-minute lesson scripts, slides and demo videos for every session."],
  ["Project modules", "Real builds — games, websites, apps, AI — each with its own rubric."],
  ["Build space", "An offline-capable Studio that runs on old PCs and shared phones."],
  ["Portfolios", "A teacher-approved portfolio page for every single student."],
  ["Showcase days", "Termly demo days where parents see what students built."],
];

const infra = [
  { title: "20–30 old PCs", body: "Browser-based and light.", icon: "pc" },
  { title: "Shared Android phones", body: "Runs on phones under 2 GB RAM.", icon: "phone" },
  { title: "One projector", body: "Projector mode for one-screen rooms.", icon: "proj" },
  { title: "No device at all", body: "Unplugged paper versions.", icon: "pencil" },
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

export default function ForSchoolsPage() {
  return (
    <>
      {/* 1 · The problem */}
      <section className="wrap" style={{ paddingTop: 80, paddingBottom: 100 }}>
        <p className="lbl">For principals and school owners</p>
        <h1 className="cap h-xxl">
          100 compulsory hours.
          <br />
          <span className="ink">Zero new teachers.</span>
          <br />
          No project material.
        </h1>
        <div className="row-between" style={{ marginTop: 56, alignItems: "flex-end", gap: 40 }}>
          <p className="lead" style={{ maxWidth: 520 }}>
            Since 1 April 2026, CBSE requires Computational Thinking &amp; AI for Classes 3–8. Makeracle is a curriculum-in-a-box that lets{" "}
            <strong>your existing computer teacher</strong> deliver every hour — with projects students actually finish.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/workshops#book" className="btn">
              Book a free workshop →
            </Link>
            <Link href="#pilot" className="btn btn-ghost">
              Request a pilot proposal
            </Link>
          </div>
        </div>
      </section>

      {/* 2 · What you get */}
      <section className="bg-ink">
        <div className="wrap sec">
          <div className="row-between" style={{ marginBottom: 56, gap: 40 }}>
            <div>
              <p className="lbl">What you get</p>
              <h2 className="cap h-l">
                Curriculum
                <br />
                in a box.
              </h2>
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
          <div className="grid g5 ruled">
            {kit.map(([t, b], i) => (
              <div key={t}>
                <p className="lbl">0{i + 1}</p>
                <h3 className="ttl" style={{ fontSize: 26 }}>
                  {t}
                </h3>
                <p className="sm" style={{ marginTop: 10, color: "#d6d6d6" }}>
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · CBSE alignment */}
      <section id="cbse" className="wrap sec">
        <div className="row-between" style={{ marginBottom: 40 }}>
          <div>
            <p className="lbl">CBSE alignment map</p>
            <h2 className="cap" style={{ fontSize: "clamp(40px, 4.6vw, 72px)" }}>
              Every module,
              <br />
              mapped to the hours.
            </h2>
          </div>
          <p className="body" style={{ maxWidth: 340, alignSelf: "flex-end" }}>
            Hours are tracked against the requirement, class by class, in your school dashboard.
          </p>
        </div>
        <div className="table-box">
          <table className="tbl" style={{ minWidth: 860 }}>
            <caption className="sm muted" style={{ textAlign: "left", padding: "10px 14px" }}>
              CBSE Computational Thinking &amp; AI requirement by class band, and the Makeracle modules that cover it
            </caption>
            <thead>
              <tr>
                <th scope="col">Class band</th>
                <th scope="col">CBSE requirement</th>
                <th scope="col">Computational thinking</th>
                <th scope="col">AI</th>
                <th scope="col">Projects</th>
                <th scope="col">Makeracle modules</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{ textAlign: "left" }}>Classes 3–5</th>
                <td>50 hrs, inside Maths and The World Around Us</td>
                <td colSpan={3}>50 hrs integrated · unplugged first</td>
                <td>Play &amp; Patterns · ScratchJr → Scratch</td>
              </tr>
              <tr>
                <th scope="row" style={{ textAlign: "left" }}>Classes 6–8</th>
                <td>100 hrs, compulsory</td>
                <td><strong style={{ fontSize: 22 }}>40</strong> hrs</td>
                <td><strong style={{ fontSize: 22 }}>20</strong> hrs</td>
                <td><strong style={{ fontSize: 22, color: "var(--red-text)" }}>40</strong> hrs</td>
                <td>First Real Builds · Mera Portfolio, Mohalla Helper, Fair or Not?</td>
              </tr>
              <tr>
                <th scope="row" style={{ textAlign: "left" }}>Classes 9–10</th>
                <td>AI 417 · CT &amp; AI from 2027–28</td>
                <td colSpan={3}>Subject support + INAIO Stage 1 prep</td>
                <td>Building with AI · Padhai Buddy, Data Detective</td>
              </tr>
              <tr>
                <th scope="row" style={{ textAlign: "left" }}>Classes 11–12</th>
                <td>AI 843 · CS 083</td>
                <td colSpan={3}>Capstone with real users · INAIO / IOAI track</td>
                <td>Shipping Real Products</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4 · Delivery + 5 · Infrastructure */}
      <section className="bg-paper">
        <div className="wrap sec">
          <p className="lbl">How delivery works</p>
          <h2 className="cap" style={{ fontSize: "clamp(40px, 4.6vw, 72px)", marginBottom: 44 }}>
            Your teacher leads.
            <br />
            Students build in pairs.
            <br />
            Our mentors back them up.
          </h2>
          <div className="grid g3">
            <div className="card-line">
              <p className="cap" style={{ fontSize: 64 }}>A</p>
              <h3 className="ttl" style={{ fontSize: 24, marginTop: 12 }}>Computer teacher</h3>
              <p className="sm" style={{ marginTop: 8 }}>Runs each class in projector mode, following the script step by step.</p>
            </div>
            <div className="card-line">
              <p className="cap" style={{ fontSize: 64 }}>B</p>
              <h3 className="ttl" style={{ fontSize: 24, marginTop: 12 }}>Students in pairs</h3>
              <p className="sm" style={{ marginTop: 8 }}>One device per pair; one drives, one navigates, they swap every 10 minutes.</p>
            </div>
            <div className="card-ink">
              <p className="cap" style={{ fontSize: 64 }}>C</p>
              <h3 className="ttl" style={{ fontSize: 24, marginTop: 12 }}>Remote mentors</h3>
              <p className="sm" style={{ marginTop: 8, color: "#d6d6d6" }}>Review submitted work and run weekly office hours for teachers.</p>
            </div>
          </div>

          <div className="row-between" style={{ marginTop: 110, alignItems: "flex-end", gap: 40 }}>
            <div>
              <p className="lbl">Infrastructure fit</p>
              <h2 className="cap" style={{ fontSize: "clamp(40px, 4.6vw, 72px)" }}>
                Works with what
                <br />
                you already have.
              </h2>
            </div>
            <p className="body" style={{ maxWidth: 340 }}>
              Every Class 3–8 lesson has an unplugged version — patchy power or internet never cancels a class.
            </p>
          </div>
          <div className="grid g4" style={{ marginTop: 36 }}>
            {infra.map((x) => (
              <div key={x.title} style={{ background: "var(--ground)", borderRadius: 6, padding: 26 }}>
                <InfraIcon name={x.icon} />
                <h3 className="ttl" style={{ fontSize: 22, marginTop: 14 }}>{x.title}</h3>
                <p className="sm" style={{ marginTop: 6 }}>{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · Training + 7 · Assessment */}
      <section className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        <div className="card" style={{ flex: "1 1 480px", minWidth: 0, padding: 40 }}>
          <p className="lbl">Teacher training &amp; certification</p>
          <h2 className="cap" style={{ fontSize: "clamp(36px, 3.6vw, 56px)" }}>
            Three levels.
            <br />A certificate at each.
          </h2>
          <div className="stack" style={{ marginTop: 32, gap: 12 }}>
            {[
              ["Facilitator", "Run scripted sessions · [X hrs]", { background: "var(--red)", color: "#fff" }],
              ["Builder", "Adapt and extend projects · [X hrs]", { background: "#111", color: "#fff" }],
              ["Mentor", "Train other teachers · [X hrs]", { boxShadow: "inset 0 0 0 1.5px #111" }],
            ].map(([name, desc, style]) => (
              <div key={name as string} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "16px 18px", borderRadius: 6, ...(style as React.CSSProperties) }}>
                <strong className="ttl" style={{ fontSize: 22 }}>{name as string}</strong>
                <span className="sm">{desc as string}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{ flex: "1 1 480px", minWidth: 0, padding: 40 }}>
          <p className="lbl">Assessment &amp; reports</p>
          <h2 className="cap" style={{ fontSize: "clamp(36px, 3.6vw, 56px)" }}>
            One 4-level rubric.
            <br />
            Export-ready marks.
          </h2>
          <div className="grid g4" style={{ marginTop: 32, gap: 8, gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
            {[
              ["Works", "It runs", { background: "var(--red)" }],
              ["Readable", "Others can follow it", { background: "#111" }],
              ["Original", "Their own idea", { background: "#9a9a9a" }],
              ["Reflected", "They explain it", { boxShadow: "inset 0 0 0 1.5px #111" }],
            ].map(([n, d, st]) => (
              <div key={n as string}>
                <div style={{ height: 120, borderRadius: 4, ...(st as React.CSSProperties) }} />
                <p className="ttl" style={{ fontSize: 18, marginTop: 10 }}>{n as string}</p>
                <p className="sm muted">{d as string}</p>
              </div>
            ))}
          </div>
          <p className="sm" style={{ marginTop: 20 }}>Class reports + marks exported to CSV / PDF for your records.</p>
        </div>
      </section>

      {/* 8 · Pilot offer */}
      <section id="pilot" className="bg-red">
        <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 460px", minWidth: 0 }}>
            <p className="lbl">Pilot offer</p>
            <h2 className="cap white" style={{ fontSize: "clamp(56px, 7.4vw, 120px)", lineHeight: 0.9 }}>
              12 sessions.
              <br />
              One term.
              <br />
              Clear success
              <br />
              criteria.
            </h2>
            <ul style={{ margin: "32px 0 0", padding: "0 0 0 18px", fontSize: 15, lineHeight: 1.9 }}>
              <li>Teacher script, slides, rubrics</li>
              <li>Weekly mentor reviews + office hours</li>
              <li>A portfolio page per student</li>
              <li>Showcase day for parents at term end</li>
              <li>Success criteria agreed before we start</li>
            </ul>
            <p className="sm" style={{ marginTop: 18, color: "#ffe3e6" }}>
              Indicative: ₹500–800 per student, or a flat school fee. Exact quote after a call.
            </p>
          </div>
          <div className="card shadow" style={{ flex: "1 1 520px", minWidth: 0, color: "var(--ink)" }}>
            <LeadForm type="pilot" />
          </div>
        </div>
      </section>

      {/* 9 · Case studies + 10 · FAQ */}
      <section className="wrap sec">
        <p className="lbl">Case studies</p>
        <div className="placeholder row-between" style={{ padding: 40, justifyContent: "space-between" }}>
          <p className="cap ink" style={{ fontSize: 36 }}>One card per pilot school — after term 1.</p>
          <p className="sm" style={{ maxWidth: 320 }}>
            [School name, city, classes, hours delivered, portfolios published — shared with the school&apos;s permission.]
          </p>
        </div>

        <div style={{ marginTop: 110, display: "flex", flexWrap: "wrap", gap: 48 }}>
          <div style={{ flex: "0 1 360px" }}>
            <p className="lbl">FAQ</p>
            <h2 className="cap" style={{ fontSize: "clamp(40px, 4.6vw, 72px)" }}>
              Questions
              <br />
              principals ask.
            </h2>
          </div>
          <div className="faq" style={{ flex: "1 1 600px", minWidth: 0 }}>
            {schoolFaqs.map((f, i) => (
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

      {/* 11 · CTA */}
      <section className="bg-ink">
        <div className="wrap sec-sm row-between" style={{ alignItems: "flex-end", gap: 32 }}>
          <h2 className="cap" style={{ fontSize: "clamp(48px, 6.4vw, 104px)", lineHeight: 0.92 }}>
            Start with
            <br />
            one free workshop.
          </h2>
          <div className="stack" style={{ minWidth: 260, gap: 12 }}>
            <Link href="/workshops#book" className="btn">Book a free workshop →</Link>
            <Link href="#pilot" className="btn btn-ghost">Request a pilot proposal</Link>
            {/* TODO(content): when the brochure exists, put it at /public/makeracle-brochure.pdf and link it here. */}
            <Link href="/contact" className="sm" style={{ textAlign: "center", padding: "12px 0", color: "#fff" }}>
              Ask for the brochure (PDF) →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
