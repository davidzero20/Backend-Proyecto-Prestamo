let mongooseConexion = require('mongoose');

mongooseConexion.connect('mongodb+srv://davidzero2009:0501david@clusterprestamo.j0o1zcm.mongodb.net/PrestamoFacil', { useNewUrlParser: true }).then(() => {
    console.log('Conectado a la base de datos');
}).catch((err) => {
    console.log(err);
});

module.exports = mongooseConexion;