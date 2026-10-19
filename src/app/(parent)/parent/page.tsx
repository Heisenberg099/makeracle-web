import type { Metadata } from "next";
import { ParentView } from "@/features/parent/ParentView";
import { projects } from "@/curriculum/class-6/studio/projects";
import { parentDemo } from "@/lib/demo-data";

export const metadata: Metadata = { title: "Parent", robots: { index: false } };

export default function ParentPage() {
  return (
    <div className="studio-page">
      <main id="main" className="wrap" style={{ maxWidth: 820, paddingBottom: 80 }}>
        <ParentView d={parentDemo} rubric={projects[0].rubric.map((r) => ({ id: r.id, name: r.name }))} />
      </main>
    </div>
  );
}
