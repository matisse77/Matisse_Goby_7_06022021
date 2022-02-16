//const Comment = require('../../models/Comment');

module.exports = (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ message: 'Problème de requête !' });
  }

  const comment = new Comment({
    userId: autho.userId(req),
    articleId: req.body.articleId,
    content: req.body.content,
    image: req.file
      ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      : null,
  });

  comment
    .save()
    .then(() => res.status(201).json({ message: 'Commentaire créé !' }))
    .catch((error) => res.status(400).json({ error }));
};
