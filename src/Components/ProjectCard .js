import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ title, tools, description, screenshots, githubLink }) => {
  return (
    <div className=" card card_project mb-3 mt-5">
      <div className="row g-0">
        <div className="col-md-4">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {screenshots.map((screenshot, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <img src={screenshot} className="d-block w-100" alt={`Screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">Herramientas utilizadas: {tools}</small>
            </p>
            <a href={githubLink} className="btn btn-primary">
              <FontAwesomeIcon icon={faGithub} /> Ver en GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
