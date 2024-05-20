import React from 'react';
import './Servicios.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faFileAlt, faRobot, faDesktop, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

// Iconos correspondientes para cada servicio
const icons = {
    web: faGlobe,
    landing: faFileAlt,
    rpa: faRobot,
    app: faDesktop,
    mobile: faMobileAlt,
};

const Servicios = () => {
    return (
        <div className="container servicios">
            <h2 className="text-center mb-4">OFREZCO SERVICIOS EN..</h2>
            <div className="row">
                <div className="col-md-3 col-lg-3">
                    <div className="servicio-card">
                        <div className="content">
                            <div className="front">
                                <div className="img">
                                    <div className="circle"></div>
                                    <div className="circle" id="right"></div>
                                    <div className="circle" id="bottom"></div>
                                </div>
                                <div className="front-content">
                                    <small className="badge">Web</small>
                                    <div className="description">
                                        <div className="title">
                                            <p><strong>Desarrollo de Páginas Web</strong></p>
                                            <FontAwesomeIcon icon={icons.web} className="icon" />
                                        </div>
                                        <p className="servicio-footer">Servicio de desarrollo de páginas web</p>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="back-content">
                                    <FontAwesomeIcon icon={icons.web} className="back-icon" />
                                    <strong>Desarrollo de Páginas Web</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-3 col-lg-3">
                    <div className="servicio-card">
                        <div className="content">
                            <div className="front">
                                <div className="img">
                                    <div className="circle"></div>
                                    <div className="circle" id="right"></div>
                                    <div className="circle" id="bottom"></div>
                                </div>
                                <div className="front-content">
                                    <small className="badge">RPA</small>
                                    <div className="description">
                                        <div className="title">
                                            <p><strong>RPA con Rocketchat</strong></p>
                                            <FontAwesomeIcon icon={icons.rpa} className="icon" />
                                        </div>
                                        <p className="card-footer">Servicio de RPA con Rocketchat para automatización de procesos</p>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="back-content">
                                    <FontAwesomeIcon icon={icons.rpa} className="back-icon" />
                                    <strong>RPA con Rocketchat</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-lg-3">
                    <div className="servicio-card">
                        <div className="content">
                            <div className="front">
                                <div className="img">
                                    <div className="circle"></div>
                                    <div className="circle" id="right"></div>
                                    <div className="circle" id="bottom"></div>
                                </div>
                                <div className="front-content">
                                    <small className="badge">App</small>
                                    <div className="description">
                                        <div className="title">
                                            <p><strong>Desarrollo de Aplicativos Web</strong></p>
                                            <FontAwesomeIcon icon={icons.app} className="icon" />
                                        </div>
                                        <p className="card-footer">Servicio de desarrollo de aplicativos web</p>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="back-content">
                                    <FontAwesomeIcon icon={icons.app} className="back-icon" />
                                    <strong>Desarrollo de Aplicativos Web</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-lg-3">
                    <div className="servicio-card">
                        <div className="content">
                            <div className="front">
                                <div className="img">
                                    <div className="circle"></div>
                                    <div className="circle" id="right"></div>
                                    <div className="circle" id="bottom"></div>
                                </div>
                                <div className="front-content">
                                    <small className="badge">Móvil</small>
                                    <div className="description">
                                        <div className="title">
                                            <p><strong>Desarrollo Móvil</strong></p>
                                            <FontAwesomeIcon icon={icons.mobile} className="icon" />
                                        </div>
                                        <p className="card-footer">Servicio de desarrollo móvil</p>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="back-content">
                                    <FontAwesomeIcon icon={icons.mobile} className="back-icon" />
                                    <strong>Desarrollo Móvil</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Servicios;
