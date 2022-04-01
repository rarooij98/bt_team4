const express = require('express');
const router = express.Router();
const matches = require('../controllers/matches');

router.get('/', matches.filteren );

module.exports = router;