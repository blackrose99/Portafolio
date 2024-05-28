import React from 'react';
import './About.css'; // Importa el archivo de estilos de About
import HabilidadesBlandas from "../Components/HabilidadesBlandas";

import imgSenalogo from "./img/about/sena.png";
import imgCandelariaLogo from "./img/about/colegioNuestraseñoradelacandelaria.png";
import imgUtsLogo from "./img/about/uts.png";
import imgPerfil from "../Components/img/foto.jpg";
import SkillCard from "../Components/SkillCard";

// Importa los archivos PDF
import DiplomaBachiller from '../pdf/DiplomaBachiller.pdf';
import DiplomaTecnicoEnSistemas from '../pdf/diplomaTecnicoEnSistemas.pdf';
import DiplomaTecnologoEnSistemas from '../pdf/diplomaTecnologo en sistemas.pdf';
import CV from '../pdf/Luis_Manuel_Castaño_HV.pdf';

function About() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Sobre Mí</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card_info_sobre_mi">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-8">
                  <h2 className="font-bold text-5xl">Jr</h2>
                  <h3 className="ml-">Developer</h3>
                  <a href={CV} className="btn btn-primary mt-3 ml-5" download="Luis_Manuel_Castaño_HV.pdf">
                    Download CV
                  </a>
                </div>
                <div className="col-4">
                  <img src={imgPerfil} className="img-about-perfil" alt="Perfil" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card_info_sobre_mi">
            <div className="">
              <h2 className="">¿Quién Soy?</h2>
              <p className="">
                Soy un estudiante de ingeniería de sistemas con experiencia en desarrollo de sistemas informáticos. Mi trayectoria como tecnólogo en desarrollo de sistemas me ha proporcionado sólidos conocimientos en diversos lenguajes de programación y frameworks. Me apasiona la resolución de problemas y estoy comprometido con el desarrollo de software de calidad.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card_info_sobre_mi">
            <div className="">
              <h4 className="card-title">Información Personal</h4>
              <ul>
                <li>Developer Jr</li>
                <li>22 Años</li>
                <li>Bucaramanga, Santander Colombia</li>
                <li>CC: 1099543721</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=''> 
        <SkillCard/>
      </div>
      <div className="mt-5 mb-5">
        <HabilidadesBlandas />
      </div>
      <div className="mt-5 mb-5">
        <h2 className="text-center mb-5 ">MI NIVEL DE EDUCACIÓN</h2>
        <div className="row">
          <div className="col-md-3 mt-3">
            <div className="card_studios">
              <img src={imgCandelariaLogo} className="img-about-estudios1" alt="Candelaria Logo" />
              <div className="card-body">
                <h4 className="card-title-studio">Colegio Nuestra Señora De La Candelaria</h4>
                <h5>CIMITARRA SANTANDER</h5>
                <p>2018</p>
                <p>Bachiller</p>
                <button onClick={() => window.open(DiplomaBachiller, '_blank')} className="certificate-button">
                  <div className="bgContainer">
                  <span>VER_</span>
                    <span>PDF</span>
                  </div>
                  <div className="arrowContainer">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 45 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card_studios">
              <img src={imgSenalogo} className="img-about-estudios" alt="SENA Logo" />
              <div className="card-body">
                <h4 className="card-title-studio">Servicio Nacional de Aprendizaje SENA</h4>
                <h5>CIMITARRA SANTANDER</h5>
                <p>2017-2018</p>
                <p>Técnico en Sistemas</p>
                <button onClick={() => window.open(DiplomaTecnicoEnSistemas, '_blank')} className="certificate-button">
                  <div className="bgContainer">
                  <span>VER_</span>
                    <span>PDF</span>
                  </div>
                  <div className="arrowContainer">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 45 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card_studios">
              <img src={imgUtsLogo} className="img-about-estudios" alt="UTS Logo" />
              <div className="card-body">
                <h4 className="card-title-studio">UNIDADES TECNOLÓGICAS DE SANTANDER</h4>
                <h5>BUCARAMANGA SANTANDER</h5>
                <p>2021-2023</p>
                <p>Tecnología en Desarrollo de Sistemas Informáticos</p>
                <button onClick={() => window.open(DiplomaTecnologoEnSistemas, '_blank')} className="certificate-button">
                  <div className="bgContainer">
                  <span>VER_</span>
                    <span>PDF</span>
                  </div>
                  <div className="arrowContainer">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 45 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="card_studios">
              <img src={imgUtsLogo} className="img-about-estudios" alt="UTS Logo" />
              <div className="card-body">
                <h4 className="card-title-studio">UNIDADES TECNOLÓGICAS DE SANTANDER</h4>
                <h5>BUCARAMANGA SANTANDER</h5>
                <p>En Formación...</p>
                <p>Ingeniería De Sistemas</p>
                <button onClick={() => window.open('ruta/al/pdf', '_blank')} className="certificate-button">
                  <div className="bgContainer">
                  <span>VER_</span>
                    <span>PDF</span>
                  </div>
                  <div className="arrowContainer">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 45 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 mb-4 experience-card container card'>
        <h1 className='text-center'>Experiencia</h1>
        <div className="content">
          <div className="experience">
            <p>Desarrollo de proyectos en <span className="highlight">MySoftwareLand</span>, una startup dedicada al desarrollo de soluciones para abordar problemas reales en empresas.</p>
            <p>Con más de 2 años de experiencia en el desarrollo de software, he trabajado de manera empírica como freelance, colaborando con una variedad de clientes para llevar a cabo proyectos exitosos.</p>
            <p>Mi enfoque se basa en entender las necesidades del cliente y ofrecer soluciones efectivas y de calidad que cumplan con sus expectativas y requisitos.</p>
            <p>Me apasiona aprender y adaptarme a nuevas tecnologías y desafíos, lo que me ha permitido ampliar constantemente mis habilidades y ofrecer resultados sobresalientes en cada proyecto.</p>
            <p>Estoy comprometido con la excelencia y la innovación en cada tarea que emprendo, y estoy emocionado por la oportunidad de contribuir con mis habilidades y experiencia a su equipo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
