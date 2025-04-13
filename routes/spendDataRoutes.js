const express = require('express');
const { addSpendData } = require('../controllers/spendDataController');

const {authenticateUser } = require('../middleware/authMiddleware');
const router =  express.Router();

router.post('/add_spend_data', authenticateUser, addSpendData);

module.exports = router;



