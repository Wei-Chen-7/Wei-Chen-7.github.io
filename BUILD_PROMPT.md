# Build my personal website — Wei Chen (weichen.studio)

Build my personal website. The full design system and the finished copy are already in this
repo under `design/` — no design-login, no external imports, no re-uploading needed. Read
those files, then implement the site.

## Read first (in this repo)
1. **`design/CONTENT.md`** — the canonical copy. This is *what goes on the page*. It already
   reconciles my two source docs: **real facts and my Top-5 strengths come from my Strengths
   Folio; the look, logo, slogan, voice, and layouts come from Brand Guide v2.** Follow its
   `[VERIFY]` / `[PLACEHOLDER]` markers and its "do NOT present as fact" list.
2. **`design/system/colors_and_type.css`** — the design tokens (color + type). Source of
   truth for *how it looks*. Wire these in as CSS variables / your theme config; don't
   hardcode one-off colors or font sizes.
3. **`design/system/README.md`** — voice, visual foundations, iconography, layout rules.
4. **`design/system/ui_kits/website/`** — a working UI kit (`index.html` demo + JSX
   components + `style.css`). Use it as the structural reference; recreate it faithfully in
   the chosen stack rather than copying verbatim.
5. **`design/brand-guide-v2.html`** — the 16-page brand guide; open it in a browser to see
   the intended look and the applied layouts (site, résumé, card, strengths deck).

## Tech
- Empty repo. Set up a clean, modern static site — **Next.js + Tailwind** preferred (Astro or
  plain HTML/CSS is fine if it makes pixel-matching easier).
- **Token-driven:** map `colors_and_type.css` into the theme so every color/size/space traces
  back to a token.
- Responsive (mobile-first), accessible (semantic HTML, real focus states, AA contrast), fast.
- Ship on the **free Google Fonts** (Alfa Slab One / Hanken Grotesk / JetBrains Mono). Do
  **not** ship the bundled Girga-Stencil / Untitled-Sans-Test files — they aren't licensed.

## Brand rules to honor (digest — see the files for detail)
- **Palette:** Wabash Red `#C81C31` + Light Salmon `#FBC391` are *poster moves, reserved*.
  Most of the page is white paper `#FFFFFF` and warm ink `#231F20`. No gradients, ever. No
  hues outside the palette (warm grays only).
- **Red is not a UI color:** use it for the wordmark, the active nav underline (2px), section
  numbers (`/ 04`), the `◍` status marker, inline `<em>`, and **exactly one full-bleed red
  poster section per page**. Never as a generic button/CTA fill. Never red-on-salmon.
- **Type:** heavy slab display (size builds hierarchy, not weight); neutral grotesque body
  held to a ~64ch measure; **JetBrains Mono** uppercase `0.18em`-tracked for all eyebrows,
  numbers, status pills, and tags. Headlines are **sentence case, never Title Case**.
- **Shape:** square corners everywhere (radius 0); the status pill is the lone exception.
  Cards = 1px hairline rectangles, **no shadows**. Heavy 4px ink rules under section headers.
- **Voice:** first-person, quiet, slightly literary; concrete nouns; em-dashes. Section
  subtitles are short, sentence-cased, gently self-aware. **No emoji** — use Unicode glyphs
  (`→ ↗ · — ◍ ●`). See the "Do / Don't" voice examples in the brand guide.
- **Logo:** circular monogram — a sine wave forming a **W** inside a **C** ("Wei as signal"),
  plus the `Wei.` red-period wordmark. The wordmark's red period is the masthead's only color.
- **Motion:** subtle, 240ms, `cubic-bezier(0.2,0.7,0.2,1)`, no bounces. Optional opt-in dark
  mode and `[data-theme="editorial"]` are already defined in the tokens.

## Page structure (information architecture)
A single scrolling page — "a printed object you can scroll." Use `design/CONTENT.md` for copy.
- **Masthead / nav:** wordmark + `/ 01 …` section links; solid white at rest.
- **Hero:** "Wei Chen, building things that think." + `◍ Available for opportunities`.
- **About:** the Folio bio — Math & CS at Wabash, AI + Quantum, Code in Place, perfect
  average, Glee Club, easygoing.
- **Strengths** *(the centerpiece — make it the red poster section)*: the five cards from
  `CONTENT.md` (Command/Spine, Woo/Front Door, Strategic/Compass, Self-Assurance/Anchor,
  Developer/Multiplier), each with its metaphor, an "at my best," and a growth edge. Use the
  guide's Strengths-Portfolio slide treatment.
- **Projects / Experience / Education / Writing:** build the layouts, but fill with the
  **labeled placeholders** from `CONTENT.md` — do **not** invent or reuse the guide's sample
  projects (Marginalia, Resonance, JGU Mainz, Quantum lab) as if they were real.
- **Contact:** `wchen@wabash.edu`, GitHub, LinkedIn, plus the CTA "Pick me for the things
  that matter — hard calls, new rooms, better paths."
- **Footer / colophon:** `© MMXXVI · Wei Chen · Built with care.`

## Deliver
Scaffold the project, implement the tokens and the sections above, recreate the brand
faithfully, run it locally so I can preview, and commit to this branch. If anything in
`CONTENT.md` is marked `[VERIFY]` (my email, grad year, social handles) or a layout is
ambiguous, **ask me before guessing**. Don't deploy anywhere without asking.
