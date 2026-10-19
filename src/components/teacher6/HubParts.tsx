"use client";

import Link from "next/link";
import { useState } from "react";
import { setPostStatus, useStudio, useValue } from "@/lib/class6/store";
import type { Class6Student, Observation } from "@/lib/types";

const LEVEL_BG = ["", "var(--red-tint-1)", "var(--red-tint-2)", "var(--red-deep)", "var(--red-dark)"];
const LEVEL_FG = ["", "var(--ink)", "var(--ink)", "#fff", "#fff"];
const STRANDS = [
  ["abstract", "Abstract"],
  ["pattern", "Pattern"],
  ["decompose", "Decompose"],
  ["algorithmic", "Algorithmic"],
] as const;

export function StrandsTable({ students }: { students: Class6Student[] }) {
  const [cls, setCls] = useState("6B");
  const rows = students.filter((s) => s.classId === cls);
  return (
    <section className="s-card" aria-labelledby="strands">
      <div className="row-between" style={{ alignItems: "center" }}>
        <h2 id="strands" className="s-title" style={{ fontSize: 28 }}>
          CT strands · Class {cls}
        </h2>
        <div className="toggles" role="group" aria-label="Class" style={{ background: "var(--ground)", borderRadius: 999, padding: 4 }}>
          {["6A", "6B"].map((c) => (
            <button key={c} type="button" className="tog" aria-pressed={cls === c} onClick={() => setCls(c)} style={{ background: cls === c ? undefined : "transparent" }}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="tbl" style={{ marginTop: 10, fontSize: 13, minWidth: 560 }}>
          <thead>
            <tr>
              <th scope="col">Student</th>
              {STRANDS.map(([, l]) => (
                <th key={l} scope="col">
                  {l}
                </th>
              ))}
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.id}>
                <th scope="row" style={{ textAlign: "left", fontWeight: 600 }}>
                  {s.name}
                </th>
                {STRANDS.map(([k, l]) => {
                  const v = s.levels[k];
                  return (
                    <td key={k}>
                      <span aria-label={`${l} level ${v}`} style={{ display: "inline-block", minWidth: 44, padding: "4px 0", textAlign: "center", borderRadius: 4, fontWeight: 700, background: LEVEL_BG[v], color: LEVEL_FG[v] }}>
                        L{v}
                      </span>
                    </td>
                  );
                })}
                <td className="muted">{s.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="sm muted" style={{ marginTop: 8 }}>
        Levels from Thinking Spot attempts, hints used and journal entries. L1 = needs support · L4 = explains own strategy. Demo data.
      </p>
    </section>
  );
}

const TAGS = ["Pattern recognition", "Abstract thinking", "Decomposition", "Algorithmic thinking", "Collaboration", "Data care"];

/** Quick capture: a note goes straight into the Observation Journal. */
export function QuickCapture({ students }: { students: Class6Student[] }) {
  const [, setObs] = useValue<Observation[]>("teacher-observations", []);
  const [who, setWho] = useState(students.find((s) => s.name.startsWith("Kabir"))?.id ?? students[0].id);
  const [text, setText] = useState("");
  const [tags, setTags] = useState<string[]>(["Pattern recognition"]);
  const [saved, setSaved] = useState("");
  return (
    <form
      className="s-card-ink"
      aria-labelledby="qc"
      onSubmit={(e) => {
        e.preventDefault();
        if (text.trim().length < 5) return;
        setObs((o) => [{ id: `t${Date.now()}`, studentId: who, date: new Date().toISOString().slice(0, 10), text: text.trim(), tags, where: "Quick capture" }, ...o]);
        setSaved(`Saved to ${students.find((s) => s.id === who)?.name}’s journal.`);
        setText("");
      }}
    >
      <p className="lbl">Quick capture</p>
      <h2 id="qc" className="s-title" style={{ fontSize: 28 }}>
        Observation journal
      </h2>
      <div className="fld" style={{ marginTop: 10 }}>
        <label htmlFor="qc-s" style={{ color: "#fff" }}>
          Student
        </label>
        <select id="qc-s" value={who} onChange={(e) => setWho(e.target.value)} style={{ background: "var(--paper)", color: "var(--ink)", borderRadius: 6, paddingInline: 8 }}>
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} · {s.classId}
            </option>
          ))}
        </select>
      </div>
      <div className="fld" style={{ marginTop: 10 }}>
        <label htmlFor="qc-t" style={{ color: "#fff" }}>
          What did you notice?
        </label>
        <input id="qc-t" value={text} onChange={(e) => setText(e.target.value)} placeholder="Explained the n−1 rule to his pair without hints" style={{ background: "var(--paper)", color: "var(--ink)", borderRadius: 6, paddingInline: 10 }} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }} role="group" aria-label="Tags">
        {TAGS.map((t) => (
          <button key={t} type="button" aria-pressed={tags.includes(t)} onClick={() => setTags((x) => (x.includes(t) ? x.filter((y) => y !== t) : [...x, t]))} className="s-chip" style={{ minHeight: 44, cursor: "pointer", border: 0, background: tags.includes(t) ? "var(--red-deep)" : "transparent", color: "#fff", boxShadow: tags.includes(t) ? "none" : "inset 0 0 0 1.5px #fff" }}>
            {t}
          </button>
        ))}
      </div>
      <button type="submit" className="btn btn-white btn-block" style={{ marginTop: 12 }} disabled={text.trim().length < 5}>
        Save to journal
      </button>
      <p className="sm" role="status" style={{ marginTop: 8, minHeight: 20 }}>
        {saved}
      </p>
    </form>
  );
}

/** Things waiting for the teacher: class-wall posts to approve (live), project stages, challenges. */
export function ReviewQueue({ student }: { student: string }) {
  const { posts } = useStudio();
  const waiting = posts.filter((p) => p.status === "waiting");
  return (
    <section className="s-card" aria-labelledby="rq">
      <p className="lbl">Waiting for you</p>
      <h2 id="rq" className="s-title" style={{ fontSize: 28 }}>
        Review queue
      </h2>
      <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
        {waiting.map((p) => (
          <li key={p.id} style={{ borderTop: "1px solid var(--line)", padding: "10px 0" }}>
            <strong style={{ display: "block" }}>
              {student} · {p.title}
            </strong>
            <span className="sm">
              {p.from} · class wall · needs approval
            </span>
            <p className="sm" style={{ margin: "6px 0", background: "var(--ground)", padding: 8, borderRadius: 4 }}>
              {p.body}
            </p>
            <span style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <button type="button" className="tool-btn ink" onClick={() => setPostStatus(p.id, "approved")}>
                Approve
              </button>
              <button type="button" className="tool-btn" onClick={() => setPostStatus(p.id, "returned", "Please add what you learned, then post again.")}>
                Send back
              </button>
            </span>
          </li>
        ))}
        <li style={{ borderTop: "1px solid var(--line)", padding: "10px 0" }}>
          <Link href="/teacher/journal#mark" style={{ fontWeight: 700 }}>
            Team Rocket · Data Detectives · Stage 3
          </Link>
          <span className="sm" style={{ display: "block" }}>
            Tally photo + journal · 6B · 2 h ago (demo)
          </span>
        </li>
        <li style={{ borderTop: "1px solid var(--line)", padding: "10px 0" }}>
          <strong style={{ display: "block" }}>Aarav P. · Pattern Maker challenge</strong>
          <span className="sm">21 classmates attempted · already on the wall (demo)</span>
        </li>
      </ul>
      {waiting.length === 0 && (
        <p className="sm muted" style={{ marginTop: 6 }}>
          New class-wall posts from students appear here for approval.
        </p>
      )}
    </section>
  );
}
