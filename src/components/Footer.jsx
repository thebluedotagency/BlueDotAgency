import {navItems} from '../content/site.js';
import {PrivacyChoices} from './PrivacyChoices.jsx';

export function Footer() {
  return (
    <>
      <footer>
        <div className="footer-brand">
          <a className="footer-logo" href="#top" aria-label="Blue Dot Agency home">
            <img src="/assets/blue-dot/blue-dot-logo-footer.png" alt="The Blue Dot Agency" />
          </a>
          <p>Marketing activation for founder-led businesses.</p>
          <p className="ai-disclosure">
            Website chat uses AI-assisted automation. Do not share sensitive or emergency information.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms of Service</a>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <a href="mailto:team@thebluedotagency.com">team@thebluedotagency.com</a>
          <a href="tel:+17022921451">702-292-1451</a>
          <span>Las Vegas, Nevada</span>
          <span>Working globally</span>
        </div>
        <small>
          <span>© 2026 The Blue Dot Agency</span>
        </small>
      </footer>
      <PrivacyChoices />
    </>
  );
}
