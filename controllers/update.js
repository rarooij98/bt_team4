const { User } = require('../models')
let session
// renders update info pagina
const update = async (req, res) => {
    res.render('update')
};

// Deze verwijdert het account uit de database
const verwijder = async (req, res) => {
    session = req.session
    const deGebruiker = await User.findOne({ 'email': session.email }).lean()
    console.log(deGebruiker)

    if (deGebruiker) {
        console.log(deGebruiker.gebruikersnaam)
        await User.findOneAndDelete({ gebruikersnaam: deGebruiker.gebruikersnaam });
        // User.find({ username: deGebruiker.gebruikernaam }).remove().exec();
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

