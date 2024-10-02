import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import GenerosListado from './GenerosListado';

const GenerosFilter = () => {
  const { register, handleSubmit } = useForm();
  const [generos, setGenero] = useState(null);

  const onSubmit = async params => {
    try {
      const response = await axios.get('http://localhost:4000/Genero', {
        params: params,
      });
      setGenero(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    onSubmit();
  }, []);

  return (
    <div className="container">
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input type="text" className="form-control" {...register('nombre')} />
            </div>
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
        </div>
      </div>
      {generos && <GenerosListado generos={generos} />}
    </div>
  );
};

export default GenerosFilter;