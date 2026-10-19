# Curriculum: one folder per class

Each CBSE class gets its own folder: `class-6/`, later `class-7/`, `class-8/`, …
Everything specific to that class lives inside it, so a developer can find, change or remove one
class without touching the others.

```
class-6/
├── handbook/                    CBSE handbook content (the only source of truth)
│   ├── types.ts                 Content model (questions, options, answers, solutions, page refs)
│   ├── curriculum-framework.ts  Goals, learning outcomes, hours, assessment
│   ├── computational-thinking/  chapter-01-… to chapter-10-… (+ _option-helpers.ts)
│   └── artificial-intelligence/ chapter-1-… to chapter-4-…
├── studio/                      Makeracle's own material: NOT from the handbook (each file says so)
│   ├── lab-copy.ts              Lab names, "Make" projects, strand chips, Thinking Spot one-liners
│   ├── ai-paths.ts              The step-by-step AI chapter paths
│   ├── ai-practice.ts           Practice items for the AI labs
│   ├── practice-hints.ts        Hint ladder text
│   └── projects.ts              The two 20-hour projects
├── labs/                        Interactive labs for this class's chapters
│   ├── computational-thinking/  Chapter01PatternLab.tsx … Chapter10MagicBoxLab.tsx
│   ├── artificial-intelligence/ Chapter1IntroToAiLabs.tsx … Chapter4EthicsLabs.tsx
│   └── question-tools.tsx       Helpers shown inside the question player
├── server/check-answer.ts       Answer checking (server only; answers never reach the browser)
├── student-safe.ts              Removes answers and solutions from data sent to students
├── route-params.ts              Validates chapter numbers in URLs
├── TODO-images.md               Handbook pictures still to extract
└── index.ts                     Public import point: `import { ctChapters } from "@/curriculum/class-6"`
```

## Rules

1. Questions, options, answers and solutions come **only** from `handbook/`. Anything else is labelled
   "practice, not from handbook" and kept in `studio/`.
2. Student pages get data through `student-safe.ts`. Never pass `answer` or `solution` to a client
   component on a student route.
3. Shared screens (question player, AI path, class wall…) live in `src/features/` and take class data as
   props. Only chapter-specific labs live here in `labs/`.

## Adding a new class (e.g. Class 7)

1. Copy the structure above into `class-7/` and transcribe that class's handbook into `handbook/`.
2. Write its labs in `class-7/labs/` and its design copy in `class-7/studio/`.
3. Add `src/app/api/curriculum/class-7/check/route.ts` (copy class-6's).
4. Routes: today `/studio/…` serves Class 6. When a second class arrives, decide with the product team
   between per-class URLs (`/studio/class-7/…`) and picking the class from the signed-in student; the
   route group `app/(student-studio)/` is where either goes.
5. Add demo data under `src/lib/demo-data/class-7/` and export it from `src/lib/demo-data/index.ts`.
