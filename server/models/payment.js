var mongooseConexion = require('../database');

const paymentSchema = mongooseConexion.Schema({
    amount: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    loanID: {
        type: String,
        required: true
    }
});

const Payment = mongooseConexion.model('payment', paymentSchema);
module.exports = Payment;