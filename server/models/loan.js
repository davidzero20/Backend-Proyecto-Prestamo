var mongooseConexion = require('../database');

const loanSchema = mongooseConexion.Schema({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    interest: {
        type: Number,
        required: true
    },
    cuotas: {
        type: Number,
        required: true
    },
    customerID: {
        type: String,
        required: true
    }
});

const Loans = mongooseConexion.model('loan', loanSchema);
module.exports = Loans;