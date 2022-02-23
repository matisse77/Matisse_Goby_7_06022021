const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const database = require('./database');
const articleRoutes = require('./routes/article');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');
const app = express();
// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// Conversion en JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Gestion des images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
//app.use('/article', articleRoutes);
app.use('/user', userRoutes);
//app.use('/comment', commentRoutes);

module.exports = app;
