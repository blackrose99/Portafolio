import React from 'react';
import { Link } from 'react-router-dom'; // Si estás usando react-router para manejar las rutas

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <h2>Tu Nombre</h2>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca</Link></li>
          <li><Link to="/projects">Proyectos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
