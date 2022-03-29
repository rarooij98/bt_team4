const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
require('dotenv').config()
const connectDB = require('./config/db')
const mongoose = require('mongoose')
const User = require("./models/user")
const req = require('express/lib/request')


connectDB();

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

//pakt je directorty name, die zet static file naar static name waardoor je standaard in stadic folder zit en kun je styles inladen
app.use(express.static(__dirname + '/static'))

app.use(express.urlencoded({ extended: true }))

//laat home form zien
app.get('/', (req, res) => {
  res.render('home')
  })

//laat registreer form zien
app.get('/register', (req, res) => {
  res.render('register')
    })

//gebruik van registreren
  app.post('/register', async (req, res) => {
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
         res.redirect('/about')
    } catch {
      console.log('Niet gelukt om een account aan te maken, probeer het nog eens')
        res.redirect('register')
    }
  })

//laat log in pagina zien
app.get('/login', (req, res) =>{
  res.render('login')
})

//gebruik van inloggen
  app.post('/login', async (req, res) => {
    try {
      const deGebruiker = await User.findOne({'email': req.body.email}).lean()
      const wachtwoord = req.body.wachtwoord

      if(deGebruiker){
        console.log(deGebruiker.wachtwoord === wachtwoord)
        if (deGebruiker.wachtwoord === wachtwoord) {
          // return deGebruiker
          res.redirect('/about')
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
  })


//Server luistert op poort 8080
app.listen(port, () => {
    console.log('Server running on localhost:8080')
})

module.exports = reglog;
