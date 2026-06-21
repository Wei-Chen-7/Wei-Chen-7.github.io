---
name: wei-chen-design
description: Use this skill to generate well-branded interfaces and assets for Wei Chen's personal portfolio brand — either for production or throwaway prototypes/mocks/decks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping an editorial, print-inflected personal website.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. The system is small and opinionated: one cream-paper portfolio brand, a single vermilion accent, three typefaces (Girga display serif / Untitled Sans text / JetBrains Mono — the Wabash College house faces), and one product (a personal website).

Key files:
- `README.md` — voice, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — every token (color, type, spacing, motion). The single source of truth.
- `ui_kits/website/` — JSX recreation of the personal-website surface. `index.html` is a working click-through; the individual `.jsx` files are reusable components.
- `assets/` — wordmark, social icons, utility icons (SVG).
- `preview/` — small specimen cards used by the host's Design System tab.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Import `colors_and_type.css` at the top of any new file rather than re-deriving tokens.

If working on production code, the tokens in `colors_and_type.css` are framework-neutral CSS variables and can be lifted straight into any stack.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Non-negotiables for this brand:
- **No gradients, no drop-shadows, no rounded cards.** The system is a printed object.
- **The single brand color is Wabash Red `#C8102E`.** Sanctioned uses: the wordmark ("Wei." all in red), active nav underline, section eyebrow numbers, one full-bleed red poster section per page (Selected Projects), the status marker, and inline emphasis (`<em>` as red+weight, not italic). Nowhere else.
- **Headlines are Girga**, single heavy weight, sized for poster impact. Hierarchy is built with **size**, not weight.
- **Body is Untitled Sans 400.** (When unlicensed, Hanken Grotesk stands in.)
- **Eyebrows and labels are JetBrains Mono uppercase** at `0.18em` letter-spacing. Section eyebrows are red.
- **No emoji.** Use Unicode glyphs (→ ↗ · — ◍ ●) instead.
- An **editorial cream + vermilion** alternate theme is available via `[data-theme="editorial"]` for quieter long-read contexts.
