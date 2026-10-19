# Architecture

Folder map: [PROJECT-STRUCTURE.md](PROJECT-STRUCTURE.md).

## Rendering

Almost every page is static (prerendered at build time) for speed on slow connections. Interactive bits are small
client components:

| Component | Why it's a client component |
| --- | --- |
| `components/website/scroll-intro/ScrollIntro.tsx` | reads scroll position |
| `components/website/SiteHeader.tsx` | mobile menu, language switch, active link |
| `components/website/forms/LeadForm.tsx` | form state and submission |
| `app/(website)/programmes/CourseCatalog.tsx` | catalogue filters |
| `app/(internal)/admin/leads/LeadsTable.tsx` | internal lead inbox |

## The scroll intro

`ScrollIntro` renders a tall track (`320vh`) with a sticky full-screen stage. On scroll it computes progress `t`
(0 → 1) and writes it to the CSS variable `--t`. The CSS module moves the black panel and the student with
`translateX(calc(var(--t) * var(--travel)))`, so only one number changes per frame. The student's legs swing
with `Math.sin(t * 26)`, so they walk only while the visitor scrolls. With `prefers-reduced-motion` the
finished frame is shown and the track is one screen tall.

Tuning knobs: track height (`.track` in the CSS module), `--start` (where the panel begins), `--sw` (student
width), and the 4%–88% push window in `ScrollIntro.tsx`.

## Leads

```
LeadForm (browser) ──POST /api/leads──▶ validate() ──▶ saveLead() ──▶ in-memory list + CRM_WEBHOOK_URL
                                                   └─▶ sendAcknowledgement() (stub: logs)
/admin/leads ──GET /api/leads (x-admin-token)──▶ listLeads()
```

- `src/lib/leads/forms.ts` defines every form once; the browser and server share `validate()`.
- `src/lib/leads/lead-store.ts` is the only file to change when a real backend arrives:
  - **Database**: replace the in-memory array. Store data in India (DPDP); keep `source` and `campaign` for
    conversion reporting.
  - **CRM**: set `CRM_WEBHOOK_URL` today (Zapier/Make/Sheets/HubSpot hook) — every lead is POSTed as JSON.
  - **Acknowledgements**: implement `sendAcknowledgement` with WhatsApp Business (template message) + email,
    with SMS as fallback.
  - **Stages**: add `PATCH /api/leads/:id` so the inbox can change a lead's stage
    (New → Contacted → Workshop booked → Workshop done → Pilot → Annual / Lost).
- The inbox is protected only by `ADMIN_TOKEN`. Put real staff sign-in in front of it before scaling.
- Add rate limiting / bot protection on `POST /api/leads` before launch (e.g. at the hosting edge).

## Environment variables

See `.env.example`. None are required for local development.

## Deployment

Any Node host that runs `next start`, or Vercel. Choose an Indian region for data residency once a database is
added. Set `NEXT_PUBLIC_SITE_URL`, `ADMIN_TOKEN` and (optionally) `CRM_WEBHOOK_URL`.

## Phase 2 and later

Portals (Teacher hub, student Studio, portfolios, parent consent with OTP, school admin dashboard) are
planned — see [ROADMAP.md](ROADMAP.md). Early teacher-hub screens are on the `phase-2-wip` branch.
