import {createRoot} from 'react-dom/client';
import './styles.css';
import {App} from './App.jsx';
import {LegalPage} from './legal.jsx';

const legalPath = window.location.pathname;
const legalQuery = new URLSearchParams(window.location.search).get('legal');
const legalType =
  legalQuery === 'privacy' || legalPath === '/privacy-policy'
    ? 'privacy'
    : legalQuery === 'terms' || legalPath === '/terms-and-conditions'
      ? 'terms'
      : null;

const canonicalPath = legalType === 'privacy' ? '/privacy-policy' : legalType === 'terms' ? '/terms-and-conditions' : '/';
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
createRoot(document.getElementById('root')).render(legalType ? <LegalPage type={legalType} /> : <App />);
