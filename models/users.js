const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Users = sequelize.define('Users', {
  id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
  username: { type: DataTypes.STRING(100), allowNull: false, },
  email: { type: DataTypes.STRING(100), allowNull: false, unique: true,},
  password: {  type: DataTypes.STRING(255),  allowNull: false, },
  role: { type: DataTypes.ENUM('admin', 'editor', 'viewer'),  defaultValue: 'viewer', },
  created_at: { type: DataTypes.DATE, allowNull: false,  defaultValue: DataTypes.NOW, },
  updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW, onUpdate: DataTypes.NOW, },
},
{
  tableName: 'users',
  timestamps: false,

}
);

module.exports = Users;


