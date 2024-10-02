const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');
const Venta = sequelize.define(
  'Venta',
  {
    numeroFactura: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fechaVenta: { type: DataTypes.DATE },
    nombreCliente: { type: DataTypes.STRING },
    apellidoCliente: { type: DataTypes.STRING },
    discoFK: { type: DataTypes.INTEGER, allowNull: false },
    cantidad: { type: DataTypes.INTEGER },
  },
  {
    sequelize,
    modelName: 'venta',
    tableName: 'ventas',
    timestamps: false,
  },
);
// la fk quedo comentada porque trae conflicto al momento de levantar el servidor
// Venta.belongsTo(require('./Disco'), { foreignKey: 'discoFK', targetKey: 'id'});
module.exports = Venta;
