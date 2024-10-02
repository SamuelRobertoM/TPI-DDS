import axios from 'axios';

const ListadoDiscos = ({ discos }) => {
  const borrarClick = async function (id) {
    const url = new URL('http://localhost:4000/Disco');
    try {
      await axios
        .delete(url + '/' + id)
        .then(() => {
          alert('Venta Borrada con id: ' + id);
          window.location.reload(false);
        })
        .catch(error => {
          alert('No se puede borrar la venta con id: ' + id);
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
            <th>id</th>
            <th>nombre</th>
            <th>precio</th>
            <th>fechaCreacion</th>
          </tr>
        </thead>
        <tbody>
        {discos.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
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

export default ListadoDiscos;