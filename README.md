# richardsd.github.io

Personal website and portfolio of **Ricardo Dias**, Senior Software Engineer based in Lisbon, Portugal.

🌐 **Live site**: [richardsd.github.io](https://richardsd.github.io)

---

## About

A single-file personal-professional portfolio — no framework, no build step, no dependencies beyond Google Fonts. Everything (HTML, CSS, JS) lives in `index.html`.

**Design highlights:**
- Electric Teal & Midnight colour palette with full dark/light theme toggle (system preference detected on first load)
- Animated hero with ambient orbs and mouse parallax
- Scroll-triggered section reveals
- Fully responsive — mobile, tablet, desktop

---

## Structure

```
/
├── index.html          # The entire site — HTML, CSS and JS in one file
├── README.md           # This file
└── assets/
    └── images/
        └── profile.jpg # Profile photo
```

**Sections (in order):**
1. What I care about — present-day narrative, languages, and focus themes
2. Selected work and explorations — AI workflows, generative UI, frontend architecture, and personal tools
3. Professional experience — Hyland, Nuxeo, and earlier engineering work
4. Research and publications — music recommendation, discovery, visualisation, and interaction
5. Skills and focus areas — current focus, strong background, and exploring
6. Education — PhD, MSc, BSc, plus lighter academic/community context
7. Personal notes — curiosity, music, languages, travel, and learning by building

---

## Running locally

No build step needed. Just open the file in a browser:

```bash
open index.html
# or
python3 -m http.server 8000  # then visit http://localhost:8000
```

---

## Updating content

All content is in `index.html`. Key landmarks to navigate the file:

| Section | Search for |
|---|---|
| Hero / profile card | `<!-- HERO -->` |
| What I care about | `<!-- WHAT I CARE ABOUT -->` |
| Selected work and explorations | `<!-- SELECTED WORK AND EXPLORATIONS -->` |
| Professional experience | `<!-- PROFESSIONAL EXPERIENCE -->` |
| Research and publications | `<!-- RESEARCH AND PUBLICATIONS -->` |
| Skills and focus areas | `<!-- SKILLS AND FOCUS AREAS -->` |
| Education | `<!-- EDUCATION -->` |
| Personal notes | `<!-- PERSONAL NOTES -->` |
| Design tokens (colours) | `[data-theme="dark"]` / `[data-theme="light"]` |

---

## Changelog

| Date | Changes |
|---|---|
| 2026-05 | Reframed the page from CV-style structure to a present-day personal-professional portfolio |
| 2025-03 | Full redesign — new palette, typography, layout, animations |
| 2025-03 | Added Projects, Teaching, Certifications, Conferences sections |
| 2025-03 | Added all 7 publications, CEFR language levels, meta/OG tags, favicon |
| 2025-03 | Updated profile photo, expanded Nuxeo experience description |
