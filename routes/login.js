const express = require('express');
const router = express.Router();

//routes

const reglog = require('../controllers/reglog');

router.use('/', reglog);

module.exports = router;


