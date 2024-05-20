import React from 'react';
import './Clientes.css';

const Clientes = () => {
    return (
        <div className="container clientes">

            <h2 className="text-center mb-4">ELLOS YA CONFIARON EN MI</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className=" cliente-card">
                        <div className="card-image"></div>
                        <div className="category">Supermercado</div>
                        <div className="heading">Supermercado Merca Fácil
                        </div>
                        <p className="card-text">Descripción del cliente Supermercado Merca Fácil.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className=" cliente-card">
                        <div className="card-image"></div>
                        <div className="category">Empresa</div>
                        <div className="heading">Temach Empresa
                        </div>
                        <p className="card-text">Descripción del cliente Temach Empresa para servicio y mantenimiento de equipos electrónicos.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className=" cliente-card">
                        <div className="card-image"></div>
                        <div className="category">Hotel</div>
                        <div className="heading">Hotel Villamaria
                        </div>
                        <p className="card-text">Descripción del cliente Hotel Villamaria.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clientes;
