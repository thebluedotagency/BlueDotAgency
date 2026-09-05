import {useState} from 'react';
import {ArrowUpRight, Menu, X} from 'lucide-react';
import {navItems, bookingUrl} from '../content/site.js';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="logo-brand" href="#top" aria-label="Blue Dot Agency home">
        <img src="/assets/blue-dot/blue-dot-logo-exact.png" alt="The Blue Dot Agency" />
      </a>
      <nav className={open ? 'open' : ''} aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={bookingUrl} target="_blank" rel="noreferrer">
        Start a fit conversation <ArrowUpRight />
      </a>
      <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
