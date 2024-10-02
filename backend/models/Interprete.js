const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');

const Interprete = sequelize.define('Interprete', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}
,
    {
        sequelize,
        modelName: 'interprete',
        tableName: 'interpretes',
        timestamps: false,
    });

module.exports = Interprete;