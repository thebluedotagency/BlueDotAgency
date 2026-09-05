import {ArrowUpRight} from 'lucide-react';
import {bookingUrl} from '../content/site.js';

const activationSteps = [
  [
    '01',
    'Scope',
    'We agree on what to examine and why: the goals, the questions that matter, and the parts of the business worth putting under the microscope. A focused scope beats a sprawling one.',
  ],
  [
    '02',
    'Review',
    'We examine the brand, website, campaigns, channels, and the numbers behind them, tracing how each part performs and where they stop working together. Every finding comes from evidence.',
  ],
  [
    '03',
    'Prioritize',
    'We separate the problems that matter from the ones that do not, then rank what remains by impact, effort, and cost. The point is knowing what to fix first.',
  ],
  [
    '04',
    'Roadmap',
    'You receive a clear roadmap: what to change, what to test, and what each move should produce. Direction your team can act on, or Blue Dot can activate with you.',
  ],
];

export function Sprint() {
  return (
    <section className="sprint" id="sprint">
      <div className="sprint-heading reveal">
        <h2>Build the first marketing move that matters.</h2>
        <div className="sprint-summary">
          <div className="step-callout">
            <p className="step-label">Step 1</p>
            <p>
              30-day initial onboarding and sprint. We get to know you, your brand, and your vision. We design a
              visual branding blueprint to refresh your website and automations, and provide digital assets that
              will become the foundation of your marketing department, along with options to execute on the
              blueprint.
            </p>
          </div>
          <a className="primary-button sprint-button" href={bookingUrl} target="_blank" rel="noreferrer">
            Explore fit <ArrowUpRight />
          </a>
        </div>
      </div>
      <div className="sprint-detail reveal">
        <div className="tracks-heading">
          <p>Blue Dot’s magic happens in the activation and GTM strategy.</p>
        </div>
        <div className="activation-map">
          <div className="activation-line" aria-hidden="true" />
          {activationSteps.map(([step, title, copy]) => (
            <article key={step}>
              <span>{step}</span>
              <h3>{title}</h3>
              <i aria-hidden="true" />
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="sprint-map-note">
          Every activation begins with a focused scope and ends with a prioritized path into market.
        </p>
      </div>
      <div className="post-sprint reveal">
        <div className="post-sprint-heading">
          <p className="eyebrow">After the sprint</p>
          <h3>
            Your blueprint.
            <br />
            Two ways forward.
          </h3>
          <p>
            At day 30, you leave with a clear activation blueprint: what to build, how the pieces connect, what to
            measure, and what should happen next.
          </p>
        </div>
        <div className="continuation-paths">
          <article>
            <span>01</span>
            <div>
              <h4>Integrate it yourself</h4>
              <p>Take the strategy, priorities, specifications, and recommended workflows into your internal team or trusted partners.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h4>Have Blue Dot build it</h4>
              <p>
                Continue into a separately scoped, done-for-you engagement for content strategy, website production,
                and marketing or conversion automation builds.
              </p>
            </div>
          </article>
          <p>
            The blueprint is part of the sprint. Ongoing implementation is optional and scoped separately around the
            evidence and priorities established during the first 30 days.
          </p>
        </div>
      </div>
    </section>
  );
}
