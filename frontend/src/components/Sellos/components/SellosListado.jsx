import axios from 'axios';

const SellosListado = ({ sellos }) => {
  const borrarClick = async function (id) {
    const url = new URL('http://localhost:4000/Sello');
    try {
      await axios
        .delete(url + '/' + id)
        .then(() => {
          alert('Sello Borrado con id: ' + id);
          window.location.reload(false);
        })
        .catch(error => {
          alert('No se puede borrar el Sello con id: ' + id);
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
            <th>Domicilio</th>
            <th>Email</th>
            <th>Fecha Creacion</th>
          </tr>
        </thead>
        <tbody>
          {sellos.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.domicilio}</td>
              <td>{item.email}</td>
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

export default SellosListado;
