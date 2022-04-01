const express = require('express');
const router = express.Router();

const form = require('./form');
const matches = require('./matches');

router.use('/form', form);
router.use('/matches', matches);

module.exports = router;