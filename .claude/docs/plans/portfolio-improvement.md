# Portfolio Improvement Plan

## Context

The current site is a single `index.html` (~808 lines) with all content hardcoded, hosted on GitHub Pages. The user wants to add a References page, a TIL (Today I Learned) page, and modernize the design. The chosen approach: migrate to Astro SSG with markdown/JSON content management and a "dense terminal / dev aesthetic" redesign.

---

## Phase 1 — Astro scaffolding (zero visual change) ✅ DONE

Goal: migrate the current site into Astro with no visible difference. Establish the shared layout and GitHub Actions deploy pipeline.

### What was built

- `src/layouts/BaseLayout.astro` — shared `<head>`, nav, scripts
- `src/components/Nav.astro` — Resume / TIL / References nav links
- `src/pages/index.astro` — full port of `index.html`
- `public/` — CNAME, favicon, all images, profile-slider.js, styles/
- `.github/workflows/deploy.yml` — GitHub Actions auto-deploy on push to master
- `astro.config.mjs` — Astro v6 static output, MDX integration

### Notes (Astro v6 specifics)
- Content config lives at `src/content.config.ts` (NOT `src/content/config.ts`)
- Collections use `glob()` loader from `astro/loaders` — no `type` field
- Render content entries with `render(entry)` from `astro:content` (not `entry.render()`)
- Scripts referencing `public/` assets need `is:inline` directive: `<script is:inline src="...">`
- CSS files placed in `public/styles/` are served as-is (no bundling)

---

## Phase 2 — TIL and References pages ✅ DONE

### Content schemas (`src/content.config.ts`)

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const til = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/til' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    source: z.string().url().optional(),
  }),
});

const references = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/references' }),
  schema: z.object({
    category: z.string(),
    icon: z.string(),       // Bootstrap Icons class name, e.g. "bi-gem"
    links: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      description: z.string().optional(),
    })),
  }),
});

export const collections = { til, references };
```

### TIL entry format (`src/content/til/YYYY-MM-DD-slug.md`)

```markdown
---
title: "Turbo Frames replace full-page reloads"
date: 2025-04-17
tags: ["rails", "hotwire"]
source: "https://turbo.hotwired.dev/handbook/introduction"
---

Body text here. Full markdown supported — code blocks, lists, inline code.
```

### References entry format (`src/content/references/rails.json`)

```json
{
  "category": "Ruby on Rails",
  "icon": "bi-gem",
  "links": [
    {
      "title": "Rails Guides",
      "url": "https://guides.rubyonrails.org/",
      "description": "Official documentation covering every major Rails feature"
    }
  ]
}
```

One file per category. Adding a new reference = open the JSON, append an object.

---

## Phase 3 — Design modernization (PENDING)

Replace `public/styles/risen.css` with a purpose-built `theme.css`. Keep all existing HTML class names in `.astro` files so content markup needs minimal touching.

### Design direction: dense terminal / dev aesthetic

- **Background**: `#0f1117` (page), `#161b27` (surface/card)
- **Accent**: `#f97066` (coral), `#4a7fc1` (blue links)
- **Text**: `#e2e8f0` (primary), `#8b9ab5` (secondary/meta)
- **Borders**: `#2d3a52`
- **Fonts**: Geist (headings, Google Fonts), Inter (body, already loaded), JetBrains Mono (TIL dates, code)

### Layout changes

- **Left sidebar** (fixed 220px, visible at `lg`+): profile photo (80px), name, role, nav links, social icons. Main content scrolls independently.
- **Section headings**: replace icon-in-circle with `border-left: 2px solid var(--coral)` + `padding-left: 0.75rem`.
- **TIL page**: vertical log — JetBrains Mono date stamp on left (sticky at `lg`), tags as small rounded badges.
- **References page**: category card grid — two columns at `lg`, one at mobile.

### CSS class names to reimplement in `theme.css`

Existing (from risen.css):
- `.resume-wrapper`, `.resume-header`, `.resume-profile-pic`, `.resume-name`, `.resume-role-title`
- `.resume-contact-list`, `.resume-section-heading`, `.resume-timeline`, `.resume-timeline-item`
- `.resume-skill-badge`, `.tag-badge`

New:
- `.site-nav`, `.nav-link`, `.nav-link.active`, `.sidebar`, `.main-content`
- `.til-entry`, `.til-date`, `.til-tags`, `.ref-category-card`, `.ref-link-item`

### Steps for Phase 3

1. Add Geist + JetBrains Mono to Google Fonts link in `BaseLayout.astro`
2. Write `public/styles/theme.css` (~400 lines) with CSS custom properties + all class definitions
3. In `BaseLayout.astro`, replace `risen.css` import with `theme.css`
4. Update `index.astro` layout for left sidebar structure at `lg` breakpoint
5. Trim `custom.css` — remove anything now handled by `theme.css`
6. Test all three pages at mobile, tablet, desktop

---

## GitHub Pages deploy setup

1. Workflow triggers on push to `master` — builds and pushes to `gh-pages` branch
2. Go to GitHub repo Settings → Pages → set Source to **gh-pages / root**
3. `CNAME` is in `public/CNAME` — Astro copies it to `dist/` automatically

---

## Verification

- `npm run dev` — local preview at localhost:4321
- `npm run build` — confirms no build errors
- After deploy: check `jea.com.ph`, `jea.com.ph/til`, `jea.com.ph/references`
