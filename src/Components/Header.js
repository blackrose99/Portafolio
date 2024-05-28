import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faProjectDiagram, faEnvelope, faBars, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import fotoPerfil from "./img/foto.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('shifted', !menuOpen);
  };

  return (
    <div className="container">
      <div className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
        <div className="menu-container">
          <button className="toggle-btn mb-4" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faAngleLeft : faBars}  />
          </button>
          {menuOpen && (
            <div className="profile">
              <img src={fotoPerfil} alt="Foto de perfil" className="profile-picture" />
              <h2 className="profile-name">Manuel Castaño</h2>
            </div>
          )}
          <nav className="nav-menu">
            <ul className="nav-links">
              <li className={selectedMenu === '/' ? 'active' : ''}>
                <Link to="/" className="nav-link">
                  <FontAwesomeIcon icon={faHome} className="nav-icon" />
                  <span className="nav-text">Inicio</span>
                </Link>
              </li>
              <li className={selectedMenu === '/about' ? 'active' : ''}>
                <Link to="/about" className="nav-link">
                  <FontAwesomeIcon icon={faUser} className="nav-icon" />
                  <span className="nav-text">Sobre mi</span>
                </Link>
              </li>
              <li className={selectedMenu === '/projects' ? 'active' : ''}>
                <Link to="/projects" className="nav-link">
                  <FontAwesomeIcon icon={faProjectDiagram} className="nav-icon" />
                  <span className="nav-text">Proyectos</span>
                </Link>
              </li>
              <li className={selectedMenu === '/contact' ? 'active' : ''}>
                <Link to="/contact" className="nav-link">
                  <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
                  <span className="nav-text">Contacto</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
