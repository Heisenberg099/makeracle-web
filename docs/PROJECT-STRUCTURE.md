# Project structure: where is what

Read this first. The repository is organised along two lines:

1. **By audience**: who uses the screen (website visitor, student, teacher, parent, school admin).
2. **By class**: everything that belongs to one CBSE class (Class 6, later Class 7, 8, …) lives in one folder.

Page URLs never depend on folder names in parentheses. `app/(student-studio)/studio/page.tsx` is served at
`/studio`. Next.js calls these **route groups**; we use them only to sort pages by audience.

```
src/
├── app/                         ROUTES ONLY: thin pages that load data and render features
│   ├── page.tsx                 Website home (it has its own scroll intro, so it sits outside (website))
│   ├── (website)/               Public website: /about, /for-schools, /programmes, /workshops, …
│   ├── (auth)/                  /sign-in
│   ├── (student-studio)/        /studio/… (journey, CT labs, AI paths, projects, wall, portfolio)
│   ├── (teacher-hub)/           /teacher/… (today, planner, projector, journal, lesson library)
│   ├── (parent)/                /parent
│   ├── (school-admin)/          /admin/school (principal dashboard)
│   ├── (internal)/              /admin/leads (Makeracle staff only)
│   └── api/                     /api/leads, /api/curriculum/class-6/check
│
├── components/                  SHARED BUILDING BLOCKS (no product logic, any class)
│   ├── brand/                   Logo
│   ├── layout/                  PortalShell (sidebar), PageFrame (title + top bar), TopBar
│   ├── ui/                      Card, Chip, ProgressBar, StepBar, HintLadder, Figure
│   └── website/                 Site header/footer, lead forms, scroll intro, illustrations
│
├── features/                    PRODUCT AREAS (work for any class; get class data as props)
│   ├── auth/                    Sign-in form
│   ├── studio/                  Student screens: journey, questions (AnswerBox, hints, step bar),
│   │                            thinking-spot, ai-path, class-wall, portfolio, projects
│   ├── teacher/                 today, planner, projector, journal
│   ├── parent/                  Parent view
│   └── school-admin/            Principal dashboard
│
├── curriculum/                  ONE FOLDER PER CLASS (see curriculum/README.md)
│   └── class-6/
│       ├── handbook/            CBSE handbook content: the ONLY source of questions/answers/solutions
│       ├── studio/              Makeracle design copy + practice material (NOT from the handbook)
│       ├── labs/                Interactive labs built for this class's chapters
│       ├── server/              Answer checking (server only)
│       ├── student-safe.ts      Strips answers/solutions before data reaches a student's browser
│       ├── route-params.ts      Validates /studio/ct/[chapter] params
│       └── index.ts             Import point: `import { ctChapters } from "@/curriculum/class-6"`
│
├── content/website/             Website copy: en.ts (all website text) and site.ts (company facts)
├── i18n/                        English/Hindi strings for the website header
└── lib/                         NON-UI CODE
    ├── demo-data/               Fictional sample data (backend replaces it). class-6/ + general-portals
    ├── types/                   Shared record types (students, wall posts, marks, …)
    ├── learning/work-store.ts   Saves student/teacher work (demo: browser storage)
    └── leads/                   Website form definitions, validation, lead storage
```

## Naming rules

| What | Rule | Example |
| --- | --- | --- |
| Folders | kebab-case, describe the thing | `class-wall/`, `thinking-spot/` |
| React components | PascalCase file = component name | `WallBoard.tsx` exports `WallBoard` |
| Other modules | kebab-case | `work-store.ts`, `ai-paths.ts` |
| Class folders | `class-<n>` | `curriculum/class-7/` |
| Handbook chapters | `chapter-<nn>-<slug>.ts` | `chapter-05-prime-time.ts` |
| Chapter labs | `Chapter<nn><Name>Lab.tsx` | `Chapter05CircleOf12Lab.tsx` |
| Route groups | `(<audience>)` | `(teacher-hub)` |

## Where do I put…

| New thing | Goes in |
| --- | --- |
| A new website page | `app/(website)/<page>/page.tsx` |
| A new class (e.g. Class 7) | `curriculum/class-7/` (copy the class-6 layout; see `curriculum/README.md`) |
| A lab for one chapter of one class | `curriculum/class-<n>/labs/…` |
| A screen students use in every class | `features/studio/<area>/` |
| A teacher, parent or admin screen | `features/teacher/…`, `features/parent/`, `features/school-admin/` |
| A button/card/badge used everywhere | `components/ui/` |
| Sample data | `lib/demo-data/` (and export it from `lib/demo-data/index.ts`) |
| A shared type | `lib/types/` (and export it from `lib/types/index.ts`) |

Keep `app/` thin: a page should mostly load data and render one feature component.

## Related docs

- [CLASS6.md](CLASS6.md): the Class 6 platform (routes, data flow, rules, backend to-dos)
- [ARCHITECTURE.md](ARCHITECTURE.md): rendering, leads pipeline, deployment
- [I18N.md](I18N.md): languages · [ROADMAP.md](ROADMAP.md): what's next
