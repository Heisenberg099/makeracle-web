import type { Metadata } from "next";
import { LegalPending } from "@/components/LegalPending";
import { legalPending } from "@/content/en";

// TODO(launch): replace with the lawyer-reviewed refund policy, then allow indexing.
export const metadata: Metadata = { title: legalPending.refund.title, robots: { index: false } };

export default function RefundPolicyPage() {
  return <LegalPending {...legalPending.refund} />;
}
