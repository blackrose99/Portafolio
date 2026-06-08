import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <div className="app-shell">
          <Header open={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />
          <main className={`app-content${sidebarOpen ? ' sidebar-open' : ''}`}>
            <Routes>
              <Route path="/"         element={<Home />} />
              <Route path="/about"    element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact"  element={<Contact />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
