const express = require('express');
const router = express.Router();
const chat = require('../controllers/chat');

router.get('/', chat.chat);

module.exports = router;