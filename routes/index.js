const express = require('express');
const router = express.Router();

const form = require('./form');
const matches = require('./matches');
const error = require('./error');

router.use('/form', form);
router.use('/matches', matches);
router.use('/error', error);

module.exports = router;