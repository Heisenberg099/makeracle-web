import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getLesson, lessons } from "@/lib/mock";

export function generateStaticParams() {
  return lessons.map((l) => ({ id: l.id }));
}

export default function LessonPage({ params }: PageProps<"/teacher/lessons/[id]">) {
  return (
    <Suspense fallback={<p className="lbl">Loading lesson…</p>}>
      <LessonDetail params={params} />
    </Suspense>
  );
}

async function LessonDetail({ params }: { params: PageProps<"/teacher/lessons/[id]">["params"] }) {
  const { id } = await params;
  const l = getLesson(id);
  if (!l) notFound();

  return (
    <>
      <p className="lbl">
        <Link href="/teacher/lessons">Lesson library</Link> / {l.module} / Lesson {l.order}
      </p>
      <div className="row-between" style={{ alignItems: "flex-end", gap: 24 }}>
        <h1 className="cap h-m">{l.title}</h1>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href={`/teacher/present/${l.id}`} className="btn">
            Start projector mode
          </Link>
          {/* TODO(backend): offline package download (PWA cache) */}
          <button type="button" className="btn btn-ghost" disabled title="Coming with offline sync">
            Download for offline
          </button>
        </div>
      </div>
      <p className="sm muted" style={{ marginTop: 12 }}>
        {l.minutes} min · {l.track} · {l.competency}
        {l.unplugged ? " · unplugged version" : ""}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 28, alignItems: "flex-start" }}>
        <ol className="card" style={{ flex: "2 1 520px", listStyle: "none", margin: 0, padding: 0, overflow: "hidden" }}>
          {l.steps.map((s, i) => (
            <li key={s.title} style={{ padding: 24, borderTop: i ? "1px solid var(--line)" : 0, display: "flex", gap: 20 }}>
              <div style={{ flex: "0 0 64px" }}>
                <p className="cap" style={{ fontSize: 36 }}>
                  {s.min}
                </p>
                <span className="sm muted">min</span>
              </div>
              <div>
                <h2 className="ttl" style={{ fontSize: 22 }}>
                  {i + 1}. {s.title}
                </h2>
                <p className="body" style={{ marginTop: 8 }}>
                  <strong>Say:</strong> “{s.say}”
                </p>
                <p className="body" style={{ marginTop: 6 }}>
                  <strong>Do:</strong> {s.do}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <aside className="card-ink" style={{ flex: "1 1 260px" }}>
          <p className="lbl">Materials</p>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9, fontSize: 14 }}>
            {l.materials.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <p className="lbl" style={{ marginTop: 24 }}>
            Rubric for this lesson
          </p>
          <p className="sm" style={{ color: "#d6d6d6" }}>
            Works · Readable · Original · Reflected — mark in{" "}
            <Link href="/teacher/marking" style={{ color: "#fff" }}>
              Rubrics &amp; marking
            </Link>
            .
          </p>
        </aside>
      </div>
    </>
  );
}
