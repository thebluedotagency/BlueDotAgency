import {ArrowUpRight} from 'lucide-react';

const cases = [
  {
    href: 'https://www.ericlharris.com',
    image: '/assets/blue-dot/eric-site.jpg',
    alt: 'Eric L. Harris website designed by Blue Dot',
    services: ['Web Design', 'Web Development', 'Email Marketing', 'UI/UX', 'SEO'],
    label: 'Founder platform',
    name: 'Eric L. Harris',
  },
  {
    href: 'https://www.getthefold.com',
    image: '/assets/blue-dot/fold-site.jpg',
    alt: 'The Fold website designed by Blue Dot',
    services: ['Web Design', 'Web Development', 'Email Marketing', 'UI/UX', 'SEO', 'GTM Activation'],
    label: 'Brand platform',
    name: 'The Fold',
  },
  {
    href: 'https://whiteoutv2.vercel.app/',
    image: '/assets/blue-dot/white-out-tequila-site.png',
    alt: 'White Out Tequila website designed and developed by Blue Dot',
    services: ['Web Design', 'Web Development'],
    label: 'Spirits brand',
    name: 'White Out Tequila',
  },
];

export function Work() {
  return (
    <section className="work" id="work">
      <div className="work-heading reveal">
        <h2>Proof, in practice.</h2>
      </div>
      <div className="case-grid">
        {cases.map(item => (
          <a className="case reveal" href={item.href} target="_blank" rel="noreferrer" key={item.name}>
            <img className="case-image" src={item.image} alt={item.alt} loading="lazy" />
            <div className="case-services" aria-label="Services provided">
              {item.services.map(service => (
                <span key={service}>{service}</span>
              ))}
            </div>
            <div className="case-caption">
              <div>
                <p>{item.label}</p>
                <h3>{item.name}</h3>
              </div>
              <span className="case-link">
                View live site <ArrowUpRight />
              </span>
            </div>
          </a>
        ))}
      </div>
      <a className="proof-note reveal" href="mailto:team@thebluedotagency.com?subject=More%20Blue%20Dot%20work%20samples">
        DM us for more samples of past work. <ArrowUpRight />
      </a>
    </section>
  );
}
