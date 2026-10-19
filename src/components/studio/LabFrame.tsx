import { Chip } from "./Chip";
import { StudioTopBar } from "./StudioTopBar";

/** Page frame for lab, question and Thinking Spot screens (no sidebar, like the renders). */
export function LabFrame({
  dark,
  chips = [],
  right,
  title,
  red,
  intro,
  kicker,
  back,
  children,
}: {
  /** Where the back link goes (defaults to the student's journey). */
  back?: { href: string; label: string };
  /** Small line above the title (e.g. chapter and ethics tag). */
  kicker?: string;
  dark?: boolean;
  chips?: { text: string; solid?: boolean; yellow?: boolean }[];
  /** Replaces the chips on the right of the top bar (e.g. a step bar). */
  right?: React.ReactNode;
  title: React.ReactNode;
  red: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={`studio-page${dark ? " dark" : ""}`}>
      <main id="main" className="wrap" style={{ paddingBottom: 80 }}>
        <StudioTopBar backHref={back?.href} backLabel={back?.label}>
          {right ?? (
            <p style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: 0 }}>
              {chips.map((c) => (
                <Chip key={c.text} tone={c.yellow ? "yellow" : c.solid ? "solid" : "outline"}>
                  {c.text}
                </Chip>
              ))}
            </p>
          )}
        </StudioTopBar>
        {kicker && (
          <p className="sm muted" style={{ marginTop: 8 }}>
            {kicker}
          </p>
        )}
        <div className="lab-head">
          <h1 className="lab-title">
            {title}
            <span className="red">{red}</span>
          </h1>
          {intro && (
            <div className="body" style={{ maxWidth: 420 }}>
              {intro}
            </div>
          )}
        </div>
        {children}
      </main>
    </div>
  );
}
