import "server-only";
import type { FormType, FormValues } from "./forms";

/**
 * Lead storage + notifications.
 *
 * TODAY (Phase 1 stub): leads are kept in memory (lost on restart) and,
 * if CRM_WEBHOOK_URL is set, POSTed to that URL — point it at your CRM,
 * a Zapier/Make hook or a Google Sheet script.
 *
 * NEXT (backend team): replace `saveLead` with a real database write
 * (data stored in India — see docs/ARCHITECTURE.md) and implement
 * `sendAcknowledgement` with WhatsApp Business + email providers.
 */

export type Lead = {
  id: string;
  type: FormType;
  values: FormValues;
  source: string;
  campaign: Record<string, string>;
  context: Record<string, string>;
  stage: "New" | "Contacted" | "Workshop booked" | "Workshop done" | "Pilot" | "Annual" | "Lost";
  createdAt: string;
};

const globalStore = globalThis as unknown as { __makeracleLeads?: Lead[] };
const leads: Lead[] = (globalStore.__makeracleLeads ??= []);

export async function saveLead(lead: Lead) {
  leads.unshift(lead);
  if (leads.length > 500) leads.length = 500;

  const hook = process.env.CRM_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("[leads] CRM webhook failed", err);
    }
  }
}

export async function sendAcknowledgement(lead: Lead) {
  // TODO(backend): WhatsApp Business template message + email confirmation.
  // Keep the message free of salary/outcome promises (see /safety#promise).
  const to = lead.values.phone || lead.values.email || lead.values.phoneOrEmail;
  console.info(`[leads] acknowledgement queued for ${lead.type} lead ${lead.id} → ${String(to || "no contact")}`);
}

export function listLeads() {
  return leads;
}
