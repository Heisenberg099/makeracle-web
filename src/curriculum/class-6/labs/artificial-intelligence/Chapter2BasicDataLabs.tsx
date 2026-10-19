"use client";

import { useState } from "react";
import { addMade, useNote } from "@/lib/learning/work-store";
import { dataAround, desktopFiles, desktopFolders } from "@/curriculum/class-6/studio/ai-practice";

/* ---------------- AI 2 · Step 1 · Data around you ---------------- */

export function DataAroundLab() {
  const [open, setOpen] = useState<string[]>([]);
  const [note, setNote] = useNote("ai2-decision");
  return (
    <div className="lab-grid">
      <section className="s-card" aria-labelledby="da-title">
        <p className="lbl">Data in our daily lives · tap each one</p>
        <h2 id="da-title" className="s-title" style={{ fontSize: 26 }}>
          What data does it collect?
        </h2>
        <ul style={{ listStyle: "none", margin: "10px 0 0", padding: 0, display: "grid", gap: 8 }}>
          {dataAround.map((d) => {
            const on = open.includes(d.activity);
            return (
              <li key={d.activity}>
                <button type="button" aria-expanded={on} onClick={() => setOpen((o) => (on ? o.filter((x) => x !== d.activity) : [...o, d.activity]))} style={{ width: "100%", textAlign: "left", border: 0, borderRadius: 6, padding: 12, minHeight: 52, cursor: "pointer", font: "inherit", background: on ? "var(--ink)" : "var(--ground)", color: on ? "#fff" : "var(--ink)" }}>
                  <span style={{ fontWeight: 700 }}>{d.activity}</span>
                  {on && (
                    <span className="sm" style={{ display: "block", marginTop: 4, color: "var(--yellow)" }}>
                      {d.data}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="sm muted" style={{ marginTop: 8 }}>
          Activities from the handbook; the data notes are Makeracle practice.
        </p>
      </section>
      <section className="s-card-yellow tilt-r" aria-labelledby="da-make">
        <p className="lbl">Make · my data decision</p>
        <p id="da-make" className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>
          Data helps us make better decisions. Write one decision you made today because of some data (a clock, marks, the weather…).
        </p>
        <div className="fld" style={{ marginTop: 10 }}>
          <label htmlFor="da-note">My decision</label>
          <textarea id="da-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="The weather app said 90% rain, so I…" style={{ background: "var(--paper)", padding: 10, borderRadius: 6 }} />
        </div>
      </section>
    </div>
  );
}

/* ---------------- AI 2 · Step 2 · Types of data ---------------- */

const TYPES = ["Numerical", "Text", "Image", "Video", "Sound"] as const;
// Examples from the handbook's types-of-data section (SH pp. 61–63).
const EXAMPLES: { text: string; type: (typeof TYPES)[number] }[] = [
  { text: "Measuring length using numbers", type: "Numerical" },
  { text: "A written address", type: "Text" },
  { text: "Emojis you use in chats", type: "Image" },
  { text: "CCTV footage", type: "Video" },
  { text: "The sound of your school bell", type: "Sound" },
  { text: "A list of names used for identification", type: "Text" },
  { text: "A picture of your favourite fruits", type: "Image" },
  { text: "An online meeting", type: "Video" },
  { text: "Listening to music", type: "Sound" },
  { text: "Counting objects", type: "Numerical" },
];

export function TypesLab() {
  const [picks, setPicks] = useState<Record<number, string>>({});
  const right = EXAMPLES.filter((e, i) => picks[i] === e.type).length;
  return (
    <section className="s-card" aria-labelledby="types-title">
      <div className="row-between" style={{ alignItems: "center" }}>
        <h2 id="types-title" className="s-title" style={{ fontSize: 26 }}>
          Sort the examples
        </h2>
        <strong className="sm" role="status">
          {right} / {EXAMPLES.length} right
        </strong>
      </div>
      <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
        {EXAMPLES.map((e, i) => (
          <li key={e.text} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 8, borderTop: "1px solid var(--line)", padding: "10px 0" }}>
            <span className="sm" style={{ fontWeight: 600 }}>
              {e.text}
            </span>
            <span style={{ display: "flex", flexWrap: "wrap", gap: 4, alignItems: "center" }} role="group" aria-label={`Type of data: ${e.text}`}>
              {TYPES.map((t) => (
                <button key={t} type="button" className="tool-btn" aria-pressed={picks[i] === t} onClick={() => setPicks((p) => ({ ...p, [i]: t }))} style={{ fontSize: 12, padding: "0 10px", ...(picks[i] === t ? { background: t === e.type ? "var(--green)" : "var(--ink)", color: "#fff" } : {}) }}>
                  {t}
                </button>
              ))}
              <span className="sm" style={{ minWidth: 56, fontWeight: 700 }}>
                {picks[i] ? (picks[i] === e.type ? "Right" : "Not yet") : ""}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------- AI 2 · Step 3 · Collect and organise ---------------- */

export function OrganiseLab({ terms }: { terms: { term: string; text: string }[] }) {
  const [where, setWhere] = useState<Record<string, string>>({});
  const right = desktopFiles.filter((f) => where[f.name] === f.folder).length;
  const done = right === desktopFiles.length;
  return (
    <div className="lab-grid">
      <section className="s-card" aria-labelledby="desk">
        <p className="lbl">Practice · the handbook’s messy desktop, shrunk to 8 files</p>
        <h2 id="desk" className="s-title" style={{ fontSize: 26 }}>
          Find the science image fast
        </h2>
        <p className="sm" style={{ marginTop: 6 }}>
          A student saved images randomly on the desktop. Put each file in the right folder.
        </p>
        <ul style={{ listStyle: "none", margin: "10px 0 0", padding: 0 }}>
          {desktopFiles.map((f) => (
            <li key={f.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, borderTop: "1px solid var(--line)", padding: "8px 0" }}>
              <label htmlFor={`f-${f.name}`} className="sm" style={{ fontFamily: "ui-monospace, monospace" }}>
                {f.name}
              </label>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <select id={`f-${f.name}`} value={where[f.name] ?? ""} onChange={(e) => setWhere((w) => ({ ...w, [f.name]: e.target.value }))} style={{ minHeight: 44, border: "1.5px solid var(--ink)", borderRadius: 6, padding: "0 8px", background: "var(--paper)", font: "inherit" }}>
                  <option value="">Desktop</option>
                  {desktopFolders.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
                <span className="sm" style={{ minWidth: 20, fontWeight: 700 }} aria-label={where[f.name] ? (where[f.name] === f.folder ? "right" : "not yet") : undefined}>
                  {where[f.name] ? (where[f.name] === f.folder ? "✓" : "?") : ""}
                </span>
              </span>
            </li>
          ))}
        </ul>
        <p className={`status-bar${done ? " ok" : ""}`} role="status" style={{ marginTop: 10 }}>
          {done ? "Organised. Now the science image is one click away." : `${right} of ${desktopFiles.length} files in the right folder`}
        </p>
      </section>
      <section className="s-card-ink" aria-labelledby="org-terms">
        <p className="lbl">Organising data · from the handbook</p>
        <h2 id="org-terms" className="s-title" style={{ fontSize: 26 }}>
          Four ways to organise
        </h2>
        <dl style={{ margin: "10px 0 0" }}>
          {terms.map((t) => (
            <div key={t.term} style={{ borderTop: "1px solid var(--ink-2)", padding: "10px 0" }}>
              <dt style={{ fontWeight: 700, color: "var(--yellow)" }}>{t.term}</dt>
              <dd className="sm" style={{ margin: "2px 0 0" }}>
                {t.text}
              </dd>
            </div>
          ))}
        </dl>
        <p className="sm" style={{ marginTop: 8 }}>
          Which of these did you just do with the desktop files?
        </p>
      </section>
    </div>
  );
}

/* ---------------- AI 2 · Step 4 · Lemonade lab ---------------- */

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;
const BAR = ["var(--yellow)", "var(--red-deep)", "var(--grey)"];

export function LemonadeLab({ sales, plantation }: { sales: { product: string; days: number[]; total: number }[]; plantation: { cls: string; trees: number }[] }) {
  const [view, setView] = useState<"Total" | (typeof DAYS)[number]>("Total");
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [title, setTitle] = useState("");
  const vals = sales.map((s) => (view === "Total" ? s.total : s.days[DAYS.indexOf(view)]));
  const max = view === "Total" ? 80 : 30;
  const axesOk = x.trim().toLowerCase() === "products" && y.trim().toLowerCase() === "number sold";
  const tasks = [
    { text: "Create a bar chart of total sales", ok: view === "Total" },
    { text: "Label X-axis “Products”, Y-axis “Number Sold”", ok: axesOk },
    { text: "Give the chart a business title", ok: title.trim().length >= 4 },
  ];
  const allDone = tasks.every((t) => t.ok);
  const best = sales.reduce((a, b) => (b.total > a.total ? b : a));

  const [syms, setSyms] = useState<number[]>(plantation.map(() => 0));
  const [winner, setWinner] = useState("");
  const [saved, setSaved] = useState(false);
  const allTrees = plantation.every((p, i) => syms[i] * 5 === p.trees);
  const realWinner = plantation.reduce((a, b) => (b.trees > a.trees ? b : a)).cls;

  return (
    <>
      <div className="lab-grid">
        <section className="s-card" aria-labelledby="case1">
          <p className="lbl">Case 1 · Aana &amp; Sana’s lemonade stall at the school fair</p>
          <h2 id="case1" className="s-title" style={{ fontSize: 26 }}>
            You run the business
          </h2>
          <div className="table-box" style={{ padding: 0, marginTop: 8 }}>
            <table className="tbl" style={{ fontSize: 13 }}>
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  {DAYS.map((d) => (
                    <th key={d} scope="col">
                      {d}
                    </th>
                  ))}
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((s) => (
                  <tr key={s.product}>
                    <th scope="row" style={{ textAlign: "left", fontWeight: 400 }}>
                      {s.product}
                    </th>
                    {s.days.map((v, i) => (
                      <td key={i}>{v}</td>
                    ))}
                    <td style={{ fontWeight: 700 }}>{s.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="sm muted" style={{ marginTop: 10 }}>
            The task (from the handbook)
          </p>
          <ul style={{ listStyle: "none", margin: "6px 0 0", padding: 0, display: "grid", gap: 6 }}>
            {tasks.map((t) => (
              <li key={t.text} className="sm" style={{ fontWeight: 700, padding: "10px 12px", borderRadius: 999, background: t.ok ? "var(--ink)" : "var(--ground)", color: t.ok ? "#fff" : "var(--ink)" }}>
                {t.ok ? "✓" : "○"} {t.text}
              </li>
            ))}
          </ul>
          <div className="form-grid" style={{ marginTop: 12, gap: 12 }}>
            <div className="fld">
                <label htmlFor="ax-x">X-axis label</label>
                <input id="ax-x" value={x} onChange={(e) => setX(e.target.value)} placeholder="Products" />
            </div>
            <div className="fld">
                <label htmlFor="ax-y">Y-axis label</label>
                <input id="ax-y" value={y} onChange={(e) => setY(e.target.value)} placeholder="Number Sold" />
            </div>
            <div className="fld full">
              <label htmlFor="ch-title">Business title for your chart</label>
              <input id="ch-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Which item should we make more of?" />
            </div>
          </div>
        </section>
        <section className="s-card-ink" aria-labelledby="chart-title">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }} role="group" aria-label="Show">
            {(["Total", ...DAYS] as const).map((d) => (
              <button key={d} type="button" className="tool-btn" aria-pressed={view === d} onClick={() => setView(d)} style={view === d ? { background: "#fff", color: "var(--ink)" } : undefined}>
                {d}
              </button>
            ))}
          </div>
          <h2 id="chart-title" className="s-title" style={{ fontSize: 24, marginTop: 12 }}>
            {title.trim() || (view === "Total" ? "Total sold, Monday to Friday" : `Sold on ${view}`)}
          </h2>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 220, borderLeft: "1.5px solid var(--muted-on-ink)", borderBottom: "1.5px solid var(--muted-on-ink)", padding: "0 12px", marginTop: 12 }} role="img" aria-label={`Bar chart: ${sales.map((s, i) => `${s.product} ${vals[i]}`).join(", ")}`}>
            {sales.map((s, i) => (
              <div key={s.product} style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span style={{ textAlign: "center", fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 4 }}>{vals[i]}</span>
                <span style={{ height: `${(vals[i] / max) * 92}%`, background: BAR[i], borderRadius: "3px 3px 0 0" }} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, padding: "6px 12px 0" }}>
            {sales.map((s) => (
              <span key={s.product} className="sm" style={{ flex: 1, textAlign: "center" }}>
                {s.product}
              </span>
            ))}
          </div>
          <div className="row-between" style={{ marginTop: 6 }}>
            <span className="sm" style={{ color: "var(--muted-on-ink)" }}>
              Y-axis: {y || "(add a label)"}
            </span>
            <span className="sm" style={{ color: "var(--muted-on-ink)" }}>
              X-axis: {x || "(add a label)"}
            </span>
          </div>
          <p className="sm" role="status" style={{ marginTop: 12, padding: "10px 12px", borderRadius: 6, background: allDone ? "var(--yellow)" : "var(--ink-2)", color: allDone ? "var(--ink)" : "#fff", fontWeight: 700 }}>
            {allDone ? `Decide: ${best.product} sold the most (${best.total}). Make more of it next time?` : "Finish the three tasks to see what the chart helps you decide."}
          </p>
        </section>
      </div>

      <section className="s-card" style={{ marginTop: 16 }} aria-labelledby="case2">
        <div className="row-between" style={{ alignItems: "center" }}>
          <div>
            <p className="lbl">Case 2 · Park Valley School Eco Club plantation drive</p>
            <h2 id="case2" className="s-title" style={{ fontSize: 26 }}>
              Build the pictogram
            </h2>
          </div>
          <strong className="sm">Key: 1 tree symbol = 5 trees</strong>
        </div>
        <p className="sm" style={{ marginTop: 6 }}>
          Data: {plantation.map((p) => `${p.cls} planted ${p.trees}`).join(", ")}. Add the right number of tree symbols for each class.
        </p>
        <ul style={{ listStyle: "none", margin: "10px 0 0", padding: 0 }}>
          {plantation.map((p, i) => {
            const ok = syms[i] * 5 === p.trees;
            return (
              <li key={p.cls} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, borderTop: "1px solid var(--line)", padding: "10px 0" }}>
                <strong style={{ width: 70 }}>{p.cls}</strong>
                <button type="button" className="tool-btn" aria-label={`Remove a tree from ${p.cls}`} onClick={() => setSyms((s) => s.map((v, j) => (j === i ? Math.max(0, v - 1) : v)))}>
                  −
                </button>
                <button type="button" className="tool-btn ink" aria-label={`Add a tree to ${p.cls}`} onClick={() => setSyms((s) => s.map((v, j) => (j === i ? Math.min(8, v + 1) : v)))}>
                  +
                </button>
                <span style={{ display: "flex", gap: 4, flex: "1 1 160px" }} role="img" aria-label={`${syms[i]} tree symbols`}>
                  {Array.from({ length: syms[i] }, (_, k) => (
                    <svg key={k} width="20" height="24" viewBox="0 0 20 24" aria-hidden="true">
                      <path d="M10 1 L18 12 H13 L19 19 H1 L7 12 H2 Z" fill="var(--green)" />
                      <rect x="8.5" y="19" width="3" height="4" fill="var(--green)" />
                    </svg>
                  ))}
                </span>
                <span className="sm" style={{ fontWeight: 700, color: ok ? "var(--green)" : "var(--ink)" }}>
                  {ok ? `${p.trees} trees ✓` : `${syms[i] * 5} trees so far`}
                </span>
              </li>
            );
          })}
        </ul>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", marginTop: 12 }}>
          <label htmlFor="winner" style={{ fontWeight: 700 }}>
            Which class is the winner?
          </label>
          <select id="winner" value={winner} onChange={(e) => setWinner(e.target.value)} style={{ minHeight: 44, border: "1.5px solid var(--ink)", borderRadius: 6, padding: "0 8px", background: "var(--paper)", font: "inherit" }}>
            <option value="">Choose…</option>
            {plantation.map((p) => (
              <option key={p.cls}>{p.cls}</option>
            ))}
          </select>
          <button
            type="button"
            className="btn btn-red"
            disabled={!allTrees || !winner || saved}
            onClick={() => {
              addMade({ title: "Eco Club pictogram", detail: plantation.map((p, i) => `${p.cls} ${syms[i]} symbols`).join(", ") + `; winner: ${winner}`, from: "AI 2 · Lemonade lab" });
              setSaved(true);
            }}
          >
            {saved ? "Submitted to portfolio" : "Submit to portfolio"}
          </button>
          <span className="sm" role="status" style={{ fontWeight: 700 }}>
            {winner && allTrees ? (winner === realWinner ? "Right: the most symbols means the most trees." : "Not yet: count the symbols again.") : !allTrees ? "Get every class right first." : ""}
          </span>
        </div>
      </section>
    </>
  );
}
