import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import { useVisitorTracker } from './hooks/useVisitorTracker';

function VisitorTracker() {
  useVisitorTracker();
  return null;
}

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <VisitorTracker />
        <Routes>
          <Route path="/"      element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
