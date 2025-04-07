const express = require('express');
const { addSalesData } = require('../controllers/salesController');
const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

// Add Sales Data Route
router.post('/add_sales_data', authenticateUser, addSalesData);

module.exports = router;
