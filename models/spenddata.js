const { DataTypes } = require('sequelize');

const sequelize = require('../config/db'); 
const Users = require('./users'); 

// Define the SpendData model
const SpendData = sequelize.define('SpendData', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
  category: { type: DataTypes.STRING(100), allowNull: false, },
  amount_spent: { type: DataTypes.DECIMAL(10, 2), allowNull: false, },
  user_id: { type: DataTypes.INTEGER, allowNull: false,
    references: {
      model: Users,
      key: 'id',
    },
  },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, },
}, {
  tableName: 'spenddata', 
  timestamps: false, 
});

module.exports = SpendData;
