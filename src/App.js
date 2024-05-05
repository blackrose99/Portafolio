import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";

//LLamado de Componentes 
import Home from "./Pages/Home";


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <div className=''>
        <Routes>
        <Route path="/" element={<Home/>} />      
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
