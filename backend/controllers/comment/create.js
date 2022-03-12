const Comment = require('../../models/Comment');

module.exports = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    return res.status(400).json({ message: 'Problème de requête !' });
  }

  const comment = {
    userId: req.body.user_id,
    articleId: req.body.articleId,
    commentText: req.body.content,
    image: req.file
      ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      : null,
  };
  Comment.create(comment)
    .then(() => res.status(201).json({ message: 'Commentaire créé !' }))
    .catch((error) => res.status(400).json({ error: error.message }));
};
