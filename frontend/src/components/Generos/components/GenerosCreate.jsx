import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const GenerosCreate = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    try {
      data.fechaCreacion = new Date();
      const url = new URL('http://localhost:4000/genero');
      axios
        .post(url, data)
        .then(response => {
          alert('Genero creado con ID: ' + response.data.id);
          window.location.reload(false);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="container">
      <h1>Crear Genero</h1>
      <hr />
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input
                type="text"
                className="form-control"
                {...register('nombre')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripcion:</label>
              <input
                type="text"
                className="form-control"
                {...register('descripcion')}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenerosCreate;