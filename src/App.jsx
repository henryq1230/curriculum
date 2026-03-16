import { useState, useEffect } from 'react';
import translations from './translations.json';
import './index.css';

// Modular Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Hooks
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  useScrollAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="container">
      <div className="spotlight"></div>
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="fillHeight">
        <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Contact t={t} />
      </main>
      <footer className="footer">
        <p>Built by Henry Quintero</p>
      </footer>
    </div>
  );
}

export default App;
