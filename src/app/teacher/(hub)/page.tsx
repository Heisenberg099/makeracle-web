import Link from "next/link";
import { ProgressBar } from "@/components/studio/ProgressBar";
import { QuickCapture, ReviewQueue, StrandsTable } from "@/components/teacher6/HubParts";
import { curriculum } from "@/content/class6";
import { class6Students, hubDemo, studioDemo } from "@/lib/mock";

export const metadata = { title: "Today" };

export default function TeacherToday() {
  const t = curriculum.timeAllocation;
  return (
    <>
      <div className="row-between" style={{ alignItems: "flex-start", gap: 24 }}>
        <div>
          <p className="sm muted">{hubDemo.today}</p>
          <h1 className="studio-hello" style={{ marginTop: 8 }}>
            Today in
            <br />
            <span className="hi">Class 6.</span>
          </h1>
        </div>
        <div className="s-card-yellow tilt-r" style={{ maxWidth: 320 }}>
          <p className="sm">In sync with your maths textbook</p>
          <p className="sm" style={{ fontWeight: 700, marginTop: 4 }}>
            {hubDemo.sync.text}
          </p>
        </div>
      </div>

      <div className="grid g2" style={{ gap: 14, marginTop: 24 }}>
        {hubDemo.sections.map((s) => (
          <section key={s.id} className="s-card" aria-labelledby={`cls-${s.id}`}>
            <div className="row-between" style={{ alignItems: "center" }}>
              <h2 id={`cls-${s.id}`} className="s-title" style={{ fontSize: 32 }}>
                Class {s.id}
              </h2>
              <span className="sm muted">
                {s.period} · {s.students} students
              </span>
            </div>
            <p className="sm muted" style={{ marginTop: 4 }}>
              CBSE hours delivered · {s.hours.ct + s.hours.ai + s.hours.project} / {t.totalHours}
            </p>
            {(
              [
                ["Advanced CT", s.hours.ct, t.ctHours, "red"],
                ["Introductory AI", s.hours.ai, t.aiHours, "ink"],
                ["Interdisciplinary projects", s.hours.project, t.projectHours, "muted"],
              ] as const
            ).map(([l, v, max, tone]) => (
              <div key={l} style={{ marginTop: 10 }}>
                <p className="sm" style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span>{l}</span>
                  <strong>
                    {v} / {max} h
                  </strong>
                </p>
                <ProgressBar value={v} max={max} label={`Class ${s.id} ${l}`} tone={tone} />
              </div>
            ))}
            <div style={{ background: "var(--ground)", borderRadius: 6, padding: 14, marginTop: 14 }}>
              <p className="sm muted">
                Next · {s.next.minutes} min · {s.next.mode}
              </p>
              <p className="s-title" style={{ fontSize: 22 }}>
                {s.next.title}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                <Link href={`/teacher/present/${s.next.item === "ct5-act" ? "ct5-q1" : s.next.item}`} className="btn btn-red">
                  Start projector mode
                </Link>
                <Link href={`/teacher/planner?ch=ct${s.next.chapter}`} className="btn btn-ghost">
                  Read facilitation guide
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="hub-grid" style={{ marginTop: 16 }}>
        <StrandsTable students={class6Students} />
        <div className="stack" style={{ gap: 14 }}>
          <QuickCapture students={class6Students} />
          <ReviewQueue student={studioDemo.student.name} />
        </div>
      </div>
    </>
  );
}
