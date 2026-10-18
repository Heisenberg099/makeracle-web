import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getLesson, lessons } from "@/lib/mock";
import { ProjectorRunner } from "./ProjectorRunner";

export const metadata: Metadata = { title: "Projector mode", robots: { index: false } };

export function generateStaticParams() {
  return lessons.map((l) => ({ id: l.id }));
}

export default function PresentPage({ params }: PageProps<"/teacher/present/[id]">) {
  return (
    <Suspense fallback={<main style={{ minHeight: "100vh", background: "#111" }} />}>
      <Present params={params} />
    </Suspense>
  );
}

async function Present({ params }: { params: PageProps<"/teacher/present/[id]">["params"] }) {
  const { id } = await params;
  const lesson = getLesson(id);
  if (!lesson) notFound();
  return <ProjectorRunner lesson={lesson} />;
}
