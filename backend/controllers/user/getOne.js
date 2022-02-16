const User = require('../../models/User');

module.exports = (req, res, next) => {
  const _id = req.params._id;
  User.findOne({ where: { id: _id } })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
