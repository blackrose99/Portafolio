import React from 'react';
import './Clientes.css';
import imgHotel from "../Pages/img/empresas/hotel.png";
import imgSuperMercado from "../Pages/img/empresas/supermercado.png";
import imgAireRepaire from "../Pages/img/empresas/airereparacion.png";


const Clientes = () => {
    return (
        <div className="container clientes">
            <h2 className="text-center mb-4">Ellos ya confiaron en mí</h2>
            <p className="text-center mb-4">Descubre algunas de las empresas que ya han confiado en mis servicios y únete a ellas para llevar tus proyectos al siguiente nivel.</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="cliente-card">
                        <div className="card-image">
                            <img src={imgSuperMercado} alt="Supermercado" className="img-fluid" />
                        </div>
                        <div className="heading">Supermercado Merca Fácil</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cliente-card">
                        <div className="card-image">
                            <img src={imgAireRepaire} alt="Temach Empresa" className="img-fluid" />
                        </div>
                        <div className="heading">Temach Empresa</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cliente-card">
                        <div className="card-image">
                            <img src={imgHotel} alt="Hotel" className="img-fluid" />
                        </div>
                        <div className="heading">Hotel Villamaria</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clientes;
