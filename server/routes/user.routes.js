const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller');

router.get('/', user.getUser);
router.post('/', user.createUser);
router.put('/:id', user.updateUser);
router.delete('/:id', user.deleteUser);

module.exports = router;