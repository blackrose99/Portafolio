import React from 'react';
import ProjectCard from '../Components/ProjectCard ';
import imgCap1Hackatom from "./img/projects/captura1.png";
import imgCap2Hackatom from "./img/projects/caprura2.png";
import imgfot1Hacktatom from "./img/projects/foto1.jpg";

// import imgcap1Tickets from "./img/projects/img_ticket1.png";

const App = () => {
  // Supongamos que tienes un array de proyectos
  const projects = [
    {
      title: 'Hackatom Resto Financiera Comultrasan',
      tools: 'React.js, Node.js, SQL, Git, Bootstrap',
      description: 'Este proyecto fue un reto de la hackatón de Softic 2023 para desarrollar un sistema que permitiera a los usuarios realizar pagos mediante códigos QR. La solución debía ser fácil de usar y permitir a los clientes de Financiera Comultrasan generar códigos QR ilimitados para recibir pagos en sus cuentas, con seguimiento de transacciones.',
      screenshots: [imgfot1Hacktatom, imgCap1Hackatom, imgCap2Hackatom],
      githubLink: 'https://github.com/blackrose99/HackatTonReto-1',
    }
    ,
    {
      "title": "Gestión de Tickets para Eventos",
      "tools": "Laravel, MySQL, Google Auth, Git, PHP, Bootstrap",
      "description": "Desarrollé un sistema para gestionar tickets de eventos, permitiendo a los usuarios iniciar sesión con Google. Los usuarios pueden ver una lista de stands dentro del evento o feria, calificarlos y hacer un seguimiento de los stands visitados. Cada stand tiene un código QR único que los usuarios pueden escanear para calificarlo y marcar su asistencia. Utilicé Laravel, MySQL, Google Auth, Git, PHP y Bootstrap para desarrollar esta solución.",
      "githubLink": "https://github.com/tuusuario/proyecto2",
      "screenshots": ["imgfot1Hacktatom"]
    }
    ,
    {
      title: 'Tercer Proyecto',
      tools: 'Tecnología A, Tecnología B',
      description: 'Este es el tercer proyecto.',
      screenshots: [imgCap1Hackatom, imgCap2Hackatom],
      githubLink: 'https://github.com/tuusuario/proyecto3',
    },
    {
      title: 'Cuarto Proyecto',
      tools: 'Tecnología P, Tecnología Q',
      description: 'Este es el cuarto proyecto.',
      screenshots: [imgfot1Hacktatom],
      githubLink: 'https://github.com/tuusuario/proyecto4',
    }
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
