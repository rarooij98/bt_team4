const express = require('express');
const router = express.Router();
const profiel = require('../controllers/profiel');
const reglog = require('../controllers/reglog');

router.get('/', profiel.profiel );
router.post('/uitloggen', reglog.uitloggen);

module.exports = router;