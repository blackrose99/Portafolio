import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHome, faUser, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import fotoPerfil from "./img/foto.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Toggle the 'shifted' class on the body or the main container
    document.body.classList.toggle('shifted');
    // or document.querySelector('.container').classList.toggle('shifted');
  };

  return (
    <div className="container">
      <div className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
        <div className="profile">
          <img src={fotoPerfil} alt="Foto de perfil" className="profile-picture" />
          <h2 className="profile-name" >Luis Manuel Castaño Grueso</h2>
        </div>
        <nav className="nav-menu">
          <ul className="nav-links">
            <li><Link to="/"><FontAwesomeIcon icon={faHome} style={{ color: '#f40606e8', marginRight: '0.5em', width:'40px' }} /> Home</Link></li>
            <li><Link to="/about"><FontAwesomeIcon icon={faUser} style={{ color: '#f40606e8', marginRight: '0.5em', width:'40px' }} /> Sobre Mí</Link></li>
            <li><Link to="/projects"><FontAwesomeIcon icon={faCode} style={{ color: '#f40606e8', marginRight: '0.5em', width:'40px' }} /> Mis Proyectos</Link></li>
            <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} style={{ color: '#f40606e8', marginRight: '0.5em' , width:'40px'}} /> Contactame</Link></li>
          </ul>
        </nav>
        <button className="toggle-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faAngleLeft : faBars} style={{ color: '#f40606e8' }} />
        </button>
      </div>
    </div>
  );
}

export default Header;
