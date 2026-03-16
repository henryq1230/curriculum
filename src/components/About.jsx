import profileImg from '../assets/profile.jpg';

const About = ({ t }) => (
  <section id="about" className="about-section fade-in">
    <h2 className="numbered-heading">{t.about.title}</h2>
    <div className="inner">
      <div className="about-text fade-in-left">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.skills_title}</p>
        <ul className="skills-list staggered-list">
          {['React.js', 'Node.js', 'PHP', 'Laravel', 'Flutter', 'Wordpress'].map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="about-pic">
        <div className="wrapper">
          <img className="img" src={profileImg} alt="Henry" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
