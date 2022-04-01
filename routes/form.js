const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'static/uploads/'});
const form = require('../controllers/form');

router.get('/', form.form );
router.post('/', upload.single(), form.keuze);

module.exports = router;