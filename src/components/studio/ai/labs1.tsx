"use client";

import Link from "next/link";
import { useState } from "react";
import { checkAnswer, useNote } from "@/lib/class6/store";
import { dayOfAI, machinesToSort, turingRounds } from "@/content/class6/aiPractice";

/* ---------------- Step 1 · Intelligence ---------------- */

export function IntelligenceLab({
  kinds,
  computing,
  intelligence,
  statements,
}: {
  kinds: { term: string; text: string }[];
  computing: string;
  intelligence: string;
  statements: { text: string; answer: "Human" | "Machine" }[];
}) {
  const [me, setMe] = useNote("ai1-me");
  const [sorted, setSorted] = useState<Record<number, "Human" | "Machine">>({});
  const right = statements.filter((s, i) => sorted[i] === s.answer).length;

  return (
    <>
      <h2 className="s-title" style={{ fontSize: 26, margin: "4px 0 10px" }}>
        Which one is most like you?
      </h2>
      <div className="grid g3" style={{ gap: 12 }} role="group" aria-label="Which one is most like you?">
        {kinds.map((k) => {
          const [name, kind] = k.term.split(" (");
          const on = me === name;
          return (
            <button key={k.term} type="button" aria-pressed={on} onClick={() => setMe(on ? "" : name)} className="s-card" style={{ textAlign: "left", border: 0, cursor: "pointer", font: "inherit", outline: on ? "3px solid var(--red-deep)" : undefined }}>
              <span className="lbl" style={{ display: "block" }}>
                {kind?.replace(")", "")}
              </span>
              <span className="s-title" style={{ fontSize: 24, display: "block" }}>
                {name}
              </span>
              <span className="sm" style={{ display: "block", marginTop: 6 }}>
                {k.text.split(". ").slice(0, 2).join(". ")}.
              </span>
              <span className="sm" style={{ display: "block", marginTop: 8, fontWeight: 700 }}>
                {on ? "This is me ✓" : "This is me"}
              </span>
            </button>
          );
        })}
      </div>
      <p className="sm" style={{ marginTop: 8 }}>
        Pick one. There are many other kinds of intelligence too, and most people mix several.
      </p>

      <section className="s-card-ink eq-grid" style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1.2fr", gap: 12, alignItems: "center" }} aria-label="Computing plus intelligence equals artificial intelligence">
        <div className="s-card-ink" style={{ background: "var(--ink-2)", textAlign: "center" }}>
          <p className="s-title" style={{ fontSize: 28 }}>Computing</p>
          <p className="sm" style={{ color: "#e6e6e6" }}>{computing}</p>
        </div>
        <span className="s-title" style={{ fontSize: 40, color: "var(--yellow)" }} aria-hidden="true">+</span>
        <div className="s-card-ink" style={{ background: "var(--ink-2)", textAlign: "center" }}>
          <p className="s-title" style={{ fontSize: 28 }}>Intelligence</p>
          <p className="sm" style={{ color: "#e6e6e6" }}>{intelligence}</p>
        </div>
        <span className="s-title" style={{ fontSize: 40, color: "var(--yellow)" }} aria-hidden="true">=</span>
        <div className="s-card-red" style={{ textAlign: "center" }}>
          <p className="s-title" style={{ fontSize: 28 }}>Artificial intelligence</p>
          <p className="sm">Machines that simulate human intelligence and help make decisions</p>
        </div>
      </section>

      <section className="s-card" style={{ marginTop: 16 }} aria-labelledby="hm-title">
        <div className="row-between" style={{ alignItems: "center" }}>
          <h2 id="hm-title" className="s-title" style={{ fontSize: 26 }}>
            Human or machine intelligence?
          </h2>
          <strong className="sm" role="status">
            {right} / {statements.length} sorted correctly
          </strong>
        </div>
        <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
          {statements.map((s, i) => {
            const v = sorted[i];
            return (
              <li key={s.text} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 10, borderTop: "1px solid var(--line)", padding: "10px 0" }}>
                <span className="sm">{s.text}</span>
                <span style={{ display: "flex", gap: 6, alignItems: "center" }} role="group" aria-label="Human or machine">
                  {(["Human", "Machine"] as const).map((o) => (
                    <button key={o} type="button" className="tool-btn" aria-pressed={v === o} onClick={() => setSorted((x) => ({ ...x, [i]: o }))} style={v === o ? { background: o === s.answer ? "var(--green)" : "var(--ink)", color: "#fff" } : undefined}>
                      {o}
                    </button>
                  ))}
                  <span className="sm" style={{ minWidth: 60, fontWeight: 700 }}>
                    {v ? (v === s.answer ? "Right" : "Not yet") : ""}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="s-card-yellow row-between" style={{ marginTop: 16, alignItems: "center" }}>
        <div style={{ maxWidth: 640 }}>
          <p className="lbl">Make · intelligence map of our class</p>
          <p className="sm">
            Each student writes their strongest kind of smart on a sticky note. Group them on the board. Then ask: which of these could a machine copy, and which can’t it?
          </p>
        </div>
        <Link href="/studio/ai/1/history" className="btn btn-ink">
          Next · where AI came from <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}

/* ---------------- Step 2 · History ---------------- */

export function HistoryLab({ eras }: { eras: { id: string; when: string; label: string; text: string }[] }) {
  const [era, setEra] = useState("1940s");
  const [round, setRound] = useState(0);
  const [pick, setPick] = useState<"a" | "b" | null>(null);
  const [spotted, setSpotted] = useState(0);
  const e = eras.find((x) => x.id === era)!;
  const r = turingRounds[round];
  const done = round === turingRounds.length - 1 && pick !== null;

  return (
    <>
      <div className="grid g5" style={{ gap: 8 }} role="group" aria-label="Timeline">
        {eras.map((x) => (
          <button key={x.id} type="button" aria-pressed={x.id === era} onClick={() => setEra(x.id)} style={{ textAlign: "left", border: 0, borderRadius: 6, padding: 14, minHeight: 90, cursor: "pointer", font: "inherit", background: x.id === era ? "var(--ink)" : "var(--paper)", color: x.id === era ? "#fff" : "var(--ink)" }}>
            <span className="s-title" style={{ fontSize: 24, display: "block", color: x.id === era ? "var(--yellow)" : "var(--red-text)" }}>
              {x.when}
            </span>
            <span className="sm" style={{ fontWeight: 700 }}>
              {x.label}
            </span>
          </button>
        ))}
      </div>
      <section className="s-card" style={{ marginTop: 12, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }} aria-live="polite">
        <span style={{ width: 96, height: 96, borderRadius: 999, background: "var(--ink)", color: "var(--yellow)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }} className="s-title">
          {e.when}
        </span>
        <div style={{ flex: "1 1 300px" }}>
          <p className="lbl">{e.label}</p>
          <p className="body">{e.text}</p>
          {era === "1940s" && (
            <p className="serif" style={{ fontSize: 20, color: "var(--red-text)", marginTop: 6 }}>
              Play the Turing Test below.
            </p>
          )}
        </div>
      </section>

      <section className="s-card-ink" style={{ marginTop: 12 }} aria-labelledby="turing">
        <div className="row-between" style={{ alignItems: "center" }}>
          <p className="lbl" style={{ margin: 0 }}>
            Play the Turing Test · round {round + 1} of {turingRounds.length} · practice, not from the handbook
          </p>
          <strong className="sm" style={{ color: "var(--yellow)" }}>
            Spotted {spotted}
          </strong>
        </div>
        <h2 id="turing" className="s-title" style={{ fontSize: 30, marginTop: 6 }}>
          Which reply came from a machine?
        </h2>
        <p className="body" style={{ marginTop: 8 }}>Question: “{r.question}”</p>
        <div className="grid g2" style={{ gap: 10, marginTop: 12 }} role="group" aria-label="Tap the reply you think is from a machine">
          {(["a", "b"] as const).map((k) => {
            const chosen = pick === k;
            const reveal = pick !== null;
            return (
              <button
                key={k}
                type="button"
                disabled={reveal}
                aria-pressed={chosen}
                onClick={() => {
                  setPick(k);
                  if (k === r.machine) setSpotted((s) => s + 1);
                }}
                style={{ textAlign: "left", border: 0, borderRadius: 6, padding: 14, minHeight: 64, cursor: reveal ? "default" : "pointer", font: "inherit", color: "#fff", background: reveal && k === r.machine ? "var(--red-deep)" : "var(--ink-2)", outline: chosen ? "3px solid var(--yellow)" : undefined }}
              >
                <span className="sm" style={{ color: "var(--muted-on-ink)", display: "block" }}>
                  Player {k.toUpperCase()} · tap if machine{reveal && k === r.machine ? " · machine" : ""}
                </span>
                <span className="body">{k === "a" ? r.a : r.b}</span>
              </button>
            );
          })}
        </div>
        <div className="row-between" style={{ alignItems: "center", marginTop: 12 }}>
          <p className="sm" role="status">
            {pick === null ? "Think: which answer sounds like rules and data, not lived experience?" : pick === r.machine ? "Spotted. It talked about facts, not about its own life." : "That was the human. Look for the reply with no lived experience."}
          </p>
          {pick !== null && !done && (
            <button type="button" className="btn btn-red" onClick={() => (setRound((x) => x + 1), setPick(null))}>
              Next round <span aria-hidden="true">→</span>
            </button>
          )}
          {done && (
            <button type="button" className="btn btn-ghost" onClick={() => (setRound(0), setPick(null), setSpotted(0))}>
              Play again
            </button>
          )}
        </div>
      </section>

      <section className="s-card-yellow row-between" style={{ marginTop: 12, alignItems: "center" }}>
        <div style={{ maxWidth: 640 }}>
          <p className="lbl">Make · a live class Turing Test</p>
          <p className="sm">
            One team answers questions honestly; the other team may only answer from a deck of fixed rule cards. The class asks questions on paper slips and votes: which team is the “machine”?
          </p>
        </div>
        <Link href="/studio/ai/1/everyday" className="btn btn-ink">
          Next · AI around us <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}

/* ---------------- Step 3 · AI around us ---------------- */

const NOTEBOOKS = [
  { name: "Riya", hand: "wave" },
  { name: "Aarav", hand: "zig" },
  { name: "Meher", hand: "wave" },
  { name: "Kabir", hand: "zig" },
  { name: "Sana", hand: "flat" },
  { name: "Ishaan", hand: "flat" },
] as const; // DEMO names

const SQUIGGLE = { wave: "M2 10 Q12 0 22 10 T42 10 T62 10", zig: "M2 12 L12 2 L22 12 L32 2 L42 12 L52 2 L62 12", flat: "M2 10 Q32 4 62 8" };

export function EverydayLab() {
  const [open, setOpen] = useState("portrait");
  const [seen, setSeen] = useState<string[]>(["portrait"]);
  const [mode, setMode] = useState<"names" | "none" | "group">("names");
  const item = dayOfAI.find((d) => d.id === open)!;
  const parts = [...new Set(dayOfAI.map((d) => d.part))];
  const notebooks = mode === "group" ? [...NOTEBOOKS].sort((a, b) => a.hand.localeCompare(b.hand)) : NOTEBOOKS;

  return (
    <>
      <p className="sm" style={{ textAlign: "right", fontWeight: 700 }} role="status">
        Explored {seen.length} of {dayOfAI.length}
      </p>
      <div className="lab-grid">
        <div>
          {parts.map((part) => (
            <div key={part} style={{ marginBottom: 10 }}>
              <p className="sm muted" style={{ marginBottom: 4 }}>
                {part}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 8 }}>
                {dayOfAI
                  .filter((d) => d.part === part)
                  .map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      aria-pressed={d.id === open}
                      onClick={() => (setOpen(d.id), setSeen((s) => (s.includes(d.id) ? s : [...s, d.id])))}
                      style={{ textAlign: "left", border: 0, borderRadius: 6, padding: 12, minHeight: 64, cursor: "pointer", font: "inherit", background: d.id === open ? "var(--red-deep)" : "var(--paper)", color: d.id === open ? "#fff" : "var(--ink)" }}
                    >
                      <span className="sm" style={{ display: "block" }}>
                        {d.id === open ? "Looking now" : seen.includes(d.id) ? "Explored" : "Tap to explore"}
                      </span>
                      <span className="s-title" style={{ fontSize: 18 }}>
                        {d.name}
                      </span>
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <section className="s-card-ink" aria-live="polite" aria-label="How AI helps here" style={{ alignSelf: "start" }}>
          <p className="lbl">How AI helps here</p>
          <h2 className="s-title" style={{ fontSize: 30 }}>
            {item.name}
          </h2>
          <p className="body" style={{ marginTop: 8 }}>
            {item.how}
          </p>
          <div style={{ background: "var(--ink-2)", borderRadius: 6, padding: 12, marginTop: 12 }}>
            <p className="sm" style={{ color: "var(--muted-on-ink)" }}>It learns from</p>
            <p className="sm" style={{ color: "var(--yellow)", fontWeight: 700 }}>
              {item.learnsFrom}
            </p>
          </div>
          <p className="serif" style={{ fontSize: 19, marginTop: 12 }}>
            Responsible use: {item.responsible}
          </p>
          <p className="sm" style={{ color: "var(--muted-on-ink)", marginTop: 10 }}>
            “It learns from” and “Responsible use” are Makeracle practice notes, not from the handbook.
          </p>
        </section>
      </div>

      <section className="s-card" style={{ marginTop: 16 }} aria-labelledby="nb-title">
        <div className="row-between" style={{ alignItems: "center" }}>
          <div>
            <p className="lbl">How does AI learn? · the handbook’s notebook story</p>
            <h2 id="nb-title" className="s-title" style={{ fontSize: 26 }}>
              Labelled or unlabelled data?
            </h2>
          </div>
          <div className="toggles" role="group" aria-label="Notebook view" style={{ background: "var(--ground)", borderRadius: 999, padding: 4 }}>
            {(
              [
                ["names", "With names"],
                ["none", "No names"],
                ["group", "Group by handwriting"],
              ] as const
            ).map(([id, label]) => (
              <button key={id} type="button" className="tog" aria-pressed={mode === id} onClick={() => setMode(id)} style={{ background: mode === id ? undefined : "transparent" }}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: 8, marginTop: 12, background: "var(--ground)", padding: 10, borderRadius: 6 }}>
          {notebooks.map((n, i) => (
            <div key={n.name} style={{ background: "var(--paper)", borderRadius: 4, padding: 10, borderLeft: mode === "group" ? `6px solid ${n.hand === "wave" ? "var(--red-deep)" : n.hand === "zig" ? "var(--ink)" : "var(--yellow)"}` : undefined }}>
              <p className="sm muted">Test notebook</p>
              <p className="s-title" style={{ fontSize: 18 }}>
                {mode === "names" ? n.name : mode === "group" ? `Group ${["flat", "wave", "zig"].indexOf(n.hand) + 1}` : `Notebook ${i + 1}`}
              </p>
              <svg width="64" height="16" viewBox="0 0 64 16" aria-hidden="true">
                <path d={SQUIGGLE[n.hand]} fill="none" stroke="var(--ink)" strokeWidth="1.5" />
              </svg>
            </div>
          ))}
        </div>
        <p className="body" style={{ marginTop: 10 }} aria-live="polite">
          {mode === "names" && "Every notebook has a name: that is labelled data. The teacher (or a supervised model) knows the right answer for each one."}
          {mode === "none" && "No names: that is unlabelled data. The teacher has to work out whose book it is from the handwriting or answers."}
          {mode === "group" && "Grouping similar handwriting together without knowing any names is what unsupervised learning does: it finds clusters."}
        </p>
      </section>
    </>
  );
}

/* ---------------- Step 4 · AI or automation? ---------------- */

type Shape = "Triangle" | "Square" | "Circle" | "Diamond";
const TRAINING: Shape[] = ["Triangle", "Square", "Circle", "Diamond", "Square", "Triangle", "Circle", "Diamond", "Triangle", "Circle", "Square", "Diamond"];

function ShapeIcon({ s, size = 26 }: { s: Shape; size?: number }) {
  const c = s === "Triangle" || s === "Circle" ? "var(--red-deep)" : s === "Square" ? "var(--muted)" : "var(--ink)";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      {s === "Triangle" && <path d="M12 3 L22 21 H2 Z" fill={c} />}
      {s === "Square" && <rect x="4" y="4" width="16" height="16" fill={c} />}
      {s === "Circle" && <circle cx="12" cy="12" r="9" fill={c} />}
      {s === "Diamond" && <path d="M12 2 L22 12 L12 22 L2 12 Z" fill={c} />}
    </svg>
  );
}

function MachineSorter({ chapter }: { chapter: number }) {
  const [res, setRes] = useState<Record<string, { pick: string; ok: boolean }>>({});
  const score = Object.values(res).filter((r) => r.ok).length;

  async function choose(id: string, pick: "AI" | "Automation") {
    const m = machinesToSort.find((x) => x.id === id)!;
    const ok = m.tableRow !== undefined ? await checkAnswer({ kind: "ai-table", chapter, section: "table", row: m.tableRow, value: pick }).catch(() => false) : m.answer === pick;
    setRes((r) => ({ ...r, [id]: { pick, ok } }));
  }

  return (
    <section aria-labelledby="partA">
      <div className="row-between" style={{ alignItems: "center", marginBottom: 10 }}>
        <h2 id="partA" className="s-title" style={{ fontSize: 26 }}>
          Part A · Sort the machines
        </h2>
        <strong className="sm" role="status">
          Score {score} / {machinesToSort.length}
        </strong>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 10 }}>
        {machinesToSort.map((m) => {
          const r = res[m.id];
          return (
            <div key={m.id} className="s-card" style={{ padding: 14 }}>
              <p className="s-title" style={{ fontSize: 18 }}>
                {m.name}
              </p>
              <p className="sm" style={{ marginTop: 4 }}>
                {m.detail}
              </p>
              <div style={{ display: "flex", gap: 6, marginTop: 10 }} role="group" aria-label={`${m.name}: AI or automation?`}>
                {(["AI", "Automation"] as const).map((o) => (
                  <button key={o} type="button" className="tool-btn" aria-pressed={r?.pick === o} disabled={r?.ok} onClick={() => choose(m.id, o)} style={{ flex: 1, ...(r?.pick === o ? { background: r.ok ? "var(--green)" : "var(--ink)", color: "#fff" } : { background: "transparent", boxShadow: "inset 0 0 0 1.5px var(--ink)" }) }}>
                    {o}
                  </button>
                ))}
              </div>
              <p className="sm" role="status" style={{ marginTop: 6, fontWeight: 700, minHeight: 20 }}>
                {r ? (r.ok ? "Right" : "Not yet · does it learn, or follow fixed rules?") : ""}
              </p>
            </div>
          );
        })}
      </div>
      <p className="sm" style={{ marginTop: 10 }}>
        Rule from the handbook: automation follows fixed rules and gives the same output every time; AI learns from data and can handle new situations.
      </p>
    </section>
  );
}

const MODES = {
  supervised: "Supervised learning uses labelled data: every training shape already has the correct name, like notebooks with names written on them.",
  unsupervised: "Unsupervised learning uses unlabelled data: the model finds shapes that look alike and puts them into groups, without knowing any names.",
  reinforcement: "Reinforcement learning is trial and error: the model tries an action, gets a reward or a penalty, and slowly learns which actions work best.",
};

function ShapeLab() {
  const [mode, setMode] = useState<keyof typeof MODES>("supervised");
  const [trained, setTrained] = useState(false);
  const [test, setTest] = useState(0);
  const [tries, setTries] = useState<boolean[]>([]);
  const testShapes: Shape[] = ["Circle", "Diamond", "Triangle", "Square"];
  const groups: Shape[] = ["Triangle", "Square", "Circle", "Diamond"];
  const reset = (m: keyof typeof MODES) => (setMode(m), setTrained(false), setTries([]), setTest(0));
  // Reinforcement: chance of a right move grows with each try (rewards shape the next choice).
  const tryOnce = () => setTries((t) => [...t, Math.random() < Math.min(0.95, 0.2 + t.filter(Boolean).length * 0.12)]);

  return (
    <section className="s-card" style={{ marginTop: 16 }} aria-labelledby="partB">
      <div className="row-between" style={{ alignItems: "center" }}>
        <h2 id="partB" className="s-title" style={{ fontSize: 26 }}>
          Part B · Shape learning lab
        </h2>
        <div className="toggles" role="group" aria-label="Type of learning" style={{ background: "var(--ground)", borderRadius: 999, padding: 4 }}>
          {(Object.keys(MODES) as (keyof typeof MODES)[]).map((m) => (
            <button key={m} type="button" className="tog" aria-pressed={mode === m} onClick={() => reset(m)} style={{ background: mode === m ? undefined : "transparent", textTransform: "capitalize" }}>
              {m}
            </button>
          ))}
        </div>
      </div>
      <p className="body" style={{ margin: "10px 0 14px", maxWidth: 640 }}>
        {MODES[mode]}
      </p>
      <div className="lab-grid">
        <div style={{ background: "var(--ground)", borderRadius: 6, padding: 12 }}>
          <p className="sm muted">Training data · {mode === "supervised" ? "labelled" : "unlabelled"}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))", gap: 6, marginTop: 8 }}>
            {(mode === "unsupervised" && trained ? [...TRAINING].sort((a, b) => groups.indexOf(a) - groups.indexOf(b)) : TRAINING).map((s, i) => (
              <div key={i} style={{ background: "var(--paper)", borderRadius: 4, padding: 8, textAlign: "center", outline: mode === "unsupervised" && trained ? `3px solid ${["var(--red-deep)", "var(--muted)", "var(--yellow)", "var(--ink)"][groups.indexOf(s)]}` : undefined }}>
                <ShapeIcon s={s} />
                <p className="sm" style={{ fontSize: 11 }}>
                  {mode === "supervised" ? s : mode === "unsupervised" && trained ? `Group ${groups.indexOf(s) + 1}` : " "}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="s-card-ink" aria-live="polite">
          {mode === "supervised" &&
            (!trained ? (
              <>
                <p className="lbl">Model not trained yet</p>
                <p className="body">Train it on the labelled shapes first.</p>
                <button type="button" className="btn btn-red" style={{ marginTop: 12 }} onClick={() => setTrained(true)}>
                  Train the model
                </button>
              </>
            ) : (
              <>
                <p className="lbl">Trained · new shape, no label</p>
                <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 6 }}>
                  <span style={{ background: "var(--paper)", borderRadius: 6, padding: 10 }}>
                    <ShapeIcon s={testShapes[test % 4]} size={40} />
                  </span>
                  <p className="body">
                    The model predicts: <strong style={{ color: "var(--yellow)" }}>{testShapes[test % 4]}</strong>
                  </p>
                </div>
                <button type="button" className="btn btn-ghost" style={{ marginTop: 12 }} onClick={() => setTest((t) => t + 1)}>
                  Show another new shape
                </button>
              </>
            ))}
          {mode === "unsupervised" && (
            <>
              <p className="lbl">{trained ? "Grouped by how they look" : "No names to learn from"}</p>
              <p className="body">{trained ? "Four groups found. The model never knew the names, only that some shapes look alike." : "Let the model look for shapes that look alike."}</p>
              {!trained && (
                <button type="button" className="btn btn-red" style={{ marginTop: 12 }} onClick={() => setTrained(true)}>
                  Find groups
                </button>
              )}
            </>
          )}
          {mode === "reinforcement" && (
            <>
              <p className="lbl">
                Tries {tries.length} · rewards {tries.filter(Boolean).length} · penalties {tries.filter((x) => !x).length}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4, margin: "8px 0" }} aria-label="Results of each try">
                {tries.map((ok, i) => (
                  <span key={i} title={ok ? "reward" : "penalty"} style={{ width: 14, height: 14, borderRadius: 3, background: ok ? "var(--green)" : "var(--red-deep)" }} />
                ))}
              </div>
              <p className="body">{tries.length < 5 ? "The model sorts a shape into a box, then gets a reward or a penalty." : "Watch the rewards grow: it is learning which moves work."}</p>
              <button type="button" className="btn btn-red" style={{ marginTop: 12 }} onClick={tryOnce}>
                Let it try
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Debate() {
  const [vote, setVote] = useNote("ai1-debate");
  return (
    <section className="s-card-yellow tilt-r" aria-labelledby="debate">
      <p className="lbl">Class debate · responsible usage</p>
      <p id="debate" className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>
        A phone camera blurs the background with AI. Should it tell you when it changes a photo?
      </p>
      <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }} role="group" aria-label="Your vote">
        {["Yes, always", "Only sometimes"].map((v) => (
          <button key={v} type="button" aria-pressed={vote === v} className={vote === v ? "btn btn-ink" : "btn btn-ghost"} onClick={() => setVote(v)}>
            {v}
          </button>
        ))}
      </div>
      {vote && (
        <p className="sm" role="status" style={{ marginTop: 10 }}>
          You voted “{vote}”. Tell your pair one reason.
        </p>
      )}
    </section>
  );
}

export function SortLab({ chapter }: { chapter: number }) {
  return (
    <>
      <MachineSorter chapter={chapter} />
      <ShapeLab />
      <div style={{ marginTop: 16 }}>
        <Debate />
      </div>
    </>
  );
}
