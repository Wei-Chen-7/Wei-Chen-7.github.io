# Wei Chen — Design System

A personal portfolio design system for **Wei Chen**, an undergraduate studying Computer Science, Physics, and East Asian Literature. The system was reverse-engineered from a single reference site (`uploads/wei-portfolio.html`) that establishes the brand: an editorial, print-inflected portfolio with a warm cream paper, deep brown ink, and a single vermilion accent.

It is intended to drive a **personal website** (the only product). Everything else in this folder — tokens, components, slides — radiates from that one surface.

## Sources

The system was derived from one file the user provided:

- `uploads/wei-portfolio.html` — a single self-contained React-built portfolio (bundled via Parcel). The reference build was set in **Fraunces, IBM Plex Sans, and JetBrains Mono**, but the design system has since been retargeted to **Girga (display) + Untitled Sans (text) + JetBrains Mono (mono)** — the Wabash College house faces. See **Typography** below. No external repo, Figma file, or design tokens were attached — everything here was inferred from this build by inspecting the rendered DOM and computed styles.

There is also a public LinkedIn (`https://www.linkedin.com/in/wei-chen/`) that was referenced for context but was not fetched; it is mentioned only as the public identity the site points at.

## The voice & person, in one paragraph

Wei is a thoughtful undergraduate who notices recurring shapes — a binary search inside a literary motif, a recurrence relation behind a piece of music, an electric field humming between two ideas. The site treats the portfolio like a slim printed object: roman numerals, section markers, dotted leaders, restrained typography. The vermilion period after **Wei.** is the only loud thing on the page.

---

## CONTENT FUNDAMENTALS

### Voice
First-person, quiet, slightly literary. Wei narrates rather than announces. Sentences favor concrete nouns ("a binary search inside a literary motif", "an electric field humming in the gap") over abstract claims. There is dry humor; it never tips into glib.

### Person
**I**, not we. The reader is rarely addressed as *you* outside of contact prompts ("Say hello, or send a strange link."). The site is a journal in public.

### Tone & cadence
- **Plainspoken with occasional weight.** Most sentences are short. Every section gets one slightly more lyrical line that earns its keep — e.g. "Things I built, mostly because I wanted them to exist."
- **Section subtitles do the heavy lifting.** Each `/ NN SECTION` has a one-line subtitle in italics-feeling sans serif that frames the section as a thought, not a category. Examples:
  - About → *"Some background, a few obsessions, the parts that matter."*
  - Education → *"Schooling, in chronological reverse."*
  - Experience → *"Places that paid me — or trusted me."*
  - Projects → *"Things I built, mostly because I wanted them to exist."*
  - Skills → *"What I reach for, ordered by how often."*
  - Writing → *"Words I've put somewhere on purpose."*
  - Contact → *"Say hello, or send a strange link."*

  When writing new section subtitles, **mirror this rhythm**: short, sentence-cased, ending in a period; gently self-aware; never marketing-speak.

### Casing
- **Eyebrows / micro-labels:** `UPPERCASE` with wide tracking, mono, set in JetBrains Mono. Examples: `/ 04 SELECTED PROJECTS`, `LANGUAGES`, `BASED IN`, `MMXXVI`, `AVAILABLE FOR OPPORTUNITIES`.
- **Headlines:** Sentence case, never Title Case. e.g. "Things I built, mostly because I wanted them to exist."
- **Body:** Standard sentence case. Em-dashes (`—`) preferred over hyphens for clauses. Single en-dash for ranges (`2023 — 2027`).
- **Roman numerals** for years (`© MMXXVI`) and section ornaments.

### Punctuation marks worth keeping
- `/ 01`, `/ 02` — section numbering, always with a leading slash and zero-padded.
- `—` — long em-dashes everywhere clauses need to breathe.
- `·` — middle dot as a separator in metadata lines (`© MMXXVI · WEI CHEN · BUILT WITH CARE`).
- `→` — used for "more" links and forward navigation (e.g. `ARCHIVE OF OLDER WORK →`).
- `◍` — small open-circle/marker glyph for the "available" status pill.
- A literal **vermilion period** after "Wei." in the logo. This is the brand's loudest mark.

### Emoji
**Never.** The vibe is print-shop, not chat app. Unicode glyphs (→, ·, ◍, ·, —) carry any "iconographic" weight that emoji might otherwise. If a status marker is needed, use `◍` (open) or `●` (filled) in the accent color, not a green dot emoji.

### Numbers
- Section numbers: `/ 01`, `/ 02` — always zero-padded.
- Years: `2023 — 2027 (expected)`. The em-dash is mandatory.
- Skill orders: `01`, `02`, `03` — zero-padded mono.
- Copyright year and other ornamental years: roman numerals (`MMXXVI`).

### Worked examples
- **Hero line:** "Wei Chen, / building things / that think." — three-line break, lowercase fragment after a comma, restrained ending.
- **About line:** "A computer science student exploring the edges where algorithms, physics, and language meet." — sentence-cased, one concrete verb, three nouns.
- **Status pill:** `◍  AVAILABLE FOR OPPORTUNITIES` — tracked mono, the marker is the only color.
- **Contact:** "Say hello, or send a strange link." — invites a peculiar email, not a meeting request.

---

## VISUAL FOUNDATIONS

**Visual identity:** The system is built in the **Wabash College visual language** — white paper, near-black ink, **Wabash Red `#C8102E`** as the single brand color, and heavy slab-serif Girga set at poster sizes for impact. This is a deliberate homage to Wabash's design system; Wei is a current Wabash student and the design borrows the College's house faces and color vocabulary.

A previous **editorial cream + vermilion** flavor of the same system is preserved as an opt-in alternate theme via `[data-theme="editorial"]` — the design tokens are layered so both feels coexist without forking the system.

### Page paper
The system sits on **pure white `#FFFFFF`**. Slight warm-gray steps (`--paper-100` `#F5F4F2`, `--paper-200` `#ECEAE6`) are used when banding a section. Cards do NOT sit on a separate inset surface — they live directly on the page paper bounded by a hairline.

### Ink
Body ink is **`#231F20`** — Wabash's official warm near-black (PMS Neutral Black C). Secondary text steps through `#3F3A3B` → `#6E6A6B` → `#9C9899` → `#CCC8C9`. The warm-bias holds harmony with the salmon and red — cool `#000` would feel out of place against them.

### Accent — Wabash Red + Light Salmon
**Wabash Red `#C81C31`** is the system's primary chromatic color, paired with **Light Salmon `#FBC391`** as a tertiary warm tone. These are the official Little Giants colors (PMS 186 C and PMS 148 C respectively).

**Red —** sanctioned uses:
1. The wordmark — "Wei." set fully in red.
2. Active nav underline (2px bar).
3. Section eyebrow numbers (`/ 04`).
4. **One full-bleed poster section per page** — Selected Projects bleeds to red with white type.
5. The status marker (`◍`) inside the availability pill.
6. Inline emphasis (`<em>`) — rendered as red + medium weight, not italic.

**Light Salmon —** sanctioned uses:
1. A second full-bleed feature section as warm alternative to red (e.g. an About spread or Writing landing). Black text on salmon — never red.
2. Banding a single tile or callout inside an otherwise plain-paper section.
3. Never as a button fill, body text color, or hairline.

Neither color is ever used as a generic CTA fill, hover wash, or gradient. They are poster moves — reserved.

### Typography
- **Display & headlines** — **Alfa Slab One** (Google Fonts, free, OFL). A heavy single-weight slab in the Cooper-Black family. Hierarchy is built with **size**, not weight. Display sizes go genuinely large: `--t-display-1: 128px`, hero clamps up to `132px`. Tracking is near-neutral (`-0.005em`) because the slabs are already wide. The supplied Girga Stencil file remains in the stack — if a future build wants to switch to licensed Girga, list it first and the system swaps with no other changes.
- **Body & UI** — **Hanken Grotesk** (Google Fonts, free, OFL). A neutral grotesque, very close in feel to Untitled Sans. Quiet work so the display can carry the voice. Untitled Sans is kept in the stack too — drop in licensed files and it takes over.
- **Mono / micro** — **JetBrains Mono** (free, OFL). 500 weight, uppercase, `0.18em` letter-spacing for all eyebrows, metadata, section numbers, button labels, status pills, and tags.

**The whole system is now fully free / OFL-licensed at the typography layer** — no commercial license required to ship. The user-supplied Girga Stencil and Untitled Sans Test files are still wired via `@font-face` (see `fonts/README.md`) but they are NO LONGER the active defaults.

### Spacing
Generous. Sections sit on `~96px` vertical breathing room. Within a section, prose is held to `~64ch`. The red poster section uses tighter internal padding so it reads as a publication spread.

### Backgrounds
- **No gradients.** Anywhere.
- **One signature move:** a full-bleed `--red-500` background for a feature section, with white type. Once per page.
- **No imagery in backgrounds** by default. If photos are added, they're warm and slightly grainy, never cool/neon.
- A section may band with `--paper-100` (`#F5F4F2`) if multiple plain-paper sections need separation.

### Borders & dividers
- **Hairlines** (1px, `--paper-300` `#D9D6D1`) between rows inside a section.
- **Heavy ink rules** (`4px solid var(--ink-900)`) under section headers and skill-column headers — the brand's *category bars*. Wabash uses this treatment.
- **Red marker bars** (`4px solid var(--red-500)`) reserved for active nav.
- All rules square — no rounded ends.

### Cards
A card is a **bordered rectangle**, 1px hairline, no shadow, no rounded corners. Hover: border darkens to ink. Inside the red poster section, project cards have no left or top border — only the grid lines between them — mimicking a publication table.

### Corner radii
- `0` for cards, buttons, inputs, sections.
- `2px` for inline `code` tags only.
- `999px` (pill) only for the status pill.

### Shadows
Effectively none.

### Animations
- Default duration `240ms`, easing `cubic-bezier(0.2, 0.7, 0.2, 1)`. No bounces.
- Hover on a link: color → red AND underline reveal. Two signals, one motion.
- Buttons darken (ink → red on `:hover`) and shrink 1.5% on `:active`.

### Hover states
- **Primary button (ink fill):** background shifts to Wabash Red on hover — a moment of brand color at the point of intent.
- **Red button:** darkens to `--red-700` (`#9C0C24`).
- **Ghost button:** fills to ink, text to paper.
- **Links:** color → red, underline appears.
- **Nav items:** color → ink, 2px red bar underneath.

### Press states
`transform: scale(0.985)` for `120ms`. No color shift.

### Transparency & blur
None. The masthead is solid white. Frosted glass and `backdrop-filter` are not part of the Wabash language.

### Dark mode
Opt-in via `[data-theme="dark"]`. Paper goes near-black `#0A0A0A`, ink flips to off-white `#FAFAF9`, Wabash Red warms slightly to `#E5435A`. Mirrors Wabash's own wordmark on black (see `uploads/Wabash Logo.jpeg`).

### Editorial mode (opt-in)
The original cream + vermilion v1 system is preserved via `[data-theme="editorial"]`. Useful for a quieter long-read context inside an otherwise Wabash-styled site.

### Typography
- **Display & headlines** — **Girga** at weight **300** (light) with negative tracking. Girga is Wabash College's custom display serif; its light weight + tight tracking produces the editorial newspaper-headline feeling that defines the brand. Italic Girga appears inline for emphasized single words. *Fallback while files are unsupplied: Newsreader (Google Fonts).*
- **Body & UI** — **Untitled Sans** by Klim Type Foundry at 400 (with 300 for very large hero copy and 500 for buttons). Generous 1.5 leading. Untitled Sans is the brand's neutral, slightly humanist grotesque — it does the quiet work so Girga can carry the voice. *Fallback while files are unsupplied: Hanken Grotesk (Google Fonts).*
- **Mono / micro** — JetBrains Mono 500 uppercase with `0.18em` letter-spacing for **all** eyebrows, metadata, section numbers, button labels, status pills, and tags. The mono is the system's connective tissue.

#### Font files & licensing
Both Girga and Untitled Sans are **licensed faces** — they are not bundled in this repository. Drop the `.woff2` files into `/fonts/` and they load automatically via `@font-face` (see `colors_and_type.css`). Expected filenames are documented in `fonts/README.md`. Until then, the substitutes above render in their place — close in feel but not pixel-perfect.

#### What is currently in `/fonts/`
The user supplied two files and they are **already wired in**:

- `GirgaW00-Stencil.woff2` — **the Stencil cut of Girga**, not a regular display weight. Stencil has cut/broken letterforms; it is a single bold-ish weight with no italic. It is registered under family `'Girga'` so existing rules pick it up, but it lends the system a distinctly cut-paper / industrial display feel that's different from a refined editorial serif. If you want the regular display cut of Girga, supply `Girga-Light.woff2` and friends and the Stencil file will be superseded for the standard family while remaining available as `'Girga Stencil'`.
- `UntitledSans-Test-Regular.woff2` — **Klim's "Test" trial build**, registered under family `'Untitled Sans'` at weight 400. The trial build has limited character set, no kerning tables, and is **not licensed for production use**. A proper webfont license from Klim is required before deployment. The 300/500/600 weights cascade to Hanken Grotesk until full Untitled Sans files arrive.

The display tracking token (`--tr-display`) has been loosened from `-0.02em` to `-0.005em` to give Girga Stencil's cut letterforms a bit more air. If/when a regular Girga weight is supplied, tighten this back up.

### Spacing
Generous. Sections sit on `~192px` vertical breathing room (`--s-11`). Within a section, content is held to a `64ch` measure for prose. There is intentional whitespace at the top of the page — the hero scrolls into view rather than slamming into the masthead.

### Backgrounds
- **No gradients.** Anywhere. (Other than a hint of `paper-200` for soft section banding.)
- **No imagery in backgrounds.** The system does not use hero photos, illustrations, parallax, or particles. The page is a sheet of paper.
- **No repeating patterns** beyond a 1px hairline divider in `--paper-400`.
- A section may have a slightly darker paper wash (`--paper-200`) to band it visually — used at most twice per page.

### Borders & dividers
Hairlines, 1px, in `--paper-400` (`#D6CFC2`). They sit between sections, between rows in tables/lists, and along the bottom of nav. **Never** drop-shadowed; **never** with rounded corners. A divider is a thin line, not a card edge.

### Cards
What looks like a card is almost always a **bordered rectangle** with `--hair` (1px `--paper-400`), no shadow, no rounded corners, sitting on the cream page. Inside the card, a `/ 01` eyebrow top-left, content below. The brand does not use lifted/floating cards.

### Corner radii
- `0` for cards, buttons, inputs, dividers, sections — square is the default.
- `2px` for inline `code` tags and small chips.
- `999px` (pill) only for the status pill `◍ AVAILABLE FOR OPPORTUNITIES` — and even then with a hairline border, not a fill.

### Shadows
Effectively none. A nearly-invisible `0 1px 0 rgba(35, 29, 26, 0.04)` may sit under the sticky nav when scrolled. No `box-shadow: 0 4px 24px rgba(0,0,0,0.3)` ever. The system reads as a printed object, and printed objects don't cast shadows.

### Animations
- **Subtle, slow, and few.** Default duration `240ms`, easing `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- **No bounces.** Ever.
- Hover on a link: a 1px underline grows in from the left over `240ms`.
- Page sections fade-and-rise on first view (`opacity 0→1`, `translateY(8px)→0`) over `~480ms`.
- The theme-toggle swap is `dur-3` (`480ms`) cross-fade — never an instant flip.

### Hover states
- **Links:** Underline reveal (left-to-right). Color does not change.
- **Buttons:** Background darkens by ~6% (or the dark fill lightens by the same amount). Text does not change color.
- **Nav items:** The item's color shifts from `--ink-500` → `--ink-900` and a 1px underline appears.

### Press states
- **Buttons:** `transform: scale(0.985)` for `120ms`. No color shift on press.
- **Tap targets** are never colored differently — the scale is the haptic.

### Transparency & blur
- The sticky top nav uses a `backdrop-filter: blur(20px)` over `rgba(248, 246, 242, 0.75)` once the user has scrolled past the hero. Off otherwise — at rest the nav is solid paper.
- No other surface uses blur. No "frosted card" anywhere.

### Color vibe of imagery
There are no hero photos or illustrations in the reference. **If imagery is added in the future**, it should be:
- Warm-toned (not blue/cool).
- Slightly desaturated; never neon or fluorescent.
- Lightly grainy / film-stock-feeling acceptable; airbrush-clean unacceptable.
- B&W is on-brand. Duotones in vermilion + ink are on-brand. Stock-photo color isn't.

### Layout rules
- Single-column reading flow for prose sections.
- Two-column with eyebrow + body for "rows" (Education, Experience, Writing) — eyebrow column is fixed-width left-aligned, body column flexes.
- A **12-column grid** at 1200px max-width with a `--gutter` of `clamp(24px, 5vw, 80px)` for project galleries and skills.
- Sticky elements: top nav only.

### Dark mode
Opt-in via `[data-theme="dark"]` on `<html>`. It is **paper-noir**, not pure black — `#131210` paper, `#F0ECE6` ink, vermilion warms to `#ED7845`. All hairlines move to `--paper-400` (`#3A342E`). The italic-vermilion in-line accent stays vermilion.

---

## ICONOGRAPHY

The reference site uses **almost no icons.** The brand's iconographic vocabulary is, in priority order:

1. **Unicode glyphs** — the system's preferred "icon set":
   - `→` forward / "more"
   - `↗` external link
   - `·` separator
   - `—` em-dash separator / range
   - `◍` open marker (availability / now)
   - `●` filled marker (active / recording / status)
   - `/` section delimiter (used compositionally: `/ 04 SELECTED PROJECTS`)
   - `★` (sparingly) for highlight pull-quotes — optional
   
   These glyphs are always set in the **mono** typeface (JetBrains Mono) at the same size as the surrounding eyebrow so they sit on the baseline cleanly.

2. **Numerals & roman numerals** — `/ 01`, `/ 02`, `MMXXVI`. These are iconographic in the editorial sense; they sit where logos or symbols would on other sites.

3. **The vermilion period** (`.`) after "Wei." — the wordmark. This is the only true logo on the system.

4. **SVG icons** — used only for the tiny set of external/utility cases:
   - Theme toggle (sun / moon).
   - External link arrow on contact rows (GitHub, LinkedIn, Twitter/X, Email).
   - The status-marker dot, when it needs to animate.
   These are drawn as **1.5px stroke, no fill, square caps, square joins**, in `currentColor`. They live in `assets/icons/` as individual SVGs.

5. **Brand-mark SVGs** — `wei-wordmark.svg`. Single-color, vector, sits at `currentColor` so it inverts on dark mode automatically.

### Emoji?
No. Replace any urge to emoji with a Unicode glyph or a section eyebrow.

### Substitutions flagged
- The reference site uses **no third-party icon library**. Where additional icons are needed (e.g. social profile glyphs that aren't supplied as SVGs), the system substitutes **Lucide** icons at `1.5px` stroke as the closest match to the editorial aesthetic. This is a substitution and is flagged here.
- Fonts are loaded from **Google Fonts** at runtime — no `.woff2` was packaged with the reference. If pixel-perfect offline rendering matters, the user should supply self-hosted font files; until then the Google Fonts import is the source of truth.

---

## Files in this system

| Path | Purpose |
|---|---|
| `README.md` | this file — context, content rules, visual foundations, iconography |
| `colors_and_type.css` | the only token file — color and type CSS variables, semantic classes |
| `SKILL.md` | agent-skill entrypoint, also usable in Claude Code |
| `preview/*.html` | individual specimen cards for the Design System tab |
| `ui_kits/website/` | personal-website UI kit — `index.html` clickable demo + JSX components |
| `assets/icons/` | the small set of SVG icons (theme toggle, external link, status dot, social glyphs) |
| `assets/wei-wordmark.svg` | the "Wei." wordmark |
| `research/` | screenshots and notes from the reference site |
| `uploads/wei-portfolio.html` | the original reference build provided by the user |

## Open questions / iterate with the user
- The reference content is full of bracketed placeholders (`[Your University]`, `[Project One]`). The real biographical/project content has not been provided yet — the UI kit and slides use the same bracketed placeholders so they slot in cleanly when real copy arrives.
- No real headshot or imagery is in the system. If/when one arrives, the duotone treatment described under "Color vibe of imagery" should be applied.
- Self-hosted font files: **partially supplied.** `fonts/GirgaW00-Stencil.woff2` (Stencil cut, not regular) and `fonts/UntitledSans-Test-Regular.woff2` (Klim trial build, not production-licensed) are in place — see `fonts/README.md` for the full picture and what still needs to come.
