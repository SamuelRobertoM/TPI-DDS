const request = require('supertest');
const app = require('../app');
describe('Venta API', () => {
  it('debería obtener todas las ventas', async () => {
    const response = await request(app).get('/ventas');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
  it('debería obtener una venta por su ID', async () => {
    const response = await request(app).get('/ventas/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('numeroFactura');
  });
  it('debería crear una nueva venta', async () => {
    const ventaData = {
      numeroFactura: 999,
      fechaVenta: '2021-10-10',
      nombreCliente: 'Juan',
      apellidoCliente: 'Perez',
      discoFK: 1,
      cantidad: 1,
    };
    const response = await request(app).post('/ventas').send(ventaData);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('numeroFactura');
  });
  it('debería actualizar una venta existente', async () => {
    const ventaData = {
      numeroFactura: 1,
      fechaVenta: '2021-10-10',
      nombreCliente: 'Juan',
      apellidoCliente: 'Perez',
      discoFK: 1,
      cantidad: 1,
    };
    const response = await request(app).put('/ventas/1').send(ventaData);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('numeroFactura');
    expect(response.body.cantidad).toBe(1);
  });
  it('debería eliminar una venta', async () => {
    const response = await request(app).delete('/ventas/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('numeroFactura');
  });
});
