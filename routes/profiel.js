const express = require('express');
const router = express.Router();
const profiel = require('../controllers/profiel');

router.get('/profiel', profiel.profiel );
router.post('/logout', profiel.uitloggen );

module.exports = router;