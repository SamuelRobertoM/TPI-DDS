import axios from 'axios';

const GenerosListado = ({ generos }) => {
  const borrarClick = async function (id) {
    const url = new URL('http://localhost:4000/Genero');
    try {
      await axios
        .delete(url + '/' + id)
        .then(() => {
          alert('Genero borrado con ID: ' + id);
          window.location.reload(false);
        })
        .catch(error => {
          alert('No se puede borrar el genero con ID: ' + id);
        });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="container mt-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha Creacion</th>
          </tr>
        </thead>
        <tbody>
          {generos.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.descripcion}</td>
              <td>
                {new Date(item.fechaCreacion).toLocaleDateString('en-us', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </td>
              <td>
                <button
                  value="Borrar"
                  onClick={() => {
                    borrarClick(item.id);
                  }}
                >
                  🗑 Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenerosListado;