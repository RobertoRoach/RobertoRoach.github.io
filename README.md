# robertoroach.github.io

Personal portfolio for **Roberto Roach** — electrical engineering student, robotics educator, web developer, and founder of RAR Technologies. Deployed at [robertoroach.github.io](https://robertoroach.github.io).

Built with:

- **[Astro](https://astro.build)** (static output, content collections)
- **TypeScript** (strict)
- **Tailwind CSS**
- **MDX** for project case studies
- **React** islands (available; not yet needed)

## Local development

```bash
npm install     # install deps
npm run dev     # start dev server at http://localhost:4321
```

## Quality checks

```bash
npm run format:check   # Prettier
npm run lint           # ESLint (Astro + TS)
npm run check          # astro check — type + content collection errors
npm run build          # production build → dist/
npm run preview        # serve dist/ locally
```

Fix Prettier issues with `npm run format`.

## Deploy

Deployment is automated. Any push to `main` triggers `.github/workflows/deploy.yml`, which runs `astro check` and `astro build`, then publishes `dist/` to GitHub Pages via the official Pages actions.

Before merging `portfolio-rebuild` to `main`, verify the site by running `npm run build && npm run preview` locally.

## Content

Project entries live in [`src/content/projects/`](src/content/projects/). Each is a Markdown file with frontmatter validated by the Zod schema in [`src/content/config.ts`](src/content/config.ts).

Missing details are labeled `TODO — ...` in the file rather than fabricated. When you have a fact ready, replace the TODO in place.

## Layout

```
src/
├── components/     Astro components (Nav, Footer, SEO, ProjectCard, CircuitMotif)
├── content/
│   ├── config.ts   Zod schema for the projects collection
│   └── projects/   Case-study Markdown/MDX files
├── layouts/        BaseLayout.astro (site chrome)
├── lib/site.ts     Central metadata + nav/category definitions
├── pages/          Routes: /, /work/, /work/[slug]/, /about/, /contact/, 404
└── styles/         Tailwind base + tokens

public/             Static assets served as-is (favicon, OG image, portrait)
_preserve/          Legacy pre-rebuild index.html (kept as backup)
```
