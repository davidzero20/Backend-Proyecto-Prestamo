const Payment = require('../models/payment');
const paymentCtrl = {};

paymentCtrl.getPayment = async (req, res) => {
    const payments = await Payment.find();
    return res.json(payments);
}

paymentCtrl.createPayment = async function (req, res) {
    const { amount, date, loanID } = req.body;

    const newPayment = new Payment({
        amount,
        date,
        loanID
    });

    const savedPayment = await newPayment.save();
    return res.json({ savedPayment });
}

paymentCtrl.deletePayment = async function (req, res) {
    const { id } = req.params;

    await Payment.deleteOne({ _id: id });
    res.json({status: 'Payment deleted'});
}

module.exports = paymentCtrl;

