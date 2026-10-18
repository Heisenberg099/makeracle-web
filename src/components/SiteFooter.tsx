import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/content/site";
import { NewsletterForm } from "./forms/NewsletterForm";

const cols = [
  {
    title: "Platform",
    links: [
      { label: "For Schools", href: "/for-schools" },
      { label: "Programmes", href: "/programmes" },
      { label: "Workshops", href: "/workshops" },
      { label: "For teachers", href: "/teachers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Partner with us", href: "/contact#partner" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/about#careers" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Child safety & AI use", href: "/safety" },
      { label: "Privacy (DPDP)", href: "/privacy" },
      { label: "Workshop feedback", href: "/workshops/feedback" },
      { label: "Advertising promise", href: "/safety#promise" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap" style={{ paddingTop: 72, paddingBottom: 32 }}>
        <div className="foot-grid">
          <div>
            <Logo tone="dark" size={44} />
            <p className="sm" style={{ marginTop: 18, color: "#bdbdbd" }}>
              {site.tagline}
              <br />
              {site.legalName}
              <br />
              {site.address}
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="lbl" style={{ color: "#9a9a9a" }}>
                {c.title}
              </p>
              {c.links.map((l) => (
                <p className="sm" key={l.href} style={{ marginBottom: 6 }}>
                  <Link href={l.href}>{l.label}</Link>
                </p>
              ))}
            </div>
          ))}
          <div>
            <NewsletterForm />
            <p className="sm" style={{ marginTop: 16, color: "#bdbdbd" }}>
              {site.email} · WhatsApp {site.whatsapp}
            </p>
          </div>
        </div>
        <div className="row-between" style={{ marginTop: 72, borderTop: "1px solid #333", paddingTop: 20 }}>
          <p className="sm" style={{ color: "#9a9a9a" }}>
            © 2026 Makeracle · Made in India
          </p>
          <p className="sm" style={{ color: "#9a9a9a", display: "flex", gap: 16 }}>
            {site.social.map((s) => (
              <a key={s.label} href={s.href}>
                {s.label}
              </a>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
