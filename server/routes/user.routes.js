const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller');

router.get('/', user.getUser);
router.post('/', user.createUser);
router.delete('/:id', user.deleteUser);

module.exports = router;