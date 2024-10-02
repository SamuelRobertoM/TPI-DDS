const request = require('supertest');
const app = require('../app');

describe('Disco API', () => {
    it('debería obtener todos los discos', async () => {
        const response = (await request(app).get('/disco'));
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    }); 
    
    it('debería obtener un disco por su ID', async () => {
        const response = await request(app).get('/disco/1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
    });
    
    it('debería crear un nuevo disco', async () => {
        const discoData = { nombre: 'Gustavo', precio: 1244, id:123, sello_id: 1, genero_id: 1, interprete_id: 1, fechaCreacion: "2002-09-11" };
        const response = await request(app)
        .post('/disco')
        .send(discoData);
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
    });
    
    it('debería actualizar un disco existente', async () => {
        const discoData = { nombre: 'Jane', precio: 1244 };
        const response = await request(app)
        .put('/disco/4')
        .send(discoData);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.nombre).toBe('Jane');
    });
    
    it('debería eliminar un disco', async () => {
        const response = await request(app).delete('/Disco/123');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
    });
    }
);