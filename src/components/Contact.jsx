const Contact = ({ t }) => (
  <section id="contact" className="contact-section fade-in">
    <h2 className="numbered-heading overline">{t.contact.title}</h2>
    <h3 className="title">{t.contact.subtitle}</h3>
    <p>{t.contact.description}</p>
    <a className="email-link" href="mailto:henryq30@gmail.com">
      {t.contact.button}
    </a>
  </section>
);

export default Contact;
