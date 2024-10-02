const request = require('supertest');
const app = require('../app');

describe('Genero API', () => {
  it('debería obtener todos los géneros', async () => {
    const response = await request(app).get('/generos');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('debería obtener un género por su Id', async () => {
    const response = await request(app).get('/genero/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('debería crear un nuevo género', async () => {
    const generoData = { nombre: 'Rock && Pop', descripcion: 'Mezcla de Rock y Pop' };
    const response = await request(app)
      .post('/genero')
      .send(generoData);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('debería actualizar un género existente', async () => {
    const generoData = { nombre: 'Rock_&&_Pop', descripcion: 'Mezcla de Rock and Pop' };
    const response = await request(app)
      .put('/genero/11')
      .send(generoData);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.nombre).toBe('Rock_&&_Pop');
  });

  it('debería eliminar un género', async () => {
    const response = await request(app).delete('/genero/11');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
  });
});
