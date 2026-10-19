import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { LabFrame } from "@/components/studio/LabFrame";
import { ProjectWorkspace } from "@/components/studio/wall/ProjectWorkspace";
import { getProject, projects } from "@/content/class6/projects";
import { projectsDemo, tallyDemo } from "@/lib/mock";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/studio/projects/[slug]">): Promise<Metadata> {
  const p = getProject((await params).slug);
  return { title: p ? `Project ${p.number} · ${p.title.replace(/:$/, "")}` : "Project" };
}

export default function ProjectPage({ params }: PageProps<"/studio/projects/[slug]">) {
  return (
    <Suspense fallback={<p className="wrap sec">Loading project…</p>}>
      <Project params={params} />
    </Suspense>
  );
}

async function Project({ params }: { params: PageProps<"/studio/projects/[slug]">["params"] }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const progress = projectsDemo[project.slug]; // DEMO — the signed-in student's team
  const other = projects.find((p) => p.slug !== project.slug)!;

  return (
    <LabFrame
      kicker={project.quote}
      chips={[
        { text: `Interdisciplinary Project ${project.number} of 2 · 20 hours${project.number === 2 ? ` · ${project.term}` : ""}`, solid: true },
        { text: project.number === 1 ? `${progress.team} · ${progress.members.length} members` : project.uses },
      ]}
      title={project.title}
      red={project.red}
    >
      <ProjectWorkspace
        project={project}
        progress={progress}
        tally={tallyDemo}
        next={{ slug: other.slug, title: other.title.replace(/:$/, ""), line: other.summary, when: project.number === 1 ? `Next · Project 2 of 2 · 20 hours · ${other.term}` : `Project 1 of 2 · ${other.term}`, uses: other.uses }}
      />
    </LabFrame>
  );
}
