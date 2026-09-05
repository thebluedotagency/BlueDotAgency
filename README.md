# The Blue Dot Agency website

Production-ready React and Vite source for The Blue Dot Agency website. This repository contains the actual website code, not only design assets.

## What is included

- React components in `src/App.jsx` and `src/components/*.jsx`, composed by the entry point in `src/main.jsx`
- Terms and privacy pages in `src/legal.jsx`
- Responsive layout, typography, animation, and mobile rules in `src/styles.css`
- Images and video in `public/assets`
- LeadConnector calendar and consent-controlled chat integration
- Search metadata, sitemap, robots file, and security headers

## Rendering strategy

This is a client-rendered single-page app (no SSR or build-time prerendering). Each indexable route ships as its own static HTML entry (`index.html`, `privacy-policy/index.html`, `terms-and-conditions/index.html`) with the correct title, meta description, canonical URL, and Open Graph/Twitter tags already baked in for crawlers and social-share previews, and Vite bundles all three from `vite.config.js`'s `build.rollupOptions.input`. The actual page content still renders client-side after that shell loads. Adding a new indexable route means adding another `*/index.html` entry (with its own metadata) plus the matching input in `vite.config.js`, not just a new client-side path.

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

## Lint and format

```bash
npm run lint          # ESLint (react-hooks rules included)
npm run format         # Prettier check
npm run format:write   # Prettier write
```

## Publish from GitHub

Two deployment paths are set up; use whichever matches the host actually connected to this repo — don't run both against the same domain.

**Static host (Cloudflare Pages, Netlify, or Vercel) — the simpler, default path:**

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `20`
- Security headers and asset caching come from `public/_headers` (Netlify-style headers format, also read by Cloudflare Pages).

**Cloudflare Workers with Static Assets — only if you deploy via `wrangler`/the Workers dashboard instead:**

- `wrangler.jsonc` points `main` at `server/index.js` and binds the `dist` build output as `ASSETS`.
- `server/index.js` applies the same security headers as `_headers`, plus long-lived caching for `/assets/*`, at the edge before serving each request.
- If you deploy this way, don't also enable `_headers` handling on the same host — the Worker already sets everything `_headers` would.

The custom domain can then be attached in the chosen host and pointed there from Namecheap.

## Important integrations

- The “Start a conversation” links use the Strategy and Brand Call calendar in LeadConnector.
- Analytics and chat load only after a visitor allows them in Privacy Choices.
- Update `public/robots.txt`, `public/sitemap.xml`, and the canonical metadata in all three `*/index.html` files if the final domain changes.

## Security headers

Both `public/_headers` and `server/index.js` apply the same Content-Security-Policy, security headers, and long-lived `/assets/*` caching — see "Publish from GitHub" above for which one actually applies to your host.
