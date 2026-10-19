import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { LeadForm } from "@/components/website/forms/LeadForm";
import { seo, teachers } from "@/content/website/en";

export const metadata: Metadata = {
  title: { absolute: seo.teachers.title },
  description: seo.teachers.description,
  alternates: { canonical: "/teachers" },
};

export default function TeachersPage() {
  const { hero, blocks, join } = teachers;
  return (
    <>
      <section className="wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <p className="lbl">{hero.eyebrow}</p>
        <h1 className="cap" style={{ fontSize: "clamp(48px, 7vw, 116px)", lineHeight: 0.9 }}>
          {hero.title}
        </h1>
        <p className="lead" style={{ maxWidth: 560, marginTop: 32 }}>
          {hero.sub}
        </p>
      </section>
      <section className="bg-ink">
        <div className="wrap sec-sm">
          <div className="grid g4 ruled">
            {blocks.map((b) => (
              <div key={b.title}>
                <span className="icon-ink">
                  <Icon name={b.icon} size={40} strokeWidth={1.6} />
                </span>
                <h2 className="ttl" style={{ fontSize: 26, marginTop: 16 }}>
                  {b.title}
                </h2>
                <p className="sm" style={{ marginTop: 10, color: "#d6d6d6" }}>
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="join" className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
        <div style={{ flex: "0 1 380px" }}>
          <p className="lbl">Teacher hub · coming soon</p>
          <h2 className="cap h-l">{join.title}</h2>
          <p className="body" style={{ marginTop: 20 }}>
            {join.body}
          </p>
        </div>
        <div className="card" style={{ flex: "1 1 560px", minWidth: 0 }}>
          <LeadForm type="teacher-signup" />
        </div>
      </section>
    </>
  );
}
