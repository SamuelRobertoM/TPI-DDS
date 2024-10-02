import axios from 'axios';

const InterpreteListado = ({ Interpretes }) => {
  const borrarClick = async function (id) {
    const url = new URL('http://localhost:4000/Interprete');
    try {
      await axios
        .delete(url + '/' + id)
        .then(() => {
          alert('Interprete Borrado con id: ' + id);
          window.location.reload(false);
        })
        .catch(error => {
          alert('No se puede borrar el interprete con id: ' + id);
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
            <th>Fecha de nacimiento</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {Interpretes.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {new Date(item.fechaNacimiento).toLocaleDateString('en-us', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </td>
              <td>{item.nombre}</td>
              <td>{item.apellido}</td>
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

export default InterpreteListado;