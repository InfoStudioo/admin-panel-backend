const sale = require('../models/sales');

exports.addSalesData = async (req , res) =>{
    try{
        const { week_number, month_name, year, sales_amount, userId } = req.body;

        if (!week_number || !month_name || !year || !sales_amount || !userId) {

            return res.status(400).json({error: 'All fields are required'});

          }

    // Check for existing entry with the same week, month, and year

    const existingSale = await sale.findOne({

        where:{ week_number, month_name, year}
        
      });
  

      if(existingSale){

        return res.status(409).json({ error: 'Sales data for this week, month and year already exists' });

      }

       // Create a new sale entry
    const newSale = await sale.create({
       week_number,
       month_name,
       year,
       sales_amount
      });

      return res.status(201).json({ message: 'Sales data added successfully', newSale });

    } catch(error){

        console.error(error);
        return res.status(500).json({ error: 'Internal server error'});
    }

    
}

