const express = require('express');
const router = express.Router();

const custom = require('../controllers/customers.controller');

router.get('/', custom.getCustomers);
router.post('/', custom.createCustomers);
router.delete('/:id', custom.deleteCustomers);

module.exports = router;