import React from 'react';
import InterpreteCreate from './components/InterpreteCreate';
import InterpreteUpdate from './components/InterpreteUpdate';
import InterpreteFilter from './components/InterpreteFilter';

function Interpretes() {
  return (
    <div className="container">
      <h1>Interprete</h1>
      <hr />
      <InterpreteFilter />
      <hr />
      <InterpreteCreate />
      <hr />
      <InterpreteUpdate />
    </div>
  );
}

export default Interpretes;