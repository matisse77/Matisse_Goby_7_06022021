const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');
const Article = sequelize.define('Article', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: { type: DataTypes.TEXT, allowNull: false },
  picture: { type: DataTypes.STRING, defaultValue: null },
  likeNumber: { type: DataTypes.INTEGER, defaultValue: null },
});

User.hasMany(Article);
Article.belongsTo(User);

module.exports = Article;
