const { DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Page = sequelize.define('Page', {
 id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
 name: { type: DataTypes.STRING, allowNull: false, unique: true },
 is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
 created_at: { type: DataTypes.DATE, allowNull: false,  defaultValue: DataTypes.NOW, },
 updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW, onUpdate: DataTypes.NOW, },

}, {
    tableName:'pages', 
    timestamps: false ,
});

module.exports = Page;
