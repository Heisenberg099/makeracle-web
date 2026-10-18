"use client";

import Link from "next/link";
import { useState } from "react";
import { bands, courses, programmeTypes, type ProgrammeType } from "@/content/programmes";
import styles from "./programmes.module.css";

export function CourseCatalog() {
  const [type, setType] = useState<ProgrammeType | "All">("All");
  const [band, setBand] = useState<string>("All");

  const shown = courses.filter((c) => (type === "All" || c.types.includes(type)) && (band === "All" || c.band === band));

  return (
    <div>
      <div role="group" aria-label="Filter by programme type" className="toggles">
        {(["All", ...programmeTypes] as const).map((t) => (
          <button key={t} type="button" className="tog" aria-pressed={type === t} onClick={() => setType(t)}>
            {t}
          </button>
        ))}
      </div>
      <div role="group" aria-label="Filter by class band" className="toggles" style={{ marginTop: 10 }}>
        {["All", ...bands.map((b) => b.id)].map((b) => (
          <button key={b} type="button" className="tog tog-red" aria-pressed={band === b} onClick={() => setBand(b)}>
            {b === "All" ? "All classes" : `Classes ${b.replace("-", "–")}`}
          </button>
        ))}
      </div>

      <p className="sm muted" role="status" style={{ marginTop: 18 }}>
        {shown.length} {shown.length === 1 ? "course" : "courses"}
      </p>
      <div className={styles.courses}>
        {shown.map((c) => (
          <Link key={c.slug} href={`/programmes/${c.slug}`} className={styles.course}>
            <p className="lbl" style={{ margin: 0 }}>
              {c.classes} · {c.track} · {c.duration}
            </p>
            <h3 className="ttl" style={{ fontSize: 34 }}>
              {c.name}
            </h3>
            <p className="body">{c.tagline}.</p>
            <div>
              {c.types.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <span className="sm" style={{ fontWeight: 600, marginTop: "auto" }}>
              View course →
            </span>
          </Link>
        ))}
        {shown.length === 0 && <p className="body">No courses match yet — more are on the way. Try another filter.</p>}
      </div>
    </div>
  );
}
