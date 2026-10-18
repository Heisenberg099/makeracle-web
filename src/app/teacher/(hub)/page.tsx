import Link from "next/link";
import { announcements, classes, demoTeacher, getLesson, requirement68 } from "@/lib/mock";

export const metadata = { title: "My classes" };

export default function TeacherHome() {
  return (
    <>
      <p className="lbl">Good morning, {demoTeacher.name.split(" ").slice(-1)[0]}</p>
      <h1 className="cap h-m">
        Your classes
        <br />
        this week.
      </h1>

      <div className="grid g3" style={{ marginTop: 32 }}>
        {classes.map((c) => {
          const next = getLesson(c.lessonId);
          const total = c.hours.ct + c.hours.ai + c.hours.project;
          const req = requirement68.ct + requirement68.ai + requirement68.project;
          return (
            <article key={c.id} className="card stack" style={{ gap: 14 }}>
              <div className="row-between" style={{ alignItems: "baseline", gap: 8 }}>
                <h2 className="ttl" style={{ fontSize: 30 }}>
                  {c.label}
                </h2>
                <span className="sm muted">{c.slot}</span>
              </div>
              <p className="sm">
                Module: <strong>{c.module}</strong>
              </p>
              <div>
                <div className="row-between sm" style={{ gap: 8 }}>
                  <span>CBSE hours delivered</span>
                  <strong>
                    {total} / {req}
                  </strong>
                </div>
                <div className="progress" style={{ marginTop: 6 }} role="img" aria-label={`${total} of ${req} hours delivered`}>
                  <span style={{ width: `${Math.min(100, (total / req) * 100)}%` }} />
                </div>
                <p className="sm muted" style={{ marginTop: 6 }}>
                  CT {c.hours.ct}/{requirement68.ct} · AI {c.hours.ai}/{requirement68.ai} · Projects {c.hours.project}/{requirement68.project}
                </p>
              </div>
              {next && (
                <div style={{ background: "var(--ground)", borderRadius: 6, padding: 16 }}>
                  <p className="lbl" style={{ margin: "0 0 4px" }}>
                    Next lesson · {next.minutes} min{next.unplugged ? " · unplugged" : ""}
                  </p>
                  <p className="ttl" style={{ fontSize: 20 }}>
                    {next.title}
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                    <Link href={`/teacher/present/${next.id}`} className="btn">
                      Start projector mode
                    </Link>
                    <Link href={`/teacher/lessons/${next.id}`} className="btn btn-ghost">
                      Read script
                    </Link>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 20 }}>
        <section className="card-ink" style={{ flex: "1 1 320px" }} aria-labelledby="cert-h">
          <p className="lbl" id="cert-h">
            Your certification
          </p>
          <p className="cap" style={{ fontSize: 40 }}>
            {demoTeacher.certification}
          </p>
          <div className="progress" style={{ marginTop: 16, background: "#333" }} role="img" aria-label={`${demoTeacher.trainingDone} of ${demoTeacher.trainingTotal} modules`}>
            <span style={{ width: `${(demoTeacher.trainingDone / demoTeacher.trainingTotal) * 100}%` }} />
          </div>
          <p className="sm" style={{ marginTop: 8, color: "#d6d6d6" }}>
            {demoTeacher.trainingDone} of {demoTeacher.trainingTotal} training modules · next level: Builder
          </p>
          <Link href="/teacher/training" className="btn btn-ghost" style={{ marginTop: 18 }}>
            Continue training
          </Link>
        </section>
        <section className="card" style={{ flex: "2 1 420px" }} aria-labelledby="ann-h">
          <p className="lbl" id="ann-h">
            Announcements
          </p>
          {announcements.map((a) => (
            <div key={a.text} style={{ display: "flex", gap: 16, padding: "12px 0", borderTop: "1px solid var(--line)" }}>
              <span className="sm muted" style={{ flex: "0 0 56px" }}>
                {a.date}
              </span>
              <p className="body">{a.text}</p>
            </div>
          ))}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
            <Link href="/teacher/review" className="btn">
              Review student work
            </Link>
            <Link href="/teacher/marking" className="btn btn-ghost">
              Mark a class
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
