//const Article = require('../../models/Article');

module.exports = (req, res, next) => {
  const id = req.params.id;
  Article.findOne(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json({ err }));
};
