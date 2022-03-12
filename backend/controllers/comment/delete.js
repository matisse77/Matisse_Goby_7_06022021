const Comment = require('../../models/Comment');

module.exports = (req, res, next) => {
  Comment.findOne({ where: { id: req.params.id } })
    .then(() => {
      Comment.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: 'Commentaire supprimé !' }))
        .catch((error) => res.status(400).json({ error: error.message }));
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};
