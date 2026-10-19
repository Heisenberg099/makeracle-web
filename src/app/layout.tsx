import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LangProvider } from "@/i18n/LangProvider";
import { site } from "@/content/website/site";
import { seo } from "@/content/website/en";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: seo.home.title, template: "%s · makeracle" },
  description: seo.home.description,
  applicationName: site.name,
  openGraph: {
    siteName: site.name,
    title: seo.home.title,
    description: seo.home.description,
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#ff2d46",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.legalName,
  alternateName: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  areaServed: "IN",
  // TODO(launch): add email, telephone, address and sameAs (social URLs) once the real details exist.
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts load in the browser (not at build time) so builds work offline. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..800&family=Figtree:wght@600;700;800&family=Instrument+Serif&display=swap" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema).replace(/</g, "\\u003c") }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
