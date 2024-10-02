import React from 'react';
import SellosFilter from './components/SellosFilter';
import SellosCreate from './components/SellosCreate';
import SellosUpdate from './components/SellosUpdate';
function Sellos() {
  return (
    <div className="container">
      <h1>Sellos</h1>
      <hr />
      <SellosFilter />
      <hr />
      <SellosCreate />
      <hr />
      <SellosUpdate />
    </div>
  );
}

export default Sellos;
