//const Article = require('../../models/Article');

module.exports = (req, res, next) => {
  const articleObject = req.file
    ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Article.updateOne(
    { _id: req.params.id },
    { ...articleObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: 'Article modifiée !' }))
    .catch((error) => res.status(400).json({ error }));
};
