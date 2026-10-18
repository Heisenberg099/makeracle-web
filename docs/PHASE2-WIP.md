# Phase 2 — work in progress (not on `main`)

Early Teacher hub screens with **demo data only**, parked here while Phase 1 (the public workshop site) launches.

| Route | Status |
| --- | --- |
| `/teacher` | My classes: CBSE hours vs requirement, next lesson, certification, announcements |
| `/teacher/lessons`, `/teacher/lessons/[id]` | Lesson library with filters; minute-by-minute script |
| `/teacher/present/[id]` | Projector mode: one step per screen, timer, hideable teacher notes, keyboard (→ ← N F) |
| `/teacher/marking` | 4-level rubric marking, bulk set, CSV export, print |
| `/teacher/review` | Approve / send back student work before it goes public |
| `/teacher/training` | Facilitator → Builder → Mentor progress, office hours |

Not started: student login (class code + PIN) and Studio, public portfolios `/p/[handle]`,
parent consent with OTP, real auth, API.

Data shapes: `src/lib/types.ts`. Demo data: `src/lib/mock.ts` — replace with API calls of the same shape.
Rebase on `main` before continuing; merge only after the Phase 1 → Phase 2 gate (10 workshops booked).
