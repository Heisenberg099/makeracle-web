# Contributing

Thanks for helping build Makeracle. This guide keeps the site consistent while several people work on it.

## Workflow

1. Pick or open an issue. Say what you're taking so nobody duplicates work.
2. Branch from `main`: `feat/short-name`, `fix/short-name` or `content/short-name`.
3. Keep pull requests small — one page or one feature.
4. Before pushing, run:
   ```bash
   npm run lint && npm run typecheck && npm run build
   ```
   CI runs the same checks on every pull request.
5. Open a PR using the template. Add a screenshot (desktop **and** phone width) for any visual change.
6. One review from a teammate, then squash-merge.

## Design rules

The site follows the approved renderings: red (`--red`) and white on light grey, big condensed red capitals,
black line illustrations with halftone dots, tilted overlapping cards.

- **Colours and fonts come from tokens** in `src/app/globals.css`. Don't hard-code a new hex value in a page — add a token.
- Use the shared classes first: `.cap` (red display capitals), `.ttl`, `.lbl`, `.sm`, `.body`, `.btn`, `.btn-ghost`,
  `.card`, `.card-ink`, `.grid .g3`, `.ruled`, `.wrap`, `.sec`.
- Small red text uses `--red-text` (meets contrast). `--red` is for large type, buttons and fills.
- **No emoji, no stock gradients.** Illustrations are inline SVG in `src/components/illustrations/`.
- Every page must work at **phone width (360px)** and on slow 3G — no heavy images, no big libraries.

## Content rules (these are promises to schools and parents)

- **No salary or job promises, no "AI engineer at 12", no guaranteed outcomes.**
- Don't publish numbers we can't prove. The outcomes section stays as dashes until pilot data exists.
- Never show a child's photo, contact details or location. Student names are first name + last initial.
- Placeholders are written in `[brackets]` so they're easy to find before launch.

## Accessibility

- Real `<button>`, `<a>`, `<input>` + `<label>` elements — never a clickable `<div>`.
- Touch targets at least 44px. Visible focus (already styled globally).
- Decorative SVGs get `aria-hidden`; meaningful ones get `role="img"` and an `aria-label`.
- Respect `prefers-reduced-motion` (the intro already does).

## Common tasks

**Add or change a form field** — edit the form in `src/lib/forms.ts`. The same definition renders the form and
validates it on the server.

**Add a new form** — add a key to `forms` in `src/lib/forms.ts`, then render `<LeadForm type="your-key" />`.

**Add a course** — add an entry to `courses` in `src/content/programmes.ts`. Its page at `/programmes/<slug>`
is generated automatically.

**Translate UI text** — see [docs/I18N.md](docs/I18N.md).

**Connect leads to a CRM / WhatsApp** — see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md#leads).

## Next.js 16 note

This project uses Next.js 16 with Cache Components. Some APIs differ from older tutorials — e.g. `params` is a
Promise, and reading it must happen inside `<Suspense>` (see `src/app/(site)/programmes/[slug]/page.tsx`).
Check the docs bundled in `node_modules/next/dist/docs/` first.
