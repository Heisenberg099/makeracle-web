import { notFound, redirect } from "next/navigation";
import { Suspense } from "react";
import { aiChapters } from "@/curriculum/class-6";
import { aiPaths } from "@/curriculum/class-6/studio/ai-paths";

export function generateStaticParams() {
  return aiChapters.map((c) => ({ chapter: String(c.number) }));
}

/** /studio/ai/[chapter] opens the first step of that chapter's path. */
export default function AIChapterPage({ params }: PageProps<"/studio/ai/[chapter]">) {
  return (
    <Suspense>
      <Go params={params} />
    </Suspense>
  );
}

async function Go({ params }: { params: PageProps<"/studio/ai/[chapter]">["params"] }) {
  const n = Number((await params).chapter);
  const first = aiPaths[n]?.[0];
  if (!first) return notFound();
  return redirect(`/studio/ai/${n}/${first.slug}`);
}
