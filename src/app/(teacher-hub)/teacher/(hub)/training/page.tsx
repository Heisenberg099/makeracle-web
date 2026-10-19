import { demoTeacher } from "@/lib/demo-data";
import { site } from "@/content/website/site";

export const metadata = { title: "Training & help" };

const modules = [
  "Why CT & AI, and what CBSE asks",
  "Running a scripted session",
  "Pair programming in a 40-student room",
  "The 4-level rubric",
  "Unplugged lessons",
  "Safe AI in class",
  "Adapting a project",
  "Debugging with students",
  "Running a showcase day",
  "Mentoring another teacher",
];

const levels = [
  { name: "Facilitator", body: "Run scripted sessions confidently.", from: 0, to: 6 },
  { name: "Builder", body: "Adapt and extend projects for your class.", from: 6, to: 9 },
  { name: "Mentor", body: "Train and support other teachers.", from: 9, to: 10 },
];

export default function TrainingPage() {
  return (
    <>
      <p className="lbl">Training &amp; certification</p>
      <h1 className="cap h-m" style={{ marginBottom: 28 }}>
        Facilitator → Builder
        <br />→ Mentor.
      </h1>
      <div className="grid g3">
        {levels.map((l) => {
          const reached = demoTeacher.trainingDone >= l.to;
          const current = demoTeacher.trainingDone >= l.from && !reached;
          return (
            <div key={l.name} className={reached ? "card-ink" : "card"} style={current ? { boxShadow: "inset 0 0 0 2px var(--red)" } : undefined}>
              <p className="lbl">{reached ? "Certified" : current ? "In progress" : "Locked"}</p>
              <h2 className="ttl" style={{ fontSize: 30 }}>
                {l.name}
              </h2>
              <p className="sm" style={{ marginTop: 8 }}>
                {l.body}
              </p>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 20 }}>
        <section className="card" style={{ flex: "2 1 460px" }} aria-labelledby="mods">
          <p className="lbl" id="mods">
            Self-paced modules
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {modules.map((m, i) => (
              <li key={m} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                <span className="body">
                  {i + 1}. {m}
                </span>
                <span className={`chip ${i < demoTeacher.trainingDone ? "chip-red" : ""}`}>{i < demoTeacher.trainingDone ? "Done" : "Start"}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="card-ink stack" style={{ flex: "1 1 280px" }} aria-labelledby="help">
          <p className="lbl" id="help">
            Help
          </p>
          <h2 className="ttl" style={{ fontSize: 26 }}>
            Weekly office hours
          </h2>
          <p className="sm" style={{ color: "#d6d6d6" }}>
            30 minutes with a Makeracle mentor. Bring a project that broke.
          </p>
          {/* TODO(backend): calendar booking integration */}
          <button type="button" className="btn">
            Book a slot
          </button>
          <p className="sm" style={{ color: "#d6d6d6" }}>
            WhatsApp support: {site.whatsapp}
          </p>
          <a href={`mailto:${site.email}?subject=Problem%20report`} className="sm" style={{ color: "#fff" }}>
            Report a problem →
          </a>
        </section>
      </div>
    </>
  );
}
