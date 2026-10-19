import Link from "next/link";
import { legalPending } from "@/content/website/en";

/** Placeholder for legal pages that are waiting on review by a lawyer. */
export function LegalPending({ title, body }: { title: string; body: string }) {
  return (
    <section className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 56 }}>
      <div style={{ flex: "0 1 360px" }}>
        <p className="lbl">Legal</p>
        <h1 className="cap h-l">{title}</h1>
      </div>
      <div className="rule-top" style={{ flex: "1 1 600px", minWidth: 0, paddingTop: 24 }}>
        <p className="body">{body}</p>
        <p className="body" style={{ marginTop: 16 }}>
          {legalPending.questions} <Link href="/contact">{legalPending.contactLink}</Link>
        </p>
      </div>
    </section>
  );
}
