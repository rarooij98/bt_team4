const express = require('express');
const router = express.Router();
const update = require('../controllers/update'); // importeer deze variablen vanuit de update.js file

router.get('/', update.update ); // verander /update naar de relevante url
router.post('/', update.verwijder );
//router.get('/iets', bijwerken ); // wanneer de gebruiker op de pagina /iets is, wordt de functie bijwerken aangeroepen/uitgevoerd --> verander naar relevante pagina-url

module.exports = router;

// todo:
// 1. (1 persoon) maak de 'account verwijderen'-functionaliteit af; kijk of het nu al werkt, zonee kijk waar het misgaat
// 2. (1 persoon) maak de logout-functionaliteit af
// 3. (met zn tweeen) maak de 'account bijwerken'-functionaliteit af; let erop of je het profiel op de pagina '/profiel'-pagina laat kan editten of dat je dat weer op een andere pagina doet
//  vergeet ook de documentatie ook niet svp..