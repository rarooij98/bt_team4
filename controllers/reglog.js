// require User model
const { User } = require('../models');
let session;

// renders register view
const registerForm = (req, res) => {
  res.render('register')
}

// renders login view
const loginForm = (req, res) => {
  res.render('login')
}

//gebruik van registreren
const register = async (req, res) => {
  const email = req.body.email
  const gebruikersnaam = req.body.gebruikersnaam
  const wachtwoord = req.body.wachtwoord

  try {
        // const verborgenWachtwoord = await bcrypt.hash(wachtwoord, 10)
       
        const result = await User.create({
          email: email,
          gebruikersnaam: gebruikersnaam,
          wachtwoord: wachtwoord
        })
      return result,
       res.redirect('/')
  } catch {
    console.log('Niet gelukt om een account aan te maken, probeer het nog eens')
      res.redirect('register')
  }
}

//gebruik van inloggen
const login = async (req, res) => {
  try {
    const deGebruiker = await User.findOne({'email': req.body.email}).lean()
    const wachtwoord = req.body.wachtwoord

    if(deGebruiker){
      console.log(deGebruiker.wachtwoord === wachtwoord)
      if (deGebruiker.wachtwoord === wachtwoord) {
        session = req.session;

        session.email = req.body.email;
        console.log(session);
        // return deGebruiker
        res.redirect('/')
        console.log('succesvol ingelogd')
      } else {
        //return 'invalid password'
        console.log('fout')
      }
    } else {
      // return 'user was not found'
      console.log('gebruiker niet gevonden')
    }

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  login: login,
  register: register,
  registerForm: registerForm,
  loginForm: loginForm
};