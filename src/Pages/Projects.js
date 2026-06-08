import React from 'react';
import { RiGithubLine, RiExternalLinkLine, RiCodeLine } from 'react-icons/ri';
import { useData } from '../context/DataContext';
import './Projects.css';

function ProjectCard({ project }) {
  return (
    <article className="project-card card">
      {project.highlight && (
        <span className="project-card__featured">Destacado</span>
      )}
      <div className="project-card__body">
        <div className="project-card__header">
          <span className="project-card__icon"><RiCodeLine /></span>
          <h2 className="project-card__title">{project.title}</h2>
        </div>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tools">
          {project.tools.map((t) => (
            <span key={t} className="badge badge--daily">{t}</span>
          ))}
        </div>
      </div>
      <div className="project-card__footer">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost project-card__link"
          >
            <RiGithubLine /> Ver código
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary project-card__link"
          >
            <RiExternalLinkLine /> Ver demo
          </a>
        )}
      </div>
    </article>
  );
}

function Projects() {
  const { projects } = useData();

  return (
    <>
      <section className="page-section page-section--dark projects-hero">
        <div className="container">
          <div className="section-header section-header--light">
            <h1>Proyectos</h1>
            <p>
              Soluciones construidas con propósito, tecnología y atención al detalle.
            </p>
            <span className="section-divider" />
          </div>
        </div>
      </section>

      <section className="page-section page-section--light">
        <div className="container">
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <p className="projects-note">
            Más proyectos disponibles en{' '}
            <a
              href="https://github.com/blackrose99"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/blackrose99
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Projects;
