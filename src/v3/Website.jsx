import {useState} from 'react';
import {bookingUrl} from '../content/site.js';
import {PrivacyChoices} from '../components/PrivacyChoices.jsx';
import {foldCase, media} from './content.js';
import './website.css';
import {Homepage, HomeNavigation, WorkIndex} from './Homepage.jsx';

function Photo({asset, className = '', eager = false}) {
  return (
    <img
      className={`v3-photo ${className}`}
      src={asset.src}
      alt={asset.alt}
      loading={eager ? 'eager' : 'lazy'}
      width="1600"
      height="1000"
    />
  );
}
function Header({path}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="v3-header">
      <a className="v3-brand" href="/" aria-label="Blue Dot home">
        <img src="/assets/blue-dot/blue-dot-mark-dark.svg" alt="" width="48" height="48" />
        blue dot
      </a>
      <button className="v3-menu" aria-expanded={open} aria-controls="v3-nav" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'}
      </button>
      <nav id="v3-nav" className={open ? 'is-open' : ''} aria-label="Main navigation">
        <a href="/work" onClick={() => setOpen(false)}>
          Work
        </a>
        <a href="/#services" onClick={() => setOpen(false)}>
          Capabilities
        </a>
        <a href="/#studio" onClick={() => setOpen(false)}>
          Studio
        </a>
        <a className="v3-nav-contact" href="/contact" aria-current={path === '/contact' ? 'page' : undefined}>
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
function LinkButton({href, children, light = false}) {
  return (
    <a className={`v3-button ${light ? 'light' : ''}`} href={href}>
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
function Invitation() {
  return (
    <section className="v3-invitation v3-wrap">
      <p>Let’s talk about the business.</p>
      <h2>
        What needs to
        <br />
        happen next?
      </h2>
      <LinkButton href="/contact" light>
        Start a conversation
      </LinkButton>
    </section>
  );
}
function Footer() {
  return (
    <footer className="v3-footer v3-wrap">
      <a className="v3-brand v3-footer-brand" href="/" aria-label="Blue Dot home">
        <img src="/assets/blue-dot/blue-dot-mark.svg" alt="" width="48" height="48" />
        blue dot
      </a>
      <p>Marketing activation for founder-led businesses.</p>
      <div className="v3-footer-links">
        <strong>Explore</strong>
        <a href="/#services">Capabilities</a>
        <a href="/work">Work</a>
        <a href="/#studio">About</a>
        <a href="https://api.leadconnectorhq.com/widget/form/ReAP14PpMPi76G2KeYq5">Newsletter</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms of Service</a>
      </div>
      <div className="v3-footer-contact">
        <strong>Contact</strong>
        <a href="mailto:team@thebluedotagency.com">team@thebluedotagency.com</a>
        <a href="tel:+17022921451">702-292-1451</a>
        <span>Las Vegas, Nevada</span>
        <span>Working globally</span>
      </div>
      <small>© 2026 The Blue Dot Agency</small>
      <PrivacyChoices />
    </footer>
  );
}
function Fold() {
  return (
    <>
      <section className="v3-case-hero v3-wrap">
        <a className="v3-back" href="/work">
          ← Selected work
        </a>
        <p>{foldCase.client}</p>
        <h1>{foldCase.title}</h1>
        <div className="v3-case-meta">
          <p>GTM strategy / Websites / Ecommerce / Email & CRM / VSL production</p>
          <a href="https://getthefold.com" target="_blank" rel="noreferrer">
            Visit The Fold ↗
          </a>
        </div>
      </section>
      <div className="v3-case-cover">
        <Photo asset={media.fold} eager />
      </div>
      <section className="v3-editorial v3-wrap">
        <p>Where we came in</p>
        <div>
          <h2>A product ready for its next chapter.</h2>
          <p className="v3-body">{foldCase.intro}</p>
          <p className="v3-body">
            While the product was being finalised and prepared for shipment, we developed the strategy and commercial
            infrastructure around its launch.
          </p>
        </div>
      </section>
      <section className="v3-priority v3-wrap">
        <p>The commercial priority</p>
        <h2>{foldCase.priority}</h2>
      </section>
      <section className="v3-sequence v3-wrap">
        <div className="v3-section-heading">
          <p>From strategy to activation</p>
          <h2>
            The order
            <br />
            of the work matters.
          </h2>
        </div>
        <ol>
          {foldCase.steps.map(([title, body], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="v3-destinations v3-wrap">
        <div className="v3-section-heading">
          <p>Two destinations. Distinct purposes.</p>
          <h2>
            The founder.
            <br />
            The product.
          </h2>
        </div>
        <div className="v3-destination-grid">
          <figure>
            <Photo asset={media.founder} />
            <figcaption>
              <h3>Establish the founder’s presence.</h3>
              <p>Eric’s personal website supported conversations about additional capital for the product.</p>
              <a href="https://ericlharris.com" target="_blank" rel="noreferrer">
                Explore the founder site ↗
              </a>
            </figcaption>
          </figure>
          <figure>
            <Photo asset={media.fold} />
            <figcaption>
              <h3>Build the route to purchase.</h3>
              <p>A dedicated Shopify product website, connected to Klaviyo email marketing and CRM management.</p>
              <a href="https://getthefold.com" target="_blank" rel="noreferrer">
                Explore the product site ↗
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="v3-editorial v3-wrap v3-sales-story">
        <p>The story beyond the page</p>
        <div>
          <h2>
            Show it. Explain it.
            <br />
            Keep the conversation going.
          </h2>
          <p className="v3-body">
            We filmed video sales letters for Eric’s websites and connected the product launch with email marketing and
            CRM management. The website was one part of the customer journey.
          </p>
          <div className="v3-journey" aria-label="Customer journey">
            <span>Understand the product</span>
            <span aria-hidden="true">→</span>
            <span>Choose the next step</span>
            <span aria-hidden="true">→</span>
            <span>Stay connected</span>
          </div>
        </div>
      </section>
      <section className="v3-editorial v3-wrap">
        <p>Looking beyond the launch</p>
        <div>
          <h2>Explore the wider opportunity.</h2>
          <p className="v3-body">
            Alongside the immediate sales strategy, we explored additional investors, manufacturing and insurance
            channels, potential institutional buyers and influencer partnerships.
          </p>
        </div>
      </section>
      <section className="v3-milestone v3-wrap">
        <div>
          <p>The first batch</p>
          <strong>50</strong>
          <p>units launched and sold</p>
        </div>
        <div>
          <h2>
            A launch is
            <br />a beginning.
          </h2>
          <p className="v3-body">
            Following the sale of the initial batch, content strategy became the focal point of the ongoing work.
          </p>
        </div>
      </section>
      <Invitation />
    </>
  );
}
function Contact() {
  const [ready, setReady] = useState(false);
  function prepare(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nBusiness: ${data.get('business')}\n\n${data.get('brief')}`;
    window.location.href = `mailto:team@thebluedotagency.com?subject=${encodeURIComponent('A conversation about ' + data.get('business'))}&body=${encodeURIComponent(body)}`;
    setReady(true);
  }
  return (
    <section className="v3-contact v3-wrap">
      <div>
        <p>Start a conversation</p>
        <h1>
          What’s next
          <br />
          for your business?
        </h1>
        <p className="v3-body">Tell us where you are, what has changed and what needs to work better.</p>
        <div className="v3-contact-direct">
          <h2>Prefer to talk it through?</h2>
          <p>A conversation about the business and whether Blue Dot is the right fit.</p>
          <LinkButton href={bookingUrl}>Book a conversation</LinkButton>
          <a href="mailto:team@thebluedotagency.com">team@thebluedotagency.com</a>
        </div>
      </div>
      <form onSubmit={prepare}>
        <h2>A little context helps.</h2>
        <label>
          Your name
          <input name="name" autoComplete="name" required maxLength="100" />
        </label>
        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required maxLength="200" />
        </label>
        <label>
          Business / website
          <input name="business" autoComplete="organization" required maxLength="200" />
        </label>
        <label>
          What needs to change?
          <textarea name="brief" rows="5" required maxLength="4000" />
        </label>
        <p className="v3-small">
          This opens a draft in your email app. Review and send it there. <a href="/privacy-policy">Privacy policy</a>
        </p>
        <button className="v3-button" type="submit">
          Prepare your email <span aria-hidden="true">↗</span>
        </button>
        {ready && (
          <p role="status">
            Your email app has been requested. Nothing has been sent by this website. If it did not open, email
            team@thebluedotagency.com directly.
          </p>
        )}
      </form>
    </section>
  );
}
export function Website() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const known = ['/', '/work', '/work/the-fold', '/contact'].includes(path);
  return (
    <div className={`v3 ${path === '/' ? 'v3-home' : ''}`}>
      <a className="skip" href="#main">
        Skip to content
      </a>
      {path === '/' ? <HomeNavigation /> : <Header path={path} />}
      <main id="main">
        {path === '/' ? (
          <Homepage />
        ) : path === '/work' ? (
          <WorkIndex />
        ) : path === '/work/the-fold' ? (
          <Fold />
        ) : path === '/contact' ? (
          <Contact />
        ) : (
          <section className="v3-wrap v3-contact">
            <h1>Page not found.</h1>
            <LinkButton href="/">Back to Blue Dot</LinkButton>
          </section>
        )}
      </main>
      {known && <Footer />}
    </div>
  );
}
