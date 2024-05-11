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


  return (
    <div className="container text-center ">
      <h2 className="m-3">Mis Habilidades Blandas</h2>
      <div className="row">
        <div className="col-md-2">
          <div className="card card_Habilidades_blandas">
            <img src={imgAprendizajeRapido} className="card-img-top " alt="Aprendizaje Rápido" />
            <div className="card-body">
              <h5 className="card-title_negro">Aprendizaje Rápido</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card card_Habilidades_blandas">
            <img src={imgComunicacionEfectiva} className="card-img-top" alt="Comunicación Efectiva" />
            <div className="card-body">
              <h5 className="card-title_negro">Comunicación Efectiva</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card card_Habilidades_blandas">
            <img src={imgLiderazgo} className="card-img-top" alt="Liderazgo" />
            <div className="card-body">
              <h5 className="card-title_negro">Liderazgo</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card card_Habilidades_blandas">
            <img src={imgSolucionProblemas} className="card-img-top" alt="Solución de Problemas" />
            <div className="card-body">
              <h5 className="card-title_negro">Solución de Problemas</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card card_Habilidades_blandas">
            <img src={imgCreatividad} className="card-img-top" alt="Creatividad" />
            <div className="card-body">
              <h5 className="card-title_negro">Creatividad</h5>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card card_Habilidades_blandas ">
            <img src={imgTrabajoEquipo} className="card-img-top" alt="Trabajo en Equipo" />
            <div className="card-body">
              <h5 className="title_negro-title">Trabajo en Equipo</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabilidadesBlandas;
