import axios from 'axios';

const VentasListado = ({ ventas }) => {
  const borrarClick = async function (id) {
    const url = new URL('http://localhost:4000/ventas');
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
            <th>Numero Factura</th>
            <th>Nombre Cliente</th>
            <th>Apellido Cliente</th>
            <th>Cantidad</th>
            <th>Disco FK</th>
            <th>FechaVenta</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map(item => (
            <tr key={item.numeroFactura}>
              <td>{item.numeroFactura}</td>
              <td>{item.nombreCliente}</td>
              <td>{item.apellidoCliente}</td>
              <td>{item.cantidad}</td>
              <td>{item.discoFK}</td>
              <td>
                {new Date(item.fechaVenta).toLocaleDateString('en-us', {
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
                    borrarClick(item.numeroFactura);
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

export default VentasListado;