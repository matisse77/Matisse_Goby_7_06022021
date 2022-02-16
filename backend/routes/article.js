const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, require('../controllers/article/create'));
router.get('/:id', auth, require('../controllers/article/getOne'));
router.get('/', auth, require('../controllers/article/getAll'));
router.put('/:id', auth, multer, require('../controllers/article/modify'));
router.delete('/:id', auth, require('../controllers/article/delete'));

module.exports = router;
