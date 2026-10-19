"use client";

import { useState } from "react";
import { useValue } from "@/lib/learning/work-store";
import type { SavedMarks } from "@/features/studio/projects/ProjectWorkspace";

type Demo = {
  child: string;
  hoursThisWeek: number;
  hoursThisYear: number;
  made: { count: number; list: string };
  growing: string;
  featured: { title: string; body: string; approvedBy: string };
  tryAtHome: { title: string; body: string; minutes: number };
  showcase: { title: string; body: string };
};

// Hindi is a DRAFT for review by a native speaker before launch.
const T = {
  en: {
    week: (n: string) => `${n}’s week in CT & AI`,
    hours: "Hours this week",
    ofYear: (h: number) => `${h} of 100 h this year`,
    made: "Things she made",
    growing: "Growing strength",
    featured: (by: string) => `Featured work · approved by ${by}`,
    tryAt: (m: number) => `Try at home · ${m} minutes`,
    decide: "You decide",
    privacy: "Privacy choices",
    wall: (n: string) => `Show ${n}’s work on her class wall (first name only)`,
    portfolio: "Let me see her full portfolio",
    photos: "Allow photos of her at the CT Fair",
    otp: "Changes are confirmed with a one-time code sent to your phone. Demo: changes save straight away.",
    showcase: "Showcase day",
    attend: "I’ll attend",
    attending: "Attending ✓",
    privateNote: (n: string) => `${n} has chosen to keep her portfolio private right now. Ask her about it.`,
    marks: "Project 1 · teacher’s marks",
  },
  hi: {
    week: (n: string) => `सीटी और एआई में ${n} का सप्ताह`,
    hours: "इस सप्ताह के घंटे",
    ofYear: (h: number) => `इस वर्ष 100 में से ${h} घंटे`,
    made: "उसने क्या बनाया",
    growing: "बढ़ती क्षमता",
    featured: (by: string) => `चुना हुआ काम · ${by} द्वारा स्वीकृत`,
    tryAt: (m: number) => `घर पर आज़माएँ · ${m} मिनट`,
    decide: "आप तय करें",
    privacy: "गोपनीयता के विकल्प",
    wall: (n: string) => `${n} का काम कक्षा की दीवार पर दिखाएँ (केवल पहला नाम)`,
    portfolio: "मुझे उसका पूरा पोर्टफ़ोलियो देखने दें",
    photos: "सीटी मेले में उसकी तस्वीरें लेने की अनुमति दें",
    otp: "बदलाव आपके फ़ोन पर भेजे गए एक बार के कोड से पक्के होते हैं। डेमो: बदलाव तुरंत सहेजे जाते हैं।",
    showcase: "प्रदर्शनी दिवस",
    attend: "हम आएँगे",
    attending: "आ रहे हैं ✓",
    privateNote: (n: string) => `${n} ने अभी अपना पोर्टफ़ोलियो निजी रखा है। उससे इसके बारे में बात करें।`,
    marks: "प्रोजेक्ट 1 · शिक्षक के अंक",
  },
};

function Switch({ on, onChange, label }: { on: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, borderTop: "1px solid var(--line)", padding: "4px 0" }}>
      <span className="sm">{label}</span>
      <button type="button" role="switch" aria-checked={on} aria-label={label} onClick={() => onChange(!on)} style={{ width: 56, height: 44, border: 0, padding: 0, cursor: "pointer", background: "transparent", display: "inline-flex", alignItems: "center", flex: "none" }}>
        <span aria-hidden="true" style={{ position: "relative", width: 52, height: 30, borderRadius: 999, background: on ? "var(--red-deep)" : "var(--grey)" }}>
          <span style={{ position: "absolute", top: 3, left: on ? 25 : 3, width: 24, height: 24, borderRadius: 999, background: "#fff" }} />
        </span>
      </button>
    </li>
  );
}

export function ParentView({ d, rubric }: { d: Demo; rubric: { id: string; name: string }[] }) {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const t = T[lang];
  const [consent, setConsent] = useValue("parent-consent", { wall: true, portfolio: true, photos: false });
  const [attend, setAttend] = useValue("parent-attend", false);
  const [shared] = useValue("portfolio-share-parents", true);
  const [marks] = useValue<SavedMarks>("marks-data-detectives", null);

  return (
    <div lang={lang}>
      <div className="row-between" style={{ alignItems: "center", padding: "18px 0" }}>
        <p className="sm" style={{ fontWeight: 700 }}>makeracle · Parent</p>
        <div className="toggles" role="group" aria-label="Language" style={{ background: "var(--paper)", borderRadius: 999, padding: 4 }}>
          {(
            [
              ["en", "English"],
              ["hi", "हिन्दी"],
            ] as const
          ).map(([id, label]) => (
            <button key={id} type="button" lang={id} className="tog" aria-pressed={lang === id} onClick={() => setLang(id)} style={{ background: lang === id ? undefined : "transparent" }}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <h1 className="s-title" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>{t.week(d.child)}</h1>

      <div className="grid g3" style={{ gap: 12, marginTop: 18 }}>
        <div className="s-card-ink">
          <p className="sm" style={{ color: "var(--muted-on-ink)" }}>{t.hours}</p>
          <p className="s-title" style={{ fontSize: 40 }}>{d.hoursThisWeek} H</p>
          <p className="sm">{t.ofYear(d.hoursThisYear)}</p>
        </div>
        <div className="s-card">
          <p className="sm muted">{t.made}</p>
          <p className="s-title" style={{ fontSize: 40 }}>{d.made.count}</p>
          <p className="sm">{d.made.list}</p>
        </div>
        <div className="s-card-yellow">
          <p className="sm">{t.growing}</p>
          <p className="s-title" style={{ fontSize: 28, marginTop: 6 }}>{d.growing}</p>
        </div>
      </div>

      {shared ? (
        <section className="s-card" style={{ marginTop: 12, display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
          <svg width="100" height="100" viewBox="0 0 100 100" aria-hidden="true" style={{ background: "var(--red-deep)", borderRadius: 6, flex: "none" }}>
            <circle cx="50" cy="50" r="34" fill="none" stroke="#fff" strokeDasharray="2 5" />
            <path d="M50 16 L70 78 L17 40 H83 L30 78 Z" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round" />
          </svg>
          <div style={{ flex: "1 1 260px" }}>
            <p className="sm muted">{t.featured(d.featured.approvedBy)}</p>
            <h2 className="s-title" style={{ fontSize: 26 }}>{d.featured.title}</h2>
            <p className="sm" style={{ marginTop: 6 }}>{d.featured.body}</p>
          </div>
        </section>
      ) : (
        <p className="s-card" style={{ marginTop: 12 }}>{t.privateNote(d.child)}</p>
      )}

      {marks?.parentOk && (
        <section className="s-card" style={{ marginTop: 12 }}>
          <p className="sm muted">{t.marks}</p>
          <ul style={{ listStyle: "none", margin: "6px 0 0", padding: 0 }}>
            {rubric.map((r) => (
              <li key={r.id} className="sm" style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--line)", padding: "6px 0" }}>
                <span>{r.name}</span>
                <strong>{marks.marks[r.id] ? `Level ${marks.marks[r.id]} of 4` : "–"}</strong>
              </li>
            ))}
          </ul>
          {marks.note && <p className="sm" style={{ marginTop: 6 }}>“{marks.note}”</p>}
        </section>
      )}

      <section className="s-card-ink" style={{ marginTop: 12 }}>
        <p className="sm" style={{ color: "var(--muted-on-ink)" }}>{t.tryAt(d.tryAtHome.minutes)}</p>
        <h2 className="s-title" style={{ fontSize: 26 }}>{d.tryAtHome.title}</h2>
        <p className="sm" style={{ marginTop: 6 }}>{d.tryAtHome.body}</p>
      </section>

      <section className="s-card" style={{ marginTop: 12 }} aria-labelledby="privacy">
        <p className="sm muted">{t.decide}</p>
        <h2 id="privacy" className="s-title" style={{ fontSize: 26 }}>{t.privacy}</h2>
        <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0 }}>
          <Switch on={consent.wall} onChange={(v) => setConsent({ ...consent, wall: v })} label={t.wall(d.child)} />
          <Switch on={consent.portfolio} onChange={(v) => setConsent({ ...consent, portfolio: v })} label={t.portfolio} />
          <Switch on={consent.photos} onChange={(v) => setConsent({ ...consent, photos: v })} label={t.photos} />
        </ul>
        <p className="sm muted" style={{ marginTop: 8 }}>{t.otp}</p>
      </section>

      <section className="s-card-yellow tilt-l row-between" style={{ marginTop: 12, alignItems: "center" }}>
        <div>
          <p className="sm">{t.showcase}</p>
          <h2 className="s-title" style={{ fontSize: 26 }}>{d.showcase.title}</h2>
          <p className="sm">{d.showcase.body}</p>
        </div>
        <button type="button" className="btn btn-ink" aria-pressed={attend} onClick={() => setAttend(!attend)}>
          {attend ? t.attending : t.attend}
        </button>
      </section>
    </div>
  );
}
