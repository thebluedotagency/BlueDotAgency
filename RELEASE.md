# Blue Dot Website 3.0 release

Production uses Vercel through the main branch of thebluedotagency/BlueDotAgency. The public domain still points to Vercel. OpenAI Sites version 36 is a separate published copy and does not control the current public domain.

Rollback commit: c4f48200d2b57fb1e3e9ebc3f74080d012133c98.
Six static HTML entries cover home, work, The Fold, contact, privacy and terms. Vercel clean URLs support direct links, with a static 404 fallback. Contact prepares an email draft; booking and newsletter use the existing LeadConnector destinations. Analytics are opt-in.

The matching production build was checked locally at desktop and mobile sizes. Lint, build and formatting are checked before push. Wider accessibility, performance and cross-browser audits remain outside this release, with no compliance claim made.
