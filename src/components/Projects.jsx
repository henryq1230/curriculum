import { useState } from 'react';
import kargoImg from '../assets/projects/kar-go.jpg';
import bibliaImg from '../assets/projects/biblia365.jpg';
import smartstockImg from '../assets/projects/smartstock.png';
import clinicmanagerImg from '../assets/projects/clinicmanager.png';

const images = {
  "kar-go": kargoImg,
  "smart stock": smartstockImg,
  "biblia 365": bibliaImg,
  "clinic manager": clinicmanagerImg
};

const Projects = ({ t }) => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="projects" className="projects-section">
    <h2 className="numbered-heading">{t.projects.title}</h2>
    <ul className="projects-grid">
      {t.projects.items.map((project, i) => (
        <li key={i} className="project-item fade-in">
          <div className="project-content">
            <p className="project-overline">Featured Project</p>
            <h3 className="project-title">{project.name}</h3>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            <ul className="project-tech-list">
              {project.tech.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link-btn">
                {t.projects.view_project || "Ver Proyecto"}
              </a>
            )}
          </div>
          <div className="project-image" onClick={() => setActiveImage(images[project.name])}>
            <div className="img-wrapper">
              <img src={images[project.name]} alt={project.name} />
            </div>
          </div>
        </li>
      ))}
    </ul>
      {activeImage && (
        <div className="lightbox-overlay active" onClick={() => setActiveImage(null)}>
          <div className="lightbox-wrapper">
            <img src={activeImage} alt="Fullscreen View" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
