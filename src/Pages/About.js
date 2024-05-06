import React from 'react';
import './About.css'; // Importa el archivo de estilos de About

function About() {
  return (
    <div className="container about-container">
      <h2>Sobre Mí</h2>
      <div className="card">
        <div className="card-body">
          <p>Soy un estudiante de ingeniería de sistemas con experiencia en desarrollo de sistemas informáticos...</p>
        </div>
      </div>

      <h2>Educación</h2>
      <div className="card">
        <div className="card-body">
          <p>UNIDADES TECNOLÓGICAS DE SANTANDER</p>
          <p>2021-2023</p>
          <p>Tecnología en Desarrollo de Sistemas Informáticos</p>
        </div>
      </div>

      <h2>Habilidades</h2>
      <div className="card">
        <div className="card-body">
          <ul>
            <li>Comunicación efectiva</li>
            <li>Trabajo en equipo</li>
            <li>Resolución de problemas</li>
            {/* Agrega más habilidades aquí */}
          </ul>
        </div>
      </div>

      <h2>Experiencia</h2>
      <div className="card">
        <div className="card-body">
          <p>Proyectos Destacados:</p>
          <p>Sistema de Evaluación de Stands de Eventos</p>
          <p>Descripción: Aplicativo web con PHP y el framework Laravel para gestionar stands en eventos...</p>
        </div>
      </div>

      <h2>En Formación</h2>
      <div className="certificate">
        <img src="ruta/al/certificado.jpg" alt="Certificado" />
        {/* Agrega más certificados aquí */}
      </div>
    </div>
  );
}

export default About;
