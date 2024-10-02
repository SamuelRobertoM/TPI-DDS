/* get, getById, post, put y delete.*/
const Ventas = require('../models/Ventas');
const { Op } = require('sequelize');

async function obtenerVentas(req) {
  try {
    let params = { order: [['numeroFactura', 'DESC']] };
    let where = {};
    if (req.query.nombreCliente != undefined && req.query.nombreCliente !== '') {
      where.nombreCliente = {
        [Op.like]: '%' + req.query.nombreCliente + '%',
      };
    }
    const ventas = await Ventas.findAll({where, params});
    return ventas;
  } catch (error) {
    throw new Error('Error al obtener los intérpretes');
  }
}

const ventasPorId = async id => {
  try {
    const venta = await Ventas.findByPk(id);
    if (!venta) {
      return { numeroFactura: 'No existe venta con ese id :c' };
    }
    return venta;
  } catch (error) {
    throw new Error(error.message);
  }
};
const createVenta = async ventaNueva => {
  try {
    const venta = await Ventas.create(ventaNueva);
    return venta;
  } catch (error) {
    throw new Error(error.message);
  }
};
const actualizarVenta = async (id, ventaActualizada) => {
  try {
    const venta = await ventasPorId(id);
    if (!venta) {
      throw new Error('No existe venta con ese id');
    }
    if (ventaActualizada == undefined) {
      throw new Error('Los datos de actualiazación no pueden ser undefined');
    }
    await venta.update(ventaActualizada);
    return venta;
  } catch (error) {
    throw new Error(error.message);
  }
};
const deleteVenta = async id => {
  try {
    const venta = await ventasPorId(id);
    if (!venta) {
      throw new Error('No existe venta con ese id');
    }
    await venta.destroy();
    return venta;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  obtenerVentas,
  ventasPorId,
  createVenta,
  deleteVenta,
  actualizarVenta,
};
