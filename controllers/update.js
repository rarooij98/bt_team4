// renders update info pagina
const update = async (req, res) => {
    res.render('update')
};

// // Deze verwijdert het account uit de database
// router.post('/verwijdergebruiker', (req, res) => {
//     session = req.session
//     console.log(session.username)
//     User.find({ username: session.username }).remove().exec();
//     res.redirect('/');
// });

// // Update de data uit de database van een gebruiker
// router.post('/bijwerken', (req, res) => {
//     session = req.session;
//     User.updateOne({
//         username: session.username
//     }, {
//         username: req.body.username,
//         email: req.body.email
//     }).exec();
//     session.username = req.body.username;
//     res.redirect('/profielpagina');
// })

// exports home function
module.exports = {
	update: update
};

