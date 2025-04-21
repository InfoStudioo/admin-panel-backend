const Transactions = require('../models/transactions');
const Sales = require('../models/sales');
const SpendData = require('../models/spenddata');
const { Op } = require('sequelize');

exports.getAllTransactions = async(req , res) => {
    try {

  const {userId } = req.body;
       
        const transactions = await Transactions.findAll();

        res.json(transactions);


      } catch (error) {
        res.status(500).json({error: 'Database query failed'});

      }
}



exports.getAllSalesData = async(req, res) =>{

  try{
    const {userId } =req.body;

    const sales = await Sales.findAll();

    res.json(sales);


  }catch(error){
    res.status(500).json({error: 'Database query failed'});
  }
}


exports.getSpendData = async (req, res) => {
  const {filter, userId} = req.query;

  // Validate userId
if (!userId || isNaN(parseInt(userId, 10))) {
  return res.status(400).json({ message: 'Missing or invalid userId' });
}

//  Validate if filter is provided
if (!filter) {
  return res.status(400).json({ message: 'Missing required parameter: filter' });
}


let whereClause = {};

const now = new Date();

try{

  if (filter === 'month') {
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    whereClause.created_at = { [Op.gte]: startOfMonth };

  }else if (filter === '3months') {

    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    whereClause.created_at = { [Op.gte]: threeMonthsAgo};

  } else if (filter === 'all') {

    whereClause.created_at = { [Op.lte]: now };

  }else{
    return res.status(400).json({
      message: "Invalid filter value. Use 'month', '3months', or 'all' "
    });

  }

  const spendDataList = await SpendData.findAll({
    where: whereClause,
    order: [['created_at', 'DESC']],
  
  });

  res.status(200).json({
    message: 'Spend data retrieved successfully',
    data: spendDataList,
    
  });

} catch(error){
  console.error('Error fetching SpendData:', error);
  res.status(500).json({ message: 'Failed to retrieve SpendData', error });
}


};