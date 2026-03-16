const Hero = ({ t }) => (
  <section id="hero" className="hero-section fade-in">
    <p className="hero-greeting">{t.hero.greeting}</p>
    <h1 className="hero-name">{t.hero.name}</h1>
    <h2 className="hero-tagline">{t.hero.tagline}</h2>
    <p className="hero-description">{t.hero.description}</p>
    <a href="#projects" className="email-link">
      Check out my work!
    </a>
  </section>
);

export default Hero;
