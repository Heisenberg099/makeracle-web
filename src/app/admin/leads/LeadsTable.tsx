"use client";

import { useCallback, useState } from "react";
import type { Lead } from "@/lib/leadStore";
import { downloadCsv } from "@/lib/csv";

const stages: Lead["stage"][] = ["New", "Contacted", "Workshop booked", "Workshop done", "Pilot", "Annual", "Lost"];

/**
 * Phase 1 lead list. Reads GET /api/leads with the admin token.
 * Stage changes are local only — the backend team will add PATCH /api/leads/:id
 * (or this view moves into the real CRM). See docs/ARCHITECTURE.md.
 */
export function LeadsTable() {
  const [token, setToken] = useState("");
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  const load = useCallback(async (tk: string) => {
    setError("");
    const res = await fetch("/api/leads", { headers: tk ? { "x-admin-token": tk } : {} });
    if (!res.ok) {
      setError(res.status === 401 ? "Wrong or missing admin token." : "Couldn't load leads.");
      setLeads(null);
      return;
    }
    const body = await res.json();
    setLeads(body.leads);
  }, []);

  const shown = (leads ?? []).filter((l) => filter === "all" || l.type === filter);
  const str = (v: unknown) => (Array.isArray(v) ? v.join(", ") : v === true ? "yes" : v === false ? "" : String(v ?? ""));

  return (
    <div>
      {leads === null && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            load(token);
          }}
          className="card"
          style={{ maxWidth: 520 }}
        >
          <div className="fld">
            <label htmlFor="tk">Admin token</label>
            <input id="tk" type="password" value={token} onChange={(e) => setToken(e.target.value)} autoComplete="off" />
            <span className="hint">Local development without ADMIN_TOKEN set: leave this empty.</span>
          </div>
          {error && (
            <p className="sm" role="alert" style={{ color: "var(--red-text)", marginTop: 10 }}>
              {error}
            </p>
          )}
          <button className="btn" style={{ marginTop: 18 }}>
            Load leads
          </button>
        </form>
      )}

      {leads && (
        <>
          <div className="row-between" style={{ alignItems: "center", marginBottom: 16 }}>
            <div className="toggles" role="group" aria-label="Filter by form">
              {["all", "workshop", "pilot", "partner", "contact", "teacher-signup", "newsletter", "workshop-feedback"].map((f) => (
                <button key={f} type="button" className="tog" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                  {f}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button type="button" className="btn btn-ghost" onClick={() => load(token)}>
                Refresh
              </button>
              <button
                type="button"
                className="btn"
                onClick={() =>
                  downloadCsv(
                    "makeracle-leads.csv",
                    shown.map((l) => ({ id: l.id, type: l.type, stage: l.stage, createdAt: l.createdAt, source: l.source, ...Object.fromEntries(Object.entries(l.values).map(([k, v]) => [k, str(v)])) })),
                  )
                }
              >
                Export CSV
              </button>
            </div>
          </div>
          <div className="table-box">
            <table className="tbl" style={{ minWidth: 900 }}>
              <thead>
                <tr>
                  <th scope="col">Received</th>
                  <th scope="col">Form</th>
                  <th scope="col">Who</th>
                  <th scope="col">School / org</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Source</th>
                  <th scope="col">Stage</th>
                </tr>
              </thead>
              <tbody>
                {shown.map((l) => (
                  <tr key={l.id}>
                    <td>{new Date(l.createdAt).toLocaleString("en-IN")}</td>
                    <td>
                      <span className="chip">{l.type}</span>
                    </td>
                    <td>
                      {str(l.values.contactName || l.values.name)}
                      <br />
                      <span className="muted">{str(l.values.role || l.values.iam)}</span>
                    </td>
                    <td>
                      {str(l.values.schoolName || l.values.orgName || l.values.school)}
                      <br />
                      <span className="muted">{str(l.values.city)}</span>
                    </td>
                    <td>{str(l.values.phone || l.values.email || l.values.phoneOrEmail)}</td>
                    <td className="muted">
                      {l.source}
                      {l.campaign.utm_campaign ? ` · ${l.campaign.utm_campaign}` : ""}
                    </td>
                    <td>
                      <label className="sr-only" htmlFor={`st-${l.id}`}>
                        Stage
                      </label>
                      <select
                        id={`st-${l.id}`}
                        defaultValue={l.stage}
                        style={{ minHeight: 40, border: "1px solid var(--line)", borderRadius: 6, padding: "0 8px", background: "#fff" }}
                      >
                        {stages.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
                {shown.length === 0 && (
                  <tr>
                    <td colSpan={7} className="muted">
                      No leads yet. Submit a form on the site to see one appear here.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
