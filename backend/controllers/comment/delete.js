//const Comment = require('../../models/Comment');

module.exports = (req, res, next) => {
  Comment.findOne({ where: { id_comment: req.params.id } })
    .then(() => {
      Comment.destroy({ where: { id_comment: req.params.id } })
        .then(() => res.status(200).json({ message: 'Commentaire supprimé !' }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
