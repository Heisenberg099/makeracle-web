import type { Metadata } from "next";
import Link from "next/link";
import { privacy, seo } from "@/content/en";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: seo.privacy.title },
  description: seo.privacy.description,
  alternates: { canonical: "/privacy" },
};

/* DRAFT — not legal advice. Have it reviewed by a lawyer for India's DPDP Act before launch. */
export default function PrivacyPage() {
  return (
    <section className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
      <div style={{ flex: "0 1 360px" }}>
        <p className="lbl">{privacy.eyebrow}</p>
        <h1 className="cap h-l">{privacy.title}</h1>
        <p className="sm muted" style={{ marginTop: 20 }}>
          {privacy.updated}
        </p>
        <p className="sm" style={{ marginTop: 12 }}>
          {privacy.draftNote}
        </p>
      </div>
      <div style={{ flex: "1 1 600px", minWidth: 0 }}>
        {privacy.sections.map((s) => (
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
        <div id="grievance" className="rule-top" style={{ padding: "24px 0", scrollMarginTop: 90 }}>
          <h2 className="ttl" style={{ fontSize: 28 }}>
            {privacy.grievance}
          </h2>
          <p className="body" style={{ marginTop: 10 }}>
            {site.grievanceOfficer} · {site.legalName}, {site.address}
          </p>
          <p className="body" style={{ marginTop: 10 }}>
            <Link href="/contact">Contact us</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
