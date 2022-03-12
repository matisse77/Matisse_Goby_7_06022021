const Article = require('../../models/Article');
const fs = require('fs');

module.exports = (req, res, next) => {
  Article.findOne({ _id: req.params.id })
    .then((article) => {
      if (article.picture) {
        const filename = article.picture.split('/images/')[1];
        fs.unlink(`images/${filename}`);
      }
    })
    .then(() => {
      Article.destroy({ where: { id: req.params.id }, force: true })
        .then(() => res.status(200).json({ message: 'Article supprimé !' }))
        .catch((error) => res.status(400).json({ error: error.message }));
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};
