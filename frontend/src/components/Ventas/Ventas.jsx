import React from 'react';
import VentasFilter from './components/VentasFilter';
import VentasCreate from './components/VentasCreate';
import VentasUpdate from './components/VentasUpdate';
function Ventas() {
  return (
    <div className="container">
      <h1>Ventas</h1>
      <hr />
      <VentasFilter />
      <hr />
      <VentasCreate />
      <hr />
      <VentasUpdate />
    </div>
  );
}

export default Ventas;
