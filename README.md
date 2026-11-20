# Isaac Adelore Portfolio

Recruiter-first portfolio site for Isaac Adelore, built with Astro.

## Stack

- Astro
- Plain CSS with component-scoped styles

## Local development

```sh
npm install
npm run dev
```

Open `http://localhost:4321`.

## Production build

```sh
npm run build
npm run preview
```

## Content notes

- `src/components/Work.astro` holds the main commercial case study summaries.
- `src/components/Services.astro` currently acts as the public proof section for GitHub-backed work.
- `public/cv.pdf` is linked directly from the site.

## Adding screenshots to a case study

Projects without images show a dark text panel on the home page and nothing in
the gallery. Nothing placeholder-like is ever rendered. To add a screenshot:

1. Export it as WebP at two widths and put both in `public/work/<slug>/`,
   for example `public/work/eazi-ai/chat-800.webp` and `chat-1600.webp`.
2. In `src/data/work.ts`, give the project a `cover` (replaces the text panel)
   or add entries to `gallery` (shown under the write-up):

```ts
cover: {
  src: '/work/eazi-ai/chat',
  widths: [800, 1600],
  ratio: 1440 / 900,          // width / height of the image
  alt: 'Eazi AI chat with a spreadsheet attached',
  frame: 'browser',           // 'browser', 'phone' or 'plain'
},
```

Remove anything confidential (names, account numbers, internal URLs) before
exporting, or recreate the screen with sample data.
