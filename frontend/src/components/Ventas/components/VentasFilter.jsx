import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import VentasListado from './VentasListado';

const VentasFilter = () => {
  const { register, handleSubmit } = useForm();
  const [ventas, setVentas] = useState(null);

  const onSubmit = async params => {
    try {
      const response = await axios.get('http://localhost:4000/ventas', {
        params: params,
      });
      setVentas(Array.isArray(response.data) ? response.data : [response.data]);
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
              <label className="form-label">Nombre del cliente:</label>
              <input type="text" className="form-control" {...register('nombreCliente')} />
            </div>
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
        </div>
      </div>
      {ventas && <VentasListado ventas={ventas} />}
    </div>
  );
};

export default VentasFilter;