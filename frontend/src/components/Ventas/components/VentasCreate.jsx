import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const VentasCreate = () => {
  const { register, handleSubmit } = useForm();
  const [discos, setDiscos] = useState(null);
  const onSubmit = data => {
    try {
      data.fechaVenta = new Date();
      const url = new URL('http://localhost:4000/ventas');
      axios
        .post(url, data)
        .then(response => {
          alert('Venta Creada con id: ' + response.data.numeroFactura);
          window.location.reload(false);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const getDiscos = async () => {
    try {
      const url = new URL('http://localhost:4000/Disco');
      const response = await axios.get(url);
      setDiscos(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDiscos();
  }, []);

  return (
    <div className="container">
      <h1>Crear Venta</h1>
      <hr />
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Nombre de Cliente:</label>
              <input
                type="text"
                className="form-control"
                {...register('nombreCliente')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellido de Cliente:</label>
              <input
                type="text"
                className="form-control"
                {...register('apellidoCliente')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Cantidad:</label>
              <input
                type="number"
                className="form-control"
                {...register('cantidad')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="discoFK">
                Disco:
              </label>
              <input
                {...register('discoFK')}
                list="discos"
                id="discoFK"
                name="discoFK"
                className="form-control"
              ></input>
              <datalist id="discos">
                {discos?.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.nombre}
                  </option>
                ))}
              </datalist>
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

export default VentasCreate;