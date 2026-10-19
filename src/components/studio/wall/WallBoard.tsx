"use client";

import { useState } from "react";
import { Visual } from "./Visual";
import { submitPost, toggleTried, useStudio, useValue } from "@/lib/class6/store";
import type { WallPost } from "@/lib/types";

const KINDS = ["Pattern", "Riddle", "Challenge", "Mirror art", "String art", "Chart", "Magic box", "Something else"];

/**
 * Class wall. Shows only teacher-approved posts. The one reaction is
 * "I tried it" — there are no comments. A student's own posts that are still
 * waiting (or were sent back) are shown only to that student.
 */
export function WallBoard({ demo, me, teacher }: { demo: WallPost[]; me: string; teacher: string }) {
  const { posts, tried = [] } = useStudio();
  // A parent can switch off showing their child's work on the wall.
  const [consent] = useValue("parent-consent", { wall: true, portfolio: true, photos: false });
  const [filter, setFilter] = useState<"all" | "ct" | "ai">("all");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [kind, setKind] = useState(KINDS[0]);
  const [part, setPart] = useState<"ct" | "ai">("ct");
  const [sent, setSent] = useState(false);

  // My approved posts join the wall; waiting/returned ones stay private to me.
  const mine: WallPost[] = posts
    .filter((p) => p.status === "approved")
    .map((p) => ({ id: p.id, author: me, part: p.from.startsWith("AI") ? "ai" : "ct", tag: p.from.split(" · ")[0], kind: p.kind, visual: { text: p.kind, tone: "white" }, title: p.title, body: p.body, status: "approved", tried: 0, postedAt: p.at }));
  const all = [...(consent.wall ? mine : []), ...demo].filter((p) => filter === "all" || p.part === filter);
  const pending = posts.filter((p) => p.status !== "approved");

  return (
    <>
      <div className="row-between" style={{ alignItems: "center", marginBottom: 16 }}>
        <div className="toggles" role="group" aria-label="Show">
          {(
            [
              ["all", "Everything"],
              ["ct", "Computational Thinking"],
              ["ai", "AI"],
            ] as const
          ).map(([id, label]) => (
            <button key={id} type="button" className="tog" aria-pressed={filter === id} onClick={() => setFilter(id)} style={{ background: filter === id ? undefined : "var(--paper)" }}>
              {label}
            </button>
          ))}
        </div>
        <button type="button" className="btn btn-red" aria-expanded={open} aria-controls="new-post" onClick={() => (setOpen((o) => !o), setSent(false))}>
          + Post something I made
        </button>
      </div>

      {open && (
        <form
          id="new-post"
          className="s-card"
          style={{ marginBottom: 16 }}
          onSubmit={(e) => {
            e.preventDefault();
            if (title.trim().length < 3 || body.trim().length < 10) return;
            submitPost({ title: title.trim(), body: body.trim(), kind, from: part === "ai" ? "AI · class wall" : "CT · class wall" });
            setTitle("");
            setBody("");
            setSent(true);
          }}
        >
          <p className="lbl">New post · {teacher} approves it before your class sees it</p>
          <div className="form-grid" style={{ marginTop: 8 }}>
            <div className="fld">
              <label htmlFor="np-title">Title</label>
              <input id="np-title" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={60} required />
            </div>
            <div className="fld">
              <label htmlFor="np-kind">What is it?</label>
              <select id="np-kind" value={kind} onChange={(e) => setKind(e.target.value)}>
                {KINDS.map((k) => (
                  <option key={k}>{k}</option>
                ))}
              </select>
            </div>
            <fieldset className="fld full">
              <legend>Made in</legend>
              <div className="toggles" style={{ marginTop: 6 }}>
                {(["ct", "ai"] as const).map((p) => (
                  <button key={p} type="button" className="tog" aria-pressed={part === p} onClick={() => setPart(p)}>
                    {p === "ct" ? "Computational Thinking" : "AI"}
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="fld full">
              <label htmlFor="np-body">Tell your class about it</label>
              <textarea id="np-body" value={body} onChange={(e) => setBody(e.target.value)} maxLength={200} required />
              <span className="hint">No full names, phone numbers, addresses or photos of people.</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginTop: 14 }}>
            <button type="submit" className="btn btn-red" disabled={title.trim().length < 3 || body.trim().length < 10}>
              Send to {teacher}
            </button>
            <span className="sm" role="status">
              {sent ? "Sent. It appears on the wall once it’s approved." : ""}
            </span>
          </div>
        </form>
      )}

      {!consent.wall && (
        <p className="s-card-grey sm" style={{ marginBottom: 16 }} role="note">
          Your parent has chosen not to show your work on the class wall, so your approved posts are hidden from your class.
        </p>
      )}

      {pending.length > 0 && (
        <section className="s-card-grey" style={{ marginBottom: 16 }} aria-labelledby="pending">
          <p id="pending" className="lbl">
            Only you can see these
          </p>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {pending.map((p) => (
              <li key={p.id} className="sm" style={{ borderTop: "1px solid var(--line)", padding: "8px 0", display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                <span>
                  <strong>{p.title}</strong> · {p.from}
                </span>
                <span style={{ fontWeight: 700 }}>{p.status === "waiting" ? `Waiting for ${teacher}` : `Sent back: ${p.note || "please change it and post again"}`}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
        {all.map((p, i) => {
          const did = tried.includes(p.id);
          return (
            <article key={p.id} className={`s-card ${i % 3 === 0 ? "tilt-l" : i % 3 === 1 ? "" : "tilt-r"}`} style={{ padding: 14, boxShadow: "0 16px 30px -24px rgba(0,0,0,.4)" }}>
              <p className="sm" style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span>{p.tag}</span>
                <span>{p.kind}</span>
              </p>
              <Visual v={p.visual} />
              <h2 className="s-title" style={{ fontSize: 20, marginTop: 12 }}>
                {p.title}
              </h2>
              <p className="sm" style={{ marginTop: 6 }}>
                {p.body}
              </p>
              <div className="row-between" style={{ alignItems: "center", marginTop: 12, gap: 8 }}>
                <span className="sm" style={{ fontWeight: 700 }}>
                  {p.author} · approved
                </span>
                <button type="button" className="btn btn-red" aria-pressed={did} onClick={() => toggleTried(p.id)} style={{ minHeight: 44, padding: "0 14px", fontSize: 13, ...(did ? { background: "var(--ink)" } : {}) }}>
                  I tried it · {p.tried + (did ? 1 : 0)}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
