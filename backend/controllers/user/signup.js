// Allow encryption of the password with the .hash() method
const bcrypt = require('bcrypt');
const User = require('../../models/User');

module.exports = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
