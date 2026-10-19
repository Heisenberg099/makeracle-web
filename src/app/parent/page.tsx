import type { Metadata } from "next";
import { ParentView } from "@/components/teacher6/ParentView";
import { projects } from "@/content/class6/projects";
import { parentDemo } from "@/lib/mock";

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
