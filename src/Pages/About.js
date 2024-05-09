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
        <div className="relative duration-300  hover:-rotate-0  -rotate-12 group border border-sky-900 border-4  overflow-hidden rounded-2xl relative h-52 w-72 bg-sky-800 p-5 flex flex-col items-start gap-4">
          <div class="text-gray-50">
            <span class="font-bold text-5xl">Jr</span>
            <p class="text-xs">Developer</p>
          </div>
          <button class="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">Dowload CV
            <svg class="w-6 h-6 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
              <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fill-rule="evenodd">
              </path>
            </svg>
          </button>

          <svg class="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="5"></path></svg>

          <svg class="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="2"></path></svg>
        </div>
      </div>
      <div className='mt-3 mb-3'>
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
      </div>
      <div className='m-4'>
        <h2>Experiencia</h2>
        <div className="card">
          <div className="card-body">
            <p>Proyectos Destacados:</p>
            <p>Sistema de Evaluación de Stands de Eventos</p>
            <p>Descripción: Aplicativo web con PHP y el framework Laravel para gestionar stands en eventos...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
