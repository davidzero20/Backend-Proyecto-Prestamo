const User = require('../models/user');
const userCtrl = {};

userCtrl.getUser = async (req, res) => {
    const users = await User.find();
    return res.json(users);
}

userCtrl.createUser = async function (req, res) {
    const { id, username, password } = req.body;

    const newUser = new User({
        id,
        username,
        password
    })

    const savedUser = await newUser.save();
    return res.json(savedUser);
}

userCtrl.deleteUser = async function (req, res) {
    const { id } = req.params;

    await User.deleteOne({ _id: id });
    res.json({ status: 'User deleted' });
}

module.exports = userCtrl;