const Comment = require('../../models/Comment');

module.exports = (req, res, next) => {
  try {
    Comment.update(req.body.content, { where: { id: req.params.id } })
      .then(() => {
        let updatedComment = { ...req.body };
        res.status(201).json(updatedComment);
      })
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch {
    (error) => res.status(500).json({ error: error.message });
  }
};
