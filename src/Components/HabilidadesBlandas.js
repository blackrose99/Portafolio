import React from 'react';
import "./HabilidadesBlandas.css";
// Importa las imágenes de habilidades blandas individualmente
import imgAprendizajeRapido from "../Pages/img/h-blandas/activo-intangible.png";
import imgComunicacionEfectiva from "../Pages/img/h-blandas/comunicacion-efectiva.png";
import imgLiderazgo from "../Pages/img/h-blandas/emprendimiento.png";
import imgSolucionProblemas from "../Pages/img/h-blandas/hipotesis.png";
import imgCreatividad from "../Pages/img/h-blandas/inspiracion.png";
import imgTrabajoEquipo from "../Pages/img/h-blandas/trabajo-en-equipo.png";

const HabilidadesBlandas = () => {

  const habilidades = [
    { nombre: "Aprendizaje Rápido", img: imgAprendizajeRapido, descripcion: "Capacidad de adquirir y aplicar nuevos conocimientos rápidamente." },
    { nombre: "Comunicación Efectiva", img: imgComunicacionEfectiva, descripcion: "Habilidad para expresar ideas de manera clara y concisa." },
    { nombre: "Liderazgo", img: imgLiderazgo, descripcion: "Capacidad de guiar y motivar a un equipo hacia un objetivo común." },
    { nombre: "Solución de Problemas", img: imgSolucionProblemas, descripcion: "Habilidad para identificar soluciones efectivas a problemas complejos." },
    { nombre: "Creatividad", img: imgCreatividad, descripcion: "Capacidad de generar ideas nuevas y originales." },
    { nombre: "Trabajo en Equipo", img: imgTrabajoEquipo, descripcion: "Habilidad para colaborar y trabajar eficazmente con otros." }
  ];

  return (
    <div className="container text-center">
      <h2 className="m-3">Habilidades Blandas Profesionales</h2>
      <p className="text-center mb-5">
    Mis habilidades blandas me permiten adaptarme, comunicarme y liderar de manera efectiva en cualquier entorno profesional. Gracias a mi capacidad de aprendizaje rápido, puedo asimilar nuevas tecnologías y metodologías con facilidad. 
    Mi comunicación efectiva asegura que las ideas se transmitan claramente y se comprendan correctamente, mejorando la colaboración y reduciendo los malentendidos. 
    El liderazgo que ejerzo motiva a los equipos a alcanzar sus objetivos y superar desafíos. 
    Mi habilidad para la solución de problemas me permite abordar y resolver conflictos de manera eficiente, mientras que la creatividad impulsa la innovación en cada proyecto. 
    Finalmente, el trabajo en equipo garantiza que cada proyecto se desarrolle en un ambiente colaborativo y productivo. Descubre cómo estas competencias pueden beneficiar tu proyecto y llevarlo al siguiente nivel.
  </p>      <div className="row">
        {habilidades.map((habilidad, index) => (
          <div key={index} className="col-md-2">
            <div className="card card_Habilidades_blandas">
              <img src={habilidad.img} className="card-img-top" alt={habilidad.nombre} />
              <div className="card-body_Habilidades_blandas">
                <h5 className="card-title_negro">{habilidad.nombre}</h5>
                <div className="card-text">
                  <p>{habilidad.descripcion}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabilidadesBlandas;
