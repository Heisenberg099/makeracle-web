import type { Metadata } from "next";
import { LegalPending } from "@/components/website/LegalPending";
import { legalPending } from "@/content/website/en";

// TODO(launch): replace with the lawyer-reviewed refund policy, then allow indexing.
export const metadata: Metadata = { title: legalPending.refund.title, robots: { index: false } };

export default function RefundPolicyPage() {
  return <LegalPending {...legalPending.refund} />;
}
