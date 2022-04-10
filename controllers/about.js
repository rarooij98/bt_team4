
// renders profielpage view
// importeer gebruikersnaam en email
const req = require('express/lib/request');
const { User } = require('../models/index')
let session

// renders home view
const profiel = async (req, res) => {
    session = req.session
    const user = await User.findOne({email: session.email}).lean();
    res.render('profiel', {user:user})
};

const about = async (req, res) => {
    res.render('about')
};

const uitloggen = (req, res) => {
    session.isLoggedIn = false;
    res.redirect('/login');
    console.log("succesvol uitgelogt");
    //res.send('succesvol uitgelogt')
}
//errror handeling

// exports profielpage function
module.exports = {
	profiel: profiel,
    about: about,
    uitloggen: uitloggen
};

