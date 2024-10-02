const Genero = require('../models/Genero');
const { Op } = require('sequelize');

async function getGeneros(req) {
  try {
    let where = {};
    if (req.query.nombre != undefined && req.query.nombre !== '') {
      where.nombre = {
        [Op.like]: '%' + req.query.nombre + '%',
      };
    }
    const generos = await Genero.findAll({where});
    return generos;
  } catch (error) {
    throw new Error('Error al obtener los géneros');
  }
}

async function getGeneroById(id) {
  try {
    const genero = await Genero.findByPk(id);
    if (!genero) {
      throw new Error('Género no encontrado');
    }
    return genero;
  } catch (error) {
    throw new Error('Error al obtener el género por el Id');
  }
}

async function createGenero(generoData) {
  try {
    const genero = await Genero.create(generoData);
    return genero;
  } catch (error) {
    throw new Error('Error al crear el género');
  }
}

async function updateGenero(id, generoData) {
  try {
    const genero = await Genero.findByPk(id);
    if (!genero) {
      throw new Error('Género no encontrado');
    }
    await genero.update(generoData);
    return genero;
  } catch (error) {
    throw new Error('Error al actualizar el género');
  }
}

async function deleteGenero(id) {
  try {
    const genero = await Genero.findByPk(id);
    if (!genero) {
      throw new Error('Género no encontrado');
    }
    await genero.destroy();
    return genero;
  } catch (error) {
    throw new Error('Error al eliminar el género');
  }
}

module.exports = {
  getGeneros,
  getGeneroById,
  createGenero,
  updateGenero,
  deleteGenero,
};
