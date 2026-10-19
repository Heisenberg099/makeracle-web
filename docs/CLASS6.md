# Class 6 CT & AI platform

The Student Studio, Teacher Hub, Parent view and School dashboard for the CBSE Class 6
Computational Thinking & AI curriculum. For the overall folder map see [PROJECT-STRUCTURE.md](PROJECT-STRUCTURE.md).

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

- `src/curriculum/class-6/handbook/`: **handbook content** (CT chapters, AI chapters, curriculum). This is the
  only source of questions, answers and solutions. `src/curriculum/class-6/TODO-images.md` lists the 145
  pictures still to extract.
- `src/curriculum/class-6/studio/`: **Makeracle design copy and practice material, not from the
  handbook** (lab copy, AI paths, AI practice, projects, hints). Each file says so at the top.
- `src/curriculum/class-6/labs/`: the interactive CT and AI labs for Class 6.
- `src/lib/types/`, `src/lib/demo-data/`: shared types and fictional demo data (students, classes, wall posts, marks…).
- `src/curriculum/class-6/server/check-answer.ts` + `POST /api/curriculum/class-6/check`: answer checking on
  the server. `src/curriculum/class-6/student-safe.ts` strips answers and solutions from anything sent to a
  student's browser.
- `src/lib/learning/work-store.ts`: the student's and teacher's work (attempts, hints, posts, approvals,
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
- Replace `work-store.ts` storage and `lib/demo-data` with APIs; move answer checking behind auth.
- Extract the handbook pictures (`src/curriculum/class-6/TODO-images.md`) and review practice hints and Hindi strings.
