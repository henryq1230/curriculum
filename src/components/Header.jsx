import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

const Header = ({ lang, setLang, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <a href="#hero" className="logo-link">
          <img src={logoImg} alt="Henry Quintero Logo" className="logo-img" style={{ height: '70px', width: 'auto', display: 'block' }} />
        </a>
      </div>
      
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        <div className="hamburger"></div>
      </button>

      <nav className={`nav ${isMenuOpen ? 'visible' : ''}`}>
          <ol>
            <li style={{ transitionDelay: '0.1s' }}><a href="#about" onClick={() => setIsMenuOpen(false)}><span>01.</span>{t.nav.about}</a></li>
            <li style={{ transitionDelay: '0.2s' }}><a href="#experience" onClick={() => setIsMenuOpen(false)}><span>02.</span>{t.nav.experience}</a></li>
            <li style={{ transitionDelay: '0.3s' }}><a href="#projects" onClick={() => setIsMenuOpen(false)}><span>03.</span>{t.nav.projects}</a></li>
            <li style={{ transitionDelay: '0.4s' }}><a href="#contact" onClick={() => setIsMenuOpen(false)}><span>04.</span>{t.nav.contact}</a></li>
          </ol>
          <div className="lang-switcher" style={{ transitionDelay: '0.5s' }}>
            <button onClick={() => { setLang(lang === 'en' ? 'es' : 'en'); setIsMenuOpen(false); }}>
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
      </nav>
    </header>
  );
};

export default Header;
