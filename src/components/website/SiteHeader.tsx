"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { mainNav } from "@/content/website/site";
import { useLang } from "@/i18n/LangProvider";

export function SiteHeader() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap inner" style={{ position: "relative" }}>
        <Link href="/" aria-label="Makeracle home" style={{ textDecoration: "none" }}>
          <Logo size={34} />
        </Link>

        <nav id="site-nav" aria-label="Main" className={`site-nav${open ? " open" : ""}`}>
          {mainNav.map((item) => {
            const active = !item.href.includes("#") && pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="lang-btn"
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            aria-label={t("lang.label")}
          >
            {t("lang.switch")}
          </button>
          <Link href="/workshops#book" className="btn header-cta">
            {t("cta.book")}
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? t("menu.close") : t("menu.open")}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path d={open ? "M2 1 L16 11 M16 1 L2 11" : "M0 1 H18 M0 6 H18 M0 11 H12"} stroke="#111" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
