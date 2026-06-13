import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { ThemeProvider } from './theme/ThemeContext';
import { I18nProvider } from './i18n/I18nContext';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import { useVisitorTracker } from './hooks/useVisitorTracker';

function VisitorTracker() {
  useVisitorTracker();
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <DataProvider>
          <BrowserRouter>
            <VisitorTracker />
            <Routes>
              <Route path="/"      element={<Home />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
