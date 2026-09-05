import {ArrowDown} from 'lucide-react';

export function Intro() {
  return (
    <section className="intro reveal">
      <div className="client-collage">
        <img
          src="/assets/blue-dot/founder-hustle-collage-real-v4.jpg"
          alt="A collage of founders, speakers, coaches, creators, and local business owners building their personal brands"
          loading="lazy"
        />
      </div>
      <h2>Brand Identity and Marketing Agency</h2>
      <div className="intro-detail">
        <p>
          You already know why the business matters. Blue Dot turns that founder insight into clear positioning,
          stronger marketing assets, and a coordinated path into market.
        </p>
        <a className="underlink" href="#sprint">
          See how we work <ArrowDown />
        </a>
      </div>
    </section>
  );
}
