const Transactions = require('../models/transactions');
const Sales = require('../models/sales');

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

