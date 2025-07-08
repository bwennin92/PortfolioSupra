import './Projects.css';

export default function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <ul className="projects-list">
        <li>
          <strong className="project-title">Modern Portfolio</strong>
          <span className="project-desc"> – A responsive React portfolio site (this one!)</span>
        </li>
        <li>
          <strong className="project-title">Task Tracker App</strong>
          <span className="project-desc"> – Productivity tool with React and Firebase</span>
        </li>
        <li>
          <strong className="project-title">Weather Dashboard</strong>
          <span className="project-desc"> – Real-time weather app using OpenWeatherMap API</span>
        </li>
        <li>
          <strong className="project-title">Phishing Detection Demo</strong>
          <span className="project-desc">
            {' '}
            –{' '}
            <a
              href="https://bwennin92.github.io/phishing-demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Try it here
            </a>
          </span>
        </li>
      </ul>
    </section>
  );
}
