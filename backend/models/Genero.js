const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');

const Genero = sequelize.define('Genero', {

  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  fechaCreacion: { 
    type: DataTypes.DATE, 
    allowNull: false, 
    defaultValue: DataTypes.NOW 
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  sequelize,
  modelName: 'genero',
  tableName: 'generos',
  timestamps: false,
});

module.exports = Genero;