const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/signup', require('../controllers/user/signup'));
router.post('/login', require('../controllers/user/signin'));
router.get('/:_id', auth, require('../controllers/user/getOne'));
router.get('/', auth, require('../controllers/user/getAll'));
router.delete('/:_id', auth, require('../controllers/user/delete'));

module.exports = router;
