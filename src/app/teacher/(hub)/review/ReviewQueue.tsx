"use client";

import Link from "next/link";
import { useState } from "react";
import { submissions as initial } from "@/lib/mock";
import type { Submission } from "@/lib/types";

const portfolioHandle: Record<string, string> = { "8C-1": "aarav-s", "7B-4": "diya-p" };

export function ReviewQueue() {
  const [items, setItems] = useState<Submission[]>(initial);
  const [tab, setTab] = useState<"submitted" | "reviewed" | "published">("submitted");
  const [feedback, setFeedback] = useState<Record<string, string>>({});

  // TODO(backend): PATCH /api/submissions/:id { status, feedback }
  const setStatus = (id: string, status: Submission["status"]) => setItems((xs) => xs.map((x) => (x.id === id ? { ...x, status } : x)));

  const shown = items.filter((x) => x.status === tab);
  const count = (s: Submission["status"]) => items.filter((x) => x.status === s).length;

  return (
    <>
      <div className="toggles" role="tablist" aria-label="Review status">
        {(["submitted", "reviewed", "published"] as const).map((t) => (
          <button key={t} type="button" role="tab" aria-selected={tab === t} className="tog" onClick={() => setTab(t)}>
            {t === "submitted" ? "To review" : t === "reviewed" ? "Sent back" : "Published"} ({count(t)})
          </button>
        ))}
      </div>
      <div className="grid g2" style={{ marginTop: 20 }}>
        {shown.map((s) => (
          <article key={s.id} className="card stack" style={{ gap: 12 }}>
            <div className="row-between" style={{ gap: 8 }}>
              <h2 className="ttl" style={{ fontSize: 26 }}>
                {s.project}
              </h2>
              <span className="chip">{s.classId}</span>
            </div>
            <p className="sm">
              <strong>{s.studentName}</strong> · submitted {s.submittedAt}
            </p>
            <div className="placeholder" style={{ minHeight: 120 }}>
              [Project preview · demo video]
            </div>
            <p className="body">
              <strong>Reflection:</strong> “{s.reflection}”
            </p>
            {tab === "submitted" && (
              <>
                <div className="fld">
                  <label htmlFor={`fb-${s.id}`}>Feedback to student (optional)</label>
                  <textarea id={`fb-${s.id}`} value={feedback[s.id] ?? ""} onChange={(e) => setFeedback((f) => ({ ...f, [s.id]: e.target.value }))} style={{ minHeight: 70 }} />
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <button type="button" className="btn" onClick={() => setStatus(s.id, "published")}>
                    Approve &amp; publish
                  </button>
                  <button type="button" className="btn btn-ghost" onClick={() => setStatus(s.id, "reviewed")}>
                    Send back with feedback
                  </button>
                </div>
              </>
            )}
            {tab !== "submitted" && (
              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                <button type="button" className="tog" onClick={() => setStatus(s.id, "submitted")}>
                  Move back to review
                </button>
                {tab === "published" && portfolioHandle[s.studentId] && (
                  <Link href={`/p/${portfolioHandle[s.studentId]}`} className="sm" style={{ fontWeight: 600 }}>
                    View portfolio →
                  </Link>
                )}
              </div>
            )}
          </article>
        ))}
        {shown.length === 0 && <p className="body">Nothing here right now.</p>}
      </div>
    </>
  );
}
