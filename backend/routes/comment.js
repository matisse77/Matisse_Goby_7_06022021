const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, require('../controllers/comment/create'));
router.get('/:id', auth, require('../controllers/comment/modify'));
router.delete('/:id', auth, require('../controllers/comment/delete'));

module.exports = router;
