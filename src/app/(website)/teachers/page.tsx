import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/website/forms/LeadForm";

export const metadata: Metadata = {
  title: "For teachers",
  description: "Lesson scripts, rubrics, projector mode and certification for computer teachers delivering CBSE CT & AI. Join the Teacher hub waitlist.",
};

const perks = [
  ["Minute-by-minute scripts", "What to say, what to do, and how long — for every session."],
  ["Projector mode", "Runs one lesson step at a time on a single screen, even offline."],
  ["Rubrics and marking", "One 4-level rubric, bulk marking, export for school records."],
  ["Certification", "Facilitator → Builder → Mentor, with a certificate at each level."],
];

export default function TeachersPage() {
  return (
    <>
      <section className="wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <p className="lbl">For computer teachers</p>
        <h1 className="cap h-xl">
          You lead.
          <br />
          <span className="ink">We script every minute.</span>
        </h1>
        <p className="lead" style={{ maxWidth: 560, marginTop: 32 }}>
          You don&apos;t need to be an AI expert to teach CT &amp; AI. The Teacher hub opens with our first pilot schools — join the waitlist and
          we&apos;ll invite you.
        </p>
      </section>
      <section className="bg-ink">
        <div className="wrap sec-sm">
          <div className="grid g4 ruled">
            {perks.map(([t, b]) => (
              <div key={t}>
                <h2 className="ttl" style={{ fontSize: 26 }}>
                  {t}
                </h2>
                <p className="sm" style={{ marginTop: 10, color: "#d6d6d6" }}>
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
        <div style={{ flex: "0 1 380px" }}>
          <p className="lbl">Teacher hub · coming soon</p>
          <h2 className="cap h-l">
            Join the
            <br />
            waitlist.
          </h2>
          <p className="body" style={{ marginTop: 20 }}>
            Want it at your school sooner?{" "}
            <Link href="/workshops#book" className="ul">
              Ask your principal to book a free workshop
            </Link>
            .
          </p>
        </div>
        <div className="card" style={{ flex: "1 1 560px", minWidth: 0 }}>
          <LeadForm type="teacher-signup" />
        </div>
      </section>
    </>
  );
}
