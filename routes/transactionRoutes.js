const express = require('express');
const { addTransaction } = require('../controllers/transactionsController');
const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add_transaction', authenticateUser, addTransaction );

module.exports = router;