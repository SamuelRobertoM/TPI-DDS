import React from "react";

function Inicio() {
  return (
    <div className="container mb-4">
      <div
        className="mt-4 p-5 rounded"
        style={{ backgroundColor: "lightgray" }}
      >
        <h1>Ejercicio Integrador</h1>
        <p>Trabajo práctico - Segunda entrega | 3K5 - Grupo 1</p>
        <ul>
          <li>Teodoro Reyna</li>
          <li>Ignacio Ledesma</li>
          <li>Roberto Maciel</li>
          <li>Gonzalo Piazza</li>
          <li>Facundo Oppido</li>
        </ul>
        <hr />
        <h3>Diagrama de Entidad Relación (DER):</h3>
        <img src={process.env.PUBLIC_URL+'/der.png'} alt="NO SE PUEDE MOSTRAR" />
        
      </div>
    </div>
  );
}

export { Inicio };