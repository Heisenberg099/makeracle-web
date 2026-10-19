import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { safety, seo } from "@/content/en";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: seo.safety.title },
  description: seo.safety.description,
  alternates: { canonical: "/safety" },
};

export default function SafetyPage() {
  const { hero, sections, report, privacyLink } = safety;
  return (
    <>
      <section className="wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <p className="lbl">{hero.eyebrow}</p>
        <h1 className="cap" style={{ fontSize: "clamp(48px, 7vw, 116px)", lineHeight: 0.9 }}>
          {hero.title}
        </h1>
      </section>
      <section className="bg-paper">
        <div className="wrap sec">
          <div className="grid g3" style={{ gap: 28 }}>
            {sections.map((r) => (
              <div key={r.title} className="card-line">
                <span className="icon-ink">
                  <Icon name={r.icon} size={40} strokeWidth={1.6} />
                </span>
                <h2 className="ttl" style={{ fontSize: 26, marginTop: 14 }}>
                  {r.title}
                </h2>
                <p className="body" style={{ marginTop: 12 }}>
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="report" className="bg-red">
        <div className="wrap sec-sm row-between" style={{ alignItems: "center" }}>
          <div>
            <h2 className="cap white" style={{ fontSize: "clamp(40px, 5.2vw, 84px)", lineHeight: 0.98 }}>
              {report.title}
            </h2>
            <p className="lead" style={{ marginTop: 14 }}>
              {report.body(site.safetyEmail, site.safetyResponse)}
            </p>
          </div>
          {/* TODO(launch): have the full policy reviewed by a lawyer for India's DPDP Act. */}
          <Link href="/privacy" className="btn btn-white">
            {privacyLink} →
          </Link>
        </div>
      </section>
    </>
  );
}
