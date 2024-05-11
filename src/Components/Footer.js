import React, { useState } from 'react';
import './Footer.css'; // Importa el archivo de estilos del footer
import { faFacebook, faInstagram, faDiscord, faGithub, faLinkedin, faWhatsapp, faGoogle, faReddit, faTelegram, faXing } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faProjectDiagram, faEnvelope, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgMy from "./img/my.png";
const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          {/* Primera columna: Imagen con información */}
          <div className="col-md-4">
            <div className="card_footerP">
              <div className="border"></div>
              <div className="content">
                <div className="logo">
                  <div className="logo1 title_my">
                    {"My}"}
                  </div>
                  <div className="logo2">
                    <div className="logo-text">Softwareland</div>
                  </div>
                  <span className="trail"></span>
                </div>
                <span className="logo-bottom-text mt-5">Jr Developer</span>
              </div>
              <span className="bottom-text">Desarrollador Web</span>
            </div>
          </div>


          {/* Segunda columna: Información personal */}
          <div className="col-md-4">
            <h4>Información de Contacto</h4>
            <ul className="list-unstyled">
              <li className="btnFooter">Linkedin: <a href="https://www.linkedin.com/in/luis-manuel-casta%C3%B1o-grueso-167881197/" target="_blank" rel="noopener noreferrer">Luis Manuel Castaño Grueso</a></li>
              <li className="btnFooter">Mail: <a href="mailto:mannuelcast321@gmail.com" target="_blank" rel="noopener noreferrer">mannuelcast321@gmail.com</a></li>
              <li className="btnFooter">Whatsapp: <a href="https://wa.me/3168142027" target="_blank" rel="noopener noreferrer">+573168142027</a></li>
              <li className="btnFooter">GitHub: <a href="https://github.com/blackrose99" target="_blank" rel="noopener noreferrer">Blackrose99</a></li>
              <li className="btnFooter">Dockerhub: <a href="https://hub.docker.com/u/lmcastano" target="_blank" rel="noopener noreferrer">lmcastano</a></li>
            </ul>
          </div>
          {/* Tercera columna: Enlaces y redes sociales */}
          <div className="col-md-4">
            <h4>Menu</h4>
            <ul className="list-unstyled menuList">
              <li>
                <a href="/" className="btnFooter ">
                  <FontAwesomeIcon icon={faHome} /> Inicio
                </a>
              </li>
              <li>
                <a href="/about" className="btnFooter ">
                  <FontAwesomeIcon icon={faUser} /> Sobre mi
                </a>
              </li>
              <li>
                <a href="/projects" className="btnFooter">
                  <FontAwesomeIcon icon={faProjectDiagram} /> Proyectos
                </a>
              </li>
              <li>
                <a href="/contact" className="btnFooter ">
                  <FontAwesomeIcon icon={faEnvelope} /> Contacto
                </a>
              </li>
              <li>
                <a href="/foro" className="btnFooter">
                  <FontAwesomeIcon icon={faEnvelopeOpenText} /> Foro
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Lista de redes sociales con animaciones */}
        <div className="row">
          <ul className="list-unstyled social-icons">
            <li>
              <a href="https://www.facebook.com/LuisManuelCastano14/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/luismanuelcastano14/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
            </li>
            <li>
              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faDiscord} className="icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/blackrose99" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/luis-manuel-casta%C3%B1o-grueso-167881197/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/3168142027" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
              </a>
            </li>
            <li>
              <a href="mailto:mannuelcast321@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/user/DecentGrowth7631/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faReddit} className="icon" />
              </a>
            </li>
            <li>
              <a href="https://t.me/Lmcastano" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faTelegram} className="icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Manuel_0914" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faXing} className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;