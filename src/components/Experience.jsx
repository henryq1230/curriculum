const Experience = ({ t }) => (
  <section id="experience" className="experience-section fade-in">
    <h2 className="numbered-heading">{t.experience.title}</h2>
    <div className="inner">
      <div className="jobs-list">
        {t.experience.jobs.map((job, i) => (
          <div key={i} className="job-item">
            <h3>
              <span>{job.role}</span>
              <span className="company">
                &nbsp;@&nbsp;
                <a href={job.url} target="_blank" rel="noopener noreferrer">{job.company}</a>
              </span>
            </h3>
            <p className="range">{job.range}</p>
            <ul>
              {job.duties.map((duty, j) => (
                <li key={j}>{duty}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
