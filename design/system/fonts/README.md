# Fonts — Wabash College house faces

This folder holds the **licensed** webfonts used by the system. The CSS in `../colors_and_type.css` looks for these specific filenames; drop the files in here and the system picks them up automatically (no other changes needed).

## Active default — fully free fonts

The system has been retargeted to **completely free, OFL-licensed Google Fonts** as the active defaults. No commercial license required to ship.

| Role    | Active font     | Source       | License |
| ------- | --------------- | ------------ | ------- |
| Display | Alfa Slab One   | Google Fonts | OFL     |
| Body    | Hanken Grotesk  | Google Fonts | OFL     |
| Mono    | JetBrains Mono  | Google Fonts | OFL     |

These load via the `@import` in `colors_and_type.css`. No file lives in this folder for them — Google Fonts is the source.

## The supplied licensed files (kept in stack, not active)

The user previously supplied two licensed files. They remain registered via `@font-face` and stay in the cascade, so if a future build wants to switch to the licensed faces, simply reorder the `--font-serif` / `--font-sans` stacks to list them first. Until then, they sit dormant.

| File                                  | Family it serves         | Notes                                                              |
| ------------------------------------- | ------------------------ | ------------------------------------------------------------------ |
| `GirgaW00-Stencil.woff2`              | `'Girga'`, `'Girga Stencil'` | **Stencil cut.** Distinctive display style with cut letterforms. One weight, no italic. |
| `UntitledSans-Test-Regular.woff2`     | `'Untitled Sans'` w400   | **Klim trial build.** Limited glyph set; non-commercial license — production-blocked. |

Italic text (`<em>`) cascades to Newsreader italic because Girga Stencil has no italic. Body weights 300/500/600 cascade to Hanken Grotesk because only the 400 Untitled Sans Test file is present.

## Girga (display serif) — what's still needed

Custom display serif used for all headlines and the wordmark.

Expected files (`.woff2`, in this folder):

| File                     | Weight | Style  | Used for                                            |
| ------------------------ | ------ | ------ | --------------------------------------------------- |
| `Girga-Light.woff2`      | 300    | normal | All display & section headlines (house weight)      |
| `Girga-Regular.woff2`    | 400    | normal | Smaller serif accents, project-card titles          |
| `Girga-Italic.woff2`     | 400    | italic | The vermilion in-line emphasis word (*email*, etc.) |

If you have a variable-font build (`Girga-Variable.woff2`), the `@font-face` blocks in `colors_and_type.css` can be collapsed into a single `font-weight: 300 700` declaration. Ask me to swap to the variable build once the files are here.

## Untitled Sans (text) — what's still needed

Klim Type Foundry's neutral grotesque. Body, UI, buttons, labels.

| File                              | Weight | Style  | Used for                                |
| --------------------------------- | ------ | ------ | --------------------------------------- |
| `UntitledSans-Light.woff2`        | 300    | normal | Very large hero supporting copy         |
| `UntitledSans-Regular.woff2`      | 400    | normal | All body copy, lede paragraphs (default)|
| `UntitledSans-Medium.woff2`       | 500    | normal | Buttons, strong inline emphasis         |
| `UntitledSans-Bold.woff2`         | 600    | normal | Used sparingly                          |

## Fallbacks (active until files arrive)

The CSS stack falls back automatically:

```
--font-serif: 'Girga', 'Newsreader', Georgia, 'Times New Roman', serif;
--font-sans:  'Untitled Sans', 'Hanken Grotesk', system-ui, sans-serif;
--font-mono:  'JetBrains Mono', ui-monospace, Menlo, monospace;
```

So right now, with no files in this folder, the system loads **Newsreader** + **Hanken Grotesk** + **JetBrains Mono** from Google Fonts. They're the closest free analogs but they are **not** pixel-perfect — Girga has a more distinctive display character (especially in italics and the `a`/`g` terminals), and Untitled Sans is slightly more humanist than Hanken Grotesk.

## Licensing

Both faces are commercial:

- **Girga** — Wabash College's custom-licensed display serif. Use of these files outside Wabash College's marketing/comms typically requires permission. Check with the College communications office.
- **Untitled Sans** — Klim Type Foundry. Requires a webfont license (per-domain, by traffic). https://klim.co.nz/retail-fonts/untitled-sans/

This repository does not ship either font. Drop them in here once licensed.
