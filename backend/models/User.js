const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    profilePicture: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'ROLE_USER',
    },
    disabledAt: { type: DataTypes.DATE },
  },
  {
    timestamps: true,
    // tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

User.sync();

module.exports = User;
