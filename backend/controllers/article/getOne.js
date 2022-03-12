const Article = require('../../models/Article');

module.exports = (req, res, next) => {
  const id = req.params.id;
  Article.findOne({ where: { id: id } })
    .then((articles) => {
      res.status(200).json(articles);
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
      });
    });
};
