//const Article = require('../../models/Article');

module.exports = (req, res, next) => {
  const article = {
    content: req.body.content,
    user_id: req.body.user_id,
  };
  if (req.file) {
    article.image = `${req.protocol}://${req.get('host')}/images/${
      req.file.filename
    }`;
  }
  Article.create(article)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
};
