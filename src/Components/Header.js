import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope, faBars, faAngleLeft } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos que necesites
import fotoPerfil from "./img/foto.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('shifted');
  };

  return (
    <div className="container">
      <div className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
        <button className="toggle-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faAngleLeft : faBars} style={{ color: '#f40606e8' }} />
        </button>
        <div className="profile">
          <img src={fotoPerfil} alt="Foto de perfil" className="profile-picture" />
          <h2 className="profile-name">Manuel Castaño</h2>
        </div>
        <nav className="nav-menu">
          <ul className="nav-links">
              <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Inicio</Link></li>
              <li><Link to="/about"><FontAwesomeIcon icon={faUser} /> Sobre mi</Link></li>
              <li><Link to="/projects"><FontAwesomeIcon icon={faProjectDiagram} /> Proyectos</Link></li>
              <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
