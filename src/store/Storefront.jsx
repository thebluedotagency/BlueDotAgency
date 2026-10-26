import seed from './seed.json';
import './store.css';

function SocialIcon({kind}) {
  return <img src={`/assets/store/${kind}.svg`} alt="" width="24" height="24" />;
}

function Profile({profile}) {
  return (
    <aside className="store-profile">
      <img className="store-avatar" src={profile.image} alt={profile.name} width="170" height="170" />
      <div className="store-profile-copy">
        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
        <div className="store-socials">
          {['instagram', 'linkedin']
            .filter((key) => profile[key])
            .map((key) => (
              <a key={key} href={profile[key]} aria-label={key === 'instagram' ? 'Instagram' : 'LinkedIn'}>
                <SocialIcon kind={key} />
              </a>
            ))}
        </div>
      </div>
    </aside>
  );
}

function Card({item}) {
  return (
    <article className="store-card">
      <div className="store-card-top">
        <img src={item.image} width="64" height="64" alt="" loading="lazy" />
        <div>
          {item.title && <h2>{item.title}</h2>}
          <p>{item.description}</p>
        </div>
      </div>
      <a className="store-button" href={item.url} rel={item.id === 'ghl' ? 'sponsored' : undefined}>
        {item.button}
      </a>
    </article>
  );
}

export function Storefront({content = seed, preview = false, detail = false, guideId = 'shot-guide'}) {
  const visible = content.items.filter((item) => item.visible);
  const guide = visible.find((item) => item.id === guideId);
  return (
    <div className={`store-page${preview ? ' store-preview' : ''}`} style={{'--store-accent': content.theme.accent}}>
      <a className="store-skip" href="#store-content">
        Skip to content
      </a>
      <div className="store-layout">
        <Profile profile={content.profile} />
        <main id="store-content" className="store-content">
          {detail ? (
            guide ? (
              <Guide item={guide} />
            ) : (
              <div className="store-detail">
                <h2>This resource is unavailable.</h2>
                <a href="/store">Back to store</a>
              </div>
            )
          ) : (
            <>
              <div className="store-grid">
                {visible
                  .filter((item) => item.section === 'main')
                  .map((item) => (
                    <Card key={item.id} item={item} />
                  ))}
              </div>
              {visible.some((item) => item.section === 'resources') && (
                <section className="store-resources" aria-label={content.resourceTitle}>
                  <h2 className="store-section-title">
                    <span>{content.resourceTitle}</span>
                  </h2>
                  <div className="store-grid">
                    {visible
                      .filter((item) => item.section === 'resources')
                      .map((item) => (
                        <Card key={item.id} item={item} />
                      ))}
                  </div>
                </section>
              )}
            </>
          )}
          <footer className="store-footer">
            <a href="/privacy-policy">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="/terms-and-conditions">Terms</a>
          </footer>
        </main>
      </div>
    </div>
  );
}

function Guide({item}) {
  const formUrl = 'https://api.leadconnectorhq.com/widget/form/qZNDLMNslVVJHbTjoqu7';
  return (
    <article className="store-detail">
      <a href="/store" className="store-back">
        ← Back
      </a>
      <img className="store-detail-image" src={item.image} alt="" width="160" height="160" />
      <h2>{item.detailTitle || item.title}</h2>
      <p>{item.detailDescription || item.description}</p>
      <h3>Get My FREE Guide</h3>
      <iframe
        className="store-native-form"
        src={formUrl}
        title="Request your free phone video shot guide"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <p className="store-form-fallback">
        Form not loading?{' '}
        <a href={formUrl} target="_blank" rel="noopener noreferrer">
          Open the guide request form
        </a>
        .
      </p>
    </article>
  );
}

export default function StoreApp() {
  return (
    <Storefront
      content={seed}
      detail={location.pathname.replace(/\/$/, '') === '/store/shot-guide'}
      guideId={new URLSearchParams(location.search).get('item') || 'shot-guide'}
    />
  );
}
