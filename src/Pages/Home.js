import React, { useState } from "react";
import "./Home.css";
// Importa las imágenes de habilidades blandas individualmente
import imgAprendizajeRapido from "./img/h-blandas/activo-intangible.png";
import imgComunicacionEfectiva from "./img/h-blandas/comunicacion-efectiva.png";
import imgLiderazgo from "./img/h-blandas/emprendimiento.png";
import imgSolucionProblemas from "./img/h-blandas/hipotesis.png";
import imgCreatividad from "./img/h-blandas/inspiracion.png";
import imgTrabajoEquipo from "./img/h-blandas/trabajo-en-equipo.png";


// Utiliza require.context para importar automáticamente todas las imágenes de la carpeta "img"
const importAllImages = (requireContext) => requireContext.keys().map(requireContext);
const images = importAllImages(require.context('./img/iconos', false, /\.(png|jpe?g|svg)$/));


const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container mt-5 ">
      <section>
        <div className="mb-3 text-center">
          <h1>Bienvenido a mi portafolio</h1>
          <p>Este es mi portafolio de presentación. Aquí podrás encontrar información sobre mí y mis proyectos.</p>
        </div>
        <div className=" m-5 ">
          <h2 className="m-5 text-center">Mis Habilidades Técnicas</h2>
          <div className="slider">
            {images.map((image, index) => (
              <img
                src={image}
                alt={`image-${index}`}
                key={index}
                className={index === currentImageIndex ? "active" : ""}
              />
            ))}
          </div>
          <button onClick={handlePrevImage}>&lt;</button>
          <button onClick={handleNextImage}>&gt;</button>
        </div>

        <div className="container text-center ">
          <h2 className="m-3">Mis Habilidades Blandas</h2>
          <div className="row">
            <div className="col-md-2">
              <div className="card card_Habilidades">
                <img src={imgAprendizajeRapido} className="card-img-top " alt="Aprendizaje Rápido" />
                <div className="card-body">
                  <h5 className="card-title">Aprendizaje Rápido</h5>
                  <p className="card-text">Contenido de la Tarjeta 1.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card card_Habilidades">
                <img src={imgComunicacionEfectiva} className="card-img-top" alt="Comunicación Efectiva" />
                <div className="card-body">
                  <h5 className="card-title">Comunicación Efectiva</h5>
                  <p className="card-text">Contenido de la Tarjeta 2.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card card_Habilidades">
                <img src={imgLiderazgo} className="card-img-top" alt="Liderazgo" />
                <div className="card-body">
                  <h5 className="card-title">Liderazgo</h5>
                  <p className="card-text">Contenido de la Tarjeta 3.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card card_Habilidades">
                <img src={imgSolucionProblemas} className="card-img-top" alt="Solución de Problemas" />
                <div className="card-body">
                  <h5 className="card-title">Solución de Problemas</h5>
                  <p className="card-text">Contenido de la Tarjeta 4.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card card_Habilidades">
                <img src={imgCreatividad} className="card-img-top" alt="Creatividad" />
                <div className="card-body">
                  <h5 className="card-title">Creatividad</h5>
                  <p className="card-text">Contenido de la Tarjeta 5.</p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="card card_Habilidades ">
                <img src={imgTrabajoEquipo} className="card-img-top" alt="Trabajo en Equipo" />
                <div className="card-body">
                  <h5 className="card-title">Trabajo en Equipo</h5>
                  <p className="card-text">Contenido de la Tarjeta 6.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
