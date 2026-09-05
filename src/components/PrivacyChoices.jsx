import {useEffect, useState} from 'react';
import {readConsent, saveConsent, loadOptionalServices} from '../lib/consent.js';

export function PrivacyChoices() {
  const [choice, setChoice] = useState(() => readConsent() || 'essential');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (choice === 'allow') loadOptionalServices();
  }, [choice]);

  const choose = value => {
    saveConsent(value);
    if (choice === 'allow' && value === 'essential') {
      window.location.reload();
      return;
    }
    setChoice(value);
    setOpen(false);
  };

  return (
    <>
      {open && (
        <aside className="consent" aria-label="Privacy choices">
          <div>
            <strong>Your privacy choice</strong>
            <p>
              We use essential hosting and security technology. With your permission, we also load analytics and an
              AI-assisted chat. You can use the website and booking links without them.
            </p>
            <div>
              <button onClick={() => choose('essential')}>Essential only</button>
              <button className="consent-allow" onClick={() => choose('allow')}>
                Allow analytics and chat
              </button>
            </div>
            <a href="/privacy-policy">Read Privacy Policy</a>
          </div>
        </aside>
      )}
      <button className="privacy-control" onClick={() => setOpen(true)}>
        Privacy choices
      </button>
    </>
  );
}
