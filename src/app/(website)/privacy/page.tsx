import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/website/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Makeracle collects, uses, stores and deletes data, in line with India's Digital Personal Data Protection (DPDP) Act.",
};

/*
 * DRAFT — this is a plain-language structure for the policy, not legal advice.
 * Have it reviewed by a lawyer before launch.
 */
const sections: { h: string; p: string[] }[] = [
  {
    h: "What we collect",
    p: [
      "Schools: contact name, role, school, city, phone and email — so we can call you back.",
      "Teachers: name, school, phone, email, classes taught and training progress.",
      "Students: first name, last initial, class, section and roll number — created by the teacher. No email or phone for students under 13. Projects and reflections they make.",
      "Parents: name, relationship, phone, email and consent records.",
    ],
  },
  { h: "Why we collect it", p: ["To run the programme your school signed up for, report progress to the school and parents, issue certificates, and improve our lessons. We never sell data and never use student data for advertising."] },
  {
    h: "Parental consent",
    p: [
      "For anyone under 18 we ask for verifiable parental consent (a one-time password to the parent's phone) before a portfolio can be public or AI tools can be used. Parents can change or withdraw consent at any time.",
    ],
  },
  { h: "Where it's stored", p: ["Data is stored on servers in India and encrypted in transit and at rest. Access is role-based and logged."] },
  { h: "How long we keep it", p: ["[Retention periods — to be confirmed with counsel.] When a school leaves, student data is deleted or handed back on request."] },
  { h: "Your rights", p: ["You can ask to see, correct or delete your data, or your child's. Write to our grievance officer and we will respond within the time the law requires."] },
];

export default function PrivacyPage() {
  return (
    <section className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
      <div style={{ flex: "0 1 360px" }}>
        <p className="lbl">Privacy policy · DPDP-aligned · draft</p>
        <h1 className="cap h-l">
          Your data,
          <br />
          plainly.
        </h1>
        <p className="sm muted" style={{ marginTop: 20 }}>
          Last updated: [date]
        </p>
      </div>
      <div style={{ flex: "1 1 600px", minWidth: 0 }}>
        {sections.map((s) => (
          <div key={s.h} className="rule-top" style={{ padding: "24px 0" }}>
            <h2 className="ttl" style={{ fontSize: 28 }}>
              {s.h}
            </h2>
            {s.p.map((p) => (
              <p key={p} className="body" style={{ marginTop: 10, maxWidth: 680 }}>
                {p}
              </p>
            ))}
          </div>
        ))}
        <div className="rule-top" style={{ padding: "24px 0" }}>
          <h2 className="ttl" style={{ fontSize: 28 }}>
            Grievance officer
          </h2>
          <p className="body" style={{ marginTop: 10 }}>
            {site.grievanceOfficer} · {site.legalName}, {site.address}
          </p>
          <p className="body" style={{ marginTop: 10 }}>
            Parents can ask about consent or data at any time through their child&apos;s school or by writing to us via the{" "}
            <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
