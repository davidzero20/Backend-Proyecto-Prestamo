const Customers = require('../models/customers');
const customersCtrl = {};

customersCtrl.getCustomers = async (req, res) => {
    const customers = await Customers.find();

    return res.json(customers);
}

customersCtrl.createCustomers =  async function  (req, res) {
    const { name, address, email, phone, userID } = req.body;

    const newCustomers = new Customers({
        name,
        address,
        email,
        phone,
        userID
    });

    const savedCustomers = await newCustomers.save();

    return res.json({savedCustomers});
}

customersCtrl.updateCustomers = async function(req, res) {
    const { id } = req.params;
    const { name, address, email, phone, userID } = req.body;

    await Customers.updateOne({ _id: id }, {
        name,
        address,
        email,
        phone,
        userID
    });

    res.json({status: 'Customer updated'});
}

customersCtrl.deleteCustomers = async function(req, res) {
    const { id } = req.params;

    console.log(id);

    await Customers.deleteOne({ _id: id });

    res.json({status: 'Customer deleted'});
}


module.exports = customersCtrl;