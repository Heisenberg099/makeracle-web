import type { Metadata } from "next";
import { LegalPending } from "@/components/website/LegalPending";
import { legalPending } from "@/content/website/en";

// TODO(launch): replace with the lawyer-reviewed terms, then allow indexing.
export const metadata: Metadata = { title: legalPending.terms.title, robots: { index: false } };

export default function TermsPage() {
  return <LegalPending {...legalPending.terms} />;
}
