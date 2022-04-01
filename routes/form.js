const express = require('express');
const router = express.Router();
const multer = require('multer');
const form = require('../controllers/form');

router.get('/', form.form );
//router.post('/', form.keuze);

//test:
const upload = multer({dest: 'static/uploads/'});
router.post('/', upload.single(), form.keuze);

module.exports = router;