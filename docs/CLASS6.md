# Class 6 CT & AI platform

The Student Studio, Teacher Hub, Parent view and School dashboard for the CBSE Class 6
Computational Thinking & AI curriculum.

## Routes

| Who | Route | What |
| --- | --- | --- |
| Everyone | `/sign-in` | Student: class code + picture + PIN. Teacher/parent: phone + OTP (UI only) |
| Student | `/studio` | Journey home |
| Student | `/studio/ct/[1-10]` | Chapter lab |
| Student | `/studio/ct/[c]/q/[1-10]` | Question player (all 100 handbook questions) |
| Student | `/studio/ct/[c]/thinking-spot` | Thinking Spot |
| Student | `/studio/ai/[1-4]/[step]` | AI chapter paths (`/studio/ai/N` redirects to step 1) |
| Student | `/studio/projects/[slug]` | Project workspace (`data-detectives`, `cyber-suraksha`) |
| Student | `/studio/wall`, `/studio/portfolio` | Class wall, portfolio |
| Teacher | `/teacher` | Today (Teacher Hub) |
| Teacher | `/teacher/planner` | Chapter planner, with Teacher Handbook solutions |
| Teacher | `/teacher/present/[ctN-qM or ctN-ts]` | Projector mode |
| Teacher | `/teacher/journal` | Observation Journal + project marking |
| Parent | `/parent` | Week view, privacy choices |
| Principal | `/admin/school` | School dashboard |

## Where things live

- `src/content/class6/`: **handbook content** (CT chapters, AI chapters, curriculum). This is the only
  source of questions, answers and solutions. `TODO-images.md` lists the 145 pictures still to extract.
- `src/content/class6/{studio,aiPaths,aiPractice,projects,hints}.ts`: **Makeracle design copy and
  practice material, not from the handbook.** Each file says so at the top.
- `src/lib/types.ts`, `src/lib/mock.ts`: typed demo data (students, classes, wall posts, marks…).
- `src/lib/class6/answers.ts` + `POST /api/class6/check`: answer checking on the server.
  `src/lib/class6/public.ts` strips answers and solutions from anything sent to a student's browser.
- `src/lib/class6/store.ts`: the student's and teacher's work (attempts, hints, posts, approvals,
  marks, observations, consent). **Demo storage in the browser (localStorage)**, so the whole loop
  works on one device. The backend replaces `load`/`save` with API calls; hook shapes stay the same.

## Rules the code follows

1. Questions, answers and solutions come only from the handbook files. Practice items are labelled.
2. Students never see an answer before trying: pick, explain your rule, then check on the server.
   Teacher Handbook solutions appear only in teacher views (planner, projector "Reveal & reflect").
3. Names are first name + last initial. Wall posts wait for teacher approval; the only reaction is
   "I tried it"; there are no comments. Parents control wall, portfolio and photo consent.
4. Colours are tokens in `globals.css`. White text on red uses `--red-deep` (4.8:1).

## Before launch (backend)

- Real auth (class code + PIN for students, OTP for adults) and role checks: teacher routes are open
  in the demo.
- Replace `store.ts` storage and `mock.ts` data with APIs; move answer checking behind auth.
- Extract the handbook pictures (`TODO-images.md`) and review practice hints and Hindi strings.
