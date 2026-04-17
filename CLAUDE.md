# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A static personal portfolio/CV hosted on GitHub Pages. Single-page HTML resume — no framework, no build step for production.

## Development

```bash
npm install          # Install node-sass
npm run compile:sass # Watch and compile sass/main.scss → css/style.css
```

To preview locally, open `index.html` directly or use any static file server. Deploys automatically to GitHub Pages on push to master.

## Architecture

- **Single file**: All content lives in `index.html` (~808 lines), fully hardcoded HTML — no JSON, markdown, or CMS
- **Styling**: `assets/css/risen.css` (233KB Bootstrap-based theme, do not edit) + `assets/css/custom.css` (overrides for profile image, badges, tech icons)
- **Interactivity**: `assets/profile-slider.js` cycles through 7 profile photos on click; Bootstrap 5 tooltips initialized via inline script

## Content Sections (in order in index.html)

1. Social links header
2. Profile — name, role, contact info
3. About Me
4. Work Experience — timeline entries
5. Tech Stack — SVG icons in `assets/images/tech-icons/`
6. Featured Projects
7. Education

## Key Assets

- `assets/images/profiles/` — 7 profile photos (`profile-0.jpg` through `profile-6.jpg`)
- `assets/images/tech-icons/` — 17 SVG technology icons
- `CNAME` — GitHub Pages custom domain config
