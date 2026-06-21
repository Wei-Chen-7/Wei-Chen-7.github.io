# design/ — Wei Chen design system + content

Everything needed to build weichen.studio, staged locally so any session can build it
with **no design-login and no re-uploading**.

| Path | What it is |
|---|---|
| `CONTENT.md` | **Canonical site copy.** Reconciles the two source docs (Folio facts + Guide look). Start here for *what goes on the page*. |
| `brand-guide-v2.html` | The 16-page Personal Brand Style Guide (open in a browser to see the intended look). |
| `system/colors_and_type.css` | The token file — color + type CSS variables. Source of truth for *how it looks*. |
| `system/README.md` | Voice, content rules, visual foundations, iconography. |
| `system/ui_kits/website/` | Personal-website UI kit — `index.html` demo + JSX components + `style.css`. |
| `system/preview/` | Specimen cards (colors, type, spacing, components). |
| `system/assets/`, `system/fonts/` | Icons, `wei-wordmark.svg`, and the font files. |

See `../BUILD_PROMPT.md` for the paste-ready prompt that turns this into the site.

**Fonts:** ship on the free Google Fonts defaults (**Alfa Slab One / Hanken Grotesk /
JetBrains Mono**). The bundled `GirgaW00-Stencil.woff2` (Stencil cut) and
`UntitledSans-Test-Regular.woff2` (Klim trial) are **not production-licensed** — don't ship them.
