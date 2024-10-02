import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const VentasUpdate = () => {
  const { register, handleSubmit } = useForm();
  const [discos, setDiscos] = useState(null);

  const onSubmit = data => {
    try {
      Object.keys(data).forEach(key => {
        if ((data[key] === null) | (data[key] === '')) {
          delete data[key];
        }
      });
      let url = new URL('http://localhost:4000/ventas');
      url = url + '/' + data.numeroFactura;
      axios.put(url, data).then(response => {window.location.reload(false);}).catch(error => {
        alert('No se puede actualizar la venta con id: ' + data.numeroFactura);
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
      <h1>Actualizar Venta</h1>
      <hr />
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Numero de Factura:</label>
              <input
                type="number"
                className="form-control"
                {...register('numeroFactura')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha de venta:</label>
              <input
                type="date"
                className="form-control"
                {...register('fechaVenta')}
              />
            </div>
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

export default VentasUpdate;