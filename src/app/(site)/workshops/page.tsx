import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata: Metadata = {
  title: "Free 90-minute workshop — Build your own AI study buddy",
  description: "Book a free 90-minute workshop for Classes 7–9. Every student builds a working AI study buddy and takes home a link and a certificate.",
};

// Proportions of the 90 minutes. TODO(curriculum): confirm exact timings.
const agenda = [
  { n: "01", name: "Hook", min: 10, bg: "#111", fg: "#fff" },
  { n: "02", name: "Unplugged", min: 15, bg: "#fff", fg: "#111" },
  { n: "03", name: "Build in pairs", min: 35, bg: "var(--red)", fg: "#fff", main: true },
  { n: "04", name: "“Break it”", min: 10, bg: "#111", fg: "#fff" },
  { n: "05", name: "Demos", min: 15, bg: "#fff", fg: "#111" },
  { n: "06", name: "Close", min: 5, bg: "var(--grey)", fg: "#111" },
];

const after = [
  "You fill in the form",
  "Email + WhatsApp confirmation",
  "We call within 1 working day",
  "Calendar invite to principal + teacher",
  "Setup checklist the day before",
  "Certificates, links and feedback",
  "We propose a term pilot",
];

export default function WorkshopsPage() {
  return (
    <>
      <section className="wrap row-between" style={{ paddingTop: 70, paddingBottom: 80, alignItems: "flex-end", gap: 48 }}>
        <div style={{ flex: "1 1 700px", minWidth: 0 }}>
          <p className="lbl">The 90-minute workshop · free for your first session</p>
          <h1 className="cap" style={{ fontSize: "clamp(56px, 8.4vw, 136px)", lineHeight: 0.88 }}>
            Build your own
            <br />
            AI study buddy.
            <br />
            <span className="ink">In 90 minutes.</span>
          </h1>
        </div>
        <dl className="stack" style={{ flex: "0 1 340px", gap: 14, margin: 0 }}>
          {[
            ["Who", "Classes 7–9, 40–60 students per session"],
            ["You provide", "A hall or lab, a projector, phones or PCs (we bring backups)"],
            ["Every student takes home", "A working bot, a shareable link, a certificate with QR"],
            ["Price", "Free for the first session; after that ₹150–300 per student or ₹10,000–25,000 per school-day"],
          ].map(([k, v]) => (
            <div key={k} className="sm">
              <dt style={{ display: "inline", fontWeight: 700 }}>{k}</dt> — <dd style={{ display: "inline", margin: 0 }}>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap" style={{ paddingBottom: 90 }}>
        <p className="lbl">What happens · 6 parts</p>
        <ol className="agenda" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", borderRadius: 6, overflow: "hidden" }}>
          {agenda.map((a) => (
            <li
              key={a.n}
              style={{
                flex: `${a.min} 1 ${a.min * 6}px`,
                minHeight: 96,
                background: a.bg,
                color: a.fg,
                padding: 12,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minWidth: 0,
              }}
            >
              <span className="sm" style={{ opacity: 0.75 }}>
                {a.n} · ~{a.min} min
              </span>
              <span className="ttl" style={{ fontSize: a.main ? 26 : 20 }}>
                {a.name}
              </span>
            </li>
          ))}
        </ol>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          <span className="sm muted">0 min</span>
          <span className="sm muted">90 min</span>
        </div>

        {/* TODO(content): replace with real photos/clips from past workshops (with consent). */}
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: 48 }}>
          {["[Workshop photo]", "[Students demoing]", "[Short clip]", "[Certificate QR]"].map((p, i) => (
            <div key={p} className={`placeholder ${i % 2 ? "tilt-r" : "tilt-l"}`} style={{ aspectRatio: "4 / 3", background: "#fff" }}>
              {p}
            </div>
          ))}
        </div>
      </section>

      <section id="book" className="bg-ink" style={{ scrollMarginTop: 80 }}>
        <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
          <div style={{ flex: "0 1 380px" }}>
            <p className="lbl">Book a free workshop</p>
            <h2 className="cap" style={{ fontSize: "clamp(48px, 5.6vw, 88px)", lineHeight: 0.9 }}>
              Two minutes.
              <br />
              We call within
              <br />
              one working day.
            </h2>
            <p className="body" style={{ marginTop: 22, color: "#d6d6d6" }}>
              Only what we need to call you back. Everything else, we&apos;ll sort out on the call.
            </p>
          </div>
          <div className="card" style={{ flex: "1 1 640px", minWidth: 0, color: "var(--ink)", padding: 40 }}>
            <LeadForm type="workshop" />
          </div>
        </div>
      </section>

      <section className="wrap sec-sm">
        <p className="lbl">After you book</p>
        <ol className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
          {after.map((a, i) => (
            <li key={a}>
              <p className={`cap${i === after.length - 1 ? " ink" : ""}`} style={{ fontSize: 48 }}>
                {i + 1}
              </p>
              <p className="sm" style={{ marginTop: 8 }}>
                {a}
              </p>
            </li>
          ))}
        </ol>
        <p className="sm" style={{ marginTop: 40 }}>
          Already had a workshop?{" "}
          <Link href="/workshops/feedback" className="ul">
            Tell us how it went
          </Link>
        </p>
      </section>
    </>
  );
}
