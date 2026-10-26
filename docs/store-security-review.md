# Store security review handoff

Updated October 25, 2026. Prepared for Randy. This is a review handoff, not a completed security audit.

## Deployed scope

Live store: https://www.thebluedotagency.com/store
Guide page: https://www.thebluedotagency.com/store/shot-guide

Implementation commit: 028327411425d06f2c8dc172cc2e9f41fd45e73a
Production base before the store: 8356d9679dd4377c2a0785853827813d71b1845c

Review the implementation diff:
https://github.com/thebluedotagency/BlueDotAgency/compare/8356d9679dd4377c2a0785853827813d71b1845c...028327411425d06f2c8dc172cc2e9f41fd45e73a

React/Vite builds static pages on Vercel. Content updates go through GitHub. There is no store admin login, custom lead API, Supabase runtime, premium inbound webhook, checkout, or paywall. Consultation is free. The downloadable guide is intentionally public.

## Start here

- src/store/Storefront.jsx: cards, links, native GHL iframe and fallback.
- src/store/seed.json: public profile and content configuration.
- src/store/store.css: storefront styles.
- scripts/store/prerender.mjs and scripts/store/dev.mjs: build and local preview.
- store/index.html and store/shot-guide/index.html: store entry pages.
- public/assets/store: public images and downloadable guide.
- vite.config.js, vercel.json, public/_headers and server: build, routing and hosting header configuration where present.
- package.json and package-lock.json: dependency review.

No customer records or credentials should be added to this public repository.

## Data flow and GHL configuration

Visitor opens guide page, browser loads the native GHL form, and GHL receives the submission directly. Vercel does not process the lead through a custom store endpoint.

Public form: https://api.leadconnectorhq.com/widget/form/qZNDLMNslVVJHbTjoqu7
Form name: Blue Dot Store | Free Shot Guide
Workflow name: Blue Dot Store | Free Shot Guide Delivery

The workflow is published. It matches only this form, sends one guide email, and has re-entry and multiple-opportunity enrollment disabled. Repeat submissions still expose the guide download in the confirmation. The form generic autoresponder is disabled to prevent duplicate emails.

Name and email are required. Marketing email consent is optional. No phone or SMS collection, and no marketing nurture is attached to this workflow. Review account-side behavior separately with authorized GHL access; those settings are not versioned in GitHub.

## Verification completed

- Lint and production build passed for the implementation.
- Production storefront, guide page, existing main pages and PDF returned HTTP 200.
- PDF response was verified as a PDF.
- Mobile guide form checked at 390 x 844 with no horizontal overflow.
- One owner test with marketing consent unchecked recorded the submission, displayed the download, and queued the guide email successfully.
- Iris subsequently confirmed the test worked, including receipt.
- These functional checks do not constitute a security audit.

## Security review scope

1. Check dependencies and lockfile against current advisories. Previously reported dependency findings have not been re-audited in this handoff.
2. Inspect public assets and built output for secrets, private files, customer data or unintended source artifacts. Free assets are public by design; future paid files need access control.
3. Verify effective production headers on Vercel. Do not assume Cloudflare Worker or public/_headers rules apply to Vercel. Evaluate CSP, frame sources, referrer behavior, HTTPS and MIME handling without breaking the native form.
4. Review the third-party iframe, its scripts/cookies and consent behavior against the repository's third-party integration policy. The form currently loads directly on the guide page; marketing checkbox consent is separate from browser storage consent.
5. Review URLs and rendering of editable content, including allowed link schemes, external links, query parameters and unavailable guide IDs.
6. With authorized account access, review GHL form spam controls, duplicate contacts, opt-outs, consent records, sender configuration and workflow enrollment. Test only approved inboxes. Local previews use the real form and create live contacts.
7. Verify removed custom API/admin paths do not expose old functionality on the production deployment.
8. Review unused Supabase resources and Vercel variables from the earlier approach. They are not used by this implementation and were not deleted. Confirm dependencies before revoking credentials or removing resources.
9. Review GitHub/Vercel access and deployment controls with authorized account access.

## Safe reproduction

Use a fresh checkout of current main. Install from the lockfile with npm ci, then run npm run lint and npm run build. Review the built output and a local preview before proposing changes. Do not assume a local form submission is a mock request.

Keep review findings specific: file or account setting, evidence, impact, reproduction and proposed fix. Use private reporting for secrets or exploitable sensitive details. Do not perform bulk submissions or destructive live testing.

The owner's older local checkout contains unrelated work and was behind production when the store was released. Avoid resetting it or deploying that older base. Preserve the existing homepage, work, Fold and contact routes when changing build inputs.

## Documentation status

This handoff supersedes the earlier pending-deployment and draft-workflow statements in docs/store-integration.md and server/store/README.md. The store is live and the workflow is published. Stan record export, customer access reconciliation and replacement of external Stan links remain separate migration tasks.
