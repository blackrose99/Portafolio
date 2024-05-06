import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome, faUser, faCode, faEnvelope, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import fotoPerfil from "./img/foto.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
      <div className="profile">
        <img src={fotoPerfil} alt="Foto de perfil" className="profile-picture" />
        <h2 className="profile-name" >Luis Manuel Castaño Grueso</h2>
      </div>
      <nav className="nav-menu">
        <ul className="nav-links">
          <li><Link to="/"><FontAwesomeIcon icon={faHome} style={{ color: '#f40606e8', marginRight: '0.5em' }} /> Home</Link></li>
          <li><Link to="/about"><FontAwesomeIcon icon={faUser} style={{ color: '#f40606e8', marginRight: '0.5em' }} /> Sobre Mí</Link></li>
          <li><Link to="/projects"><FontAwesomeIcon icon={faCode} style={{ color: '#f40606e8', marginRight: '0.5em' }} /> Mis Proyectos</Link></li>
          <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} style={{ color: '#f40606e8', marginRight: '0.5em' }} /> Contactame</Link></li>
        </ul>
      </nav>
      <button className="toggle-btn" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faAngleLeft : faBars} style={{ color: '#f40606e8' }} />
      </button>
    </header>
  );
}

export default Header;
