import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ListadoDiscos from './ListadoDisco';

const FiltrarDisco = () => {
  const { register, handleSubmit } = useForm();
  const [discos, setDiscos] = useState(null);

  const onSubmit = async params => {
    try {
      const response = await axios.get('http://localhost:4000/Disco', {
        params: params,
      });
      setDiscos(Array.isArray(response.data) ? response.data : [response.data]);
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
      {discos && <ListadoDiscos discos={discos} />}
    </div>
  );
};

export default FiltrarDisco;