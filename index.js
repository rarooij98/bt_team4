const express = require('express')
const {engine} = require('express-handlebars')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({dest: 'static/uploads/'})
const mongoose = require('mongoose')
const Keuze = require("./models/user")

let db = null
const port = process.env.port || 8000

require('dotenv').config()

const connectDB = require('./config/db')

const req = require('express/lib/request')
const res = require('express/lib/response')
connectDB();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.use(express.json())

app.get('/filter', (req, res) => {
    res.render('filter', {text: "Hello world"})
})
  
app.get('/form', (req, res) => {
    res.render('form')
})

// er wordt uit het formulier een keuze gehaald en opgeslagen in de collectie Keuzes
app.post('/form', upload.single(), (req, res) => {
  const keuzes = new Keuze({
    locatie: req.body.locatie,
    niveau: req.body.niveau,
    onderwerp: req.body.onderwerp
  });
  keuzes.save()
  res.redirect('matches')
})

// alle scholen die voldoen aan de voorkeuren worden opgehaald uit de database
app.get('/matches', async (req, res) => {
  const keuze = await Keuze.findOne();

  const queryLocatie = {locatie: keuze.locatie};
  const queryNiveau = {niveau: keuze.niveau};
  const queryOnderwerp = {onderwerpen:{$in: keuze.onderwerp}};
  const query = {...queryLocatie, ...queryNiveau, ...queryOnderwerp};
  const options = {sort: {name: 1}};
  
  // we moeten het schema specificeren, ook als we verwijzen naar de bestaande verzameling in DB:
  const Schema = mongoose.Schema;  
  const scholen = mongoose.model('scholen', new Schema({
    name: String,
    locatie: String,
    niveau: String,
    onderwerpen: Array
    }), 'scholen');
  
  const filtered = await scholen.find(query, null, options).lean();
  const title = (scholen.length == 0) ? "Er zijn geen matches gevonden" : "Matches:";
  res.render('matches', {title: title, scholen: filtered});
})
  
// 404  //
app.get('*', (req, res) => {
    res.send('404 Not Found')
})

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`)
})