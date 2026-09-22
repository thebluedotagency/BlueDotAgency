# Website 3.0 representative journey

Implemented routes: `/`, `/work`, `/work/the-fold`, `/contact`. Home is a studio-level media-led presentation. Work has its own index and The Fold remains a separate case study. Existing privacy and terms routes are retained. Other architecture routes are planned, not implemented. No public deployment has been performed.

## Visual sources

- https://getthefold.com, inspected live September 15, 2026. Observed Manrope display text (typically 62px, weight 500, tight tracking), DM Sans body (18–19px, line-height around 1.55), warm paper #f7f4ee, ink #101010, dark sections, large image areas, rounded action buttons. The reference also uses Outfit in some headings; this framework deliberately simplifies to Manrope and DM Sans.
- User-supplied Social Scout / The Fold email campaign screenshot: compact story modules, dark/light alternation, product imagery, strong headline hierarchy. Its exact font values were not extracted; website typography supplies the measurable baseline.
- 160over90 supplies the strategic architecture: point of view, work, a substantial case story, evidence, next action. No reference brand copy or results are imported.
- Blue Dot retains its existing #2b68c9 accent.

## Content and media

Edit `content.js` for the Fold case facts and image references. VSL filming is included in the case. No VSL file was supplied for embedding. The 50-unit milestone comes from Iris's firsthand account; no timing, attributed revenue or measured ROI is inferred. Investor, institutional and influencer opportunities are described as explored.

Media replacements should preserve the section's meaning, alt text and reserved aspect ratio. Existing screenshots and portraits are reused. Add approved video with controls, a poster image and captions when available; do not introduce fake playback controls.

## Contact

Uses the existing booking destination and a labelled mailto draft builder. It does not submit to a CRM or claim to send an enquiry. Native required/email validation is active. A CRM endpoint and real delivery/error behaviour remain a later integration decision.

## Production follow-up

Before deployment: confirm claim publication, replace provisional media, configure direct-route delivery on the actual host, and create static page-specific metadata/HTML for sharing and indexing. Current route metadata updates client-side, matching the existing SPA architecture. The remaining site routes and full Figma component library are separate next phases.

## Homepage revision: 160over90 composition

User explicitly requested the reference homepage structure in place of the earlier warm-paper editorial homepage. This is project-specific feedback. Observed live in the browser: fixed full-screen background media; approximately 140px desktop CircularBook headings with 133px line-height at a 1265px viewport; white introduction panel with approximately 60px copy and 90px leading; alternating transparent media windows and white two-column service/location panels; hamburger navigation; black closing section.

Implemented the layout and coverage effect with CSS fixed positioning and opaque/transparent sections. DM Sans substitutes for CircularBook. Copy, menu destinations, services and studio details remain Blue Dot-specific. Services expand locally because their individual pages are not yet built. Careers and global offices are replaced by accurate studio and contact sections. This is not a pixel-identical reproduction of their brand.

The hero poster path was verified against the live www.thebluedotagency.com video element: /assets/blue-dot/blue-dot-hero-poster.jpg. No video generation or download was needed. In Homepage.jsx, replace heroMedia.video=null with the approved video path later. Reduced-motion rendering keeps the poster.

Checks: lint and production build passed; no horizontal overflow at 360, 768, 1280 and 1920px; fixed media remains at viewport top while the white panel scrolls over it; no video requests in the current implementation; Home → Work → The Fold verified; menu Escape restores focus; service disclosure tested; browser error log empty.
