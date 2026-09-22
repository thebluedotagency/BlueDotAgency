import {useEffect, useRef, useState} from 'react';
import {media} from './content.js';
import './homepage.css';

// Original website footage with a reversible display adjustment.
const heroMedia = {
  poster: '/assets/blue-dot/blue-dot-hero-poster.jpg',
  video: '/assets/blue-dot/blue-dot-hero-extended-web.mp4',
};

export function HomeNavigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const menu = useRef(null);
  useEffect(() => {
    if (!open) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const first = menu.current?.querySelector('a');
    first?.focus();
    function onKey(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === 'Tab') {
        const items = [toggle.current, ...menu.current.querySelectorAll('a')];
        const index = items.indexOf(document.activeElement);
        if (event.shiftKey && index === 0) {
          event.preventDefault();
          items.at(-1)?.focus();
        }
        if (!event.shiftKey && index === items.length - 1) {
          event.preventDefault();
          items[0]?.focus();
        }
      }
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return (
    <header className={`home-navigation ${open ? 'menu-open' : ''}`}>
      <a className="home-wordmark" href="/" aria-label="Blue Dot home">
        <img src="/assets/blue-dot/blue-dot-mark.svg" alt="" width="76" height="76" />
        <span>blue dot</span>
      </a>
      <button
        className="home-menu-toggle"
        ref={toggle}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="home-menu"
      >
        <span />
        <span />
        <span />
      </button>
      <nav id="home-menu" ref={menu} aria-label="Main navigation" hidden={!open}>
        <a href="/work" onClick={() => setOpen(false)}>
          Work
        </a>
        <a href="/#services" onClick={() => setOpen(false)}>
          Services
        </a>
        <a href="/#studio" onClick={() => setOpen(false)}>
          Studio
        </a>
        <a href="/contact" onClick={() => setOpen(false)}>
          Contact
        </a>
        <p>Las Vegas. Working globally.</p>
      </nav>
    </header>
  );
}

export function Homepage() {
  return (
    <>
      <div className="home-fixed-media" aria-hidden="true">
        {heroMedia.video ? (
          <video autoPlay muted loop playsInline preload="metadata" poster={heroMedia.poster}>
            <source src={heroMedia.video} type="video/mp4" />
          </video>
        ) : (
          <img src={heroMedia.poster} alt="" width="1920" height="1080" fetchPriority="high" />
        )}
      </div>
      <section className="home-opening">
        <h1>
          Build around
          <br />
          the brilliance.
        </h1>
      </section>
      <section className="home-manifesto">
        <p>
          Blue Dot is a commercial infrastructure studio for founder-led businesses. We understand the business first.
          Then we connect the positioning, customer experience and systems that help it move forward.
        </p>
      </section>
      <section className="home-window home-work-window">
        <h2>
          Clear direction.
          <br />
          Connected
          <br />
          execution.
        </h2>
        <a className="home-outline-link" href="/work">
          View Work <span aria-hidden="true">↗</span>
        </a>
      </section>
      <section id="services" className="home-list-panel">
        <p>We connect the story people see with the systems that make the business work.</p>
        <div className="home-services">
          {[
            ['Positioning & strategy', 'Clarify the audience, the offer and the next commercial priority.'],
            ['Go-to-market', 'Sequence the assets, channels and activity around a coordinated launch.'],
            ['Brand experience', 'Make the business clear and recognisable across its customer touchpoints.'],
            [
              'Websites & ecommerce',
              'Build the digital destinations that support understanding, enquiry and purchase.',
            ],
            [
              'Video & content',
              'Tell the story through website content, video sales letters and ongoing communication.',
            ],
            ['Email & CRM', 'Connect interest, customer information and useful follow-up.'],
            ['Automation & systems', 'Give the work a repeatable structure so the business can keep moving.'],
          ].map(([title, copy]) => (
            <details key={title}>
              <summary>
                {title}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{copy}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="home-window">
        <h2>
          Build
          <br />
          with us.
        </h2>
        <a className="home-outline-link" href="/contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </section>
      <section id="studio" className="home-list-panel home-studio-panel">
        <p>
          Two perspectives working on the same business. Creative judgement and technical delivery, connected from the
          beginning.
        </p>
        <div>
          <article>
            <h3>Iris Tsui</h3>
            <p>Positioning, creative direction and customer experience.</p>
          </article>
          <article>
            <h3>Randy Gonzalez</h3>
            <p>Systems, automation and technical delivery.</p>
          </article>
          <p className="home-location">
            Based in Las Vegas.
            <br />
            Working globally.
          </p>
        </div>
      </section>
      <section className="home-window home-connect">
        <h2>
          Connect
          <br />
          with us.
        </h2>
        <div className="home-contact-links">
          <a href="/contact">
            New business <span aria-hidden="true">↗</span>
          </a>
          <a href="mailto:iris@thebluedotagency.com">
            Email the studio <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <section className="home-closing">
        <h2>
          Understand the business.
          <br />
          Build what’s missing.
        </h2>
      </section>
    </>
  );
}

export function WorkIndex() {
  return (
    <section className="v3-wrap home-work-index">
      <p>Selected work</p>
      <h1>
        Strategy
        <br />
        made tangible.
      </h1>
      <a className="home-work-card" href="/work/the-fold">
        <img src={media.fold.src} alt={media.fold.alt} width="1600" height="1000" />
        <div>
          <h2>The Fold</h2>
          <p>Four years in development. A coordinated route to market.</p>
          <span>View case study ↗</span>
        </div>
      </a>
    </section>
  );
}
