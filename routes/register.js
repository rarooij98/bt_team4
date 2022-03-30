const express = require('express');
const router = express.Router();
const reglog = require('../controllers/reglog');


router.get('/', reglog.registerForm);
router.post('/', reglog.register);

module.exports = router;