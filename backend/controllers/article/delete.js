//const Article = require('../../models/Article');
const fs = require('fs');

module.exports = (req, res, next) => {
  Article.findOne({ _id: req.params.id })
    .then((article) => {
      const filename = article.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Sauce.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Article supprimé !' }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};
