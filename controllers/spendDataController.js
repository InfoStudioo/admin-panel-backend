const SpendData = require('../models/spenddata');
const { Op } = require('sequelize');
// Add new SpendData
exports.addSpendData = async (req, res) => {

    const { category, amount_spent, userId } = req.body;

    const user_id = userId; // Used for DB and to align with your model
    

     // 1. Validate required fields
     const missingFields = [];
  if (!category) missingFields.push('category');
  if (!amount_spent) missingFields.push('amount_spent');
  if (!user_id) missingFields.push('user_id');

  if (missingFields.length > 0) {
   return res.status(400).json({
    message: `Missing required field(s): ${missingFields.join(', ')}`,
   });

  }
   try{

    // 2. Define time window to avoid duplicate (5 seconds ago)

    const fiveSecondsAgo = new Date(Date.now() - 5000);



    // 3. Check for duplicate
     const existing = await SpendData.findOne({
        where: {
            category, 
            amount_spent,
            user_id,
            created_at : {
                [Op.gt]: fiveSecondsAgo,
            },
        },
     });

     if(existing){
        return res.status(409).json({
            message: 'Duplicate entry detected. Please wait a moment before submitting request again.'
        });
     }

     // No duplicate found, create the entry
     const spendData = await SpendData.create({
        category,
        amount_spent,
        user_id
     });

     res.status(201).json({
        message: 'SpendData added successfully',
        spendData
       
      });


   }catch (error) {
    console.error('Error adding SpendData:', error);

    res.status(500).json({
        message: 'Failed to add SpendData' , error
    });

      
  }


};