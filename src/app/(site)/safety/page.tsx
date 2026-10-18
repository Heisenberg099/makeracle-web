import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Child safety & AI use",
  description: "How Makeracle keeps students safe: teacher-controlled accounts, no-login tools for under-13s, no personal data uploads and content moderation.",
};

const rules = [
  {
    t: "Teacher-controlled accounts",
    b: "Teachers create student accounts. Students under 13 log in with a class code and a PIN — never an email or phone number.",
  },
  { t: "No-login tools for under-13s", b: "Wherever possible, young students use tools that need no account at all." },
  { t: "No personal data uploads", b: "Projects never ask for photos, names of family members, addresses or phone numbers. Public portfolios show first name and initial only." },
  {
    t: "A safe AI sandbox",
    b: "All AI calls go through a school-level key with rate limits and content filters. Teachers can switch AI tools off for any class. Parents can withhold consent for AI use.",
  },
  { t: "Verify, cite, reflect", b: "Students learn that AI can be confidently wrong. Every AI project checks answers against a source and ends with a reflection." },
  { t: "Moderation and approval", b: "Nothing goes public until a teacher approves it. Parents choose whether a portfolio is public or private." },
];

export default function SafetyPage() {
  return (
    <>
      <section className="wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <p className="lbl">Child safety &amp; AI use</p>
        <h1 className="cap h-xl">
          Trust is
          <br />
          the product.
        </h1>
      </section>
      <section className="bg-paper">
        <div className="wrap sec">
          <div className="grid g3" style={{ gap: 28 }}>
            {rules.map((r) => (
              <div key={r.t} className="card-line">
                <h2 className="ttl" style={{ fontSize: 26 }}>
                  {r.t}
                </h2>
                <p className="body" style={{ marginTop: 12 }}>
                  {r.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="promise" className="bg-red">
        <div className="wrap sec">
          <p className="lbl">Our advertising promise</p>
          <p className="cap white" style={{ fontSize: "clamp(40px, 5.2vw, 84px)", lineHeight: 0.98 }}>
            No salary or job claims.
            <br />
            No guaranteed outcomes.
            <br />
            No “AI engineer at 12”.
          </p>
          <p className="body" style={{ marginTop: 28, maxWidth: 560 }}>
            If you ever see Makeracle marketing that breaks this promise, tell us and we will take it down.
          </p>
        </div>
      </section>
      <section className="wrap sec-sm row-between" style={{ alignItems: "center" }}>
        <div>
          <p className="lbl">Report a concern</p>
          <p className="lead">
            Email {site.email} or WhatsApp {site.whatsapp}. We respond to safety reports within 24 hours.
          </p>
        </div>
        <Link href="/privacy" className="btn btn-ghost">
          Read our privacy policy
        </Link>
      </section>
    </>
  );
}
