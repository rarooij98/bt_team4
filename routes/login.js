const express = require('express');
const router = express.Router();
const reglog = require('../controllers/reglog');

router.get('/', reglog.loginForm);
router.post('/', reglog.login);
router.post('/', reglog.uitloggen);

module.exports = router;
