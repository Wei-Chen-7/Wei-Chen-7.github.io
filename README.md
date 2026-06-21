# weichen.studio

Personal website for **Wei Chen** — _"building things that think."_

A single scrolling page built to feel like a printed object: heavy slab display
type, warm ink on white paper, one reserved Wabash-red poster section, and a
sine-wave **W**-in-**C** monogram ("Wei as signal").

## Stack

- **Next.js 15** (App Router, TypeScript) — statically prerendered
- **Tailwind CSS v4** — design tokens mapped into the theme via `@theme`
- **Free Google Fonts only** via `next/font`: Alfa Slab One (display) ·
  Hanken Grotesk (body) · JetBrains Mono (mono). The licensed Girga / Untitled
  Sans files in `design/system/fonts/` are **not** shipped.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
npm run start    # serve the production build
```

## Where things live

| Path | What it is |
|---|---|
| `app/globals.css` | Design tokens (ported from `design/system/colors_and_type.css`) + component styles. The single source of truth for the look. |
| `app/layout.tsx` | Fonts, metadata, the pre-paint theme/`js` script. |
| `app/page.tsx` | Section assembly. |
| `lib/content.ts` | **All copy.** Real Folio facts + clearly-labeled placeholders. Edit here to update the site. |
| `components/` | `TopNav`, `Hero`, `About`, `Strengths`, `Projects`, `Experience`, `Education`, `Writing`, `Contact`, `Footer`, `Logo`, `SectionHead`, `Reveal`. |
| `design/` | The original design system, brand guide, and canonical content (`CONTENT.md`). |

## Content notes (read before launch)

Copy follows `design/CONTENT.md`: **real facts come from the Strengths Folio;
voice and layout come from Brand Guide v2.** A few sections are intentionally
**labeled placeholders** until real copy arrives — they are not invented:

- **Projects** — ghost cards (`[ Project ]`) with an "on the way" note.
- **Experience** — placeholder rows (`[ Role ] · [ Organization ]`).
- **Writing** — a single placeholder row.
- **Education** — Wabash + Code in Place are real; specific coursework and any
  study-abroad term are deferred to a labeled note.

Verified details already wired in: `wchen@wabash.edu`, `github.com/Chin-Way`,
`linkedin.com/in/wei-chen`, Class of 2027 (expected). To swap placeholders for
real content, edit `lib/content.ts` — nothing else needs to change.

## Brand rules honored

- **Red is reserved** — wordmark period, active nav underline, section numbers,
  status marker, inline `<em>`, and exactly **one** full-bleed red poster
  (Strengths). Never a generic button fill; never red-on-salmon.
- Square corners everywhere (the status pill is the lone exception); 1px
  hairline cards, no shadows; heavy 4px ink rules under section headers.
- Headlines are sentence case; mono eyebrows tracked `0.18em`; no emoji —
  Unicode glyphs only (`→ ↗ · — ◍`).
- Opt-in **dark mode** (persisted, follows OS by default); the `editorial`
  theme remains available in the tokens.
- Accessible: semantic landmarks, a skip link, real focus states, AA contrast,
  reduced-motion support, and a no-JS fallback (all content renders without JS).
