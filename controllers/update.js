const { User } = require('../models')
let session
// renders update info pagina
const update = async (req, res) => {
    res.render('update')
};

// Deze verwijdert het account uit de database
const verwijder = async (req, res) => {
    const deGebruiker = await User.findOne({ 'email': req.body.email }).lean()
    console.log(deGebruiker)

    if (deGebruiker) {
        session = req.session
        console.log(session.gebruikersnaam)
        // User.find({ username: session.username }).remove().exec();
        // en destroy de sessie ook lijkt mij?
        res.redirect('/');
    } else {
        console.log('probeer opnieuw')
    }

};

// // Update de data uit de database van een gebruiker
// const bijwerken = (req, res) => {
//     session = req.session;
//     User.updateOne({
//         username: session.username
//     }, {
//         username: req.body.username,
//         email: req.body.email
//     }).exec();
//     session.username = req.body.username;
//     res.redirect('/profielpagina');
// }

// console.log(bijwerken)

// exports home function
module.exports = {
	update: update,
    verwijder: verwijder
    // bijwerken: bijwerken
};

