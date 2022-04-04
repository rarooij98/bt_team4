
// renders profielpage view
// importeer gebruikersnaam en email
const { User } = require('../models/index')
let session

// renders home view
const profiel = async (req, res) => {
    session = req.session
    const user = await User.findOne({email: session.email}).lean();
    res.render('profiel', {user:user})
};

const uitloggen = (res, req) => {
    req.session.destroy()
    res.render('/');
  
  }


// exports profielpage function
module.exports = {
	profiel: profiel,
    uitloggen: uitloggen
};

