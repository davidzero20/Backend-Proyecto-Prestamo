var mongooseConexion = require('../database');

const userSchema = mongooseConexion.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongooseConexion.model('user', userSchema);
module.exports = User;