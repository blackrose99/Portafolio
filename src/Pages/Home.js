import React, { useState, useEffect } from "react";
import "./Home.css";
import HabilidadesTecnicas from "../Components/HabilidadesTecnicas";
import HabilidadesBlandas from "../Components/HabilidadesBlandas";
import Servicios from "../Components/Services";
import Clientes from "../Components/Clientes";

const LandingPage = () => {
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    const title = "¡Bienvenido a mi portafolio!";
    const interval = setInterval(() => {
      setTypedTitle(prevTitle =>
        prevTitle.length === title.length ? prevTitle : title.substring(0, prevTitle.length + 1)
      );
    }, 100); // Velocidad de escritura: 100ms

    return () => clearInterval(interval);
  }, []); // Se ejecuta solo una vez, después de montar el componente

  return (
    <div className=" mt-5">
      <div className="mb-3 text-center">
        <h1 className="bienvenida_titulo">{typedTitle}</h1>
        <p className="p-3">¡Hola y bienvenido! Estás a punto de conocerme y saber más sobre mi trabajo. Soy Luis Manuel Castaño Grueso, y este es mi portafolio de presentación. Un lugar donde la creatividad y la excelencia se fusionan para crear experiencias memorables. Cada proyecto es una oportunidad para desafiar los límites, superar expectativas y dejar una impresión duradera. Aquí, cada línea de código y cada diseño están imbuidos con pasión y dedicación, con el objetivo final de ofrecer soluciones que no solo satisfagan, sino que también sorprendan y deleiten a nuestros clientes. ¡Explora y descubre cómo podemos convertir tus ideas en realidad!</p>
      </div>
      <div className="m-3">
        <HabilidadesTecnicas />
      </div>
      <div className="mt-5 mb-5">
        <HabilidadesBlandas />
      </div>
      <div className="">
        <Servicios />
      </div>
      <div className="mt-5 mb-5">
        <Clientes/>
      </div>
    </div>
  );
};

export default LandingPage;
