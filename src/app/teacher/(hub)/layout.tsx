import type { Metadata } from "next";
import { PortalShell } from "@/components/portal/PortalShell";
import { demoTeacher, demoSchool } from "@/lib/mock";

export const metadata: Metadata = { title: { default: "Teacher hub", template: "%s · Teacher hub" }, robots: { index: false } };

const nav = [
  { href: "/teacher", label: "My classes", exact: true },
  { href: "/teacher/lessons", label: "Lesson library" },
  { href: "/teacher/marking", label: "Rubrics & marking" },
  { href: "/teacher/review", label: "Student work" },
  { href: "/teacher/training", label: "Training & help" },
];

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <PortalShell area="Teacher hub" user={`${demoTeacher.name} · ${demoSchool.name}`} nav={nav}>
      {children}
    </PortalShell>
  );
}
