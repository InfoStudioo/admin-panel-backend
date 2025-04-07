// Import Sequelize
const { DataTypes } = require('sequelize');

const sequelize = require('../config/db'); // Update the path as per your project structure

// Define the Sales model
const Sale = sequelize.define('Sale', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
  week_number: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1,  max: 4,}, },
  month_name: {   type: DataTypes.STRING(50),  allowNull: false, },
  year: { type: DataTypes.INTEGER, allowNull: false,},
  sales_amount: {type: DataTypes.DECIMAL(10, 2), allowNull: false, },
}, {
  tableName: 'sales',
   timestamps: false, // Disable createdAt and updatedAt fields
});

module.exports = Sale;
