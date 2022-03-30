const express = require('express');
const router = express.Router();
const { homeView } = require('../controllers/loginController');

router.get('/', homeView);

module.exports = router;

// hier gebruiken we express om routes te maken met de views die we hebben opgehaald van de controller
// voor elke route kun je een file maken in de routes map, bijv. login.js, profiel.js, etc.
