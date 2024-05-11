import React from 'react';
import './Servicios.css';

const Servicios = () => {
    return (
        <div className="container servicios">
            <h2 className="text-center mb-4">Mis Servicios</h2>
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="card servicio-card">
                        <div className="card-body">
                            <h3 className="">Desarrollo de Páginas Web</h3>
                            <p className="card-text">Descripción del servicio de desarrollo de páginas web.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="card servicio-card">
                        <div className="card-body">
                            <h3 className="">Landing Pages para Facebook</h3>
                            <p className="card-text">Descripción del servicio de creación de landing pages para Facebook.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="card servicio-card">
                        <div className="card-body">
                            <h3 className="">RPA con Rocketchat para Automatización de Procesos</h3>
                            <p className="card-text">Descripción del servicio de RPA con Rocketchat para automatización de procesos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="card servicio-card">
                        <div className="card-body">
                            <h3 className="">Desarrollo de Aplicativos Web</h3>
                            <p className="card-text">Descripción del servicio de desarrollo de aplicativos web.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="card servicio-card">
                        <div className="card-body">
                            <h3 className="">Desarrollo Móvil</h3>
                            <p className="card-text">Descripción del servicio de desarrollo móvil.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Servicios;
