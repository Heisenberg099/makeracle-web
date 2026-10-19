import type { Metadata } from "next";
import { LegalPending } from "@/components/LegalPending";
import { legalPending } from "@/content/en";

// TODO(launch): replace with the lawyer-reviewed terms, then allow indexing.
export const metadata: Metadata = { title: legalPending.terms.title, robots: { index: false } };

export default function TermsPage() {
  return <LegalPending {...legalPending.terms} />;
}
