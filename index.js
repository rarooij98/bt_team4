const express = require('express')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const multer = require('multer')
const upload = multer({dest: 'static/uploads/'})
const mongoose = require('mongoose')
const Keuze = require("./models/user")
const {redirect} = require('express/lib/response')
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
  const queryOnderwerp = {onderwerpen: keuze.onderwerp};
  const query = {...queryLocatie, ...queryNiveau, ...queryOnderwerp};
  const options = {sort: {name: 1}};
  
  // TO DO - dit nog laten werken met mongoose:
  // collectie scholen moet opgehaald worden uit de database
  // db.scholen = null, collection = null, Scholen is not defined
  const scholen = await db.collectie('scholen').find(query, options);
  console.log(scholen)
  
  const title  = (scholen.length == 0) ? "Er zijn geen matches gevonden" : "Matches:";
  res.render('matches', {title: title, scholen: scholen});
})
  
// 404  //
app.get('*', (req, res) => {
    res.send('404 Not Found')
})

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`)
})