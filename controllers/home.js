// in de controller kun je de models requiren die je evt nodig hebt

// renders home view
const home = async (req, res) => {
    res.render('home')
};

// exports home function
module.exports = {
	home: home
};

// wanneer een gebruiker een verzoek indient, wordt dit naar de controller gestuurd
// de controller heeft via de model toegang tot de database
// dan geeft de controller de respons door aan de view