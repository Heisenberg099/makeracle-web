"use client";

import { useMemo, useState } from "react";
import { classes, students } from "@/lib/mock";
import { rubricCriteria, type RubricCriterion, type RubricScore } from "@/lib/types";
import { downloadCsv } from "@/lib/csv";

type Marks = Record<string, RubricScore>; // by student id
const empty: RubricScore = { works: 0, readable: 0, original: 0, reflected: 0 };
const label: Record<RubricCriterion, string> = { works: "Works", readable: "Readable", original: "Original", reflected: "Reflected" };

export function MarkingTable() {
  const [classId, setClassId] = useState(classes[0].id);
  const [marks, setMarks] = useState<Marks>({});
  const [saved, setSaved] = useState("");

  const cls = classes.find((c) => c.id === classId)!;
  const roster = useMemo(() => students.filter((s) => s.classId === classId), [classId]);

  const setOne = (sid: string, c: RubricCriterion, v: number) =>
    setMarks((m) => ({ ...m, [sid]: { ...(m[sid] ?? empty), [c]: v as RubricScore[RubricCriterion] } }));

  const setAll = (c: RubricCriterion, v: number) =>
    setMarks((m) => {
      const next = { ...m };
      for (const s of roster) next[s.id] = { ...(next[s.id] ?? empty), [c]: v as RubricScore[RubricCriterion] };
      return next;
    });

  // TODO(backend): PUT /api/classes/:id/marks — until then marks live only on this screen.
  const save = () => setSaved("Demo mode: marks are not stored yet.");

  const avg = (sid: string) => {
    const m = marks[sid] ?? empty;
    const vals: number[] = rubricCriteria.map((c) => m[c] as number).filter((v) => v > 0);
    return vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1) : "–";
  };

  return (
    <div>
      <div className="card" style={{ padding: 20, display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-end" }}>
        <div className="fld" style={{ flex: "0 1 220px" }}>
          <label htmlFor="cls">Class</label>
          <select id="cls" value={classId} onChange={(e) => setClassId(e.target.value)}>
            {classes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <p className="sm" style={{ flex: "1 1 200px" }}>
          Project: <strong>{cls.module}</strong>
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button type="button" className="btn" onClick={save}>
            Save marks
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() =>
              downloadCsv(
                `marks-${cls.id}-${cls.module.replace(/\s+/g, "-")}.csv`,
                roster.map((s) => ({ roll: s.roll, student: s.name, class: cls.label, project: cls.module, ...(marks[s.id] ?? empty), average: avg(s.id) })),
              )
            }
          >
            Export CSV
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
            Print / PDF
          </button>
        </div>
        <p className="sm" role="status" style={{ flex: "1 1 100%", minHeight: 18, color: "var(--muted)" }}>
          {saved}
        </p>
      </div>

      <div className="table-box" style={{ marginTop: 20 }}>
        <table className="tbl" style={{ minWidth: 760 }}>
          <caption className="sr-only">
            Rubric marks for {cls.label}, {cls.module}
          </caption>
          <thead>
            <tr>
              <th scope="col">Roll</th>
              <th scope="col">Student</th>
              {rubricCriteria.map((c) => (
                <th key={c} scope="col">
                  {label[c]}
                </th>
              ))}
              <th scope="col">Avg</th>
            </tr>
            <tr>
              <td colSpan={2} className="sm muted">
                Set for everyone →
              </td>
              {rubricCriteria.map((c) => (
                <td key={c}>
                  <select
                    aria-label={`Set ${label[c]} for the whole class`}
                    defaultValue=""
                    onChange={(e) => {
                      if (e.target.value) setAll(c, Number(e.target.value));
                      e.target.value = "";
                    }}
                    style={{ minHeight: 40, borderRadius: 6, border: "1px solid var(--line)", padding: "0 8px", background: "var(--ground)" }}
                  >
                    <option value="">All…</option>
                    {[1, 2, 3, 4].map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </td>
              ))}
              <td />
            </tr>
          </thead>
          <tbody>
            {roster.map((s) => (
              <tr key={s.id}>
                <td>{s.roll}</td>
                <th scope="row" style={{ textAlign: "left", fontWeight: 600 }}>
                  {s.name}
                </th>
                {rubricCriteria.map((c) => {
                  const v = (marks[s.id] ?? empty)[c];
                  return (
                    <td key={c}>
                      <select
                        aria-label={`${label[c]} for ${s.name}`}
                        value={v}
                        onChange={(e) => setOne(s.id, c, Number(e.target.value))}
                        style={{
                          minHeight: 40,
                          minWidth: 64,
                          borderRadius: 6,
                          border: "1px solid var(--line)",
                          padding: "0 8px",
                          background: v === 4 ? "var(--red)" : v === 3 ? "#111" : "#fff",
                          color: v >= 3 ? "#fff" : "#111",
                        }}
                      >
                        <option value={0}>–</option>
                        {[1, 2, 3, 4].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </td>
                  );
                })}
                <td style={{ fontWeight: 600 }}>{avg(s.id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
