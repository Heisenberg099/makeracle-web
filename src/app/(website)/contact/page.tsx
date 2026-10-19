import type { Metadata } from "next";
import { LeadForm } from "@/components/website/forms/LeadForm";
import { site } from "@/content/website/site";

export const metadata: Metadata = {
  title: "Contact and partner with us",
  description: "Talk to Makeracle — schools, teachers, parents, Sahodaya clusters, lab vendors and CSR partners.",
};

export default function ContactPage() {
  return (
    <>
      <section className="wrap" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <p className="lbl">Contact</p>
        <h1 className="cap h-xl">
          Say hello.
          <br />
          <span className="ink">We reply in a day.</span>
        </h1>
      </section>

      <section className="wrap" style={{ paddingBottom: 100, display: "flex", flexWrap: "wrap", gap: 24 }}>
        <div className="card-ink stack" style={{ flex: "0 1 380px", gap: 22 }}>
          <div>
            <p className="lbl">Drop a line</p>
            <p className="lead">{site.email}</p>
          </div>
          <div>
            <p className="lbl">Phone · WhatsApp</p>
            <p className="lead">
              {site.phone}
              <br />
              <a href={site.whatsappLink}>{site.whatsapp}</a>
            </p>
          </div>
          <div>
            <p className="lbl">Office</p>
            <p className="body">
              {site.legalName}
              <br />
              {site.address}
            </p>
          </div>
          {/* TODO(content): embed a map (static image is lighter on 3G than an iframe). */}
          <div className="placeholder" style={{ minHeight: 140, borderColor: "#444", color: "#9a9a9a" }}>
            [Map]
          </div>
        </div>
        <div className="card" style={{ flex: "1 1 560px", minWidth: 0 }}>
          <LeadForm type="contact" />
        </div>
      </section>

      <section id="partner" className="bg-paper" style={{ scrollMarginTop: 80 }}>
        <div className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
          <div style={{ flex: "0 1 380px" }}>
            <p className="lbl">Partner with us</p>
            <h2 className="cap h-l">
              School chains,
              <br />
              Sahodaya clusters,
              <br />
              lab &amp; CSR partners.
            </h2>
            <p className="body" style={{ marginTop: 20 }}>
              Programme overview, impact data and partnership terms — on a call.
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
