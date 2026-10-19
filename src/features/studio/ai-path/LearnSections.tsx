import { Figure } from "@/components/ui/Figure";
import type { AIBlock, AISection } from "@/curriculum/class-6";

function Block({ b }: { b: AIBlock }) {
  switch (b.kind) {
    case "p":
      return <p className="body" style={{ marginTop: 10 }}>{b.text}</p>;
    case "list":
      return (
        <div style={{ marginTop: 10 }}>
          {b.title && <p className="sm" style={{ fontWeight: 700 }}>{b.title}</p>}
          <ul className="q-details">{b.items.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      );
    case "terms":
      return (
        <dl style={{ margin: "10px 0 0" }}>
          {b.items.map((t) => (
            <div key={t.term} style={{ marginTop: 8 }}>
              <dt className="sm" style={{ fontWeight: 700 }}>{t.term}</dt>
              <dd className="body" style={{ margin: "2px 0 0" }}>{t.text}</dd>
            </div>
          ))}
        </dl>
      );
    case "table":
      return (
        <div className="table-box" style={{ marginTop: 12, padding: "4px 12px 12px" }}>
          <table className="tbl">
            {b.caption && <caption className="sm muted" style={{ textAlign: "left", padding: "8px 0" }}>{b.caption}</caption>}
            <thead><tr>{b.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>{b.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    case "example":
      return (
        <div className="s-card-grey" style={{ marginTop: 12, padding: 14 }}>
          {b.title && <p className="sm" style={{ fontWeight: 700 }}>{b.title}</p>}
          {b.lines.map((l) => <p key={l} className="sm" style={{ marginTop: 6 }}>{l}</p>)}
        </div>
      );
    case "keyConcept":
      return (
        <div className="s-card-yellow" style={{ marginTop: 12, padding: 14 }}>
          <p className="lbl">Key concept</p>
          <p className="sm">{b.text}</p>
        </div>
      );
    case "figure":
      return <div style={{ marginTop: 12 }}><Figure figure={b.figure} /></div>;
  }
}

/** The handbook text behind a step, one expandable section per heading. */
export function LearnSections({ sections }: { sections: AISection[] }) {
  if (!sections.length) return null;
  return (
    <section className="s-card" aria-labelledby="from-hb" style={{ marginTop: 16 }}>
      <p id="from-hb" className="lbl">From the handbook · read along</p>
      <div className="faq" style={{ borderTopWidth: 1 }}>
        {sections.map((s) => (
          <details key={s.id}>
            <summary className="ttl" style={{ fontSize: 22 }}>{s.heading}</summary>
            {s.blocks.map((b, i) => <Block key={i} b={b} />)}
            <p className="sm muted" style={{ marginTop: 10 }}>Student Handbook p. {Array.isArray(s.page.sh) ? s.page.sh.join("–") : s.page.sh}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
