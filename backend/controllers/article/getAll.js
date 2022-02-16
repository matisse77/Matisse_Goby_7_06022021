//const Article = require('../../models/Article');

module.exports = (req, res, next) => {
  Article.find()
    .then((articles) => res.status(200).json(articles))
    .catch((error) => res.status(400).json({ error }));
};
