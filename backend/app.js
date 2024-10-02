const express = require('express');
const bodyParser = require('body-parser');
const interpreteService = require('./services/InterpreteService');
const SelloService = require('./services/SelloService');
const generoService = require('./services/GeneroService');
const DiscoService = require('./services/DiscoService');
const VentasService = require('./services/VentasService');
const cors = require('cors');
require('sequelize');
const app = express();

app.use(cors());
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 4000;

// Configuración de body-parser para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta GET para obtener todos los intérpretes
app.get('/Interprete', async (req, res) => {
  try {
    const interpretes = await interpreteService.getInterpretes(req);
    res.json(interpretes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta GET para obtener un intérprete por su ID
app.get('/Interprete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const interprete = await interpreteService.getInterpreteById(id);
    res.json(interprete);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta POST para crear un nuevo intérprete
app.post('/Interprete', async (req, res) => {
  const interpreteData = req.body;
  try {
    const interprete = await interpreteService.createInterprete(interpreteData);
    res.status(201).json(interprete);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta PUT para actualizar un intérprete existente
app.put('/Interprete/:id', async (req, res) => {
  const { id } = req.params;
  const interpreteData = req.body;
  try {
    const interprete = await interpreteService.updateInterprete(
      id,
      interpreteData,
    );
    res.json(interprete);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta DELETE para eliminar un intérprete
app.delete('/Interprete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const interprete = await interpreteService.deleteInterprete(id);
    res.json(interprete);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

///////////////////// GÉNEROS

// Ruta GET para obtener todos los géneros
app.get('/genero', async (req, res) => {
  try {
    const generos = await generoService.getGeneros(req);
    res.json(generos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta GET para obtener un género por su ID
app.get('/genero/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const genero = await generoService.getGeneroById(id);
    res.json(genero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta POST para crear un nuevo género
app.post('/genero', async (req, res) => {
  const generoData = req.body;
  try {
    const genero = await generoService.createGenero(generoData);
    res.status(201).json(genero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta PUT para actualizar un género existente
app.put('/genero/:id', async (req, res) => {
  const { id } = req.params;
  const generoData = req.body;
  try {
    const genero = await generoService.updateGenero(id, generoData);
    res.json(genero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta DELETE para eliminar un género
app.delete('/genero/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const genero = await generoService.deleteGenero(id);
    res.json(genero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// -----------------      Funcionalidades sello    -----------------
/* 
app.get('/Sello', async (req, res) => {
  try {
    const sellos = await SelloService.getSello();
    res.json(sellos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
*/

// Ruta GET para obtener un sello por su ID
app.get('/Sello/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const sello = await SelloService.getSelloById(id);
    res.json(sello);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/Sello', async (req, res) => {
  try {
    const sello = await SelloService.getSello(req);
    res.json(sello.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta POST para crear un nuevo sello
app.post('/Sello', async (req, res) => {
  const selloData = req.body;
  try {
    const sello = await SelloService.createSello(selloData);
    res.status(201).json(sello);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta PUT para actualizar un sello existente
app.put('/Sello/:id', async (req, res) => {
  const { id } = req.params;
  const selloData = req.body;
  try {
    const sello = await SelloService.updateSello(id, selloData);
    res.json(sello);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta DELETE para eliminar un sello
app.delete('/Sello/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const sello = await SelloService.deleteSello(id);
    res.json(sello);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// -- RUTAS DISCOS --

// Ruta GET para obtener todos los discos
app.get('/Disco', async (req, res) => {
  try {
    const discos = await DiscoService.getDiscos(req);
    res.json(discos.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  RUTA GET para obtener un disco por su ID

app.get('/Disco/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const disco = await DiscoService.getDiscoById(id);
    res.json(disco);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta POST para crear un nuevo disco
app.post('/Disco', async (req, res) => {
  const discoData = req.body;
  try {
    const disco = await DiscoService.createDisco(discoData);
    res.status(201).json(disco);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta PUT para actualizar un disco existente

app.put('/Disco/:id', async (req, res) => {
  const { id } = req.params;
  const discoData = req.body;
  try {
    const disco = await DiscoService.updateDisco(id, discoData);
    res.json(disco);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta DELETE para eliminar un disco
app.delete('/Disco/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const disco = await DiscoService.deleteDisco(id);
    res.json(disco);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Ruta GET para obtener todas las ventas
app.get('/ventas', async (req, res) => {
  try {
    const ventas = await VentasService.obtenerVentas(req);
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/ventas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const venta = await VentasService.ventasPorId(id);
    res.json(venta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/ventas', async (req, res) => {
  const ventaData = req.body;
  try {
    const venta = await VentasService.createVenta(ventaData);
    res.status(201).json(venta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/ventas/:id', async (req, res) => {
  const { id } = req.params;
  const ventaActualizada = req.body;
  try {
    const venta = await VentasService.actualizarVenta(id, ventaActualizada);
    res.json(venta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/ventas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const venta = await VentasService.deleteVenta(id);
    res.json(venta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

async function main() {
  try {
    app.listen(PORT, () =>
      console.log(`Servidor escuchando en http://localhost:${PORT}`),
    );
  } catch (error) {
    console.log(`Ha ocurrido un error: ${error}`);
  }
}

main();

module.exports = app;