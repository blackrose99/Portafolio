import React from 'react';
import { FaGraduationCap, FaTasks, FaBriefcase, FaCertificate } from 'react-icons/fa'; // Importa los iconos de React Icons
import './About.css'; // Importa el archivo de estilos de About
import imgTituloPregrado from "./img/about/gorra-de-posgrado.png";
import imgSenalogo from "./img/about/sena.png";
import imgCandelariaLogo from "./img/about/colegioNuestraseñoradelacandelaria.png";
import imgUtsLogo from "./img/about/Logo_de_las_Unidades_Tecnológicas_de_Santander.svg.png";

function About() {
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Sobre Mí</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <p>Soy un estudiante de ingeniería de sistemas con experiencia en desarrollo de sistemas informáticos. Mi trayectoria como tecnólogo en desarrollo de sistemas me ha proporcionado sólidos conocimientos en diversos lenguajes de programación y frameworks. Me apasiona la resolución de problemas y estoy comprometido con el desarrollo de software de calidad.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Información Personal</h4>
              <ul>
                <li>Tengo 22 años</li>
                <li>Nací en Cimitarra, Santander</li>
                <li>Vivo en Bucaramanga, Santander</li>
                <li>CC 1099543721 expedido el 19/09/2019</li>
                <li>Fecha de nacimiento: 14/09/2001</li>
                {/* Agrega más elementos de la lista si es necesario */}
              </ul>          </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Perfil</h4>
              <img src={imgUtsLogo} className="img-about-estudios" alt="" />

            </div>
          </div>
        </div>
      </div>

      <h2>Educación</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card card_estudios">
            <img src={imgUtsLogo} className="img-about-estudios" alt="" />
            <div className="card-body">
              <h4 className="card-title">UNIDADES TECNOLÓGICAS DE SANTANDER</h4>
              <h5>BUCARAMANGA SANTANDER</h5>
              <p>En Formacion...</p>
              <p>Ingeniería De Sistemas</p>
              <button onClick={() => window.open('ruta/al/pdf', '_blank')} className="btn btn-primary">Ver Certificado</button>

            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card_estudios">
            <img src={imgUtsLogo} className="img-about-estudios" alt="" />
            <div className="card-body">
              <h4 className="card-title">UNIDADES TECNOLÓGICAS DE SANTANDER</h4>
              <h5>BUCARAMANGA SANTANDER</h5>
              <p>2021-2023</p>
              <p>Tecnología en Desarrollo de Sistemas Informáticos</p>
              <button onClick={() => window.open('ruta/al/pdf', '_blank')} className="btn btn-primary">Ver Certificado</button>

            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card_estudios">
            <img src={imgSenalogo} className="img-about-estudios" alt="" />
            <div className="card-body">
              <h4 className="card-title">Servicio Nacional de Aprendizaje SENA</h4>
              <h5>CIMITARRA SANTANDER</h5>
              <p>2017-2018</p>
              <p>Técnico en Sistemas</p>
              <button onClick={() => window.open('ruta/al/pdf', '_blank')} className="btn btn-primary">Ver Certificado</button>

            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card_estudios">
            <img src={imgCandelariaLogo} className="img-about-estudios " alt="" />
            <div className="card-body">
              <h4 className="card-title">Colegio Nuestra Señora De La Candelaria</h4>
              <h5>CIMITARRA SANTANDER</h5>
              <p>2018</p>
              <p>Bachiller</p>
              <button onClick={() => window.open('ruta/al/pdf', '_blank')} className="btn btn-primary">Ver Certificado</button>
            </div>
          </div>
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
    </div>
  );
}

export default About;
