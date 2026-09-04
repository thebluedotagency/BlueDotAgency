# The Blue Dot Agency website

Production-ready React and Vite source for The Blue Dot Agency website. This repository contains the actual website code, not only design assets.

## What is included

- React page components and interactions in `src/main.jsx`
- Terms and privacy pages in `src/legal.jsx`
- Responsive layout, typography, animation, and mobile rules in `src/styles.css`
- Images and video in `public/assets`
- LeadConnector calendar and consent-controlled chat integration
- Search metadata, sitemap, robots file, and security headers

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local address printed by Vite.

## Compile a production build

```bash
npm run build
```

The compiled production website is written to `dist`. Test that build locally with:

```bash
npm run preview
```

Do not commit `node_modules` or `dist`; both are generated locally.

## Publish from GitHub

Connect this repository to a static host such as Cloudflare Pages, Netlify, or Vercel.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `20`

The custom domain can then be attached in the chosen host and pointed there from Namecheap.

## Important integrations

- The “Start a conversation” links use the Strategy and Brand Call calendar in LeadConnector.
- Analytics and chat load only after a visitor allows them in Privacy Choices.
- Update `public/robots.txt`, `public/sitemap.xml`, and the canonical metadata if the final domain changes.

## Security headers

The included `_headers` file applies the current security headers on hosts that support the Netlify-style headers format, including Cloudflare Pages. On another host, reproduce the same headers in its platform configuration.
