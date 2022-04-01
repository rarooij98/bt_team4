const { User } = require('../models')
const nodemailer = require('nodemailer')

const registerForm = (req, res) => {
  res.render('register')
}

const loginForm = (req, res) => {
  res.render('login')
}

// registratie mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'group4projecttech1@gmail.com',
    pass: 'Test_mail123',
  }
})

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

        //schrijven van email bij het maken van een account
      
      const mailOptions = {
        from: 'group4projecttech1@gmail.com',
        to: `${email}`,
        subject: 'Registratie email',
        html: `<h2> hi ${gebruikersnaam}, Je account is succesvol aangemaakt!</h2>`,
      }
      
      //versturen van de mail bij registratie
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log('verificatie email is naar je ingevulde email-adres gestuurd')
        }
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
