const express = require('express');
const router = express.Router();

const loans = require('../controllers/loan.controller');

router.get('/', loans.getLoan);
router.post('/', loans.createLoan);
router.delete('/:id', loans.deleteLoan);

module.exports = router;