const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 


const UserPasswords = sequelize.define('UserPasswords', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true,},
  setting_id: {type: DataTypes.INTEGER, allowNull: false,
 references: {
      model: 'settings', // Table name the foreign key refers to
      key: 'id',
    },
    
  },
  password_hash: {  type: DataTypes.STRING(255),  allowNull: false, },
  created_at: {  type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW, },
  updated_at: {  type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW, onUpdate: DataTypes.NOW, },
}, {
  tableName: 'user_passwords', 
  timestamps: false, 
});

module.exports = UserPasswords;
