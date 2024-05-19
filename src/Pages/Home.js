import React, { useState, useEffect } from "react";
import "./Home.css";
import HabilidadesTecnicas from "../Components/HabilidadesTecnicas";
import HabilidadesBlandas from "../Components/HabilidadesBlandas";
import Servicios from "../Components/Services";
import Clientes from "../Components/Clientes";

const LandingPage = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const text = "¡Hola y bienvenido! Estás a punto de conocerme y saber más sobre mi trabajo. Soy Luis Manuel Castaño Grueso, y este es mi portafolio de presentación, un lugar donde la creatividad y la excelencia se fusionan para crear experiencias memorables.";
    setTimeout(() => {
      setTypedText(text);
    }, 1000); // Retraso de 1 segundo antes de iniciar la animación
  }, []); // Se ejecuta solo una vez, después de montar el componente

  return (
    <div className=" mt-5">
      <div className="mb-3 text-center">
        <h1 className="bienvenida_titulo">¡Bienvenido a mi portafolio!</h1>
        <p id="typed-text">{typedText}</p>
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
