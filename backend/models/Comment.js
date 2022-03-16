const { DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');
const Comment = sequelize.define(
  'Comment',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    commentText: { type: DataTypes.TEXT, allowNull: false },
    likeNumbers: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: 'Comment',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);
User.hasMany(Comment);
Comment.belongsTo(User);

module.exports = Comment;
