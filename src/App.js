import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importa tus componentes
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer'; 
import About from './Pages/About';
import Contact from "./Pages/Contact";
import Projecs from "./Pages/Projects";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <div className=''>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projecs />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
