const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const pwd = require('../middleware/password');

router.post('/signup', pwd, require('../controllers/user/signup'));
router.post('/signin', require('../controllers/user/signin'));
router.get('/:id', auth, require('../controllers/user/getOne'));
router.get('/', auth, require('../controllers/user/getAll'));
router.delete('/:id', auth, require('../controllers/user/delete'));

module.exports = router;
