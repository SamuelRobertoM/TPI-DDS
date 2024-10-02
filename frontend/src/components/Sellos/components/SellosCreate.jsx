import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const SellosCreate = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    try {
      data.fechaCreacion = new Date();
      const url = new URL('http://localhost:4000/Sello');
      axios
        .post(url, data)
        .then(response => {
          alert('Sello Creado con id: ' + response.data.id);
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
      <h1>Crear Sello</h1>
      <hr />
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                type="text"
                className="form-control"
                {...register('email')}
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

export default SellosCreate;