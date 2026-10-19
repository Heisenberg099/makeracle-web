import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Icon, type IconName } from "@/components/ui/Icon";
import { site } from "@/content/website/site";
import { common, platform } from "@/content/website/en";

type FootLink = { label: string; href?: string };

// Links without an href have no page yet and show as "soon".
const cols: { title: string; links: FootLink[] }[] = [
  {
    title: common.footer.explore,
    links: [
      { label: "For Schools", href: "/for-schools" },
      { label: "Programmes", href: "/programmes" },
      { label: "Workshops", href: "/workshops" },
      { label: "For Teachers", href: "/teachers" },
      { label: "For Parents", href: "/parents" },
      ...platform.footer,
    ],
  },
  {
    title: common.footer.company,
    links: [{ label: "About", href: "/about" }, { label: "Careers" }, { label: "Blog" }, { label: "Contact", href: "/contact" }],
  },
  {
    title: common.footer.trust,
    links: [
      { label: "Safety & AI use", href: "/safety" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Refund policy", href: "/refund-policy" },
      { label: "Grievance officer", href: "/privacy#grievance" },
    ],
  },
];

const contacts: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: "phone", label: "Phone", value: site.phone },
  { icon: "whatsapp", label: "WhatsApp", value: site.whatsapp, href: site.whatsappLink },
  { icon: "mail", label: "Email", value: site.email },
  { icon: "pin", label: "City", value: site.city },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap" style={{ paddingTop: 72, paddingBottom: 32 }}>
        <div className="foot-grid">
          <div>
            <Logo tone="dark" size={44} />
            <p className="sm" style={{ marginTop: 18, color: "#fff", fontWeight: 600 }}>
              {site.tagline}
            </p>
            <p className="sm" style={{ marginTop: 6, color: "#bdbdbd", maxWidth: 300 }}>
              {site.description}
            </p>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <p className="lbl" style={{ color: "#9a9a9a" }}>
                {c.title}
              </p>
              {c.links.map((l) => (
                <p className="sm" key={l.label} style={{ marginBottom: 6 }}>
                  {l.href ? (
                    <Link href={l.href}>{l.label}</Link>
                  ) : (
                    <span style={{ color: "#bdbdbd" }}>
                      {l.label} · {common.footer.comingSoon}
                    </span>
                  )}
                </p>
              ))}
            </nav>
          ))}
        </div>

        <ul className="foot-contact sm">
          {contacts.map((c) => (
            <li key={c.label}>
              <span style={{ color: "var(--red)", display: "inline-flex" }}>
                <Icon name={c.icon} size={18} />
              </span>
              <span className="sr-only">{c.label}: </span>
              {c.href ? <a href={c.href}>{c.value}</a> : <span>{c.value}</span>}
            </li>
          ))}
        </ul>

        <div className="row-between" style={{ marginTop: 24, borderTop: "1px solid #333", paddingTop: 20, alignItems: "center" }}>
          <p className="sm" style={{ color: "#9a9a9a" }}>
            © 2026 {site.legalName}. {common.footer.rights}
          </p>
          <p className="sm" style={{ display: "flex", gap: 16 }}>
            {site.social.map((s) => (
              <a key={s.label} href={s.href} aria-label={`makeracle on ${s.label}`} style={{ display: "inline-flex", minWidth: 44, minHeight: 44, alignItems: "center", justifyContent: "center" }}>
                <Icon name={s.icon as IconName} size={20} />
              </a>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
