const request = require('supertest');
const app = require('../app');

describe('Interprete API', () => {
  it('debería obtener todos los interpretes', async () => {
    const response = (await request(app).get('/Interprete'));
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  }); 

  it('debería obtener un interprete por su ID', async () => {
    const response = await request(app).get('/Interprete/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('debería crear un nuevo interprete', async () => {
    const interpreteData = { nombre: 'Gustavo', apellido: 'Cerati' };
    const response = await request(app)
      .post('/Interprete')
      .send(interpreteData);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('debería actualizar un interprete existente', async () => {
    const interpreteData = { nombre: 'Jane', apellido: 'Doe' };
    const response = await request(app)
      .put('/Interprete/1')
      .send(interpreteData);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.nombre).toBe('Jane');
  });

  it('debería eliminar un interprete', async () => {
    const response = await request(app).delete('/Interprete/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
  });
});
