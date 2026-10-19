import type { Metadata } from "next";
import { Logo } from "@/components/brand/Logo";
import { aiChapters, ctChapters, curriculum } from "@/curriculum/class-6";
import { class6Students } from "@/lib/demo-data";
import { SignInForm } from "@/features/auth/SignInForm";

export const metadata: Metadata = { title: "Sign in", robots: { index: false } };

const TONES = [
  ["var(--ink)", "#fff"],
  ["var(--red-deep)", "#fff"],
  ["var(--yellow)", "var(--ink)"],
  ["var(--muted)", "#fff"],
  ["var(--red-dark)", "#fff"],
  ["var(--green)", "#fff"],
  ["var(--grey)", "var(--ink)"],
  ["var(--pink)", "var(--ink)"],
];

export default function SignInPage() {
  // DEMO: class 6B pictures (initials only; the label is first name + last initial).
  const pictures = class6Students
    .filter((s) => s.classId === "6B")
    .map((s, i) => ({ id: s.id, initial: s.name[0], label: s.name, tone: TONES[i % TONES.length][0], fg: TONES[i % TONES.length][1] }));
  const t = curriculum.timeAllocation;
  return (
    <main id="main" style={{ minHeight: "100vh", display: "flex", flexWrap: "wrap" }}>
      <section style={{ flex: "1 1 420px", background: "var(--red-deep)", color: "#fff", padding: "40px var(--gutter)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 40 }}>
        <Logo tone="dark" size={34} />
        <p className="s-title" style={{ fontSize: "clamp(48px, 7vw, 96px)", color: "#fff" }}>
          From curiosity
          <br />
          to creation.
        </p>
        <dl style={{ display: "flex", flexWrap: "wrap", gap: 32, margin: 0 }}>
          {[
            [`${ctChapters.length} + ${aiChapters.length}`, "CT and AI chapters, Class 6"],
            [`${t.projects.count} × ${t.projects.hoursEach} H`, "real projects"],
            ["0", "student emails or phone numbers needed"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="s-title" style={{ fontSize: 32 }}>
                {n}
              </dt>
              <dd className="sm" style={{ margin: 0 }}>
                {l}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section style={{ flex: "1 1 420px", padding: "40px var(--gutter)", background: "var(--ground)" }}>
        <div style={{ maxWidth: 420 }}>
          <p className="demo-bar" role="note">
            Demo sign-in. Class code {"6B-KAP-27"} works with any picture and any 4-digit PIN.
          </p>
          <SignInForm pictures={pictures} demoCode="6B-KAP-27" />
        </div>
      </section>
    </main>
  );
}
