"use client";
/**
 * The student's own work in the Studio: attempts, hints used, explanations,
 * things made, and posts waiting for teacher approval.
 *
 * DEMO STORAGE: kept in this browser's localStorage so every activity works
 * without a backend. The backend replaces `load`/`save` with API calls; the
 * hooks and record shapes stay the same.
 */
import { useCallback, useSyncExternalStore } from "react";

export type Attempt = {
  choice: string[];
  explanation: string;
  correct: boolean | null;
  tries: number;
  hints: number;
  at: string;
};

export type Post = {
  id: string;
  title: string;
  body: string;
  kind: string; // "Pattern", "Riddle", "Rangoli card", …
  from: string; // where it was made, e.g. "CT 5 · Circle of 12"
  status: "waiting" | "approved" | "returned";
  /** Teacher's note when a post is sent back. */
  note?: string;
  at: string;
};

export type Made = { id: string; title: string; detail: string; from: string; at: string };

type State = {
  attempts: Record<string, Attempt>;
  posts: Post[];
  made: Made[];
  notes: Record<string, string>;
  /** Posts this student reacted "I tried it" to. */
  tried: string[];
  /** Small saved values: tallies, hours, checklists, switches. */
  values: Record<string, unknown>;
};

const KEY = "makeracle.c6.studio";
const EVENT = "makeracle:c6";
const empty: State = { attempts: {}, posts: [], made: [], notes: {}, tried: [], values: {} };

let cache: State | null = null;
let cacheRaw: string | null = null;

function load(): State {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw === cacheRaw && cache) return cache;
    cacheRaw = raw;
    cache = raw ? { ...empty, ...JSON.parse(raw) } : empty;
    return cache!;
  } catch {
    return cache ?? empty;
  }
}

function save(next: State) {
  try {
    const raw = JSON.stringify(next);
    window.localStorage.setItem(KEY, raw);
    cacheRaw = raw;
  } catch {
    /* storage full or blocked — keep in memory for this visit */
  }
  cache = next;
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

export function useStudio() {
  return useSyncExternalStore(subscribe, load, () => empty);
}

export function useAttempt(id: string) {
  const state = useStudio();
  const attempt = state.attempts[id];
  const update = useCallback(
    (patch: Partial<Attempt>) => {
      const s = load();
      const prev = s.attempts[id] ?? { choice: [], explanation: "", correct: null, tries: 0, hints: 0, at: "" };
      save({ ...s, attempts: { ...s.attempts, [id]: { ...prev, ...patch, at: new Date().toISOString() } } });
    },
    [id],
  );
  return [attempt, update] as const;
}

export function useNote(id: string) {
  const state = useStudio();
  const set = useCallback((text: string) => {
    const s = load();
    save({ ...s, notes: { ...s.notes, [id]: text } });
  }, [id]);
  return [state.notes[id] ?? "", set] as const;
}

const uid = () => Math.random().toString(36).slice(2, 10);

/** Send something to the class wall. It waits for the teacher before anyone sees it. */
export function submitPost(p: Omit<Post, "id" | "status" | "at">) {
  const s = load();
  save({ ...s, posts: [{ ...p, id: uid(), status: "waiting", at: new Date().toISOString() }, ...s.posts] });
}

/** Keep something the student made, for their portfolio. */
export function addMade(m: Omit<Made, "id" | "at">) {
  const s = load();
  save({ ...s, made: [{ ...m, id: uid(), at: new Date().toISOString() }, ...s.made] });
}

export async function checkAnswer(body: unknown): Promise<boolean> {
  const res = await fetch("/api/curriculum/class-6/check", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  if (!res.ok) throw new Error("check failed");
  const data = (await res.json()) as { correct: boolean };
  return data.correct;
}

/** "I tried it" — the only reaction on the class wall. */
export function toggleTried(postId: string) {
  const s = load();
  save({ ...s, tried: s.tried.includes(postId) ? s.tried.filter((x) => x !== postId) : [...s.tried, postId] });
}

/** Teacher action (demo: same device): approve a post or send it back with a note. */
export function setPostStatus(id: string, status: Post["status"], note?: string) {
  const s = load();
  save({ ...s, posts: s.posts.map((p) => (p.id === id ? { ...p, status, note } : p)) });
}

/** A small saved value (JSON-safe). */
export function useValue<T>(key: string, fallback: T) {
  const state = useStudio();
  const value = (key in state.values ? state.values[key] : fallback) as T;
  const set = useCallback(
    (next: T | ((prev: T) => T)) => {
      const s = load();
      const prev = (key in s.values ? s.values[key] : fallback) as T;
      const v = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
      save({ ...s, values: { ...s.values, [key]: v } });
    },
    // fallback is a literal at each call site
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  );
  return [value, set] as const;
}
