# React + Vite Marketing Website Standards

Reviewed: September 4, 2026. Scope: a public marketing website built with React and Vite.

This is a recommended project policy, not a single official industry standard. MUST identifies a release requirement; SHOULD identifies a default that can be changed with a documented reason. Apply rules to the feature being changed. Record existing issues separately rather than expanding every task into a rewrite.

## 1. Project setup and tooling

- SHOULD use TypeScript with strict checking for new code. For an existing JavaScript project, propose a gradual migration rather than rewriting it automatically.
- MUST use one package manager, commit its lockfile, and use reproducible installs in CI.
- MUST document supported Node.js and package-manager versions compatible with the installed Vite version.
- MUST provide working scripts for development, production build, linting, formatting checks, and applicable tests. TypeScript projects MUST have a separate type-check step; a Vite build alone is not proof of type safety.
- SHOULD use ESLint with React Hooks rules and a consistent formatter. Fix causes rather than broadly disabling rules.
- SHOULD use supported stable dependencies. Evaluate maintenance, license, security, accessibility, and bundle cost before adding packages. Do not upgrade major versions incidentally.
- MUST document setup, environment variables, rendering strategy, deployment, and verification commands in the README.

## 2. Architecture and React

- SHOULD keep components focused on one responsibility and compose them into sections and pages. Extract shared code when reuse or complexity justifies it; avoid arbitrary file-size limits.
- MUST keep rendering pure, treat props and state as immutable, follow the Rules of Hooks, and use stable keys for changing lists.
- SHOULD keep state close to its consumers. Compute derived values during rendering and handle user actions in event handlers.
- SHOULD use Effects to synchronize with external systems, with correct dependencies and cleanup. Do not use Effects merely to copy props into state or compute derived state. See [React's Effect guidance](https://react.dev/learn/you-might-not-need-an-effect).
- SHOULD prefer local state before context or a global store. Add memoization after identifying a performance need.
- MUST handle loading, empty, success, and error states for asynchronous features. Prevent stale responses from overwriting newer results where applicable.
- SHOULD separate reusable UI, page sections, content, and external-service calls when the project grows. Use the existing organization if it remains clear.
- MUST avoid unexplained `any`, unsafe casts, dead code, and suppressed errors. Validate untrusted external data at runtime; TypeScript types do not validate network responses.

Example organization, optional rather than mandatory:

```text
src/
  components/   # Shared UI
  sections/     # Marketing page sections
  pages/        # Route-level composition, if applicable
  content/      # Copy and content data
  hooks/        # Shared React behavior
  lib/          # Integrations and utilities
  styles/       # Tokens and global styling
  assets/       # Build-managed assets
```

Component boundaries and minimal state follow [Thinking in React](https://react.dev/learn/thinking-in-react).

## 3. Styling and responsive design

- SHOULD use one primary styling approach, consistent with the existing project. CSS Modules, ordinary CSS, and utility CSS can all be valid choices.
- MUST centralize recurring colors, typography, spacing, radii, and other design tokens.
- MUST support narrow screens, touch input, long content, and browser zoom without clipping essential content or unintended horizontal scrolling.
- SHOULD use mobile-first layouts, flexible sizing, and content-driven breakpoints. Avoid device-specific positioning hacks.
- MUST provide clear hover, focus, active, disabled, and error states where relevant. Essential interactions must work without hover.
- SHOULD keep animation purposeful and respect reduced-motion preferences. Avoid animation that delays access to content.

## 4. Accessibility

Target [WCAG 2.2 Level AA](https://www.w3.org/TR/WCAG22/). The following is a practical subset, not a complete conformance checklist:

- MUST use semantic landmarks, logical headings, links for navigation, and buttons for actions. Prefer native HTML over custom ARIA widgets.
- MUST make all controls keyboard operable with visible, unobscured focus. Provide a skip link. Dialogs must manage and restore focus appropriately.
- MUST give controls accessible names, inputs associated labels, and errors programmatic associations. Announce asynchronous status where needed.
- MUST provide meaningful image alternatives; decorative images use empty alt text. Provide captions for prerecorded video with audio.
- MUST meet text contrast of at least 4.5:1, or 3:1 for qualifying large text; applicable UI boundaries and states need 3:1 contrast. Do not convey information through color alone.
- MUST meet applicable AA target-size requirements: 24 by 24 CSS pixels or a qualifying spacing/other exception. SHOULD aim for 44 by 44 for touch usability.
- MUST manually check keyboard navigation, zoom/reflow, and representative screen-reader flows. Automated tools alone cannot establish conformance.

## 5. Search visibility and rendering

- MUST explicitly choose and document client rendering, static generation/prerendering, or server rendering. Vite alone does not automatically prerender route content.
- SHOULD deliver meaningful content and metadata in initial HTML for important acquisition pages. Assess a Vite-compatible prerendering/SSR solution if necessary; do not migrate frameworks without a concrete need.
- MUST give each indexable route a descriptive title, meta description, canonical URL, and clear primary heading. Provide appropriate social-sharing metadata and absolute image URLs.
- MUST use real crawlable links, stable URLs, and correct redirects. Verify direct navigation and refresh on every public route.
- MUST return appropriate HTTP statuses, including real 404 responses for missing pages where hosting supports them. Do not silently serve the homepage for every unknown URL.
- MUST configure production indexing intentionally, provide a sitemap for indexable routes, and ensure staging indexing controls do not leak into production. `robots.txt` is not access control.
- SHOULD add structured data only when it matches visible, accurate content and a supported use case. Do not invent ratings, reviews, or business facts.
- MUST verify deployed HTML, rendered content, metadata, and share previews. Client-only head updates may not be seen by social crawlers.

Google describes rendering and crawler considerations in its [JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

## 6. Performance

- SHOULD target good Core Web Vitals at the 75th percentile of real visits, assessed separately for mobile and desktop: LCP ≤ 2.5 seconds, INP ≤ 200 milliseconds, CLS ≤ 0.1. See [Web Vitals](https://web.dev/articles/vitals).
- MUST distinguish field measurements from lab tests. A Lighthouse score does not establish a real-user Core Web Vitals pass.
- MUST size and compress images appropriately, use responsive sources where useful, and reserve image/video dimensions to prevent layout shifts.
- SHOULD lazy-load offscreen media. Do not lazy-load the likely LCP hero image; prioritize it when justified.
- SHOULD minimize client JavaScript, defer nonessential third-party scripts, and split heavy optional features or routes when useful. Avoid adding a large library for a small effect.
- SHOULD minimize font families and weights, use efficient formats, and choose fallback/display behavior that limits layout movement.
- MUST measure representative production pages under documented mobile lab conditions. Establish project-specific asset and script budgets from measurements and flag regressions; arbitrary universal budgets are not standards.

## 7. Forms, security, and analytics

- MUST treat all browser-delivered values as public. Never put private API keys or service credentials in client code or `VITE_*` variables. Use a server/serverless endpoint for privileged operations. See [Vite environment variables](https://vite.dev/guide/env-and-mode).
- MUST keep secrets out of source control and provide an `.env.example` containing placeholders only.
- MUST validate form submissions on the server as well as in the client. Apply appropriate abuse controls and avoid exposing sensitive details in errors or logs.
- MUST show accurate pending, success, and failure states, prevent accidental duplicate submissions, and preserve input on recoverable failures. Show success only after confirmed acceptance.
- MUST avoid inserting untrusted HTML. If rich HTML is necessary, sanitize it with a maintained solution and assess URL safety.
- MUST serve production over HTTPS. SHOULD configure and test relevant hosting security headers, including a Content Security Policy appropriate to required integrations.
- MUST keep personal form contents out of analytics events and URLs. Document collected data and implement the site's applicable consent requirements.
- SHOULD load analytics and marketing scripts only when needed and permitted. Track conversions after confirmed success and prevent duplicate events during client navigation.
- MUST use factual approved copy. Do not fabricate testimonials, client logos, statistics, guarantees, or certifications.

## 8. Testing and release checks

- MUST run linting, type checking when applicable, and a production build before release. Run a formatting check if configured.
- SHOULD use Vitest and React Testing Library, or existing equivalents, for meaningful logic and component behavior. Test user-visible outcomes rather than implementation details.
- SHOULD use Playwright or an existing browser-test tool for critical flows: navigation, primary CTA, and form submission including failure recovery. Mock external services in CI to avoid real leads or purchases.
- MUST manually check representative mobile and desktop layouts, keyboard operation, broken links, and browser errors. Include browsers relevant to the site's audience.
- MUST verify production-like routing, metadata, assets, forms, analytics, and environment configuration on a preview deployment. The development server is insufficient evidence.
- MUST deploy the correct production output with documented routing, cache, and rollback configuration. `vite preview` is a local check, not a production server. See [Vite production builds](https://vite.dev/guide/build).
- SHOULD cache fingerprinted assets for long periods while ensuring HTML can pick up new deployments.
- MUST report checks actually run, results, skipped checks, and remaining risks. Never claim tests, compliance, performance results, or deployment verification without evidence.

## Definition of done

- [ ] Requested behavior works, including relevant failure states.
- [ ] Code follows existing conventions and introduces no unnecessary abstractions.
- [ ] Applicable automated checks pass; skipped checks are explained.
- [ ] Responsive layouts and accessibility have been checked.
- [ ] Public routes, metadata, and indexing behavior are verified.
- [ ] Performance impact and new dependencies have been assessed.
- [ ] Forms and integrations are configured without exposed secrets.
- [ ] Documentation and deployment instructions reflect the change.

## Review severity

- **Blocker:** broken build/core flow, exposed secret, severe security issue, or accidental production indexing block.
- **High:** inaccessible essential control, failed lead capture, broken public route, or major performance regression.
- **Medium:** maintainability, metadata, or testing gap with a concrete impact.
- **Low:** optional refinement or convention preference. Do not present preference as an official standard.

Document exceptions with the reason, scope, owner, and follow-up when needed.
