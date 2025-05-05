const express = require('express');
const { getAllTransactions, getAllSalesData , getSpendData, getSalesSummary} = require('../controllers/dashboardController');
const { authenticateUser } = require('../middleware/authMiddleware');


const router = express.Router();



router.get('/transactions', authenticateUser, getAllTransactions);

router.get('/get_sales_data', authenticateUser, getAllSalesData);


router.get('/get_spend_data', authenticateUser, getSpendData);

router.get('/get_sales_summary', authenticateUser, getSalesSummary);


module.exports = router;