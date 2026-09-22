import {createRoot} from 'react-dom/client';
import './styles.css';
import {Website} from './v3/Website.jsx';
import {LegalPage} from './legal.jsx';

const legalPath = window.location.pathname.replace(/\/$/, '') || '/';
const legalQuery = new URLSearchParams(window.location.search).get('legal');
const legalType =
  legalQuery === 'privacy' || legalPath === '/privacy-policy'
    ? 'privacy'
    : legalQuery === 'terms' || legalPath === '/terms-and-conditions'
      ? 'terms'
      : null;

const canonicalPath =
  legalType === 'privacy'
    ? '/privacy-policy'
    : legalType === 'terms'
      ? '/terms-and-conditions'
      : window.location.pathname.replace(/\/$/, '') || '/';
const canonicalUrl = `https://www.thebluedotagency.com${canonicalPath}`;
const canonical = document.querySelector('link[rel="canonical"]');
if (canonical) canonical.href = canonicalUrl;

if (legalType) {
  const pageTitle = legalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service';
  document.title = `${pageTitle} | The Blue Dot Agency`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', `${pageTitle} for The Blue Dot Agency.`);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${pageTitle} | The Blue Dot Agency`);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
}
if (!legalType) {
  const title =
    canonicalPath === '/work'
      ? 'Selected work | Blue Dot'
      : canonicalPath === '/work/the-fold'
        ? 'The Fold: From development to market | Blue Dot'
        : canonicalPath === '/contact'
          ? 'Start a conversation | Blue Dot'
          : 'Blue Dot | Commercial infrastructure for founder-led businesses';
  const description =
    canonicalPath === '/work/the-fold'
      ? 'The strategy, websites, ecommerce, email and video behind The Fold’s route to market.'
      : 'We build the business around the brilliance. Positioning, customer experience and systems for founder-led businesses.';
  document.title = title;
  for (const selector of [
    'meta[name="description"]',
    'meta[property="og:description"]',
    'meta[name="twitter:description"]',
  ])
    document.querySelector(selector)?.setAttribute('content', description);
  for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]'])
    document.querySelector(selector)?.setAttribute('content', title);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
}
createRoot(document.getElementById('root')).render(legalType ? <LegalPage type={legalType} /> : <Website />);
