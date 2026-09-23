# Fourth Gate Studios — Studio Website

Digital systems studio site built with Astro 4.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → http://localhost:4321

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Project structure

```
src/
├── components/
│   ├── Nav.astro        # Shared navigation (pass activePage prop)
│   └── Footer.astro     # Shared footer
├── layouts/
│   └── Layout.astro     # HTML shell, fonts, global CSS import
├── pages/
│   ├── index.astro      # Home
│   ├── services.astro   # Services
│   ├── work.astro       # Work / case studies
│   ├── about.astro      # About
│   └── contact.astro    # Contact + brief form
└── styles/
    └── global.css       # Design tokens, nav, footer, buttons, shared utils
```

---

## Before going live

Confirm these details before publishing:

| Item | File | Note |
|---|---|---|
| Contact email | `contact.astro` | Currently `hello@fourthgatestudios.com` |
| Domain | `astro.config.mjs` | Update when the final domain is chosen |
| Public work | `work.astro` | Keep only approved public/client work |

---

## Deploy to Vercel

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Connect your GitHub repo to Vercel
# Build command:  npm run build
# Output dir:     dist
# Install cmd:    npm install
```

Vercel auto-detects Astro. No extra config needed.

---

## Adding a new page

1. Create `src/pages/your-page.astro`
2. Import Layout, Nav, Footer at the top
3. Pass `activePage="your-page"` to Nav
4. Add your sections and `<style is:global>` block
5. Add GSAP animations in `<script>` tag

```astro
---
import Layout from '../layouts/Layout.astro';
import Nav from '../components/Nav.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="Your Page">
  <Nav activePage="your-page" />

  <section>
    <!-- your content -->
  </section>

  <Footer />
</Layout>

<style is:global>
  /* page-specific CSS */
</style>

<script>
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  // your animations
</script>
```

---

## Tech stack

- **Astro 4** — static site generation
- **GSAP 3** — scroll animations
- **Google Fonts** — Cormorant Garamond + Inter
- **Vercel** — deployment

## Design tokens (CSS variables)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#09080A` | Page background |
| `--s1` | `#111012` | Surface 1 (sections) |
| `--s2` | `#191719` | Surface 2 (cards, inputs) |
| `--text` | `#F0EAE2` | Primary text |
| `--muted` | `#6E6868` | Secondary text |
| `--gold` | `#C8A45A` | Accent / brand colour |
| `--gold-l` | `rgba(200,164,90,.08)` | Gold tint background |
| `--gold-b` | `rgba(200,164,90,.2)` | Gold border |
| `--br` | `rgba(255,255,255,.06)` | Subtle border |
