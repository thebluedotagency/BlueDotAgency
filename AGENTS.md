# AGENTS.md

## Project Overview
This is a React + Vite website for The Blue Dot Agency — a client-rendered, static-first marketing site (no backend framework, no ecommerce). It builds to static assets and deploys to a static host (Cloudflare Pages/Netlify/Vercel) plus a small Cloudflare Worker for routing and security headers.

The goal is to build fast, conversion-focused, content-first pages with minimal shipped JavaScript.

## Core Principles
- Prefer simple, static-renderable components
- Avoid unnecessary client-side data fetching
- Keep JavaScript sent to the browser minimal
- Prioritize fast initial render over heavy interactivity
- Build for clarity and simplicity over abstraction

## Data Fetching
- This site has no first-party API layer; page content lives directly in components
- If external data or APIs are ever introduced, isolate that logic in `/src/lib` — never call it directly from a component
- Don't use `useEffect` to fetch data that could just be static content
- Reserve `useEffect`/`useState` for real interactivity (nav toggles, accordions, consent state), not data loading
- Third-party integrations (analytics, chat) must stay consent-gated and load only after opt-in, matching the existing `PrivacyChoices` pattern in `src/main.jsx`

## Component Guidelines
- Keep components small and reusable; split `src/main.jsx` into `/src/components` as sections grow instead of one large file
- Separate UI from integration/business logic (e.g. consent/localStorage helpers, script-loading logic) rather than inlining it in JSX
- Add `"use client"`-equivalent thinking naturally applies here — everything renders client-side, so scope interactivity to the smallest component that needs it

## Folder Structure
- `/src` → components, styles, and entry points (`main.jsx`, `legal.jsx`, `styles.css`)
- `/src/lib` → shared helpers and third-party integration wrappers (create as needed)
- `/public` → static assets — images, video, `robots.txt`, `sitemap.xml`, `_headers`
- `/server` → Worker handler for asset routing and security headers
- `/scripts` → one-off build/media tooling, not part of the shipped app bundle

## Performance Guidelines
- Always render meaningful content on first load — no blank shells waiting on JS
- Avoid blocking initial render with heavy or synchronous third-party scripts
- Load analytics, chat, and other non-critical scripts after content, and only after consent
- Use optimized images/video and always define dimensions (or aspect-ratio) to avoid layout shift
- Let Vite's default code splitting work for you — don't bundle unrelated features together

## SEO Basics
- Each page needs a proper title and meta description
- Use clean, readable URLs
- Since this is a client-rendered SPA, keep meaningful content and metadata (canonical, Open Graph, JSON-LD in `index.html`) accurate and in sync with the live domain

## Code Style
- Keep code simple and readable
- Avoid unnecessary abstractions
- Prefer explicit logic over clever shortcuts

## What to Avoid
- No unnecessary client-side API calls
- No large third-party libraries unless necessary
- No mixing data-fetching or integration logic inside UI components
- No overengineering early in the project

## Development Approach
- Get content rendering early
- Iterate and optimize later

## Goal
Deliver a fast, clean, conversion-focused marketing site without unnecessary complexity.
