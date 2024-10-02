import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const GenerosUpdate = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    try {
      Object.keys(data).forEach(key => {
        if ((data[key] === null) | (data[key] === '')) {
          delete data[key];
        }
      });
      let url = new URL('http://localhost:4000/Genero');
      url = url + '/' + data.id;
      axios.put(url, data).then(() => {window.location.reload(false);}).catch(error => {
        alert('No se puede actualizar el genero con ID: ' + data.id);
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Actualizar Genero</h1>
      <hr />
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Id:</label>
              <input
                type="number"
                className="form-control"
                {...register('id')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input
                type="text"
                className="form-control"
                {...register('nombre')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción:</label>
              <input
                type="text"
                className="form-control"
                {...register('descripcion')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha Creación:</label>
              <input
                type="date"
                className="form-control"
                {...register('fechaCreacion')}
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

export default GenerosUpdate;