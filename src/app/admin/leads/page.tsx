import type { Metadata } from "next";
import { LeadsTable } from "./LeadsTable";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = { title: "Leads (internal)", robots: { index: false, follow: false } };

export default function LeadsPage() {
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 80 }}>
      <div className="row-between" style={{ alignItems: "center", marginBottom: 32 }}>
        <Logo />
        <span className="chip chip-solid">Internal · CRM</span>
      </div>
      <h1 className="cap h-l" style={{ marginBottom: 24 }}>
        Leads
      </h1>
      <LeadsTable />
    </div>
  );
}
