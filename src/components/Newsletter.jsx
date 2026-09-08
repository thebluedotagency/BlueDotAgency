import {useState} from 'react';

const signupUrl = 'https://api.leadconnectorhq.com/widget/form/ReAP14PpMPi76G2KeYq5';

export function Newsletter() {
  const [opened, setOpened] = useState(false);
  return (
    <section className="newsletter" id="newsletter" aria-labelledby="newsletter-title">
      <div>
        <p className="eyebrow">A note from Iris</p>
        <h2 id="newsletter-title">
          Make room for
          <br />
          what you could build.
        </h2>
        <p>
          Join Blue Dot for ideas, small experiments, and things I’m learning about building with AI. Start with a
          welcome series, then hear from me as there’s something worth sharing.
        </p>
        <p className="newsletter-small">
          Email only. Unsubscribe whenever you like. <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
      <div className="newsletter-signup">
        {opened ? (
          <>
            <iframe src={signupUrl} title="Blue Dot newsletter signup" className="newsletter-form" />
            <p className="newsletter-small">
              Form not loading?{' '}
              <a href={signupUrl} target="_blank" rel="noreferrer">
                Open the signup form
              </a>
              .
            </p>
          </>
        ) : (
          <>
            <h3>Curious? You’re in the right place.</h3>
            <p>Open the signup form to enter your email and choose to receive Blue Dot’s newsletter.</p>
            <button className="primary-button" type="button" onClick={() => setOpened(true)}>
              Sign up for Blue Dot
            </button>
            <p className="newsletter-small">The form loads through our email provider when you open it.</p>
          </>
        )}
      </div>
    </section>
  );
}
