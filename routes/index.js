const express = require('express');
const router = express.Router();

const home = require('./home');
const login = require('./login');
const register = require('./register');

router.use('/', home);
router.use('/login', login);
router.use('/register', register);

module.exports = router;
