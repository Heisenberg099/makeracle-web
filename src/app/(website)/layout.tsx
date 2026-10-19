import { SiteHeader } from "@/components/website/SiteHeader";
import { SiteFooter } from "@/components/website/SiteFooter";

/** Public marketing pages: shared header + footer. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
