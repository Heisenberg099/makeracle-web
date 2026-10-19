import type { Metadata } from "next";
import { LeadForm } from "@/components/website/forms/LeadForm";
import { contact, seo } from "@/content/website/en";
import { site } from "@/content/website/site";

export const metadata: Metadata = {
  title: { absolute: seo.contact.title },
  description: seo.contact.description,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { hero, details, formTitle, partner } = contact;
  return (
    <>
      <section className="wrap" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <p className="lbl">{hero.eyebrow}</p>
        <h1 className="cap" style={{ fontSize: "clamp(48px, 7vw, 116px)", lineHeight: 0.9 }}>
          {hero.title}
        </h1>
        <p className="lead" style={{ maxWidth: 560, marginTop: 28 }}>
          {hero.sub}
        </p>
      </section>

      <section className="wrap" style={{ paddingBottom: 100, display: "flex", flexWrap: "wrap", gap: 24 }}>
        <div className="card-ink stack" style={{ flex: "0 1 380px", gap: 22 }}>
          <div>
            <p className="lbl">{details.phone}</p>
            <p className="lead">{site.phone}</p>
          </div>
          <div>
            <p className="lbl">{details.whatsapp}</p>
            <p className="lead">
              <a href={site.whatsappLink}>{site.whatsapp}</a>
            </p>
          </div>
          <div>
            <p className="lbl">{details.email}</p>
            <p className="lead">{site.email}</p>
          </div>
          <div>
            <p className="lbl">{details.address}</p>
            <p className="body">{site.address}</p>
          </div>
        </div>
        <div className="card" style={{ flex: "1 1 560px", minWidth: 0 }}>
          <p className="lbl">{formTitle}</p>
          <LeadForm type="contact" />
        </div>
      </section>

      <section id="partner" className="bg-paper" style={{ scrollMarginTop: 80 }}>
        <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
          <div style={{ flex: "0 1 380px" }}>
            <p className="lbl">{partner.eyebrow}</p>
            <h2 className="cap h-m">{partner.title}</h2>
            <p className="body" style={{ marginTop: 20 }}>
              {partner.body}
            </p>
          </div>
          <div style={{ flex: "1 1 560px", minWidth: 0 }}>
            <LeadForm type="partner" />
          </div>
        </div>
      </section>
    </>
  );
}
