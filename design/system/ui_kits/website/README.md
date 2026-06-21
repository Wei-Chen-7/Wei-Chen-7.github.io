# Wei Chen — Personal Website UI Kit

The single product in this design system: an editorial personal portfolio. Cream paper, deep brown ink, a single vermilion accent, set in Girga / Untitled Sans / JetBrains Mono (Wabash College house faces).

## Files

- `index.html` — the assembled, scrollable demo page. Open this to see the kit in action: top nav with theme toggle that actually flips light ↔ dark, all sections wired together, hover states live.
- `TopNav.jsx` — sticky masthead with wordmark, nav links, theme toggle.
- `Hero.jsx` — the landing block: status pill + three-line serif headline + buttons + "Currently" metadata strip.
- `SectionHead.jsx` — the `/ NN SECTION` + serif subtitle treatment.
- `About.jsx` — about prose + side metadata.
- `Education.jsx`, `Experience.jsx` — left-rail year/place + body rows.
- `Projects.jsx` — four-tile project grid.
- `Skills.jsx` — four-column ordered list of skills with `01–06` numerals.
- `Writing.jsx` — date / title / tag rows.
- `Contact.jsx` — closing paragraph + contact rows.
- `Footer.jsx` — `© MMXXVI · WEI CHEN · BUILT WITH CARE`.
- `Primitives.jsx` — small shared atoms (`Eyebrow`, `Tag`, `StatusPill`, `Button`, `LinkArrow`).
- `style.css` — kit-local layout (imports tokens from `../../colors_and_type.css`).

## Conventions

- Components are presentational only — no router, no real data fetching. The page state (theme, "available" status) lives in `index.html`.
- Copy is intentionally **bracketed placeholders** matching the reference. When the real biography arrives, swap them in place; nothing else needs to change.
- Every component reads its colors and type from CSS variables. No hard-coded hex anywhere.
- The single accent (vermilion) appears in: the wordmark period, the active nav underline, the status marker, and the italic emphasis word in body copy. Nowhere else.
