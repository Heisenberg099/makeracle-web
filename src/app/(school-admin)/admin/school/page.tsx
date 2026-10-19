import type { Metadata } from "next";
import { PageFrame } from "@/components/layout/PageFrame";
import { SchoolActions, SchoolView } from "@/features/school-admin/SchoolView";
import { schoolDemo } from "@/lib/demo-data";

export const metadata: Metadata = { title: "School dashboard", robots: { index: false } };

export default function SchoolPage() {
  const d = schoolDemo; // DEMO
  return (
    <PageFrame kicker={`makeracle · School admin · ${d.name}`} back={{ href: "/teacher", label: "Teacher Hub" }} right={<SchoolActions />} title="CT & AI at a glance" red="Session 2026-27.">
      <SchoolView {...d} />
    </PageFrame>
  );
}
