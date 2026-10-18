import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata: Metadata = { title: "Workshop feedback", robots: { index: false } };

export default function FeedbackPage() {
  return (
    <section className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
      <div style={{ flex: "0 1 380px" }}>
        <p className="lbl">For principals, after a workshop</p>
        <h1 className="cap h-l">
          How did
          <br />
          it go?
        </h1>
        <p className="body" style={{ marginTop: 20 }}>
          Two minutes. Honest answers help us make the next one better.
        </p>
      </div>
      <div className="card" style={{ flex: "1 1 560px", minWidth: 0 }}>
        <LeadForm type="workshop-feedback" />
      </div>
    </section>
  );
}
