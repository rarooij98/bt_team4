const express = require('express');
const router = express.Router();
const reglog = require('../controllers/reglog');

router.get('/', reglog.error);

module.exports = router;