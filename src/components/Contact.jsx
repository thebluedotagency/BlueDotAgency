import {ArrowUpRight} from 'lucide-react';
import {DotMark} from './DotMark.jsx';
import {bookingUrl} from '../content/site.js';

export function Contact() {
  return (
    <section className="contact" id="contact">
      <DotMark />
      <p className="eyebrow">Begin with the right first move</p>
      <h2>
        Choose the first move that <em>matters.</em>
      </h2>
      <p>
        If your business has demonstrated value but the marketing still feels fragmented, we’ll identify whether the
        Activation Sprint is the right first engagement.
      </p>
      <a className="primary-button" href={bookingUrl} target="_blank" rel="noreferrer">
        Start a fit conversation <ArrowUpRight />
      </a>
    </section>
  );
}
