import React, { useState, useEffect } from 'react';
import "./HabilidadesTecnicas.css";
// Importar las imágenes de los logos

// Lenguajes
import iconJava from "../Pages/img/iconos/java.png";
import iconPhp from "../Pages/img/iconos/php.png";
import iconPython from "../Pages/img/iconos/piton.png";
import iconHtml from "../Pages/img/iconos/html-5.png";
import iconJavaScript from "../Pages/img/iconos/javascript.png";
import iconCss from "../Pages/img/iconos/css.png";

// Frameworks
import iconReact from "../Pages/img/iconos/react.png";
import iconBootstrap from "../Pages/img/iconos/bootstrap.png";
import iconLaravel from "../Pages/img/iconos/laravel.png";
import iconSpringboot from "../Pages/img/iconos/springboot.png";

// Metodologías
import iconScrum from "../Pages/img/iconos/scrum.png";
import iconKanban from "../Pages/img/iconos/kanban.png";

// Base de datos
import iconMysql from "../Pages/img/iconos/mysql.png";
import iconMongo from "../Pages/img/iconos/mongo.png";

// Control de versiones
import iconGit from "../Pages/img/iconos/git.png";
import iconGithub from "../Pages/img/iconos/github.png";

// Herramientas
import iconLinux from "../Pages/img/iconos/linux.png";
import iconWindows from "../Pages/img/iconos/ventanas.png";
import iconIntellij from "../Pages/img/iconos/intellij.png";
import iconVisualStudioCode from "../Pages/img/iconos/visualStudioCode.png";
import iconTrello from "../Pages/img/iconos/trelo.png";

// Testing 
import iconJunit from "../Pages/img/iconos/Junit.png";
import iconPostman from "../Pages/img/iconos/postman.png";
const HabilidadesTecnicas = () => {
    const habilidades = [
      {
        nombre: 'JavaScript',
        icono: iconJavaScript,
        categoria: 'Lenguajes de Programación'
      },
      {
        nombre: 'Java',
        icono: iconJava,
        categoria: 'Lenguajes de Programación'
      },
      {
        nombre: 'PHP',
        icono: iconPhp,
        categoria: 'Lenguajes de Programación'
      },
      {
        nombre: 'Python',
        icono: iconPython,
        categoria: 'Lenguajes de Programación'
      },
      {
        nombre: 'HTML',
        icono: iconHtml,
        categoria: 'Lenguajes de Programación'
      },
      {
        nombre: 'CSS',
        icono: iconCss,
        categoria: 'Lenguajes de Programación'
      },
      {
        nombre: 'React',
        icono: iconReact,
        categoria: 'Frameworks'
      },
      {
        nombre: 'Bootstrap',
        icono: iconBootstrap,
        categoria: 'Frameworks'
      },
      {
        nombre: 'Laravel',
        icono: iconLaravel,
        categoria: 'Frameworks'
      },
      {
        nombre: 'Spring Boot',
        icono: iconSpringboot,
        categoria: 'Frameworks'
      },
      {
        nombre: 'Scrum',
        icono: iconScrum,
        categoria: 'Metodologías'
      },
      {
        nombre: 'Kanban',
        icono: iconKanban,
        categoria: 'Metodologías'
      },
      {
        nombre: 'MySQL',
        icono: iconMysql,
        categoria: 'Base de Datos'
      },
      {
        nombre: 'MongoDB',
        icono: iconMongo,
        categoria: 'Base de Datos'
      },
      {
        nombre: 'Git',
        icono: iconGit,
        categoria: 'Control de Versiones'
      },
      {
        nombre: 'GitHub',
        icono: iconGithub,
        categoria: 'Control de Versiones'
      },
      {
        nombre: 'Linux',
        icono: iconLinux,
        categoria: 'Herramientas'
      },
      {
        nombre: 'Windows',
        icono: iconWindows,
        categoria: 'Herramientas'
      },
      {
        nombre: 'IntelliJ',
        icono: iconIntellij,
        categoria: 'Herramientas'
      },
      {
        nombre: 'Visual Studio Code',
        icono: iconVisualStudioCode,
        categoria: 'Herramientas'
      },
      {
        nombre: 'Trello',
        icono: iconTrello,
        categoria: 'Herramientas'
      },
      {
        nombre: 'JUnit',
        icono: iconJunit,
        categoria: 'Testing'
      },
      {
        nombre: 'Postman',
        icono: iconPostman,
        categoria: 'Testing'
      },
      // Agrega más habilidades según necesites
    ];

   const [currentIndex, setCurrentIndex] = useState(0);

  // Función para mover el slider automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex === habilidades.length - 1 ? 0 : prevIndex + 1));
    }, 1000); // Cambia el intervalo según lo necesites
    return () => clearInterval(interval);
}, [currentIndex, habilidades.length]);


return (
<div className="habilidades-tecnicas-container">
    <h2 className='text-center m-3 mt-5 mb-3'>Mis Habilidades Técnicas en Herramientas de Desarrollo</h2>
    <p className='text-center mb-5'>Con un amplio conocimiento en diversas herramientas y tecnologías, puedo ofrecer soluciones personalizadas que se adaptan a las necesidades específicas de cada cliente.</p>
    <div className="fila_logos row">
        {habilidades.map((habilidad, index) => (
            <div key={index} className={`habilidad-card ${habilidad.categoria.toLowerCase().replace(/\s/g, '-')}`} style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}>
                <div className="habilidad-overlay"></div>
                <div className="habilidad-circle">
                    <img className='crecer_imagen' src={habilidad.icono} alt={habilidad.nombre} />
                    <div className="habilidad-text">
                        <p>{habilidad.nombre}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>


);
};

export default HabilidadesTecnicas;