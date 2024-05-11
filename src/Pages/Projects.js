import React from 'react';
import ProjectCard from '../Components/ProjectCard ';

const App = () => {
  // Supongamos que tienes un array de proyectos
  const projects = [
    {
      title: 'Hackatom Resto Financiera Comultrasan',
      tools: 'React, Firebase',
      description: 'Este es el primer proyecto.',
      screenshots: ['screenshot1.jpg', 'screenshot2.jpg'],
      githubLink: 'https://github.com/blackrose99/HackatTonReto-1',
    },
    // Agrega más proyectos aquí
  ];

  return (
    <div className="container">
      <h1 className='mt-5'>Mis Proyectos</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          tools={project.tools}
          description={project.description}
          screenshots={project.screenshots}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default App;
