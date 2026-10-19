import { formTypes, validate, type FormType } from "@/lib/leads/forms";
import { listLeads, saveLead, sendAcknowledgement, type Lead } from "@/lib/leads/lead-store";

/** POST /api/leads — every public form submits here. */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const type = body.type as FormType;
  if (!formTypes.includes(type)) {
    return Response.json({ error: "Unknown form type" }, { status: 400 });
  }

  const { values, errors } = validate(type, body.values);
  if (Object.keys(errors).length) {
    return Response.json({ errors }, { status: 422 });
  }

  const strMap = (v: unknown) =>
    Object.fromEntries(
      Object.entries(v && typeof v === "object" ? v : {})
        .filter(([, x]) => typeof x === "string")
        .map(([k, x]) => [k.slice(0, 40), String(x).slice(0, 200)]),
    );

  const lead: Lead = {
    id: crypto.randomUUID(),
    type,
    values,
    source: typeof body.source === "string" ? body.source.slice(0, 200) : "unknown",
    campaign: strMap(body.campaign),
    context: strMap(body.context),
    stage: "New",
    createdAt: new Date().toISOString(),
  };

  await saveLead(lead);
  await sendAcknowledgement(lead);

  return Response.json({ ok: true, id: lead.id }, { status: 201 });
}

/**
 * GET /api/leads — internal only. Requires the `x-admin-token` header to
 * match ADMIN_TOKEN. In local development with no ADMIN_TOKEN set, it's open.
 */
export async function GET(request: Request) {
  const token = process.env.ADMIN_TOKEN;
  const isDev = process.env.NODE_ENV === "development";
  const sent = request.headers.get("x-admin-token");
  if (token ? sent !== token : !isDev) {
    return Response.json({ error: "Unauthorised" }, { status: 401 });
  }
  return Response.json({ leads: listLeads() });
}
