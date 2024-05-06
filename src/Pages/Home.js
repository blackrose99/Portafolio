import React, { useState } from "react";
import "./Home.css";

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
        <div className="container mt-5">
            <section>
                <div className="mb-3">
                    <h1>Bienvenido a mi portafolio</h1>
                    <p>Este es mi portafolio de presentación. Aquí podrás encontrar información sobre mí y mis proyectos.</p>
                </div>
                <div className="slider-container m-5">
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

                <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Título de la Tarjeta 1</h5>
              <p className="card-text">Contenido de la Tarjeta 1.</p>
              <a href="#" className="btn btn-primary">Botón</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Título de la Tarjeta 2</h5>
              <p className="card-text">Contenido de la Tarjeta 2.</p>
              <a href="#" className="btn btn-primary">Botón</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Título de la Tarjeta 3</h5>
              <p className="card-text">Contenido de la Tarjeta 3.</p>
              <a href="#" className="btn btn-primary">Botón</a>
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
