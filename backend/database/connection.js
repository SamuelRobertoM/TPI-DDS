const { Sequelize } = require('sequelize')
const path = require('path');
const dbPath = process.env.DB || path.resolve("","./.data/discografica.sqlite");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: dbPath,
    logging: false
});

async function connect() {
  try {
    await sequelize.authenticate()
    console.log('Base de Datos: ✔')
  } catch (error) {
    console.log(`Base de Datos: ❌. Error: ${error}`)
  }
}

connect()

module.exports = sequelize