import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const SellosUpdate = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    try {
      Object.keys(data).forEach(key => {
        if ((data[key] === null) | (data[key] === '')) {
          delete data[key];
        }
      });
      console.log(data);
      let url = new URL('http://localhost:4000/Sello');
      url = url + '/' + data.id;
      axios.put(url, data).then(() => {window.location.reload(false);}).catch(error => {
        alert('No se puede actualizar el sello con id: ' + data.id);
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Actualizar Sello</h1>
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
              <label className="form-label">Domicilio:</label>
              <input
                type="text"
                className="form-control"
                {...register('domicilio')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                {...register('email')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha Creacion:</label>
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

export default SellosUpdate;