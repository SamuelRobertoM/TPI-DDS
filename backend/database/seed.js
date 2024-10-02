const Interprete = require('../models/Interprete');
const { Sello } = require('../models/Sello');
const Genero = require('../models/Genero');
const { Disco } = require('../models/Disco');
const Venta = require('../models/Ventas');
const sequelize = require('../database/connection');


async function sync() {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log(`Ocurrió un error al sincronizar la Base de Datos: ${error}`);
  }
}

// Carga de Interprete

async function seedInterprete() {
  await Interprete.bulkCreate([
    {
      id: 1,
      fechaNaciomineto: '1959-11-08',
      nombre: 'Gustavo',
      apellido: 'Cerati',
    },
    {
      id: 2,
      fechaNaciomineto: '1951-23-10',
      nombre: 'Charly',
      apellido: 'García',
    },
    {
      id: 3,
      fechaNaciomineto: '1963-13-03',
      nombre: 'Fito',
      apellido: 'Páez',
    },
    {
      id: 4,
      fechaNaciomineto: '1950-23-01',
      nombre: 'Luis Alberto',
      apellido: 'Spinetta',
    },
    {
      id: 5,
      fechaNaciomineto: '1961-22-08',
      nombre: 'Andrés',
      apellido: 'Calamaro',
    },
    {
      id: 6,
      fechaNaciomineto: '1951-20-11',
      nombre: 'León',
      apellido: 'Gieco',
    },
    {
      id: 7,
      fechaNaciomineto: '1958-02-10',
      nombre: 'Zeta',
      apellido: 'Bosio',
    },
    {
      id: 8,
      fechaNaciomineto: '1963-08-03',
      nombre: 'Charly',
      apellido: 'Alberti',
    },
    {
      id: 9,
      fechaNaciomineto: '1949-17-01',
      nombre: 'Carlos',
      apellido: 'Solari',
    },
    {
      id: 10,
      fechaNaciomineto: '1952-25-01',
      nombre: 'Eduardo',
      apellido: 'Beilinson',
    },
  ]);
}

// Carga de Sellos

async function seedSello() {
  await Sello.bulkCreate([
    {
      domicilio: 'Av. San Martín 123, Buenos Aires, Argentina',
      email: 'jperez@example.com',
    },
    {
      domicilio: 'Calle 5 de Mayo 789, Ciudad de México, México',
      email: 'rgil@example.com',
    },
    {
      domicilio: 'Rue de la Paix 456, París, Francia',
      email: 'mrubio@example.com',
    },
    {
      domicilio: '123 Main Street, Nueva York, Estados Unidos',
      email: 'ialvarez@example.com',
    },
    {
      domicilio: 'Carrer de la Rambla 789, Barcelona, España',
      email: 'mgiachino@example.com',
    },
    {
      domicilio: 'Via Roma 321, Roma, Italia',
      email: 'anaperez@gmail.com',
    },
    {
      domicilio: 'Rua da Praia 456, Río de Janeiro, Brasil',
      email: 'pedrogomez@gmail.com',
    },
    {
      domicilio: 'High Street 789, Londres, Reino Unido',
      email: 'andreamartinez@gmail.com',
    },
    {
      domicilio: 'Calle Gran Vía 123, Madrid, España',
      email: 'lucasrojas@gmail.com',
    },
    {
      domicilio: 'Friedrichstraße 456, Berlín, Alemania',
      email: 'camilasanchez@gmail.com',
    },
  ]);
}

async function seedVenta() {
  await Venta.bulkCreate([
    {
      numeroFactura: 1,
      fechaVenta: '2021-01-01',
      nombreCliente: 'Juan',
      apellidoCliente: 'Perez',
      discoFK: 1,
      cantidad: 1,
    },
    {
      numeroFactura: 2,
      fechaVenta: '2021-01-02',
      nombreCliente: 'Ruben',
      apellidoCliente: 'Gil',
      discoFK: 2,
      cantidad: 2,
    },
    {
      numeroFactura: 3,
      fechaVenta: '2021-01-03',
      nombreCliente: 'Manuela',
      apellidoCliente: 'Rubio',
      discoFK: 3,
      cantidad: 3,
    },
    {
      numeroFactura: 4,
      fechaVenta: '2021-01-04',
      nombreCliente: 'Ivan',
      apellidoCliente: 'Alvarez',
      discoFK: 4,
      cantidad: 4,
    },
    {
      numeroFactura: 5,
      fechaVenta: '2021-01-05',
      nombreCliente: 'Maria Estela',
      apellidoCliente: 'Giachino',
      discoFK: 5,
      cantidad: 5,
    },
    {
      numeroFactura: 6,
      fechaVenta: '2021-01-06',
      nombreCliente: 'Juan',
      apellidoCliente: 'Perez',
      discoFK: 6,
      cantidad: 6,
    },
    {
      numeroFactura: 7,
      fechaVenta: '2021-01-07',
      nombreCliente: 'Ruben',
      apellidoCliente: 'Gil',
      discoFK: 7,
      cantidad: 7,
    },
    {
      numeroFactura: 8,
      fechaVenta: '2021-01-08',
      nombreCliente: 'Manuela',
      apellidoCliente: 'Rubio',
      discoFK: 8,
      cantidad: 8,
    },
    {
      numeroFactura: 9,
      fechaVenta: '2021-01-09',
      nombreCliente: 'Ivan',
      apellidoCliente: 'Alvarez',
      discoFK: 9,
      cantidad: 9,
    },
    {
      numeroFactura: 10,
      fechaVenta: '2021-01-10',
      nombreCliente: 'Maria Estela',
      apellidoCliente: 'Giachino',
      discoFK: 10,
      cantidad: 10,
    },
  ]);
}

// Carga de Genero

async function seedGenero() {
  await Genero.bulkCreate([
    {
      nombre: 'Clásico',
      descripcion: 'Música clásica',
    },
    {
      nombre: 'Jazz',
      descripcion: 'Música Jazz',
    },
    {
      nombre: 'Pop',
      descripcion: 'Música Pop',
    },
    {
      nombre: 'Blues',
      descripcion: 'Música Blues',
    },
    {
      nombre: 'Rock',
      descripcion: 'Música de Rock',
    },
    {
      nombre: 'Latino',
      descripcion: 'Música Latina',
    },
    {
      nombre: 'Country',
      descripcion: 'Música Country',
    },
    {
      nombre: 'Folclore',
      descripcion: 'Música del Folclore Argentino',
    },
    {
      nombre: 'Disco',
      descripcion: 'Música Disco',
    },
    {
      nombre: 'Techno',
      descripcion: 'Música Techno',
    },
  ]);
}

// Carga de Disco

async function seedDiscos() {
  await Disco.bulkCreate([
    {
      id: 1,
      fechaCreacion: '01-01-1984',
      nombre: 'Soda Stereo',
      genero_id: 1,
      precio: 100,
      interprete_id: 1,
      sello_id: 1
    },
    {
      id: 2,
      fechaCreacion: '01-01-1985',
      nombre: 'Nada Personal',
      genero_id: 4,
      precio: 75,
      interprete_id: 3,
      sello_id: 2
    },
    {
      id: 3,
      fechaCreacion: '01-01-1986',
      nombre: 'Signos',
      genero_id: 1,
      precio: 250,
      interprete_id: 4,
      sello_id: 3
    },
    {
      id: 4,
      fechaCreacion: '01-01-1988',
      nombre: 'Doble Vida',
      genero_id: 4,
      precio: 150,
      interprete_id: 7,
      sello_id: 4
    },
    {
      id: 5,
      fechaCreacion: '01-01-1990',
      nombre: 'Canción Animal',
      genero_id: 8,
      precio: 200,
      interprete_id: 8,
      sello_id: 5
    },
    {
      id: 6,
      fechaCreacion: '01-01-1992',
      nombre: 'Dynamo',
      genero_id: 3,
      precio: 100,
      interprete_id: 9,
      sello_id: 6
    },
    {
      id: 7,
      fechaCreacion: '01-01-1995',
      nombre: 'Sueño Stereo',
      genero_id: 8,
      precio: 350,
      interprete_id: 10,
      sello_id: 7
    },
    {
      id: 8,
      fechaCreacion: '01-01-1997',
      nombre: 'Bocanada',
      genero_id: 9,
      precio: 300,
      interprete_id: 2,
      sello_id: 8
    },
    {
      id: 9,
      fechaCreacion: '01-01-1999',
      nombre: 'Abre',
      genero_id: 5,
      precio: 200,
      interprete_id: 5,
      sello_id: 9
    },
    {
      id: 10,
      fechaCreacion: '01-01-1999',
      nombre: 'El amor después del amor',
      genero_id: 7,
      precio: 350,
      interprete_id: 6,
      sello_id: 10
    },
  ]);
}

async function run() {
  await sync();
  await seedInterprete();
  await seedSello();
  await seedGenero();
  await seedDiscos();
  await seedVenta();
  console.log('Se ha inicializado la Base de Datos con datos');
}

run();
