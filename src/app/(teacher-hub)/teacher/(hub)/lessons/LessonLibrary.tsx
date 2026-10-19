"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { lessons } from "@/lib/demo-data";

export function LessonLibrary() {
  const [track, setTrack] = useState("All");
  const [q, setQ] = useState("");
  const [unpluggedOnly, setUnpluggedOnly] = useState(false);

  const tracks = useMemo(() => ["All", ...Array.from(new Set(lessons.map((l) => l.track)))], []);
  const shown = lessons.filter(
    (l) =>
      (track === "All" || l.track === track) &&
      (!unpluggedOnly || l.unplugged) &&
      (q === "" || `${l.title} ${l.module} ${l.competency}`.toLowerCase().includes(q.toLowerCase())),
  );

  const modules = Array.from(new Set(shown.map((l) => l.module)));

  return (
    <>
      <div className="card" style={{ padding: 20, display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-end" }}>
        <div className="fld" style={{ flex: "1 1 260px" }}>
          <label htmlFor="lsearch">Search title, module or CBSE competency</label>
          <input id="lsearch" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. loops, AI-7" />
        </div>
        <div className="toggles" role="group" aria-label="Track">
          {tracks.map((t) => (
            <button key={t} type="button" className="tog" aria-pressed={track === t} onClick={() => setTrack(t)}>
              {t}
            </button>
          ))}
        </div>
        <label className="check">
          <input type="checkbox" checked={unpluggedOnly} onChange={(e) => setUnpluggedOnly(e.target.checked)} />
          Unplugged only
        </label>
      </div>

      {modules.map((m) => (
        <section key={m} style={{ marginTop: 32 }}>
          <h2 className="ttl" style={{ fontSize: 26, marginBottom: 12 }}>
            {m}
          </h2>
          <div className="table-box">
            <table className="tbl" style={{ minWidth: 640 }}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Lesson</th>
                  <th scope="col">Time</th>
                  <th scope="col">CBSE competency</th>
                  <th scope="col">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {shown
                  .filter((l) => l.module === m)
                  .map((l) => (
                    <tr key={l.id}>
                      <td>{l.order}</td>
                      <td>
                        <Link href={`/teacher/lessons/${l.id}`} style={{ fontWeight: 600 }}>
                          {l.title}
                        </Link>
                        {l.unplugged && (
                          <span className="chip" style={{ marginLeft: 8 }}>
                            unplugged
                          </span>
                        )}
                      </td>
                      <td>{l.minutes} min</td>
                      <td className="muted">{l.competency}</td>
                      <td style={{ textAlign: "right" }}>
                        <Link href={`/teacher/present/${l.id}`} className="sm" style={{ fontWeight: 600 }}>
                          Projector mode →
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
      {shown.length === 0 && (
        <p className="body" style={{ marginTop: 24 }}>
          No lessons match. Clear the search or pick another track.
        </p>
      )}
    </>
  );
}
