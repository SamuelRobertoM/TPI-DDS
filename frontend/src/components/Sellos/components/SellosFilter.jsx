import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SellosListado from './SellosListado';

const SellosFilter = () => {
  const { register, handleSubmit } = useForm();
  const [sellos, setSellos] = useState(null);

  const onSubmit = async params => {
    try {
      const response = await axios.get('http://localhost:4000/Sello', {
        params: params,
      });
      setSellos(Array.isArray(response.data) ? response.data : [response.data]);
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
              <label className="form-label">Email:</label>
              <input type="text" className="form-control" {...register('email')} />
            </div>
            <button type="submit" className="btn btn-primary">
              Buscar
            </button>
          </form>
        </div>
      </div>
      {sellos && <SellosListado sellos={sellos} />}
    </div>
  );
};

export default SellosFilter;