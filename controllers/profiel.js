
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

// const uitloggen = (res, req) => {
//     if (req.session) {
//         req.session.destroy(err => {
//             if (err){
//                 res.status(400).send('uitloggen mislukt')
//             } else {
//                 session.isLoggedIn = false;
//                 res.clearCookie(sessionID)
//                 res.redirect('login');
//                 res.send('succesvol uitgelogt')
//             }
//         });
        
//     } else {
//         res.end()
//     }
  
//   }
const uitloggen = (res, req) => {
    session.isLoggedIn = false;
    res.redirect('login');
    res.send('succesvol uitgelogt')
}
//errror handeling

// exports profielpage function
module.exports = {
	profiel: profiel,
    uitloggen: uitloggen
};

