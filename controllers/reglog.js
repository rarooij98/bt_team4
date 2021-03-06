const { User } = require('../models')
const nodemailer = require('nodemailer')
require('dotenv').config()
const bcrypt = require("bcrypt")

// require User model
let session;

// renders register view
const registerForm = (req, res) => {
  res.render('register')
}

// renders login view
const loginForm = (req, res) => {
  res.render('login')
}

// renders error
const error = (req, res) => {
  res.render('error')
}

// registratie mail transporter aanmaken (dit is waar je invult via welk emailadres de mails worden verstuurd)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  }
})

//gebruik van registreren
const register = async (req, res) => {
  const email = req.body.email
  const gebruikersnaam = req.body.gebruikersnaam
  const wachtwoord = req.body.wachtwoord
  const verborgenWachtwoord = await bcrypt.hash(wachtwoord, 10)

  try {
        const result = await User.create({
          email: email,
          gebruikersnaam: gebruikersnaam,
          wachtwoord: verborgenWachtwoord
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
          console.log('verificatie email is naar je ingevulde email adres gestuurd')
        }
      })

      return result,
       res.redirect('/login')
  } catch (error) {
    //throw new Error(error)
    console.log(error);
    //functie met dezelfde gebruiker.
    console.log('Niet gelukt om een account aan te maken, probeer het nog eens')
      res.redirect('/register')
  }
}
//juiste error handeling (wat gebeurd er) catch error

//gebruik van inloggen
const login = async (req, res) => {
  try {
    const deGebruiker = await User.findOne({'email': req.body.email}).lean()
    const wachtwoord = req.body.wachtwoord
    console.log(deGebruiker)

    if(deGebruiker){
      const match = await bcrypt.compare(wachtwoord, deGebruiker.wachtwoord)
      console.log(deGebruiker.wachtwoord === wachtwoord)
      if (match) {
        deGebruiker.wachtwoord === wachtwoord;
        session = req.session;
        session.email = req.body.email;
        session.name = deGebruiker.gebruikersnaam;
        session.isLoggedIn = true;
        console.log(session);
        // return deGebruiker
        res.redirect('/profiel')
        console.log('succesvol ingelogd')
      } else {
        //return 'invalid password'
        console.log('invalid password')
      }
    } else {
      // return 'user was not found'
      console.log('gebruiker niet gevonden')
    }

  } catch (error) {
    res.redirect('/error')
  }
}


module.exports = {
  login: login,
  register: register,
  registerForm: registerForm,
  loginForm: loginForm,
  error: error
};
