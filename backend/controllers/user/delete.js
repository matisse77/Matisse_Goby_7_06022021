const User = require('../../models/User');

module.exports = (req, res, next) => {
  const id = req.params.id;
  User.findOne({ where: { id: id } })
    .then((users) => {
      users.destroy();
      res.status(200).json({ message: 'Utilisateur supprimé !' });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
      });
    });
};
