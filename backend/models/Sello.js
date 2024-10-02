const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');

const Sello = sequelize.define(
    'Sello',
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        domicilio: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        fechaCreacion: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
    },
    {
        sequelize,
        modelName: 'sello',
        tableName: 'sellos',
        timestamps: false,
    }
);

module.exports = {
    sequelize,
    Sello,
};
