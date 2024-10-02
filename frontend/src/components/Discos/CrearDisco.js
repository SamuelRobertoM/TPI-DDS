import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const CrearDisco = () => {
  const { register, handleSubmit } = useForm();
  const [sellos, setSellos] = useState(null);
  const [generos, setGeneros] = useState(null);
  const [interpretes, setInterpretes] = useState(null);

  const onSubmit = data => {
    try {
      data.fechaVenta = new Date();
      const url = new URL('http://localhost:4000/Disco');
      axios
        .post(url, data)
        .then(response => {
          alert('Disco Creada con id: ' + response.data.id);
          window.location.reload(false);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getInterpretes = async () => {
    try {
      const url = new URL('http://localhost:4000/Interprete');
      const response = await axios.get(url);
      setInterpretes(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getGeneros = async () => {
    try {
      const url = new URL('http://localhost:4000/Genero');
      const response = await axios.get(url);
      setGeneros(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getSellos = async () => {
    try {
      const url = new URL('http://localhost:4000/Sello');
      const response = await axios.get(url);
      setSellos(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSellos();
    getGeneros();
    getInterpretes();
  }, []);
  
  return (
    <div className="container">
      <h1>Crear Disco</h1>
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
              <label className="form-label">Precio:</label>
              <input
                type="text"
                className="form-control"
                {...register('precio')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha de Creacion:</label>
              <input
                type="date"
                className="form-control"
                {...register('fechaCreacion')}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="discoFK">
                Interpretes:
              </label>
              <input
                {...register('interpreteFK')}
                list="interprete"
                id="interpreteFK"
                name="interpreteFK"
                className="form-control"
              ></input>
              <datalist id="interprete">
                {interpretes?.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.nombre}
                  </option>
                ))}
              </datalist>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="discoFK">
                Generos:
              </label>
              <input
                {...register('generosFK')}
                list="generos"
                id="generosFK"
                name="generosFK"
                className="form-control"
              ></input>
              <datalist id="generos">
                {generos?.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.nombre}
                  </option>
                ))}
              </datalist>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="discoFK">
                Sello:
              </label>
              <input
                {...register('selloFK')}
                list="sellos"
                id="selloFK"
                name="selloFK"
                className="form-control"
              ></input>
              <datalist id="sellos">
                {sellos?.map(item => (
                  <option value={item.id} key={item.id}>
                    {item.email}
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

export default CrearDisco;