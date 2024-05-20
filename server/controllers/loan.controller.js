const Loan = require('../models/loan');
const loanCtrl = {};

loanCtrl.getLoan = async (req, res) => {
    const loans = await Loan.find();
    return res.json(loans);
}

loanCtrl.createLoan = async function (req, res) {
    const { amount, date, interest, cuotas, customerID } = req.body;

    const newLoan = new Loan({
        amount,
        date,
        interest,
        cuotas,
        customerID
    });

    const savedLoan = await newLoan.save();

    return res.json({ savedLoan });
}

loanCtrl.deleteLoan = async function (req, res) {
    const { id } = req.params;

    await Loan.deleteOne({ _id: id });
    res.json({ status: 'Loan deleted' });
}

module.exports = loanCtrl;