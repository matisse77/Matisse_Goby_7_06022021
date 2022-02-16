const User = require('../../models/User');

module.exports = (req, res, next) => {
  const _id = req.params._id;
  User.findOne({ where: { id: _id } })
    .then((users) => {
      users.destroy();
      res.status(200).json({ message: 'Utilisateur supprimé !' });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
