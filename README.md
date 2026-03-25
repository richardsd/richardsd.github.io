# richardsd.github.io

Personal website and portfolio of **Ricardo Dias**, Senior Software Engineer based in Lisbon, Portugal.

🌐 **Live site**: [richardsd.github.io](https://richardsd.github.io)

---

## About

A single-file personal site and CV — no framework, no build step, no dependencies beyond Google Fonts. Everything (HTML, CSS, JS) lives in `index.html`.

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
1. About — bio, languages (CEFR), stats
2. Experience — professional timeline
3. Projects — side projects, forks, and AI experiments
4. Skills — grouped by domain
5. Education — PhD, MSc, BSc at IST Lisbon
6. Publications — 7 academic papers with links
7. Teaching — MSc supervision and lab instruction at IST
8. Certifications — Coursera and Udemy courses
9. Conferences — presenter, attendee, and volunteer history

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
| About | `<!-- ABOUT -->` |
| Experience | `<!-- EXPERIENCE -->` |
| Projects | `<!-- PROJECTS -->` |
| Skills | `<!-- SKILLS -->` |
| Education | `<!-- EDUCATION -->` |
| Publications | `<!-- PUBLICATIONS -->` |
| Teaching | `<!-- TEACHING -->` |
| Certifications | `<!-- CERTIFICATIONS -->` |
| Conferences | `<!-- CONFERENCES -->` |
| Design tokens (colours) | `[data-theme="dark"]` / `[data-theme="light"]` |

---

## Changelog

| Date | Changes |
|---|---|
| 2025-03 | Full redesign — new palette, typography, layout, animations |
| 2025-03 | Added Projects, Teaching, Certifications, Conferences sections |
| 2025-03 | Added all 7 publications, CEFR language levels, meta/OG tags, favicon |
| 2025-03 | Updated profile photo, expanded Nuxeo experience description |
