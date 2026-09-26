# Wei Chen · personal site

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
| `components/` | `TopNav`, `Hero`, `About`, `Research`, `Strengths`, `Projects`, `Experience`, `Education`, `Writing`, `Contact`, `Footer`, `Logo`, `SectionHead`, `Reveal`, and `Rows` (the shared dated-row layout). |
| `design/` | The original design system, brand guide, and canonical content (`CONTENT.md`). |

## Content notes

All copy lives in `lib/content.ts` and comes from Wei's own CVs, applications,
and public GitHub repos. There are no placeholder sections left.

- **Research** (new section): Helmholtz-Institut Mainz, Polymath Jr. REU,
  number theory, SJTU, and the Qiskit Global Summer School.
- **Projects** link to the public repos on `github.com/Wei-Chen-7`.
- **Writing** lists the manuscripts under review; link preprints as they go public.
- Section numbers are derived from `nav`, so adding or reordering a section
  only means editing that list.
- The site lives at `wei-chen-7.github.io`. If a custom domain is added,
  update `identity.domain` and `identity.siteUrl` in `lib/content.ts`.

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
