import React from 'react';
import GenerosFilter from './components/GenerosFilter';
import GenerosCreate from './components/GenerosCreate';
import GenerosUpdate from './components/GenerosUpdate';

function Generos() {
  return (
    <div className="container">
      <h1>Generos</h1>
      <hr />
      <GenerosFilter />
      <hr />
      <GenerosCreate />
      <hr />
      <GenerosUpdate />
    </div>
  );
}

export default Generos;