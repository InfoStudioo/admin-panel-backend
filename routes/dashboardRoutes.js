const express = require('express');
const { getAllTransactions, getAllSalesData , getSpendData} = require('../controllers/dashboardController');
const { authenticateUser } = require('../middleware/authMiddleware');


const router = express.Router();



router.get('/transactions', authenticateUser, getAllTransactions);

router.get('/get_sales_data', authenticateUser, getAllSalesData);


router.get('/get_spend_data', authenticateUser, getSpendData);


module.exports = router;