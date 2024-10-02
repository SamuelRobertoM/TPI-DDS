import React from 'react';
import ActualizarDisco from './ActualizarDisco';
import CrearDisco from './CrearDisco';
import FiltrarDisco from './FiltrarDisco';

function Discos() {
  return (
    <div className="container">
      <h1>Discos</h1>
      <hr />
      <FiltrarDisco />
      <hr />
      <CrearDisco />
      <hr />
      <ActualizarDisco />
    </div>
  );
}

export default Discos;