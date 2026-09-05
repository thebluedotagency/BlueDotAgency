import {ArrowDown} from 'lucide-react';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/blue-dot/blue-dot-hero-poster.jpg"
          aria-label="Iris Tsui working, walking through a project space, and a drone flight over Las Vegas"
        >
          <source src="/assets/blue-dot/blue-dot-hero-extended-web.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-meta">
        <div>
          <span>Insight</span>
          <span>Positioning</span>
          <span>Activation</span>
        </div>
        <p>Founder &amp; Marketing Activation Strategist</p>
      </div>
      <div className="hero-thesis">
        <p>Strategy, creative, and systems.</p>
        <h1>
          Build around
          <br />
          the brilliance.
        </h1>
        <div className="hero-actions">
          <a href="#sprint">
            Explore the Activation Sprint <ArrowDown />
          </a>
          <a href="#work">See selected work</a>
        </div>
      </div>
    </section>
  );
}
