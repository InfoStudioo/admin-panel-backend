const Transactions = require("../models/transactions");

// Function to calculate tax based on country
const calculateTax = (amount, country) =>{
    const taxRates = { 
        USA: 0.07,
        UK: 0.20,
        IN: 0.18,
        CA: 0.13, 
        AU: 0.10,
        DE: 0.19,
        FR: 0.20
     };

     const taxRate = taxRates[country] || 0.10; // Default 10%
     const tax = parseFloat((amount * taxRate).toFixed(2));
     const totalAmount = parseFloat((amount + tax).toFixed(2));
   
     return { tax, totalAmount };

}

// Add a new transaction
exports.addTransaction  = async (req , res) => {
    try{
      
        const { userId, code, date, amount, country } = req.body;

        if (!userId || !code || !date || !amount || !country) {
            return res.status(400).json({ error: 'All fields are required' });
          }

          if (isNaN(amount) || amount <= 0) {
            return res.status(400).json({error: 'Amount must be a positive number'});
          }  

          const { tax, totalAmount } = calculateTax(amount, country);

          const transaction = await Transactions.create({ code, date, amount, tax, total_amount: totalAmount });


         res.status(201).json({ message: 'Transaction added successfully', id: transaction.id });

    } catch(error){

      res.status(500).json({ error: 'Database insert failed' });
    }
}
