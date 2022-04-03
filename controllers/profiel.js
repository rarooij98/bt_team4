// importeer gebruikersnaam en email
const { User } = require('../models/index')

// renders home view
const profiel = async (req, res) => {
    const user = await User.findOne();
    res.render('profiel', {naam: user.gebruikersnaam, email: user.email})
};

// exports home function
module.exports = {
	profiel: profiel
};