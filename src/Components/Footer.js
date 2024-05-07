import React, { useState } from 'react';
import './Footer.css'; // Importa el archivo de estilos del footer
import imgFooter from './img/undraw_Knowledge_re_5v9l.png'; // Importa la imagen 

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false); // Define la variable isDownloading y su función para cambiar el estado


  const handleDownloadClick = () => {
    setIsDownloading(true); // Activa la animación de "cargando"
    
    // Simular la descarga (aquí puedes realizar la lógica de descarga real)
    setTimeout(() => {
      setIsDownloading(false); // Desactiva la animación de "cargando"
      setShowModal(true); // Muestra el modal de descarga
    }, 800); // Simula una descarga de 3 segundos
  };

  

  return (
    <footer className="footer bg-dark text-light">
      {/* Modal de descarga */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-body">
              <h2>Descargando...</h2>
              {/* Aquí puedes colocar tu animación de descarga */}
            </div>
          </div>
        </div>
      )}

      <div className="container py-5">
        <div className="row">
          {/* Primera columna: Imagen con información */}
          <div className="col-md-4">
            <img src={imgFooter} alt="imgFooter" className="img-fluid mb-3" width={250}/>
            <p>Información sobre la empresa o proyecto.</p>
          </div>
          {/* Segunda columna: Información personal */}
          <div className="col-md-4">
            <h4>Información de Contacto</h4>
            <ul className="list-unstyled">
              <li className='btnFooter'>GitHub: <a href="https://github.com/blackrose99" target="_blank" rel="noopener noreferrer" className="">Blackrose99</a></li>
              <br></br>
              <li className='btnFooter'>Dockerhub: <a href="https://hub.docker.com/u/lmcastano" target="_blank" rel="noopener noreferrer" className="">lmcastano</a></li>
              <li className='btnFooter'>Linkedin: <a href="https://www.linkedin.com/in/luis-manuel-casta%C3%B1o-grueso-167881197/" target="_blank" rel="noopener noreferrer" className="">Luis Manuel Castaño Grueso</a></li>
              <li className='btnFooter'>Mail: <a href="" target="_blank" rel="noopener noreferrer" className="">mannuelcast321@gmail.com</a> </li>
              <li className='btnFooter'>Whatsapp:<a href="https://wa.me/3168142027" target="_blank" rel="noopener noreferrer" className="">+573168142027</a> </li>
              <li className='btnFooter'>Instagram: <a href="https://www.instagram.com/luismanuelcastano14/" target="_blank" rel="noopener noreferrer" className="">luismanuelcastano14</a> </li>
              <li className='btnFooter'>Hoja de Vida: <button onClick={handleDownloadClick} className={`m-1  btnAnimacion ${isDownloading ? 'downloading' : ''}`}>{isDownloading ? 'Cargando...' : 'Descargar'}</button></li>

            </ul>
          </div>
          {/* Tercera columna: Enlaces y redes sociales */}
          <div className="col-md-4">
            <h4>Menu</h4>
            <ul className="list-unstyled menuList">
              <li><a href="/" className="btnFooter">Inicio</a></li>
              <li><a href="/pagina" className="btnFooter">Enlace a página</a></li>
              <li><a href="/about" className="btnFooter ">Sobre mi</a></li>
              <li><a href="/projects" className="btnFooter">Proyectos</a></li>
              <li><a href="/contact" className="btnFooter ">Contacto</a></li>
              {/* Agrega tus enlaces normales aquí */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
