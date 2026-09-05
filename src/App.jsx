import {useEffect} from 'react';
import {Header} from './components/Header.jsx';
import {Hero} from './components/Hero.jsx';
import {Intro} from './components/Intro.jsx';
import {Sprint} from './components/Sprint.jsx';
import {Work} from './components/Work.jsx';
import {Statement} from './components/Statement.jsx';
import {About} from './components/About.jsx';
import {Faq} from './components/Faq.jsx';
import {Contact} from './components/Contact.jsx';
import {Footer} from './components/Footer.jsx';

export function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('seen')),
      {threshold: 0.12},
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Sprint />
        <Work />
        <Statement />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
