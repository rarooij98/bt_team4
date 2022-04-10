const express = require('express');
const router = express.Router();

const home = require('./home');
const login = require('./login');
const register = require('./register');
const error = require('./error');
const chat = require('./chat');
const chatroom = require('./chatroom');
const profiel = require('./profiel');
const about = require('./about');
const update = require('./update');
const form = require('./form');
const matches = require('./matches');

router.use('/', home);
router.use('/login', login);
router.use('/register', register);
router.use('/error', error);
router.use('/chat', chat);
router.use('/chatroom', chatroom);
router.use('/profiel', profiel);
router.use('/about', about);
router.use('/update', update);
router.use('/form', form);
router.use('/matches', matches);
router.use('*', error);


module.exports = router;