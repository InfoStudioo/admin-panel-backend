// Import Sequelize
const { DataTypes } = require('sequelize');

const sequelize = require('../config/db'); 
const Users = require('./users'); // Import the Users model

// Define the Settings model
const Settings = sequelize.define('Settings', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
  user_id: { type: DataTypes.INTEGER, allowNull: false,
    references: {
      model: Users, key: 'id',
    },
   
  },
  dark_mode: { type: DataTypes.BOOLEAN, defaultValue: false, },
  email_notifications: { type: DataTypes.BOOLEAN,  defaultValue: true, },
}, {
  tableName: 'settings', 
  timestamps: false, 
});

module.exports = Settings;
