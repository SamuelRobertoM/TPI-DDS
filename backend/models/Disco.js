const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');
const Interprete = require('./Interprete.js');
const Genero = require('./Genero.js');
const Sello = require('./Sello.js');

const Disco = sequelize.define(
  'Disco',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    // genero es FK 
    genero_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // interprete es FK
    interprete_id:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sello_id:{
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
    {
    sequelize,
    modelName: 'disco',
    tableName: 'discos',
    timestamps: false,
  }
  );
  // Interprete y Genero son tablas relacionadas por fk
  // las fk quedo comentada porque trae conflicto al momento de levantar el servidor

  // Disco.belongsTo(Interprete, { foreignKey: 'interprete_id', targetKey: 'id'});
  // Disco.belongsTo(Sello, { foreignKey: 'sello_id', targetKey: 'id' });

  // Disco.belongsTo(Genero, { foreignKey: 'genero_id', targetKey: 'id'});

  
  module.exports = {
    Disco,
    sequelize,
  };