# Makeracle — website (Phase 1)

The public website for **Makeracle**, an AI & build-learning programme for Indian schools.
Its first job is to get a principal to **book a free 90-minute workshop**.

> From curiosity to creation.

Phase 1 is the public site only. Logged-in tools (Teacher hub, student Studio, portfolios, parent consent)
come in Phase 2 — early work for those lives on the [`phase-2-wip`](../../tree/phase-2-wip) branch.

## What's in here

| Route | What it is |
| --- | --- |
| `/` | Home — scroll-driven intro (a student pushes the black panel open), hero, how it works, projects, trust, CTA |
| `/for-schools` | The principal sales page: CBSE CT & AI requirement, curriculum-in-a-box, alignment table, pilot offer + form, FAQ |
| `/programmes` | Class bands 3–5 / 6–8 / 9–10 / 11–12 and a filterable course catalogue |
| `/programmes/[slug]` | Course detail pages (Padhai Buddy, Mera Portfolio, Mohalla Helper, Fair or Not?, Data Detective) |
| `/workshops` | The 90-minute workshop: agenda, what to provide, **booking form** |
| `/workshops/feedback` | Post-workshop feedback form for principals |
| `/teachers` | What teachers get + Teacher hub waitlist |
| `/parents` | For parents: sample portfolio, showcase days, safety promise, bootcamp waitlist |
| `/terms`, `/refund-policy` | Placeholders until the lawyer-reviewed policies exist (not indexed) |
| `/about`, `/safety`, `/privacy` | Company, child-safety & AI-use promises, DPDP-aligned privacy draft |
| `/contact` | Contact form + partner form (school chains, Sahodaya clusters, lab & CSR partners) |
| `/admin/leads` | **Internal** lead inbox (needs `ADMIN_TOKEN`) with CSV export |

**Class 6 CT & AI platform** (demo data; see [docs/CLASS6.md](docs/CLASS6.md) for every route):

| Route | What it is |
| --- | --- |
| `/sign-in` | Student (class code + picture + PIN) and teacher/parent (phone + OTP) sign-in, UI only |
| `/studio/…` | Student Studio: journey, 10 CT labs, all 100 questions, Thinking Spots, AI paths, projects, class wall, portfolio |
| `/teacher/…` | Teacher Hub: today, chapter planner, projector mode, Observation Journal |
| `/parent` | Parent view with consent switches |
| `/admin/school` | Principal dashboard |
| `POST /api/leads` | Every form submits here; validated server-side |

## Getting started

Requires Node.js 20.9+ (22 recommended).

```bash
npm install
cp .env.example .env.local   # optional in development
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript
npm run build       # production build (also type-checks)
npm start           # serve the production build
```

## Stack

- **Next.js 16** (App Router, Cache Components, Turbopack) + **React 19** + **TypeScript**
- Plain CSS: design tokens and shared classes in `src/app/globals.css`, CSS Modules for page-specific layout
- Fonts (Archivo, Figtree, Instrument Serif) load from Google Fonts in the browser
- No UI library, no animation library — the intro is ~100 lines of React + CSS variables

> ⚠️ Next.js 16 differs from older versions (e.g. `params` is a Promise; reading it needs `<Suspense>` or
> `generateStaticParams`). Read `node_modules/next/dist/docs/` before changing routing — see `AGENTS.md`.

## Project layout

**Start with [docs/PROJECT-STRUCTURE.md](docs/PROJECT-STRUCTURE.md)**: the full map and naming rules.

```
src/
  app/            Routes only, grouped by audience: (website) (auth) (student-studio) (teacher-hub)
                  (parent) (school-admin) (internal) · URLs never include the (group) names
  components/     Shared building blocks: brand, layout, ui, website
  features/       Product screens for any class: studio, teacher, parent, school-admin, auth
  curriculum/     One folder per class: class-6/ (handbook content, design copy, labs)
  content/        Website copy (content/website/en.ts holds the website text)
  i18n/           English + Hindi UI strings
  lib/            demo-data, types, learning (work store), leads
docs/             Structure, architecture, Class 6, i18n, roadmap
```

## Before launch

Search the code for `[` placeholders and `TODO(`: contact details, legal name, address, grievance officer,
partner logos, testimonials, photos, pilot numbers, CBSE competency codes, brochure and syllabus PDFs.
The privacy page is a **draft** — have it reviewed by a lawyer.

See [CONTRIBUTING.md](CONTRIBUTING.md) to start working on the code.
