import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Admin from './Pages/Admin';
import { useVisitorTracker } from './hooks/useVisitorTracker';

function AppInner({ sidebarOpen, setSidebarOpen }) {
  useVisitorTracker();
  return (
    <div className="app-shell">
      <Header open={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />
      <main className={`app-content${sidebarOpen ? ' sidebar-open' : ''}`}>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/admin"    element={<Admin />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <AppInner sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
