const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Transactions = sequelize.define('Transactions', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
  code: { type: DataTypes.STRING(10), allowNull: false, },
  date: { type: DataTypes.DATEONLY, allowNull: false, },
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false, },
  tax: { type: DataTypes.DECIMAL(10, 2), allowNull: false, },
  total_amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false, },
}, {
  tableName: 'transactions', // set the table name exactly as it is in database
  timestamps: false, 
});

module.exports = Transactions;
