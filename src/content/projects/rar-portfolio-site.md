---
title: Engineering Portfolio — robertoroach.github.io
summary: Designed and built through RAR Technologies. A static Astro site with strict TypeScript, Tailwind CSS, and a content-collection–driven case-study system, deployed on GitHub Pages via GitHub Actions.
category: web-and-product-development
featured: true
year: "2026"
role: Designer, Developer, and Publisher — through RAR Technologies
technologies:
  - Astro (static output)
  - Strict TypeScript
  - Tailwind CSS
  - MDX / Markdown content collections
  - GitHub Actions (CI + Pages deploy)
hardware: []
problem: |
  I needed one portfolio that could speak to three audiences at once — potential RAR Technologies clients, engineering and technology recruiters, and college faculty and organizations — without turning into a generic student site.
process: |
  Built as a static Astro site with strict TypeScript and Tailwind. Every project is a Markdown file validated by a Zod schema, so adding a case study is a content edit — not a code change. React islands are available but only used where real interactivity requires them. The visual system is a graphite-and-red engineering aesthetic: PCB-trace motifs, oscilloscope waveforms, and technical annotations, rather than templated card grids.
challenges: |
  Keeping the design distinctive without over-decorating. Every visual element (circuit lines, LEDs, annotations) had to earn its place by encoding something about the content, not just adding "tech-looking" texture.
solution: |
  A content collection with a strict schema for every project field, an editorial layout system with asymmetrical composition, and a CI pipeline that runs `astro check` and blocks deploys on any type or content error before publishing.
results: |
  A static site that builds in under two seconds, deploys automatically to GitHub Pages, and separates content from design cleanly enough to keep updating without touching the code.
lessons: |
  Constraining yourself to real, verified content forces better design decisions. When there's no room for filler, every section has to justify its space.
liveUrl: https://robertoroach.github.io
githubUrl: https://github.com/robertoroach/robertoroach.github.io
status: shipped
order: 2
---

## The stack

- **Astro** for static output with content collections and MDX support.
- **Strict TypeScript** (`astro/tsconfigs/strict`) — the build fails on any type error.
- **Tailwind CSS** with a custom graphite + signal-red palette and a display / body / mono type stack.
- **GitHub Actions** running `astro check → astro build → deploy-pages` on every push to `main`.

## Why the content collection

Every project on this site is a `.md` file with frontmatter validated by a Zod schema. Fields that aren't verified are simply omitted from the rendered case study — the schema tolerates missing values, and the templates skip anything empty, so nothing unverified appears in the public build.

## What running it through RAR means

The site is designed, built, deployed, and maintained through RAR Technologies. It is one of the studio's own reference deliverables — a working example of the same web + technology-product service RAR offers to clients.
