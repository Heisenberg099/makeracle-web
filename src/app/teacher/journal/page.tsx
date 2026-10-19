import type { Metadata } from "next";
import { LabFrame } from "@/components/studio/LabFrame";
import { JournalActions, JournalView } from "@/components/teacher6/JournalView";
import { projects } from "@/content/class6/projects";
import { class6Students, hubDemo, observationsDemo, projectsDemo } from "@/lib/mock";

export const metadata: Metadata = { title: "Observation Journal · Teacher hub", robots: { index: false } };

export default function JournalPage() {
  return (
    <LabFrame
      title="Observation"
      red="journal."
      back={{ href: "/teacher", label: "Today" }}
      right={<JournalActions students={class6Students.filter((s) => s.classId === "6B")} demoObs={observationsDemo} sections={hubDemo.sections.map((s) => ({ id: s.id, hours: s.hours }))} />}
    >
      <JournalView
        students={class6Students.filter((s) => s.classId === "6B")}
        demoObs={observationsDemo}
        projects={projects.map((p) => ({
          slug: p.slug,
          title: `Project ${p.number} ${p.title.replace(/:$/, "")}`,
          rubric: p.rubric,
          demoMarks: projectsDemo[p.slug].marks,
          demoNote: projectsDemo[p.slug].teacherNote,
          team: projectsDemo[p.slug].members.map((m) => m.name),
        }))}
      />
    </LabFrame>
  );
}
