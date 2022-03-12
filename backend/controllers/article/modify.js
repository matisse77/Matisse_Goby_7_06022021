const Article = require('../../models/Article');

module.exports = (req, res, next) => {
  console.log(req, res);
  const articleObject = req.file
    ? {
        ...JSON.parse(req.body.article),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Article.update({ ...articleObject }, { where: { id: req.params.id } })
    .then(() => res.status(200).json({ message: 'Article modifiée !' }))
    .catch((error) => res.status(400).json({ error: error.message }));
};
