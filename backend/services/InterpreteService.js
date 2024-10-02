const Interprete = require('../models/Interprete');
const { Op } = require('sequelize');

async function getInterpretes(req) {
  try {
    let where = {};
    if (req.query.nombre != undefined && req.query.nombre !== '') {
      where.nombre = {
        [Op.like]: '%' + req.query.nombre + '%',
      };
    }
    const interpretes = await Interprete.findAll({where});
    return interpretes;
  } catch (error) {
    throw new Error('Error al obtener los intérpretes');
  }
}

async function getInterpreteById(id) {
  try {
    const interprete = await Interprete.findByPk(id);
    if (!interprete) {
      throw new Error('Intérprete no encontrado');
    }
    return interprete;
  } catch (error) {
    throw new Error('Error al obtener el intérprete por ID');
  }
}

async function createInterprete(interpreteData) {
  try {
    const interprete = await Interprete.create(interpreteData);
    return interprete;
  } catch (error) {
    throw new Error('Error al crear el intérprete');
  }
}

async function updateInterprete(id, interpreteData) {
  try {
    const interprete = await Interprete.findByPk(id);
    if (!interprete) {
      throw new Error('Intérprete no encontrado');
    }
    await interprete.update(interpreteData);
    return interprete;
  } catch (error) {
    throw new Error('Error al actualizar el intérprete');
  }
}

async function deleteInterprete(id) {
  try {
    const interprete = await Interprete.findByPk(id);
    if (!interprete) {
      throw new Error('Intérprete no encontrado');
    }
    await interprete.destroy();
    return interprete;
  } catch (error) {
    throw new Error('Error al eliminar el intérprete');
  }
}

module.exports = {
  getInterpretes,
  getInterpreteById,
  createInterprete,
  updateInterprete,
  deleteInterprete
};
