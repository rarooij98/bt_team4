const express = require('express');
const router = express.Router();

const home = require('./home');
const login = require('./login');
const register = require('./register');
const chat = require('./chat');
const chatroom = require('./chatroom');

router.use('/', home);
router.use('/login', login);
router.use('/register', register);
router.use('/chat', chat);
router.use('/chatroom', chatroom);

module.exports = router;
