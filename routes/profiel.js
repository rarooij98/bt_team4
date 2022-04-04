const express = require('express');
const router = express.Router();
const profiel = require('../controllers/profiel');

router.get('/', profiel.profiel );

module.exports = router;