# niallforrest.com

A small, opinionated portfolio site for an independent software engineer and
designer. Mostly black, mostly white, one strong orange, no rounded corners.

Built with [Astro](https://astro.build), Space Grotesk, Inter, and a stubborn
refusal to use a single npm package where vanilla CSS will do.

---

## Running it

```sh
npm install
npm run dev      # localhost:4321, hot reload, no ceremony
npm run build    # static export to dist/
npm run preview  # serve the build before shipping
```

Node 22 or higher. No database, no API, no auth. Nothing to set up.

---

## How it's put together

```
src/
├── components/       # Hero, Manifesto, Work, About, Services, Contact, Nav, Footer, ProjectCard
├── data/
│   └── projects.ts   # single source of truth — edit projects here
├── layouts/
│   └── Layout.astro  # html shell, fonts, global css import
├── pages/
│   ├── index.astro   # homepage composes the components above
│   └── work/
│       └── [slug].astro   # generates a case-study page per project
└── styles/
    └── global.css    # design tokens (colour, type, spacing) + base styles
```

### Adding a project

Open `src/data/projects.ts`, append a new entry, save. The card appears on the
homepage grid and a case-study page generates at `/work/<slug>` at build time.
That's the whole workflow.

### Changing the accent colour

`--color-accent` in `src/styles/global.css`. Every accent moment on the site
reads from this one token. Currently set to International Orange (`#FF4F00`).

---

## What this isn't

- A starter template — opinionated layout choices, swap with care.
- A CMS-backed site — content lives in TypeScript, intentionally.
- Particularly clever — the cleverness is in what's been left out.

---

## License

The code is mine to share. The writing, the visual decisions, and the project
case studies are not — please don't copy those wholesale onto your own site.

Made with care. And, where it helped, with AI.
