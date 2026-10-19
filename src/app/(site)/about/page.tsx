import type { Metadata } from "next";
import { AlumniBar } from "@/components/AlumniBar";
import { about, seo } from "@/content/en";

export const metadata: Metadata = {
  title: { absolute: seo.about.title },
  description: seo.about.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const { hero, story, pronunciation, team, values } = about;
  return (
    <>
      <section className="wrap" style={{ paddingTop: 80, paddingBottom: 90 }}>
        <p className="lbl">{hero.eyebrow}</p>
        <h1 className="cap" style={{ fontSize: "clamp(48px, 7vw, 116px)", lineHeight: 0.9 }}>
          {hero.title}
        </h1>
        <div className="stack" style={{ maxWidth: 680, marginTop: 40, gap: 18 }}>
          {story.map((p) => (
            <p key={p} className="lead">
              {p}
            </p>
          ))}
          <p className="sm muted">{pronunciation}</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap sec">
          <p className="lbl">{values.title}</p>
          <div className="grid g4 ruled" style={{ marginTop: 20 }}>
            {values.items.map((v, i) => (
              <div key={v}>
                <p className="cap" style={{ fontSize: 56 }}>
                  0{i + 1}
                </p>
                <h2 className="ttl" style={{ fontSize: 26, marginTop: 14 }}>
                  {v}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap sec">
        <p className="lbl">{team.title}</p>
        <div className="grid g3" style={{ marginTop: 20 }}>
          {team.members.map((m, i) => (
            <div key={i} className={i % 2 ? "tilt-r" : "tilt-l"}>
              {m.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.photo} alt={`${m.name}, ${m.role}`} style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: 6 }} />
              ) : (
                <div className="placeholder" style={{ aspectRatio: "4 / 5", background: "#fff" }}>
                  {team.photoPending}
                </div>
              )}
              <p className="ttl" style={{ fontSize: 24, marginTop: 14 }}>
                {m.name}
              </p>
              <p className="sm">{m.role}</p>
              <p className="sm muted">{m.institution}</p>
              <p className="sm" style={{ marginTop: 6 }}>
                {m.line}
              </p>
              <p className="sm" style={{ marginTop: 6 }}>
                <a href={m.linkedin} className="ul">
                  LinkedIn<span className="sr-only">: {m.name}</span>
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>

      <AlumniBar />
    </>
  );
}
