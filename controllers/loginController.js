// const User = require('../models/User');
// in de controller kun je de models requiren die je evt nodig hebt

const homeView = (req, res) => {
    res.render("home", {
    } );
}
module.exports =  {
    homeView
};

// wanneer een gebruiker een verzoek indient, wordt dit naar de controller gestuurd
// de controller heeft via de model toegang tot de database
// dan geeft de controller de respons door aan de view
