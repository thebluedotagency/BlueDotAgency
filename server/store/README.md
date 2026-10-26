# Blue Dot store with native GHL form

Updated October 25, 2026. GitHub manages content; Vercel serves the public store; GHL captures guide submissions and delivers the guide. No Supabase, custom lead API, premium webhook, private editor, or store login is required.

## Content updates

Edit src/store/seed.json for profile, labels, card order, visibility, and links. Add public free assets under public/assets/store. Never put private or paid content in that directory. Run npm run lint and npm run build before publishing.

## Form and delivery

Native form ID: qZNDLMNslVVJHbTjoqu7.
Public URL: https://api.leadconnectorhq.com/widget/form/qZNDLMNslVVJHbTjoqu7
Edit URL: https://app.gohighlevel.com/v2/location/7yMJ0hc4ep51Mo5uIocj/form-builder-v2/qZNDLMNslVVJHbTjoqu7

The guide page embeds this form with an accessible title and direct-link fallback. Name and email are required. Marketing email consent is optional and separate. No phone or SMS collection. Success provides the fixed public guide URL. GHL form autoresponder is disabled to avoid a duplicate generic email.

Dedicated workflow: Blue Dot Store | Free Shot Guide Delivery
https://app.gohighlevel.com/v2/location/7yMJ0hc4ep51Mo5uIocj/automation/workflow/7bc35148-f6b1-43cc-8f9c-b092c9233bc9

Trigger matches only this form. One guide email action. Re-entry and multiple-opportunity enrollment disabled to limit duplicates. Repeat submitters can still retrieve the PDF from the form confirmation. No marketing nurture is activated by this workflow; preserve existing opt-outs. Workflow is currently draft pending live sender and delivery verification.

## Local preview

npm run dev:store serves http://127.0.0.1:5194/store (STORE_PORT can override). The embedded form is live GHL even in local previews: submitting it creates or updates GHL contacts. Do not submit arbitrary test addresses. The old mock API tests no longer apply and were removed with the webhook code.

## Verification and release

Lint and production build passed for the native-form change. End-to-end email delivery and public-domain deployment remain pending. No backend secrets are required. Previously configured Supabase variables and STORE_ORIGIN are unused, and cloud resources have not been deleted.

Canonical local checkout is behind current production and includes unrelated user portfolio edits. Release staging at /tmp/blue-dot-store-release-20261025 is based on verified production commit 8356d9679dd4377c2a0785853827813d71b1845c. Deploy the production-based release to preserve the live homepage.

Old webhook code is archived outside the repository under Blue Dot HQ/Stan Store/webhook-version-archive. Earlier Supabase implementation is also archived. Neither archive is part of deployment.
