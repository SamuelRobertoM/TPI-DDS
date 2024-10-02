const Sello = require('../models/Sello');
const { Op, ValidationError } = require("sequelize");



async function getSello(req) {
  try {
    let where = {};
    if (req.query.email != undefined && req.query.email !== "") {
      where.email = {
        [Op.like]: "%" + req.query.email + "%",
      };
    }

    let items = await Sello.Sello.findAndCountAll({
      attributes: [
        "id",
        "domicilio",
        "email",
        "fechaCreacion",
      ],
      order: [["email", "ASC"]],
      where,
    });
    return items
  } catch (error) {
    throw new Error('Error al obtener los sellos');
  }
}

async function getSelloById(id) {
  try {
    const sello = await Sello.Sello.findByPk(id);
    if (!sello) {
      throw new Error('Sello no encontrado');
    }
    return sello;
  } catch (error) {
    throw new Error('Error al obtener el sello por ID');
  }
}

async function createSello(SelloACrear) {
  try {
    const sello = await Sello.Sello.create(SelloACrear);
    return sello;
  } catch (error) {
    throw new Error('Error al crear el sello');
  }
}

async function updateSello(id, selloData) {
  try {
    const sello = await Sello.Sello.findByPk(id);
    if (!sello) {
      throw new Error('Sello no encontrado');
    }
    await sello.update(selloData);
    return sello;
  } catch (error) {
    throw new Error('Error al actualizar el sello');
  }
}

async function deleteSello(id) {
  try {
    const sello = await Sello.Sello.findByPk(id);
    if (!sello) {
      throw new Error('Sello no encontrado');
    }
    await sello.destroy();
    return sello;
  } catch (error) {
    throw new Error('Error al eliminar el sello');
  }
}

module.exports = {
    getSello,
    getSelloById,
    createSello,
    updateSello,
    deleteSello,
};
