const express = require('express');
const router = express.Router();
const update = require('../controllers/update');

router.get('/', update.update );

module.exports = router;