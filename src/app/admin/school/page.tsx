import type { Metadata } from "next";
import { LabFrame } from "@/components/studio/LabFrame";
import { SchoolActions, SchoolView } from "@/components/teacher6/SchoolView";
import { schoolDemo } from "@/lib/mock";

export const metadata: Metadata = { title: "School dashboard", robots: { index: false } };

export default function SchoolPage() {
  const d = schoolDemo; // DEMO
  return (
    <LabFrame kicker={`makeracle · School admin · ${d.name}`} back={{ href: "/teacher", label: "Teacher Hub" }} right={<SchoolActions />} title="CT & AI at a glance" red="Session 2026-27.">
      <SchoolView {...d} />
    </LabFrame>
  );
}
