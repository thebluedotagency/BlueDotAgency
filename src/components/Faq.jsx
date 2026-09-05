import {useState} from 'react';
import {Plus} from 'lucide-react';
import {faqs} from '../content/site.js';

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq">
      <div>
        <p className="eyebrow">Good questions</p>
        <h2>Clarity before commitment.</h2>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer], i) => (
          <article className={open === i ? 'active' : ''} key={question}>
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span>{question}</span>
              <Plus />
            </button>
            <p>{answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
