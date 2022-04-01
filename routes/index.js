const express = require('express');
const router = express.Router();

const home = require('./home');
const login = require('./login');
const register = require('./register');
const error = require('./error')

router.use('/', home);
router.use('/login', login);
router.use('/register', register);
router.use('/error', error);

module.exports = router;
