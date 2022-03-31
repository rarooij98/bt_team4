const express = require('express');
const router = express.Router();
const form = require('../controllers/form');

router.get('/form', form.form );
router.post('/form', form.keuze)

module.exports = router;