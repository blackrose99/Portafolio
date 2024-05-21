import React from 'react';
import './About.css'; // Importa el archivo de estilos de About
import imgSenalogo from "./img/about/sena.png";
import imgCandelariaLogo from "./img/about/colegioNuestraseñoradelacandelaria.png";
import imgUtsLogo from "./img/about/uts.png";
import imgPerfil from "../Components/img/foto.jpg";
import SkillCard from "../Components/SkillCard";

function About() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Sobre Mí</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card_info_sobre_mi">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-8">
                  <h2 className="font-bold text-5xl">Jr</h2>
                  <h3 className="ml-">Developer</h3>
                  <button className="btn btn-primary mt-3 ml-5">
                    Download CV
                  </button>
                </div>
                <div className="col-4">
                  <img src={imgPerfil} className="img-about-perfil" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card_info_sobre_mi">
            <div className="card-body">
              <h2 className="card-title">¿Quién Soy?</h2>
              <p className="small-desc">
                Soy un estudiante de ingeniería de sistemas con experiencia en desarrollo de sistemas informáticos. Mi trayectoria como tecnólogo en desarrollo de sistemas me ha proporcionado sólidos conocimientos en diversos lenguajes de programación y frameworks. Me apasiona la resolución de problemas y estoy comprometido con el desarrollo de software de calidad.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card_info_sobre_mi">
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

<div className=''> 
  <SkillCard/>
</div>
      <div className="mt-5 mb-5">
        <h2 className="text-center mb-5">MI NIVEL DE EDUCACIÓN</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card_studios">
              <img src={imgCandelariaLogo} className="img-about-estudios1" alt="Candelaria Logo" />
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
              <img src={imgSenalogo} className="img-about-estudios" alt="SENA Logo" />
              <div className="card-body">
                <h4 className="card-title-studio">Servicio Nacional de Aprendizaje SENA</h4>
                <h5>CIMITARRA SANTANDER</h5>
                <p>2017-2018</p>
                <p>Técnico en Sistemas</p>
                <button onClick={() => window.open('ruta/al/pdf', '_blank')} className="btn btn-primary">Ver Certificado</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card_studios">
              <img src={imgUtsLogo} className="img-about-estudios" alt="UTS Logo" />
              <div className="card-body">
                <h4 className="card-title-studio">UNIDADES TECNOLÓGICAS DE SANTANDER</h4>
                <h5>BUCARAMANGA SANTANDER</h5>
                <p>2021-2023</p>
                <p>Tecnología en Desarrollo de Sistemas Informáticos</p>
                <button onClick={() => window.open('/pdf/diplomaTecnologoEnSistemas.pdf', '_blank')} className="btn btn-primary">Ver Certificado</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card_studios">
              <img src={imgUtsLogo} className="img-about-estudios" alt="UTS Logo" />
              <div className="card-body">
                <h4 className="card-title-studio">UNIDADES TECNOLÓGICAS DE SANTANDER</h4>
                <h5>BUCARAMANGA SANTANDER</h5>
                <p>En Formación...</p>
                <p>Ingeniería De Sistemas</p>
                <button onClick={() => window.open('ruta/al/pdf', '_blank')} className="btn btn-primary">Ver Certificado</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 experience-card container'>
            <h1>Experiencia</h1>
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
