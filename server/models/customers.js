var mongooseConexion = require('../database');

const customersSchema = mongooseConexion.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    }
});

const Customers = mongooseConexion.model('customer', customersSchema);
module.exports = Customers;