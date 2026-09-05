const founders = [
  {
    image: '/assets/blue-dot/iris-cofounder-matched.jpg',
    alt: 'Iris Tsui, founder of Blue Dot Agency',
    role: 'Iris Tsui · Founder and Creative Director',
    title: 'Creative direction with commercial consequence.',
    bio: 'Iris turns founder insight into market position, visual systems, and customer experiences built to move from concept into use. Her background spans Tesla, Prada, Burberry, fashion, real estate, hospitality, home design, and founder-led companies. Comfortable across brand, technology, and implementation, she connects creative quality to conversion, adoption, and return on investment.',
  },
  {
    image: '/assets/blue-dot/randy-cofounder-matched.jpg',
    alt: 'Randy Gonzalez, co-founder and CTO of Blue Dot Agency',
    role: 'Randy Gonzalez · Co-Founder and CTO',
    title: 'Systems, automation, and technical delivery.',
    bio: 'Randy Gonzalez designs the technical systems that turn strategy into scalable execution. He builds AI-native workflows, connects tools and data, and solves the complex delivery challenges behind content, campaigns, websites, and marketing automations. His work gives each activation the structure, reliability, and leverage to keep improving.',
  },
];

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-heading reveal">
        <p className="eyebrow">Meet the Founders</p>
      </div>
      <div className="founders-grid">
        {founders.map(founder => (
          <article className="founder-profile reveal" key={founder.role}>
            <div className="founder-portrait">
              <img src={founder.image} alt={founder.alt} loading="lazy" />
            </div>
            <p className="eyebrow">{founder.role}</p>
            <h3>{founder.title}</h3>
            <p>{founder.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
