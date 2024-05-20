const express = require('express');
const router = express.Router();

const pay = require('../controllers/payment.controller');

router.get('/', pay.getPayment);
router.post('/', pay.createPayment);
router.delete('/:id', pay.deletePayment);

module.exports = router;