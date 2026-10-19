import type { Metadata } from "next";
import { PortalShell } from "@/components/layout/PortalShell";
import { hubDemo } from "@/lib/demo-data";

export const metadata: Metadata = { title: { default: "Teacher hub", template: "%s · Teacher hub" }, robots: { index: false } };

const nav = [
  { href: "/teacher", label: "Today", exact: true },
  { href: "/teacher/planner", label: "Chapter planner" },
  { href: "/teacher/present/ct1-q1", label: "Projector mode" },
  { href: "/teacher/journal", label: "Observation Journal" },
  { href: "/teacher/journal#mark", label: "Project marking" },
  { href: "/studio", label: "See the student view" },
  { href: "/admin/school", label: "School dashboard" },
  { href: "/teacher/lessons", label: "Lesson library" },
  { href: "/teacher/marking", label: "Rubrics & marking" },
  { href: "/teacher/review", label: "Student work" },
  { href: "/teacher/training", label: "Training & help" },
];

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  const t = hubDemo.training; // DEMO
  return (
    <PortalShell
      area={`Teacher Hub · ${hubDemo.teacher.subject}`}
      user={hubDemo.teacher.name}
      nav={nav}
      footer={
        <div className="side-note">
          <p>Training · {t.code}</p>
          <p style={{ color: "#fff", marginTop: 4 }}>{t.subTheme} · {t.done} of {t.total} done</p>
          <span className="pbar" style={{ display: "block", marginTop: 8, background: "var(--ink)" }} role="progressbar" aria-label="Training progress" aria-valuemin={0} aria-valuemax={t.total} aria-valuenow={t.done}>
            <span style={{ width: `${(t.done / t.total) * 100}%` }} />
          </span>
        </div>
      }
    >
      {children}
    </PortalShell>
  );
}
