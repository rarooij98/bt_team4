const express = require('express');
const router = express.Router();
const error = require('../controllers/reglog');

router.get('/', error.error);

module.exports = router;