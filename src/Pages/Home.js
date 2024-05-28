import React, { useState, useEffect } from "react";
import "./Home.css";
import HabilidadesTecnicas from "../Components/HabilidadesTecnicas";
import Servicios from "../Components/Services";
import Clientes from "../Components/Clientes";

const LandingPage = () => {
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    const title = "¡Bienvenido!";
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
      </div>
      <div className="">
        <Servicios />
      </div>
      <div className="m-3">
        <HabilidadesTecnicas />
      </div>
 

      <div className="mt-5 mb-5">
        <Clientes/>
      </div>
    </div>
  );
};

export default LandingPage;
