const Disco = require('../models/Disco');
const { Op } = require('sequelize');

// implementar los metodos get, getById, post, put y delete
// para la entidad Disco

async function getDiscos(req) {
    try {
        let where = {};
        if (req.query.nombre != undefined && req.query.nombre !== "") {
        where.nombre = {
            [Op.like]: "%" + req.query.nombre + "%",
        };
        }
        let items = await Disco.Disco.findAndCountAll({
        attributes: [
            "id",
            "fechaCreacion",
            "nombre",
            "precio",
        ],
        order: [["id", "ASC"]],
        where,
        });
        return items;
    } catch (error) {
        throw new Error('Error al obtener los discos');
    }
    }

async function getDiscoById(id) {
    try {
        const disco = await Disco.Disco.findByPk(id);
        if (!disco) {
            throw new Error('Disco no encontrado');
        }
        return disco;
    } catch (error) {
        throw new Error('Error al obtener el disco por ID');
    }
    }

async function createDisco(discoData) {
    try {
        const disco = await Disco.Disco.create(discoData);
        return disco;
    } catch (error) {
        throw new Error('Error al crear el disco');
    }
    }

async function updateDisco(id, discoData) {
    try {
        const disco = await Disco.Disco.findByPk(id);
        if (!disco) {
            throw new Error('Disco no encontrado');
        }
        await disco.update(discoData);
        return disco;
    } catch (error) {
        throw new Error('Error al actualizar el disco');
    }
    }

async function deleteDisco(id) {
    try {
        const disco = await Disco.Disco.findByPk(id);
        if (!disco) {
            throw new Error('Disco no encontrado');
        }
        await disco.destroy();
        return disco;
    } catch (error) {
        throw new Error('Error al eliminar el disco');
    }
    }
// traer un disco por su nombre con like

module.exports = {
    getDiscos,
    getDiscoById,
    createDisco,
    updateDisco,
    deleteDisco,
}
