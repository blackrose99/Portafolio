import React from 'react';
import './About.css'; // Importa el archivo de estilos de About
import imgSenalogo from "./img/about/sena.png";
import imgCandelariaLogo from "./img/about/colegioNuestraseñoradelacandelaria.png";
import imgUtsLogo from "./img/about/uts.png";
import imgPerfil from "../Components/img/foto.jpg";

function About() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Sobre Mí</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="about-item">
            <div className="text-gray-50">
              <h2 className="font-bold text-5xl">Jr</h2>
              <div className='row'>
                <h3 className="">Developer</h3>
              </div>
              <button class="download-button mt-3">
                <div class="docs">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    ></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Download CV
                </div>
                <div class="download">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </div>
              </button>
            </div>
            <img src={imgPerfil} className="img-about-perfil row" alt="" />
          </div>
        </div>
        <div className="col-md-5 ">
          <div className="card_info_sobre_mi">
            <p class="card-title">Quien Soy?</p>
            <p className='small-desc'>Soy un estudiante de ingeniería de sistemas con experiencia en desarrollo de sistemas informáticos.
              Mi trayectoria como tecnólogo en desarrollo de sistemas me ha proporcionado sólidos conocimientos en diversos
              lenguajes de programación y frameworks. Me apasiona la resolución de problemas y estoy comprometido con el desarrollo
              de software de calidad.</p>

          </div>
        </div>

        <div className="col-md-3">
          <div className="card_info_sobre_mi ">
            <div className="card-body">
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
      
      <div className='mt-5 mb-3'>
  <h2 className='text-center mb-4'>Educación</h2>
  <div className="row">
  <div className="col-md-3">
      <div className="card_studios">
        <img src={imgCandelariaLogo} className="img-about-estudios " alt="" />
        <div className="card-body">
          <h4 className="card-title-studio">Colegio Nuestra Señora De La Candelaria</h4>
          <h5>CIMITARRA SANTANDER</h5>
          <p>2018</p>
          <p>Bachiller</p>
          <button onClick={() => window.open('ruta/al/pdf', '_blank')} className="btn btn-primary">Ver Certificado</button>
        </div>
      </div>
    </div>
  <div className="col-md-3">
      <div className="card_studios">
        <img src={imgSenalogo} className="img-about-estudios" alt="" />
        <div className="card-body">
          <h4 className="card-title-studio">Servicio Nacional de Aprendizaje SENA</h4>
          <h5 className='m-4'>CIMITARRA SANTANDER</h5>
          <p>2017-2018</p>
          <p>Técnico en Sistemas</p>
          <button onClick={() => window.open('ruta/al/pdf', '_blank')} className="btn btn-primary">Ver Certificado</button>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card_studios">
        <img src={imgUtsLogo} className="img-about-estudios" alt="" />
        <div className="card-body-studio">
          <h4 className="card-title">UNIDADES TECNOLÓGICAS DE SANTANDER</h4>
          <h5>BUCARAMANGA SANTANDER</h5>
          <p>2021-2023</p>
          <p>Tecnología en Desarrollo de Sistemas Informáticos</p>
          <button onClick={() => window.open('ruta/al/pdf', '_blank')} className="btn btn-primary">Ver Certificado</button>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card_studios">
        <img src={imgUtsLogo} className="img-about-estudios" alt="" />
        <div className="card-body-studio">
          <h4 className="card-title">UNIDADES TECNOLÓGICAS DE SANTANDER</h4>
          <h5>BUCARAMANGA SANTANDER</h5>
          <p>En Formacion...</p>
          <p>Ingeniería De Sistemas</p>
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
