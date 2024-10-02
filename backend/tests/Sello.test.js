const request = require('supertest');
const app = require('../app');

describe('Sello API', () => {
  it('debería obtener todos los sellos', async () => {
    const response = await request(app).get('/Sello');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('debería obtener un sello por su ID', async () => {
    const response = await request(app).get('/Sello/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('debería crear un nuevo sello', async () => {
    const selloData = { domicilio: 'Julio A. Roca 345, Córdoba, Argentina', email: 'facuoppi@hotmail.com' };
    const response = await request(app)
      .post('/Sello')
      .send(selloData);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
  
  it('debería actualizar un sello existente', async () => {
    const selloData = { domicilio: 'Via Roma 321, Roma, Italia', email: 'anaperez@gmail.com' };
    const response = await request(app)
      .put('/Sello/1')
      .send(selloData);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.email).toBe('anaperez@gmail.com');
  });

  it('debería eliminar un sello', async () => {
    const response = await request(app).delete('/Sello/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
  });
});