import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./ProjectCard.css";

const ProjectCard = ({ title, tools, description, screenshots, githubLink }) => {
  return (
    <div className="project-card-container">
      <div className="mb-3 mt-5 card-project">
        <div className="row g-0">
          <div className="col-md-7">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {screenshots.map((screenshot, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <img src={screenshot} className="d-block w-100" style={{ maxHeight: '400px' }} alt={`Screenshot ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="">
              <h5 className="project-title">{title}</h5>
              <p className="project-description">{description}</p>
              <p className="">Herramientas utilizadas: {tools} </p>
              <a href={githubLink} className="btn btn-primary">
                <FontAwesomeIcon icon={faGithub} /> Ver en GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
