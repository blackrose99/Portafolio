import React, { useState } from 'react';
import { getVisitCount, resetVisitCount } from '../hooks/useVisitorTracker';
import './Admin.css';

function Admin() {
  const [count, setCount] = useState(getVisitCount);

  function handleReset() {
    resetVisitCount();
    setCount(0);
  }

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h1 className="admin-title">Panel de Visitas</h1>
        <div className="admin-stat">
          <span className="admin-stat-label">Visitas totales</span>
          <span className="admin-stat-number">{count}</span>
        </div>
        <p className="admin-note">
          Conteo almacenado en localStorage del navegador. Cada sesión única suma una visita.
        </p>
        <button className="admin-reset-btn" onClick={handleReset}>
          Reiniciar contador
        </button>
      </div>
    </div>
  );
}

export default Admin;
