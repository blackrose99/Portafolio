import React from 'react';
import './Clientes.css';

const Clientes = () => {
    return (
        <div className="container clientes">
            <h2 className="text-center mb-4">Mis Clientes</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card cliente-card">
                        <div className="card-body">
                            <h3 className="card-title">Supermercado Merca Fácil</h3>
                            <p className="card-text">Descripción del cliente Supermercado Merca Fácil.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card cliente-card">
                        <div className="card-body">
                            <h3 className="card-title">Temach Empresa</h3>
                            <p className="card-text">Descripción del cliente Temach Empresa para servicio y mantenimiento de equipos electrónicos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card cliente-card">
                        <div className="card-body">
                            <h3 className="card-title">Hotel Villamaria</h3>
                            <p className="card-text">Descripción del cliente Hotel Villamaria.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clientes;
